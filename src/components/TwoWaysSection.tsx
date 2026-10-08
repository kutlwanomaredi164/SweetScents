import React from 'react';
import { ArrowRight, Sparkles, Gift } from 'lucide-react';

interface TwoWaysSectionProps {
  onSendFlowersClick: () => void;
  onCreateGiftClick: () => void;
}

export const TwoWaysSection: React.FC<TwoWaysSectionProps> = ({
  onSendFlowersClick,
  onCreateGiftClick,
}) => {
  return (
    <section className="py-20 bg-[#EBDCD3]/60 border-b border-[#EBDCD3] relative overflow-hidden">
      {/* Decorative subtle ambient circles */}
      <div 
        aria-hidden="true" 
        className="absolute top-1/2 left-0 w-72 h-72 bg-white/40 rounded-full blur-2xl pointer-events-none -translate-y-1/2" 
      />
      <div 
        aria-hidden="true" 
        className="absolute bottom-0 right-10 w-96 h-96 bg-[#FFF9F5]/70 rounded-full blur-3xl pointer-events-none" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs uppercase tracking-[0.3em] text-[#3D1220] font-semibold block mb-2">
            The Sweet Scents Philosophy
          </span>
          <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl text-[#3D1220] font-light tracking-tight">
            TWO BEAUTIFUL WAYS TO SAY IT.
          </h2>
          <p className="text-sm sm:text-base text-[#6E4F57] mt-3">
            Whether sending timeless signature roses or curating an extraordinary bespoke keepsake with ribbons and chocolates, we translate your emotions into floral poetry.
          </p>
        </div>

        {/* Two Large Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Card 1: SEND FLOWERS */}
          <div className="group bg-white rounded-2xl overflow-hidden border border-[#D9C8BE] shadow-sm hover:shadow-xl hover:shadow-[#3D1220]/10 transition-all duration-300 flex flex-col justify-between p-8 sm:p-10 relative">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#EBDCD3] flex items-center justify-center text-[#3D1220] mb-6">
                <span className="text-xl">🌸</span>
              </div>
              <span className="text-xs uppercase tracking-[0.2em] text-[#3D1220] font-semibold block">
                Option 01 · Signature Catalog
              </span>
              <h3 className="font-serif-display text-3xl sm:text-4xl text-[#3D1220] font-medium leading-tight">
                SEND FLOWERS
              </h3>
              <p className="text-sm text-[#554047] leading-relaxed">
                Choose from our iconic curated flower arrangements — 20 to 80 stem color roses, classic red and white rose collections, and vibrant seasonal mixed bunches crafted for pure delight.
              </p>
              
              <ul className="pt-2 space-y-2 text-xs text-[#7A6169]">
                <li className="flex items-center gap-2">
                  <span className="text-[#3D1220]">✓</span> Freshly graded South African florist stems
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#3D1220]">✓</span> Signature multi-layered matte paper wraps
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#3D1220]">✓</span> Complimentary custom handwritten card
                </li>
              </ul>
            </div>

            <div className="pt-8 mt-6 border-t border-[#EBDCD3]">
              <button
                onClick={onSendFlowersClick}
                className="w-full py-3.5 bg-[#3D1220] text-white text-xs font-semibold uppercase tracking-widest rounded-lg hover:bg-[#54182C] transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs"
              >
                <span>BROWSE THE CATALOGUE</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Card 2: CREATE A CUSTOM GIFT */}
          <div className="group bg-[#FFF9F5] rounded-2xl overflow-hidden border border-[#C9A66B]/40 shadow-sm hover:shadow-xl hover:shadow-[#3D1220]/10 transition-all duration-300 flex flex-col justify-between p-8 sm:p-10 relative">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#C9A66B]/20 flex items-center justify-center text-[#3D1220] mb-6">
                <Gift className="w-6 h-6 text-[#3D1220]" />
              </div>
              <span className="text-xs uppercase tracking-[0.2em] text-[#C9A66B] font-semibold block">
                Option 02 · Bespoke Artistry
              </span>
              <h3 className="font-serif-display text-3xl sm:text-4xl text-[#3D1220] font-medium leading-tight">
                CREATE A CUSTOM GIFT
              </h3>
              <p className="text-sm text-[#554047] leading-relaxed">
                Take it to another level. Design a personalized bouquet tailored to your exact budget with Ferrero Rocher chocolates, custom lettered ribbons, burnt-away secret message papers, or cash notes.
              </p>
              
              <ul className="pt-2 space-y-2 text-xs text-[#7A6169]">
                <li className="flex items-center gap-2">
                  <span className="text-[#C9A66B]">✦</span> Custom printed satin ribbon messages
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#C9A66B]">✦</span> Ferrero Rocher, diamond pins, and monogram initials
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#C9A66B]">✦</span> Interactive burnt-away secret proposal notes
                </li>
              </ul>
            </div>

            <div className="pt-8 mt-6 border-t border-[#D9C8BE]/60">
              <button
                onClick={onCreateGiftClick}
                className="w-full py-3.5 border-2 border-[#3D1220] text-[#3D1220] text-xs font-semibold uppercase tracking-widest rounded-lg hover:bg-[#3D1220] hover:text-[#FFF9F5] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs"
              >
                <Sparkles className="w-4 h-4 text-[#3D1220] group-hover:text-[#FFF9F5]" />
                <span>BUILD CUSTOM BOUQUET</span>
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
