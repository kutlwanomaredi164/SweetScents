import React from 'react';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { createWhatsAppUrl } from '../utils/whatsapp';

interface FinalCtaProps {
  onOrderClick: () => void;
}

export const FinalCta: React.FC<FinalCtaProps> = ({ onOrderClick }) => {
  const handleDirectWhatsApp = () => {
    window.open(createWhatsAppUrl('Hi Sweet Scents! I would like to order a bouquet today.'), '_blank');
  };

  return (
    <section className="relative py-24 sm:py-32 bg-[#3D1220] text-[#FFF9F5] overflow-hidden">
      {/* Background ambient floral overlays */}
      <div 
        aria-hidden="true" 
        className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#EBDCD3_1px,transparent_1px)] [background-size:24px_24px]" 
      />
      <div 
        aria-hidden="true" 
        className="absolute -top-24 -left-24 w-96 h-96 bg-[#3D1220]/50 rounded-full blur-3xl pointer-events-none" 
      />
      <div 
        aria-hidden="true" 
        className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#C9A66B]/20 rounded-full blur-3xl pointer-events-none" 
      />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        
        <span className="text-xs uppercase tracking-[0.3em] text-[#EBDCD3] font-semibold block">
          SWEET SCENTS FLORAL BOUTIQUE
        </span>

        <h2 className="font-serif-display text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight leading-tight text-balance">
          SEND SOMETHING BEAUTIFUL.
        </h2>

        <p className="text-base sm:text-lg text-[#EBDCD3]/90 max-w-xl mx-auto font-light">
          Make someone's day a little more special. Hand-crafted bouquets, silky ribbons, and unforgettable memories across Johannesburg & Pretoria.
        </p>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onOrderClick}
            className="w-full sm:w-auto px-9 py-4 bg-[#FFF9F5] hover:bg-white text-[#3D1220] text-xs font-semibold uppercase tracking-widest rounded-xl transition-all shadow-lg hover:shadow-xl active:scale-[0.99] flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>ORDER YOUR FLOWERS</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={handleDirectWhatsApp}
            className="w-full sm:w-auto px-8 py-4 border border-[#EBDCD3]/40 hover:bg-white/10 text-[#FFF9F5] text-xs font-semibold uppercase tracking-widest rounded-xl transition-colors flex items-center justify-center gap-2 cursor-pointer"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Chat on WhatsApp</span>
          </button>
        </div>

        <div className="pt-6 text-xs text-[#EBDCD3]/70">
          Orders required 4 days in advance · 50% deposit to secure
        </div>

      </div>
    </section>
  );
};
