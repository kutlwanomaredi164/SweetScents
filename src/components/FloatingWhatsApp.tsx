import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { SWEET_SCENTS_PHONE_DISPLAY, createWhatsAppUrl } from '../utils/whatsapp';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  const handleClick = () => {
    window.open(createWhatsAppUrl('Hi Sweet Scents! I would like to inquire about flowers for an upcoming date:'), '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-2.5">
      {/* Tooltip prompt */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 bg-white/95 backdrop-blur-md py-2.5 px-4 rounded-full shadow-lg border border-[#EBDCD3] text-xs text-[#3D1220] animate-in slide-in-from-right-3">
          <MessageCircle className="w-3.5 h-3.5 text-[#B08968]" />
          <span className="font-medium">Need help or a custom quote?</span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-stone-400 hover:text-stone-700 ml-1.5 cursor-pointer"
            aria-label="Dismiss tooltip"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      )}

      {/* Main WhatsApp Button */}
      <button
        onClick={handleClick}
        className="w-12 h-12 rounded-full bg-[#3D1220] hover:bg-[#52182B] text-white flex items-center justify-center shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 active:scale-95 cursor-pointer ring-4 ring-[#3D1220]/15"
        aria-label="Chat on WhatsApp"
        title={`WhatsApp us: ${SWEET_SCENTS_PHONE_DISPLAY}`}
      >
        <MessageCircle className="w-5 h-5 fill-white" />
      </button>
    </div>
  );
};
