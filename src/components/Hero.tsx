import React from 'react';
import { ArrowRight } from 'lucide-react';
import heroImage from '../assets/images/hero_burgundy_gold_bouquet_1791408311797.jpg';

interface HeroProps {
  onShopClick: () => void;
  onCustomClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onShopClick, onCustomClick }) => {
  return (
    <section
      id="hero"
      className="relative min-h-[660px] lg:min-h-[760px] xl:min-h-[820px] bg-[#FAF5EF] overflow-hidden flex flex-col justify-between border-b border-[#EBDCD3]"
    >
      {/* Background Soft Dappled Lighting & Shadow Texture */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Soft morning ambient wash */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#FAF5EF] via-[#FAF5EF]/90 to-transparent lg:w-[60%] z-10" />

        <div className="absolute top-0 inset-x-0 h-24 bg-gradient-to-b from-[#FAF5EF] to-transparent z-10" />

        <div className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-[#FAF5EF] to-transparent z-10" />

        {/* Realistic Dappled Leaf Shadow Effect */}
        <div className="absolute top-8 left-1/4 w-96 h-96 rounded-full bg-stone-300/15 blur-3xl transform -rotate-12 pointer-events-none" />
      </div>

      {/* Right Half: Grand Burgundy & Gold Floral Bouquet on Marble Table */}
      <div className="absolute right-0 top-0 bottom-0 w-full lg:w-[62%] xl:w-[58%] z-0 pointer-events-none flex items-center justify-end">
        <div className="relative w-full h-full">

          {/* Hero Image */}
          <img
            src={heroImage}
            alt="Sweet Scents luxury burgundy and rose floral arrangement"
            className="w-full h-full object-cover object-[center_35%] lg:object-[center_40%]"
            referrerPolicy="no-referrer"
            loading="eager"
          />

          {/* Left edge seamless gradient feather into cream wall */}
          <div className="absolute inset-y-0 left-0 w-32 sm:w-48 lg:w-72 bg-gradient-to-r from-[#FAF5EF] via-[#FAF5EF]/70 to-transparent" />

          <div className="absolute top-0 inset-x-0 h-24 bg-gradient-to-b from-[#FAF5EF] via-[#FAF5EF]/40 to-transparent" />

          <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-[#FAF5EF] to-transparent" />
        </div>
      </div>

      {/* Subtle Mobile Readability Overlay */}
      <div className="absolute inset-0 bg-[#FAF5EF]/70 lg:hidden pointer-events-none z-10" />

      {/* Main Content Grid */}
      <div
        className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1 flex flex-col justify-center py-10 lg:py-16 -mt-[42px] mb-[289px]"
        style={{
          marginTop: '-42px',
          marginBottom: '289px',
        }}
      >
        <div className="max-w-xl lg:max-w-2xl space-y-6 sm:space-y-8">

          {/* Majestic "SWEET SCENTS" Display Typography */}
          <div className="relative select-none">
            <div className="font-serif-display text-5xl sm:text-7xl lg:text-[88px] xl:text-[100px] text-[#3D1220] font-normal tracking-[0.04em] leading-[0.92] relative">

              <span className="block relative">
                {/* Decorative golden accent curve behind the initial S */}
                <span className="absolute -left-3 sm:-left-4 top-2 text-[#D1A066] font-light opacity-90 -z-10 text-[60px] sm:text-[84px] lg:text-[104px]">
                  ⌠
                </span>

                SWEET
              </span>

              <span className="block">
                SCENTS
              </span>

            </div>
          </div>

          {/* Secondary Headline */}
          <div className="pt-1">
            <h1 className="font-serif-display text-3xl sm:text-4xl lg:text-[46px] text-[#3D1220] font-normal leading-[1.12] tracking-tight">

              <span className="block font-medium">
                FLOWERS MADE
              </span>

              <span className="block italic font-normal text-[#3D1220]">
                TO SAY IT ALL.
              </span>

            </h1>
          </div>

          {/* Action Buttons as Rounded Pills */}
          <div className="pt-2 flex flex-wrap items-center gap-4">

            {/* Primary Burgundy Pill Button */}
            <button
              onClick={onShopClick}
              className="px-8 py-3.5 bg-[#3D1220] hover:bg-[#54182C] active:scale-[0.98] text-white text-xs uppercase tracking-widest font-semibold rounded-full shadow-sm hover:shadow-md transition-all flex items-center gap-2.5 cursor-pointer"
            >
              <span>
                SHOP FLOWERS
              </span>

              <ArrowRight className="w-4 h-4" />
            </button>

            {/* Secondary Light Outlined Pill Button */}
            <button
              onClick={onCustomClick}
              className="px-8 py-3.5 bg-[#FAF5EF]/90 hover:bg-white active:scale-[0.98] text-[#3D1220] border border-[#B08968]/70 hover:border-[#3D1220] text-xs uppercase tracking-widest font-semibold rounded-full shadow-2xs hover:shadow-sm transition-all flex items-center gap-2 cursor-pointer backdrop-blur-xs"
            >
              <span>
                CUSTOM BOUQUET
              </span>
            </button>

          </div>

        </div>
      </div>

    </section>
  );
};