import React, { useState, useId } from 'react';
import { X, Heart, ShoppingBag, MessageCircle, Calendar, Check } from 'lucide-react';
import { Product, ADD_ONS, AddOnOption } from '../data/products';
import { generateProductOrderWhatsAppMessage, createWhatsAppUrl } from '../utils/whatsapp';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (item: {
    product: Product;
    selectedTierIndex: number;
    selectedAddOns: Array<{ addOn: AddOnOption; detail?: string; count?: number }>;
    quantity: number;
    cardMessage: string;
    deliveryDate: string;
  }) => void;
  isWishlisted: boolean;
  onToggleWishlist: (productId: string) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  onAddToCart,
  isWishlisted,
  onToggleWishlist,
}) => {
  if (!product) return null;

  const [selectedTierIndex, setSelectedTierIndex] = useState(0);
  const [selectedAddOnIds, setSelectedAddOnIds] = useState<string[]>([]);
  const [initialText, setInitialText] = useState('');
  const [ribbonWords, setRibbonWords] = useState('');
  const [pinCount, setPinCount] = useState(6);
  const [cardMessage, setCardMessage] = useState('');
  const [deliveryDate, setDeliveryDate] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [addedToast, setAddedToast] = useState(false);

  const initialInputId = useId();
  const ribbonInputId = useId();
  const cardMessageInputId = useId();
  const deliveryDateInputId = useId();

  const selectedTier = product.tiers[selectedTierIndex] || product.tiers[0];

  // Calculate live add-ons total
  const relevantAddOns = ADD_ONS.filter((ao) => product.availableAddOns.includes(ao.id));

  let addOnsTotal = 0;
  selectedAddOnIds.forEach((id) => {
    const ao = ADD_ONS.find((a) => a.id === id);
    if (!ao) return;
    if (ao.id === 'pins') {
      addOnsTotal += ao.price * pinCount;
    } else {
      addOnsTotal += ao.price;
    }
  });

  const singleItemPrice = selectedTier.price + addOnsTotal;
  const grandTotal = singleItemPrice * quantity;

  const toggleAddOn = (id: string) => {
    if (selectedAddOnIds.includes(id)) {
      setSelectedAddOnIds(selectedAddOnIds.filter((item) => item !== id));
    } else {
      setSelectedAddOnIds([...selectedAddOnIds, id]);
    }
  };

  const getAddOnPayload = () => {
    return selectedAddOnIds.map((id) => {
      const ao = ADD_ONS.find((a) => a.id === id)!;
      let detail = '';
      let price = ao.price;

      if (id === 'initial') {
        detail = initialText ? `Letter: ${initialText}` : 'Initial pin';
      } else if (id === 'words') {
        detail = ribbonWords ? `Words: "${ribbonWords}"` : 'Custom Ribbon';
      } else if (id === 'pins') {
        detail = `${pinCount} diamond pins`;
        price = ao.price * pinCount;
      }

      return {
        name: ao.name,
        detail,
        price,
      };
    });
  };

  const handleOrderWhatsApp = () => {
    const orderPayload = {
      productName: product.name,
      tierLabel: selectedTier.label,
      tierPrice: selectedTier.price,
      quantity,
      addOns: getAddOnPayload(),
      cardMessage,
      deliveryDate,
    };

    const message = generateProductOrderWhatsAppMessage(orderPayload);
    window.open(createWhatsAppUrl(message), '_blank');
  };

  const handleAddToCartClick = () => {
    const selectedAddOnsWithData = selectedAddOnIds.map((id) => {
      const ao = ADD_ONS.find((a) => a.id === id)!;
      let detail = '';
      let count = 1;

      if (id === 'initial') detail = initialText;
      if (id === 'words') detail = ribbonWords;
      if (id === 'pins') count = pinCount;

      return { addOn: ao, detail, count };
    });

    onAddToCart({
      product,
      selectedTierIndex,
      selectedAddOns: selectedAddOnsWithData,
      quantity,
      cardMessage,
      deliveryDate,
    });

    setAddedToast(true);
    setTimeout(() => setAddedToast(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 md:p-6 animate-in fade-in duration-200">
      
      <div 
        className="relative bg-[#FFF9F5] w-full max-w-4xl rounded-2xl overflow-hidden shadow-2xl border border-[#EBDCD3] max-h-[92vh] flex flex-col md:flex-row my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Modal Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 bg-white/80 hover:bg-white text-[#3D1220] rounded-full transition-colors shadow-xs"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Left Column: Large Product Image with Gallery view */}
        <div className="md:w-1/2 relative bg-[#EBDCD3]/30 flex flex-col">
          <div className="relative aspect-[4/3] md:aspect-auto md:h-full min-h-[300px] overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover object-center"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#3D1220]/40 via-transparent to-transparent pointer-events-none md:hidden" />
          </div>
        </div>

        {/* Right Column: Configuration & WhatsApp Conversion */}
        <div className="md:w-1/2 p-6 sm:p-8 overflow-y-auto max-h-[85vh] flex flex-col justify-between space-y-6">
          <div>
            
            {/* Header info */}
            <div className="flex items-center justify-between">
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#7C9275]">
                {product.category}
              </span>
              <button
                onClick={() => onToggleWishlist(product.id)}
                className="p-1.5 rounded-full hover:bg-[#EBDCD3] transition-colors"
                title="Save to Wishlist"
              >
                <Heart
                  className={`w-5 h-5 ${
                    isWishlisted ? 'fill-[#3D1220] text-[#3D1220]' : 'text-[#3D1220]'
                  }`}
                />
              </button>
            </div>

            <h2 className="font-serif-display text-2xl sm:text-3xl text-[#3D1220] font-medium mt-1">
              {product.name}
            </h2>

            <p className="text-xs sm:text-sm text-[#7A6169] mt-2 leading-relaxed">
              {product.description}
            </p>

            {/* Step 1: Choose Quantity / Stem Tier */}
            <div className="mt-6 pt-5 border-t border-[#EBDCD3]">
              <label className="text-xs uppercase tracking-wider font-semibold text-[#3D1220] block mb-3">
                1. Choose Size / Stem Count
              </label>

              <div className="grid grid-cols-2 gap-2.5">
                {product.tiers.map((tier, idx) => {
                  const isSelected = selectedTierIndex === idx;
                  return (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setSelectedTierIndex(idx)}
                      className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                        isSelected
                          ? 'border-[#3D1220] bg-white shadow-xs ring-1 ring-[#3D1220]'
                          : 'border-[#D9C8BE] bg-white/60 hover:bg-white hover:border-[#3D1220]'
                      }`}
                    >
                      <div className="flex items-center justify-between text-xs font-semibold text-[#3D1220]">
                        <span>{tier.label}</span>
                        <span className="tabular-nums text-[#3D1220]">R{tier.price}</span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Add-Ons selection */}
            {relevantAddOns.length > 0 && (
              <div className="mt-6 pt-5 border-t border-[#EBDCD3]">
                <div className="flex items-center justify-between mb-3">
                  <label className="text-xs uppercase tracking-wider font-semibold text-[#3D1220] block">
                    2. Add-Ons (Optional)
                  </label>
                  <span className="text-[11px] text-[#3D1220]">Personalise your gift</span>
                </div>

                <div className="space-y-2.5">
                  {relevantAddOns.map((ao) => {
                    const isChecked = selectedAddOnIds.includes(ao.id);
                    return (
                      <div
                        key={ao.id}
                        className={`p-3 rounded-xl border transition-all ${
                          isChecked
                            ? 'border-[#3D1220] bg-[#EBDCD3]/30'
                            : 'border-[#D9C8BE] bg-white/60 hover:bg-white'
                        }`}
                      >
                        <div
                          onClick={() => toggleAddOn(ao.id)}
                          className="flex items-center justify-between cursor-pointer"
                        >
                          <div className="flex items-center gap-2.5">
                            <div
                              className={`w-4 h-4 rounded flex items-center justify-center border text-[10px] ${
                                isChecked
                                  ? 'bg-[#3D1220] text-white border-[#3D1220]'
                                  : 'border-[#7A6169] bg-white'
                              }`}
                            >
                              {isChecked && <Check className="w-3 h-3" />}
                            </div>
                            <span className="text-xs font-medium text-[#3D1220]">
                              {ao.name}
                            </span>
                          </div>
                          <span className="text-xs font-semibold text-[#3D1220] tabular-nums">
                            {ao.id === 'pins' ? `+R${ao.price} each` : `+R${ao.price}`}
                          </span>
                        </div>

                        {/* Expandable sub-fields for text add-ons */}
                        {isChecked && ao.id === 'initial' && (
                          <div className="mt-2.5 pl-6">
                            <label htmlFor={initialInputId} className="text-[11px] text-[#7A6169] block mb-1">
                              Enter Monogram Initial (e.g. "K" or "M"):
                            </label>
                            <input
                              id={initialInputId}
                              type="text"
                              maxLength={3}
                              value={initialText}
                              onChange={(e) => setInitialText(e.target.value.toUpperCase())}
                              placeholder="e.g. M"
                              className="w-24 px-2.5 py-1.5 bg-white border border-[#3D1220] rounded text-xs font-bold text-[#3D1220] focus:outline-none"
                            />
                          </div>
                        )}

                        {isChecked && ao.id === 'words' && (
                          <div className="mt-2.5 pl-6">
                            <label htmlFor={ribbonInputId} className="text-[11px] text-[#7A6169] block mb-1">
                              Custom Ribbon Message / Quote:
                            </label>
                            <input
                              id={ribbonInputId}
                              type="text"
                              maxLength={45}
                              value={ribbonWords}
                              onChange={(e) => setRibbonWords(e.target.value)}
                              placeholder="e.g. Happy 25th Birthday My Love"
                              className="w-full px-2.5 py-1.5 bg-white border border-[#3D1220] rounded text-xs text-[#3D1220] focus:outline-none"
                            />
                          </div>
                        )}

                        {isChecked && ao.id === 'pins' && (
                          <div className="mt-2.5 pl-6 flex items-center gap-3">
                            <span className="text-[11px] text-[#7A6169]">Diamond pins quantity:</span>
                            <div className="flex items-center gap-1.5">
                              {[4, 6, 10, 15].map((cnt) => (
                                <button
                                  key={cnt}
                                  type="button"
                                  onClick={() => setPinCount(cnt)}
                                  className={`px-2 py-0.5 text-xs rounded border ${
                                    pinCount === cnt
                                      ? 'bg-[#3D1220] text-white border-[#3D1220]'
                                      : 'bg-white border-[#D9C8BE] text-[#3D1220]'
                                  }`}
                                >
                                  {cnt} (R{cnt * 5})
                                </button>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Step 3: Card Message & Date */}
            <div className="mt-6 pt-5 border-t border-[#EBDCD3] space-y-3">
              <div>
                <label htmlFor={cardMessageInputId} className="text-xs uppercase tracking-wider font-semibold text-[#3D1220] block mb-1">
                  Handwritten Card Note (Complimentary)
                </label>
                <textarea
                  id={cardMessageInputId}
                  rows={2}
                  value={cardMessage}
                  onChange={(e) => setCardMessage(e.target.value)}
                  placeholder="Write your personal heartfelt message to accompany the bouquet..."
                  className="w-full p-2.5 bg-white border border-[#D9C8BE] rounded-xl text-xs text-[#3D1220] placeholder:text-[#9E868E] focus:outline-none focus:ring-1 focus:ring-[#3D1220]"
                />
              </div>

              <div>
                <label htmlFor={deliveryDateInputId} className="text-xs uppercase tracking-wider font-semibold text-[#3D1220] block mb-1 flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-[#3D1220]" />
                  <span>Requested Delivery / Collection Date</span>
                </label>
                <input
                  id={deliveryDateInputId}
                  type="date"
                  value={deliveryDate}
                  onChange={(e) => setDeliveryDate(e.target.value)}
                  className="w-full px-3 py-2 bg-white border border-[#D9C8BE] rounded-xl text-xs text-[#3D1220] focus:outline-none"
                />
                <p className="text-[10px] text-[#3D1220] mt-1 font-medium">
                  * Note: Sweet Scents requires 4 days advance booking.
                </p>
              </div>
            </div>

          </div>

          {/* Pricing & Order Conversion Area */}
          <div className="pt-6 border-t border-[#EBDCD3] space-y-4">
            
            {/* Live Total Calculation */}
            <div className="flex items-center justify-between">
              <div>
                <span className="text-[11px] text-[#7A6169] block">Estimated Total</span>
                <span className="text-2xl font-serif-display font-semibold text-[#3D1220] tabular-nums">
                  R{grandTotal.toLocaleString()}
                </span>
              </div>

              {/* Quantity Stepper */}
              <div className="flex items-center border border-[#D9C8BE] rounded-lg bg-white overflow-hidden">
                <button
                  type="button"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-3 py-1.5 text-sm text-[#3D1220] hover:bg-[#EBDCD3] transition-colors"
                >
                  -
                </button>
                <span className="px-3 py-1.5 text-xs font-semibold tabular-nums text-[#3D1220]">
                  {quantity}
                </span>
                <button
                  type="button"
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-3 py-1.5 text-sm text-[#3D1220] hover:bg-[#EBDCD3] transition-colors"
                >
                  +
                </button>
              </div>
            </div>

            {/* Actions: Primary is WhatsApp Order as requested in prompt */}
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                type="button"
                onClick={handleOrderWhatsApp}
                className="flex-1 py-3.5 bg-[#7C9275] hover:bg-[#687D61] text-white text-xs font-semibold uppercase tracking-wider rounded-xl transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer active:scale-[0.99]"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>ORDER VIA WHATSAPP</span>
              </button>

              <button
                type="button"
                onClick={handleAddToCartClick}
                className="py-3.5 px-6 bg-[#3D1220] hover:bg-[#3D1220] text-white text-xs font-semibold uppercase tracking-wider rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>ADD TO BAG</span>
              </button>
            </div>

            {addedToast && (
              <div className="p-2.5 bg-[#EBDCD3] text-[#3D1220] rounded-lg text-xs text-center font-medium animate-in fade-in">
                ✓ Added to your shopping bag!
              </div>
            )}

            <div className="text-[11px] text-center text-[#7A6169]">
              50% non-refundable deposit required upon order confirmation.
            </div>

          </div>

        </div>

      </div>

    </div>
  );
};
