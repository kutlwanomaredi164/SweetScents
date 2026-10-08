import React, { useState, useId } from 'react';
import { X, Trash2, ShoppingBag, MessageCircle, ArrowRight, Calendar, MapPin } from 'lucide-react';
import { Product, AddOnOption } from '../data/products';
import { generateCartWhatsAppMessage, createWhatsAppUrl } from '../utils/whatsapp';

export interface CartItem {
  cartId: string;
  product: Product;
  selectedTierIndex: number;
  selectedAddOns: Array<{ addOn: AddOnOption; detail?: string; count?: number }>;
  quantity: number;
  cardMessage: string;
  deliveryDate: string;
}

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (cartId: string, quantity: number) => void;
  onRemoveItem: (cartId: string) => void;
  onClearCart: () => void;
  onShopClick: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
  onShopClick,
}) => {
  const [customerName, setCustomerName] = useState('');
  const [deliveryLocation, setDeliveryLocation] = useState('');
  const [preferredDate, setPreferredDate] = useState('');

  const nameInputId = useId();
  const locationInputId = useId();
  const dateInputId = useId();

  if (!isOpen) return null;

  // Calculate Subtotal
  let subtotal = 0;
  const itemPayloads = items.map((item) => {
    const tier = item.product.tiers[item.selectedTierIndex] || item.product.tiers[0];
    const addOnsTotal = item.selectedAddOns.reduce((acc, a) => {
      const price = a.addOn.id === 'pins' ? a.addOn.price * (a.count || 1) : a.addOn.price;
      return acc + price;
    }, 0);

    const singlePrice = tier.price + addOnsTotal;
    subtotal += singlePrice * item.quantity;

    return {
      productName: item.product.name,
      tierLabel: tier.label,
      tierPrice: tier.price,
      quantity: item.quantity,
      addOns: item.selectedAddOns.map((a) => ({
        name: a.addOn.name,
        detail: a.detail,
        price: a.addOn.id === 'pins' ? a.addOn.price * (a.count || 1) : a.addOn.price,
      })),
      cardMessage: item.cardMessage,
      deliveryDate: item.deliveryDate,
    };
  });

  const handleWhatsAppCheckout = () => {
    const text = generateCartWhatsAppMessage(itemPayloads, {
      name: customerName,
      location: deliveryLocation,
      date: preferredDate,
    });
    window.open(createWhatsAppUrl(text), '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/60 backdrop-blur-xs flex justify-end animate-in fade-in duration-200">
      
      <div
        className="w-full max-w-md bg-[#FFF9F5] h-full shadow-2xl flex flex-col justify-between border-l border-[#EBDCD3] relative"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Header */}
        <div className="p-5 border-b border-[#EBDCD3] flex items-center justify-between bg-white">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-[#3D1220]" />
            <h3 className="font-serif-display text-xl font-medium text-[#3D1220]">
              Your Shopping Bag ({items.length})
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-[#7A6169] hover:text-[#3D1220] rounded-full hover:bg-[#EBDCD3]/40"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Cart Item List */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#EBDCD3] flex items-center justify-center text-[#3D1220]">
                <ShoppingBag className="w-7 h-7" />
              </div>
              <h4 className="font-serif-display text-2xl text-[#3D1220]">
                Your bag is empty
              </h4>
              <p className="text-xs text-[#7A6169] max-w-xs leading-relaxed">
                Explore our signature roses and bespoke arrangements to send something beautiful today.
              </p>
              <button
                onClick={() => {
                  onClose();
                  onShopClick();
                }}
                className="mt-2 px-6 py-3 bg-[#3D1220] text-white text-xs uppercase tracking-widest font-semibold rounded-xl hover:bg-[#3D1220] transition-colors"
              >
                Explore Flowers
              </button>
            </div>
          ) : (
            <>
              {items.map((item) => {
                const tier = item.product.tiers[item.selectedTierIndex] || item.product.tiers[0];
                const addOnsPrice = item.selectedAddOns.reduce((acc, a) => {
                  return acc + (a.addOn.id === 'pins' ? a.addOn.price * (a.count || 1) : a.addOn.price);
                }, 0);
                const itemTotal = (tier.price + addOnsPrice) * item.quantity;

                return (
                  <div
                    key={item.cartId}
                    className="bg-white p-4 rounded-xl border border-[#EBDCD3] shadow-2xs space-y-3"
                  >
                    <div className="flex gap-3">
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        className="w-16 h-16 object-cover rounded-lg border border-[#EBDCD3]"
                        referrerPolicy="no-referrer"
                      />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between">
                          <h4 className="font-serif-display text-base font-semibold text-[#3D1220] truncate">
                            {item.product.name}
                          </h4>
                          <button
                            onClick={() => onRemoveItem(item.cartId)}
                            className="text-[#9E868E] hover:text-[#3D1220] p-1"
                            title="Remove item"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                        <div className="text-xs text-[#3D1220] font-medium">
                          {tier.label} — R{tier.price}
                        </div>

                        {item.selectedAddOns.length > 0 && (
                          <div className="mt-1 text-[11px] text-[#7A6169] space-y-0.5">
                            {item.selectedAddOns.map((ao, idx) => (
                              <div key={idx} className="truncate">
                                + {ao.addOn.name} {ao.detail ? `(${ao.detail})` : ''}
                              </div>
                            ))}
                          </div>
                        )}

                        {item.cardMessage && (
                          <div className="mt-1 text-[10px] text-[#7A6169] italic truncate">
                            Note: "{item.cardMessage}"
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="pt-2 border-t border-[#EBDCD3]/60 flex items-center justify-between">
                      {/* Quantity Stepper */}
                      <div className="flex items-center border border-[#D9C8BE] rounded-md bg-[#FFF9F5]">
                        <button
                          onClick={() => onUpdateQuantity(item.cartId, item.quantity - 1)}
                          className="px-2.5 py-1 text-xs text-[#3D1220] hover:bg-[#EBDCD3]"
                        >
                          -
                        </button>
                        <span className="px-2.5 text-xs font-semibold tabular-nums text-[#3D1220]">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(item.cartId, item.quantity + 1)}
                          className="px-2.5 py-1 text-xs text-[#3D1220] hover:bg-[#EBDCD3]"
                        >
                          +
                        </button>
                      </div>

                      <div className="text-right">
                        <span className="text-xs font-semibold text-[#3D1220] font-serif-display text-base tabular-nums">
                          R{itemTotal.toLocaleString()}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}

              {/* Delivery Details Inputs for Quick WhatsApp Dispatch */}
              <div className="bg-white p-4 rounded-xl border border-[#EBDCD3] space-y-3">
                <span className="text-xs uppercase tracking-wider font-semibold text-[#3D1220] block">
                  Delivery Details (Optional)
                </span>
                <div>
                  <label htmlFor={nameInputId} className="text-[11px] text-[#7A6169] block mb-1">
                    Your Name:
                  </label>
                  <input
                    id={nameInputId}
                    type="text"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    placeholder="e.g. Lerato / Thabo"
                    className="w-full p-2 bg-[#FFF9F5] border border-[#D9C8BE] rounded-lg text-xs text-[#3D1220] focus:outline-none"
                  />
                </div>
                <div>
                  <label htmlFor={locationInputId} className="text-[11px] text-[#7A6169] block mb-1">
                    Delivery Suburb (JHB / PTA):
                  </label>
                  <input
                    id={locationInputId}
                    type="text"
                    value={deliveryLocation}
                    onChange={(e) => setDeliveryLocation(e.target.value)}
                    placeholder="e.g. Sandton, Pretoria East..."
                    className="w-full p-2 bg-[#FFF9F5] border border-[#D9C8BE] rounded-lg text-xs text-[#3D1220] focus:outline-none"
                  />
                </div>
                <div>
                  <label htmlFor={dateInputId} className="text-[11px] text-[#7A6169] block mb-1">
                    Delivery Date (4 days notice):
                  </label>
                  <input
                    id={dateInputId}
                    type="date"
                    value={preferredDate}
                    onChange={(e) => setPreferredDate(e.target.value)}
                    className="w-full p-2 bg-[#FFF9F5] border border-[#D9C8BE] rounded-lg text-xs text-[#3D1220] focus:outline-none"
                  />
                </div>
              </div>
            </>
          )}
        </div>

        {/* Footer Checkout Actions */}
        {items.length > 0 && (
          <div className="p-5 border-t border-[#EBDCD3] bg-white space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs text-[#7A6169] block">Subtotal</span>
                <span className="text-2xl font-serif-display font-semibold text-[#3D1220] tabular-nums">
                  R{subtotal.toLocaleString()}
                </span>
              </div>
              <button
                onClick={onClearCart}
                className="text-xs text-[#9E868E] hover:text-[#3D1220] underline"
              >
                Clear Bag
              </button>
            </div>

            <button
              onClick={handleWhatsAppCheckout}
              className="w-full py-3.5 bg-[#7C9275] hover:bg-[#687D61] text-white text-xs font-semibold uppercase tracking-widest rounded-xl transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer active:scale-[0.99]"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>CHECKOUT VIA WHATSAPP</span>
            </button>

            <div className="text-[11px] text-center text-[#7A6169]">
              50% non-refundable deposit required upon order confirmation.
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
