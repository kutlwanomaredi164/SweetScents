import React from 'react';
import { Sparkles, MessageCircle } from 'lucide-react';
import { ADD_ONS } from '../data/products';
import { createWhatsAppUrl } from '../utils/whatsapp';

export const AddOnsSection: React.FC = () => {
  const items = [
    {
      title: 'Monogram Initials',
      price: 'R150',
      icon: '✦',
      desc: 'Elegant pearl or glitter letter pinned into the rose center',
    },
    {
      title: 'Custom Ribbon Words',
      price: 'From R250',
      icon: '✎',
      desc: 'Personalized quote, nickname or anniversary date on luxury satin',
    },
    {
      title: 'Gypsophila (Gyps)',
      price: 'R150',
      icon: '❀',
      desc: 'Dreamy cloud of white baby’s breath framing your flowers',
    },
    {
      title: 'Foil Heart Balloon',
      price: 'R40',
      icon: '🎈',
      desc: 'Shimmering metallic heart accent floating above the stems',
    },
    {
      title: 'Diamond Pins',
      price: 'R5 each',
      icon: '💎',
      desc: 'Faceted sparkling crystal pins placed into rose blossom centers',
    },
    {
      title: 'Ferrero Rocher Topper',
      price: 'R120',
      icon: '✨',
      desc: 'Decadent golden hazelnut chocolates nestled in delicate tissue',
    },
  ];

  const handleEnquireAddOn = (title: string) => {
    const text = `Hi Sweet Scents! I would like to inquire about including the "${title}" add-on with my bouquet.`;
    window.open(createWhatsAppUrl(text), '_blank');
  };

  return (
    <section className="py-20 bg-[#FFF9F5] border-b border-[#EBDCD3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs uppercase tracking-[0.25em] text-[#3D1220] font-semibold block mb-2">
            DELIGHTFUL FINISHING TOUCHES
          </span>
          <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl text-[#3D1220] font-light tracking-tight">
            MAKE IT EXTRA SPECIAL
          </h2>
          <p className="text-sm sm:text-base text-[#7A6169] mt-2">
            Elevate your bouquet with custom initials, heartfelt ribbon lettering, sparkling pins, or sweet treats.
          </p>
        </div>

        {/* Horizontal Playful Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="group bg-white rounded-2xl p-5 border border-[#EBDCD3] hover:border-[#3D1220] hover:shadow-lg hover:shadow-[#3D1220]/5 transition-all duration-300 flex flex-col items-center text-center justify-between"
            >
              <div className="w-12 h-12 rounded-full bg-[#EBDCD3]/50 group-hover:bg-[#EBDCD3] text-[#3D1220] flex items-center justify-center text-xl mb-3 transition-transform group-hover:scale-110">
                {item.icon}
              </div>

              <div>
                <h3 className="font-serif-display text-base font-semibold text-[#3D1220] leading-snug">
                  {item.title}
                </h3>
                <div className="mt-1 font-sans text-xs font-bold text-[#3D1220]">
                  {item.price}
                </div>
                <p className="text-[11px] text-[#7A6169] mt-2 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <button
                onClick={() => handleEnquireAddOn(item.title)}
                className="mt-4 pt-3 border-t border-[#EBDCD3] w-full text-[10px] uppercase tracking-wider font-semibold text-[#3D1220] group-hover:text-[#3D1220] transition-colors flex items-center justify-center gap-1 cursor-pointer"
              >
                <span>Add On</span>
                <span aria-hidden="true">+</span>
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
