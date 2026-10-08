import React from 'react';
import { Sparkles, HeartHandshake, Award } from 'lucide-react';
import aboutImage from '../assets/images/regenerated_image_1791403611080.png';

interface AboutSectionProps {
  onDiscoverClick: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onDiscoverClick }) => {
  return (
    <section
      id="about"
      className="py-20 bg-[#FFF9F5] border-b border-[#EBDCD3]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left Column: Photograph */}
          <div className="lg:col-span-5 relative">

            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-[#EBDCD3] aspect-[4/5] bg-[#EBDCD3]/30">

              <img
                src={aboutImage}
                alt="Florist handcrafted floral arrangement by Sweet Scents"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
                loading="lazy"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#3D1220]/40 via-transparent to-transparent pointer-events-none" />

            </div>

          </div>

          {/* Right Column: Story & Principles */}
          <div className="lg:col-span-7 space-y-6 lg:pl-6">

            <span className="text-xs uppercase tracking-[0.25em] text-[#3D1220] font-semibold block">
              OUR ATELIER
            </span>

            <h2 className="font-serif-display text-4xl sm:text-5xl text-[#3D1220] font-light tracking-tight leading-tight">
              FLOWERS WITH FEELING.
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-[#554047] leading-relaxed">

              <p className="font-medium text-[#3D1220]">
                Sweet Scents is an online flower shop serving JHB / PTA, creating beautiful floral arrangements for life's most special moments.
              </p>

              <p className="text-sm text-[#7A6169]">
                We believe flowers are more than just blooms; they are silent messengers of love, appreciation, celebration, and heartfelt remembrance. From grand gestures of 80 velvety roses to playful personalized custom gifts featuring ribbon typography and Ferrero Rocher treats, each arrangement is hand-tied with signature silk ribbons and wrapped to perfection.
              </p>

            </div>

            {/* Core Values */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-[#EBDCD3]">

              {/* Premium Stems */}
              <div className="flex items-start gap-3">

                <div className="w-8 h-8 rounded-lg bg-[#EBDCD3] text-[#3D1220] flex items-center justify-center shrink-0 mt-0.5">
                  <Award className="w-4 h-4" />
                </div>

                <div>

                  <h4 className="text-xs font-semibold text-[#3D1220] uppercase tracking-wider">
                    Premium Stems
                  </h4>

                  <p className="text-xs text-[#7A6169] mt-0.5">
                    Sourced fresh from top local growers with velvety petals and vibrant colors.
                  </p>

                </div>

              </div>

              {/* Bespoke Touch */}
              <div className="flex items-start gap-3">

                <div className="w-8 h-8 rounded-lg bg-[#EBDCD3] text-[#3D1220] flex items-center justify-center shrink-0 mt-0.5">
                  <HeartHandshake className="w-4 h-4" />
                </div>

                <div>

                  <h4 className="text-xs font-semibold text-[#3D1220] uppercase tracking-wider">
                    Bespoke Touch
                  </h4>

                  <p className="text-xs text-[#7A6169] mt-0.5">
                    Custom ribbon lettering, diamond pins, and handwritten luxury greeting cards.
                  </p>

                </div>

              </div>

            </div>

            {/* Discover Button */}
            <div className="pt-4">

              <button
                onClick={onDiscoverClick}
                className="px-7 py-3 bg-[#3D1220] hover:bg-[#3D1220] text-white text-xs font-semibold uppercase tracking-widest rounded-lg transition-colors cursor-pointer shadow-xs"
              >
                DISCOVER SWEET SCENTS
              </button>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};