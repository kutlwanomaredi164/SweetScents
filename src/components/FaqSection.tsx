import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';
import { FAQS } from '../data/products';
import { createWhatsAppUrl } from '../utils/whatsapp';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  const handleAskQuestion = () => {
    window.open(createWhatsAppUrl('Hi Sweet Scents! I have a question regarding an order:'), '_blank');
  };

  return (
    <section id="faq" className="py-20 bg-[#FFF9F5] border-b border-[#EBDCD3]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-xs uppercase tracking-[0.25em] text-[#3D1220] font-semibold block mb-2">
            FREQUENTLY ASKED QUESTIONS
          </span>
          <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl text-[#3D1220] font-light tracking-tight">
            EVERYTHING YOU NEED TO KNOW
          </h2>
          <p className="text-sm sm:text-base text-[#7A6169] mt-2">
            Clear, honest answers about placing orders, delivery in JHB/PTA, deposits, and custom arrangements.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-[#EBDCD3] transition-all overflow-hidden shadow-xs hover:border-[#3D1220]"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                >
                  <span className="font-serif-display text-lg sm:text-xl font-medium text-[#3D1220]">
                    {faq.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full bg-[#EBDCD3]/50 flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-[#EBDCD3]' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4 text-[#3D1220]" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 text-xs sm:text-sm text-[#554047] leading-relaxed border-t border-[#EBDCD3]/60 pt-4 animate-in fade-in duration-200">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Help Note */}
        <div className="mt-12 text-center p-6 bg-[#EBDCD3]/40 rounded-2xl border border-[#D9C8BE]">
          <p className="text-xs text-[#3D1220] font-medium">
            Have a unique question or special request?
          </p>
          <button
            onClick={handleAskQuestion}
            className="mt-2 inline-flex items-center gap-2 text-xs font-semibold text-[#3D1220] hover:text-[#3D1220] cursor-pointer"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>Chat Directly on WhatsApp with Our Florist →</span>
          </button>
        </div>

      </div>
    </section>
  );
};
