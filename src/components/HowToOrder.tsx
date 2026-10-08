import React from 'react';
import { AlertCircle, ArrowRight, MessageCircle } from 'lucide-react';
import { createWhatsAppUrl } from '../utils/whatsapp';

export const HowToOrder: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'CHOOSE YOUR FLOWERS',
      desc: 'Browse our signature collection or design a bespoke custom bouquet tailored to your preference.',
    },
    {
      num: '02',
      title: 'MESSAGE US',
      desc: 'Send your selected bouquet details, requested delivery date, and add-ons directly via WhatsApp.',
    },
    {
      num: '03',
      title: 'SECURE YOUR ORDER',
      desc: 'A 50% non-refundable deposit is required to confirm your booking and reserve your fresh blooms.',
    },
    {
      num: '04',
      title: 'WE CREATE YOUR BOUQUET',
      desc: 'Our florist artfully conditions the flowers, arranges the stems, and ties our signature satin ribbons.',
    },
    {
      num: '05',
      title: 'DELIVERY / PICKUP',
      desc: 'Handcrafted delivery is available across Johannesburg & Pretoria for a fee depending on location.',
    },
  ];

  const handleStartWhatsApp = () => {
    window.open(createWhatsAppUrl('Hi Sweet Scents! I would like to place an order for a bouquet.'), '_blank');
  };

  return (
    <section id="how-to-order" className="py-20 bg-[#FFF9F5] border-b border-[#EBDCD3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs uppercase tracking-[0.25em] text-[#3D1220] font-semibold block mb-2">
            STEP-BY-STEP PROCESS
          </span>
          <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl text-[#3D1220] font-light tracking-tight">
            ORDERING IS SIMPLE
          </h2>
          <p className="text-sm sm:text-base text-[#7A6169] mt-2">
            A seamless experience from inspiration to doorstep delivery in Johannesburg & Pretoria.
          </p>
        </div>

        {/* Prominent Notice Banner as specified */}
        <div className="max-w-3xl mx-auto mb-14 bg-[#EBDCD3] border-2 border-[#3D1220] rounded-2xl p-5 sm:p-6 text-center shadow-sm">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-[#3D1220] mb-1">
            <AlertCircle className="w-4 h-4 text-[#3D1220]" />
            <span>PLEASE NOTE</span>
          </div>
          <p className="font-serif-display text-xl sm:text-2xl text-[#3D1220] font-medium">
            Orders must be placed 4 days in advance.
          </p>
          <p className="text-xs text-[#7A6169] mt-1 max-w-lg mx-auto">
            This gives our florists adequate time to procure hand-graded, peak-freshness stems from the flower market and customize your ribbons.
          </p>
        </div>

        {/* 5-Step Process Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 border border-[#EBDCD3] shadow-xs hover:border-[#3D1220] transition-colors relative flex flex-col justify-between"
            >
              <div>
                <span className="font-serif-display text-4xl font-light text-[#3D1220]/40 block mb-4">
                  {step.num}
                </span>
                <h3 className="font-serif-display text-base font-semibold text-[#3D1220] tracking-wide mb-2 leading-tight">
                  {step.title}
                </h3>
                <p className="text-xs text-[#7A6169] leading-relaxed">
                  {step.desc}
                </p>
              </div>

              {idx < steps.length - 1 && (
                <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 text-[#3D1220]/50">
                  <ArrowRight className="w-4 h-4" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* WhatsApp CTA Action */}
        <div className="mt-12 text-center">
          <button
            onClick={handleStartWhatsApp}
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#7C9275] hover:bg-[#687D61] text-white text-xs uppercase tracking-widest font-semibold rounded-xl shadow-md hover:shadow-lg transition-all cursor-pointer"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>Start Your Order on WhatsApp</span>
          </button>
        </div>

      </div>
    </section>
  );
};
