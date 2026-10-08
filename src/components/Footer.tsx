import React from 'react';
import { Instagram, Phone, Mail, MapPin, Heart } from 'lucide-react';
import { SWEET_SCENTS_PHONE_DISPLAY, SWEET_SCENTS_EMAIL, SWEET_SCENTS_INSTAGRAM, createWhatsAppUrl } from '../utils/whatsapp';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer id="contact" className="bg-[#2D121B] text-[#FFF9F5] pt-16 pb-12 border-t border-[#3D1220]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="font-serif-display text-2xl tracking-[0.2em] font-semibold text-[#EBDCD3]">
              SWEET SCENTS
            </div>
            <p className="font-serif-display italic text-[#D9C8BE] text-lg font-light">
              Flowers made to say it all.
            </p>
            <p className="text-xs text-white/70 max-w-sm leading-relaxed">
              Boutique floral designer handcrafting bespoke rose bouquets, personalized gift sets, and custom celebration arrangements for Johannesburg and Pretoria.
            </p>
            
            <div className="pt-2 text-xs text-[#D9C8BE] flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#7C9275]" />
              <span>Available on WhatsApp 08:00 – 18:00</span>
            </div>
          </div>

          {/* SHOP */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#EBDCD3] mb-4">
              SHOP
            </h4>
            <ul className="space-y-2.5 text-xs text-white/80">
              <li>
                <button
                  onClick={() => onNavigate('shop')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Flowers
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('custom')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Custom Bouquets
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  About Us
                </button>
              </li>
            </ul>
          </div>

          {/* HELP */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#EBDCD3] mb-4">
              HELP
            </h4>
            <ul className="space-y-2.5 text-xs text-white/80">
              <li>
                <button
                  onClick={() => onNavigate('how-to-order')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  How to Order
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('faq')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  FAQ
                </button>
              </li>
              <li>
                <a
                  href={createWhatsAppUrl('Hi Sweet Scents, I need assistance with an order:')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  WhatsApp Support
                </a>
              </li>
            </ul>
          </div>

          {/* CONTACT & SOCIAL */}
          <div className="space-y-4">
            <div>
              <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#EBDCD3] mb-3">
                CONTACT
              </h4>
              <ul className="space-y-2 text-xs text-white/80">
                <li className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-[#EBDCD3]" />
                  <a
                    href={createWhatsAppUrl('Hello Sweet Scents!')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    {SWEET_SCENTS_PHONE_DISPLAY}
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-[#EBDCD3]" />
                  <a
                    href={`mailto:${SWEET_SCENTS_EMAIL}`}
                    className="hover:text-white transition-colors truncate"
                  >
                    {SWEET_SCENTS_EMAIL}
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-[#EBDCD3]" />
                  <span>JHB / PTA</span>
                </li>
              </ul>
            </div>

            <div className="pt-2">
              <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#EBDCD3] mb-2">
                SOCIAL
              </h4>
              <div className="flex items-center gap-3 text-xs text-white/80">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#EBDCD3] transition-colors flex items-center gap-1"
                >
                  <Instagram className="w-3.5 h-3.5" />
                  <span>Instagram</span>
                </a>
                <span className="opacity-40">·</span>
                <a
                  href="https://tiktok.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#EBDCD3] transition-colors"
                >
                  <span>TikTok</span>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-white/60 gap-4">
          <div>
            © 2026 Sweet Scents. All rights reserved.
          </div>
          <div className="flex items-center gap-1 text-[11px] text-white/50">
            <span>Handcrafted with love in Johannesburg & Pretoria</span>
            <Heart className="w-3 h-3 text-[#3D1220] fill-[#3D1220]" />
          </div>
        </div>

      </div>
    </footer>
  );
};
