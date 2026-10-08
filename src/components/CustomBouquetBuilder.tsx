import React, { useState, useId } from 'react';
import { Sparkles, MessageCircle, Heart, Check, HelpCircle } from 'lucide-react';
import { generateCustomBouquetWhatsAppMessage, createWhatsAppUrl } from '../utils/whatsapp';

export const CustomBouquetBuilder: React.FC = () => {
  const [flowerType, setFlowerType] = useState('Classic Roses & Garden Blooms');
  const [colourPalette, setColourPalette] = useState('Blush Pink & Ivory Cream');
  const [style, setStyle] = useState('Classic Luxury Hand-Tied Wrap');
  const [budget, setBudget] = useState(650);
  const [specialRequests, setSpecialRequests] = useState<string[]>(['Satin Lettering Ribbon']);
  const [recipientNote, setRecipientNote] = useState('');
  const [deliveryDate, setDeliveryDate] = useState('');
  const [location, setLocation] = useState('');

  const noteInputId = useId();
  const dateInputId = useId();
  const locationInputId = useId();

  const flowerOptions = [
    { label: 'Classic Roses', desc: 'Premium velvet long-stem roses' },
    { label: 'Mixed Garden', desc: 'Lush seasonal florals & eucalyptus' },
    { label: 'Chrysanthemums', desc: 'Long-lasting textured petals' },
    { label: 'Lilies & Roses', desc: 'Aromatic statement blooms' },
  ];

  const colourOptions = [
    { label: 'Blush & Ivory', hex: '#EBDCD3' },
    { label: 'Crimson & Burgundy', hex: '#3D1220' },
    { label: 'Peach & Champagne', hex: '#C9A66B' },
    { label: 'Pure Crisp White', hex: '#FFFFFF' },
    { label: 'Pastel Multi-tone', hex: '#D9C8BE' },
  ];

  const specialFormats = [
    { id: 'ferrero', name: 'Ferrero Rocher Bouquet', note: 'Chocolates nestled with blooms' },
    { id: 'burnt-away', name: 'Burnt-Away Secret Note', note: 'Interactive flame reveal letter' },
    { id: 'vase', name: 'Luxury Vase Bouquet', note: 'Arranged inside a keepsake glass vase' },
    { id: 'money', name: 'Money Bouquet', note: 'Banknotes folded into stems' },
    { id: 'ribbon', name: 'Satin Lettering Ribbon', note: 'Custom printed love notes or names' },
  ];

  const toggleSpecial = (name: string) => {
    if (specialRequests.includes(name)) {
      setSpecialRequests(specialRequests.filter((item) => item !== name));
    } else {
      setSpecialRequests([...specialRequests, name]);
    }
  };

  const handleRequestCustom = () => {
    const payload = {
      flowerType,
      colourPalette,
      style: `${style}${specialRequests.length > 0 ? ` with ${specialRequests.join(', ')}` : ''}`,
      budget,
      recipientNote,
      specialRequests: specialRequests.join(', '),
      deliveryDate,
      location,
    };

    const text = generateCustomBouquetWhatsAppMessage(payload);
    window.open(createWhatsAppUrl(text), '_blank');
  };

  return (
    <section id="custom" className="py-20 bg-[#FFF9F5] border-b border-[#EBDCD3] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-[#3D1220] font-semibold block mb-2">
            BESPOKE FLORISTRY
          </span>
          <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl text-[#3D1220] font-light tracking-tight">
            MAKE IT PERSONAL
          </h2>
          <p className="text-sm sm:text-base text-[#7A6169] mt-3">
            Sometimes the perfect bouquet isn't on the shelf. Tell us your vision, flower choices, and budget — we will tailor an unforgettable arrangement.
          </p>
        </div>

        {/* Split Grid: Left Showcase, Right Interactive Custom Builder */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Column: Visual Showcase & Inspiration */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative rounded-2xl overflow-hidden shadow-lg border border-[#EBDCD3] bg-[#EBDCD3]/30">
              <img
                src="/src/assets/images/regenerated_image_1791403606744.png"
                alt="Custom luxury Sweet Scents arrangement with special gift details"
                className="w-full aspect-[4/3] object-cover object-center"
                referrerPolicy="no-referrer"
              />
              <div className="p-6 bg-white border-t border-[#EBDCD3]">
                <div className="flex items-center gap-2 text-[#3D1220] text-xs font-semibold uppercase tracking-wider mb-1">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Custom Commissions</span>
                </div>
                <h3 className="font-serif-display text-xl text-[#3D1220] font-medium">
                  Tailored to Life’s Moments
                </h3>
                <p className="text-xs text-[#7A6169] mt-1.5 leading-relaxed">
                  Every custom bouquet is designed with fresh market stems, bespoke color harmonies, and handcrafted finishing touches like custom ribbons, initial pins, and gourmet confections.
                </p>
              </div>
            </div>

            {/* Special Request Callout Card */}
            <div className="bg-[#EBDCD3]/40 rounded-2xl p-6 border border-[#D9C8BE]">
              <span className="text-xs uppercase tracking-wider font-semibold text-[#3D1220] block mb-3">
                Special Requests We Cater For:
              </span>
              <div className="grid grid-cols-2 gap-2 text-xs text-[#554047]">
                <div className="flex items-center gap-2">
                  <span className="text-[#3D1220]">✦</span> Ferrero Rocher bouquets
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#3D1220]">✦</span> Burnt-away reveal notes
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#3D1220]">✦</span> Keepsake vase bouquets
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#3D1220]">✦</span> Money bouquets (banknotes)
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Step-by-Step Custom Configuration */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-[#EBDCD3] p-6 sm:p-8 shadow-xs space-y-7">
            
            {/* Step 1: Flower Selection */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <label className="text-xs uppercase tracking-wider font-semibold text-[#3D1220]">
                  01. Choose Your Flowers
                </label>
                <span className="text-[11px] text-[#3D1220] font-medium">Step 1 of 4</span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {flowerOptions.map((f) => {
                  const isSelected = flowerType === f.label;
                  return (
                    <button
                      key={f.label}
                      type="button"
                      onClick={() => setFlowerType(f.label)}
                      className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                        isSelected
                          ? 'border-[#3D1220] bg-[#EBDCD3]/30 ring-1 ring-[#3D1220]'
                          : 'border-[#D9C8BE] hover:border-[#3D1220] bg-[#FFF9F5]/40'
                      }`}
                    >
                      <div className="text-xs font-semibold text-[#3D1220]">{f.label}</div>
                      <div className="text-[10px] text-[#7A6169] mt-0.5 truncate">{f.desc}</div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Colour Palette */}
            <div>
              <label className="text-xs uppercase tracking-wider font-semibold text-[#3D1220] block mb-3">
                02. Choose Your Colours
              </label>
              <div className="flex flex-wrap gap-2.5">
                {colourOptions.map((c) => {
                  const isSelected = colourPalette === c.label;
                  return (
                    <button
                      key={c.label}
                      type="button"
                      onClick={() => setColourPalette(c.label)}
                      className={`px-3.5 py-2 rounded-xl border text-xs font-medium transition-all flex items-center gap-2.5 cursor-pointer ${
                        isSelected
                          ? 'border-[#3D1220] bg-[#3D1220] text-white shadow-xs'
                          : 'border-[#D9C8BE] bg-white text-[#554047] hover:border-[#3D1220]'
                      }`}
                    >
                      <span
                        className="w-3 h-3 rounded-full border border-black/10 inline-block"
                        style={{ backgroundColor: c.hex }}
                      />
                      <span>{c.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Special Formats */}
            <div>
              <label className="text-xs uppercase tracking-wider font-semibold text-[#3D1220] block mb-3">
                03. Special Requests & Additions
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {specialFormats.map((spec) => {
                  const isChecked = specialRequests.includes(spec.name);
                  return (
                    <div
                      key={spec.id}
                      onClick={() => toggleSpecial(spec.name)}
                      className={`p-3 rounded-xl border transition-all cursor-pointer flex items-center justify-between ${
                        isChecked
                          ? 'border-[#3D1220] bg-[#EBDCD3]/30'
                          : 'border-[#D9C8BE] bg-white hover:border-[#3D1220]'
                      }`}
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
                        <div>
                          <span className="text-xs font-semibold text-[#3D1220] block">{spec.name}</span>
                          <span className="text-[10px] text-[#7A6169]">{spec.note}</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Step 4: Budget Slider & Message */}
            <div className="pt-2 border-t border-[#EBDCD3] space-y-4">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label htmlFor="budget-slider" className="text-xs uppercase tracking-wider font-semibold text-[#3D1220]">
                    04. Target Budget:
                  </label>
                  <span className="text-lg font-serif-display font-semibold text-[#3D1220]">
                    R{budget.toLocaleString()}
                  </span>
                </div>
                <input
                  id="budget-slider"
                  type="range"
                  min="400"
                  max="3500"
                  step="50"
                  value={budget}
                  onChange={(e) => setBudget(Number(e.target.value))}
                  className="w-full accent-[#3D1220] cursor-pointer"
                />
                <div className="flex justify-between text-[11px] text-[#7A6169] mt-1 font-mono">
                  <span>R400 (Petite)</span>
                  <span>R1,000 (Grand)</span>
                  <span>R2,500+ (Ultra Luxe)</span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label htmlFor={dateInputId} className="text-xs uppercase tracking-wider font-semibold text-[#3D1220] block mb-1">
                    Event / Delivery Date
                  </label>
                  <input
                    id={dateInputId}
                    type="date"
                    value={deliveryDate}
                    onChange={(e) => setDeliveryDate(e.target.value)}
                    className="w-full px-3 py-2 bg-white border border-[#D9C8BE] rounded-xl text-xs text-[#3D1220] focus:outline-none"
                  />
                </div>
                <div>
                  <label htmlFor={locationInputId} className="text-xs uppercase tracking-wider font-semibold text-[#3D1220] block mb-1">
                    Delivery Suburb (JHB / PTA)
                  </label>
                  <input
                    id={locationInputId}
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="e.g. Sandton, Rosebank, Menlyn..."
                    className="w-full px-3 py-2 bg-white border border-[#D9C8BE] rounded-xl text-xs text-[#3D1220] focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label htmlFor={noteInputId} className="text-xs uppercase tracking-wider font-semibold text-[#3D1220] block mb-1">
                  Card Message or Extra Instructions (Optional)
                </label>
                <textarea
                  id={noteInputId}
                  rows={2}
                  value={recipientNote}
                  onChange={(e) => setRecipientNote(e.target.value)}
                  placeholder="Mention any specific wishes, favorite colors, recipient name, or special ribbon phrase..."
                  className="w-full p-2.5 bg-white border border-[#D9C8BE] rounded-xl text-xs text-[#3D1220] placeholder:text-[#9E868E] focus:outline-none"
                />
              </div>
            </div>

            {/* Custom Request Action */}
            <div className="pt-4 border-t border-[#EBDCD3]">
              <button
                type="button"
                onClick={handleRequestCustom}
                className="w-full py-4 bg-[#3D1220] hover:bg-[#3D1220] active:scale-[0.99] text-white text-xs font-semibold uppercase tracking-widest rounded-xl transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>REQUEST A CUSTOM BOUQUET VIA WHATSAPP</span>
              </button>
              <p className="text-[11px] text-center text-[#7A6169] mt-2">
                Sends your configured custom specification to our florist. 4 days advance notice & 50% deposit required.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
