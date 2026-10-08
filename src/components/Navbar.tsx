import React, { useState } from 'react';
import { Heart, ShoppingBag, Menu, X, Truck, MapPin } from 'lucide-react';
import { SWEET_SCENTS_PHONE_DISPLAY, createWhatsAppUrl } from '../utils/whatsapp';
import { SweetScentsLogo } from './SweetScentsLogo';

interface NavbarProps {
  cartCount: number;
  wishlistCount: number;
  onOpenCart: () => void;
  onOpenWishlist: () => void;
  onNavigate: (sectionId: string) => void;
  activeSection?: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  cartCount,
  wishlistCount,
  onOpenCart,
  onOpenWishlist,
  onNavigate,
  activeSection = 'hero',
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', id: 'hero' },
    { label: 'Shop', id: 'shop' },
    { label: 'Custom Bouquets', id: 'custom' },
    { label: 'About', id: 'about' },
    { label: 'How to Order', id: 'how-to-order' },
    { label: 'Contact', id: 'contact' },
  ];

  const handleNavClick = (id: string) => {
    setMobileMenuOpen(false);
    onNavigate(id);
  };

  const handleQuickOrder = () => {
    window.open(createWhatsAppUrl('Hi Sweet Scents! I would love to place an order for a bouquet.'), '_blank');
  };

  return (
    <>
      {/* Top Banner Notice with 3-Part Layout */}
      <div className="bg-[#2A0B14] text-[#E8DCD4] text-[10px] sm:text-[11px] py-2 px-4 sm:px-8 tracking-wider font-light flex items-center justify-between border-b border-[#3D1421]">
        {/* Left: Fresh Flowers & Delivery */}
        <div className="flex items-center gap-1.5 font-normal tracking-widest text-[#E8DCD4]/90">
          <Truck className="w-3.5 h-3.5 text-[#D1A066]" />
          <span>FRESH FLOWERS · SAME DAY DELIVERY</span>
        </div>

        {/* Center: Quote */}
        <div className="hidden md:flex items-center gap-2 font-serif italic text-xs text-[#E8DCD4]/85">
          <span className="w-6 h-[0.5px] bg-[#E8DCD4]/30" />
          <span>Because every moment deserves flowers</span>
          <span className="w-6 h-[0.5px] bg-[#E8DCD4]/30" />
        </div>

        {/* Right: Coverage */}
        <div className="flex items-center gap-1.5 font-normal tracking-widest text-[#E8DCD4]/90">
          <MapPin className="w-3.5 h-3.5 text-[#D1A066]" />
          <span>JOHANNESBURG | DURBAN</span>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <header className="sticky top-0 z-40 bg-[#FAF5EF]/95 backdrop-blur-md border-b border-[#EBDCD3] transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* Brand Zone */}
          <button
            onClick={() => handleNavClick('hero')}
            className="group text-left focus:outline-none flex items-center py-1 cursor-pointer transition-opacity hover:opacity-90"
            aria-label="Sweet Scents Home"
          >
            <SweetScentsLogo className="h-16 sm:h-18 w-auto" />
          </button>

          {/* Clean Text Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-xs sm:text-[13px] font-medium text-[#3D1220]">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id || (link.id === 'hero' && activeSection === 'hero');
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className="hover:text-[#3D1220] transition-colors relative py-2 cursor-pointer group flex flex-col items-center"
                >
                  <span className={`${isActive ? 'text-[#3D1220] font-semibold' : 'text-[#3D1220]'}`}>
                    {link.label}
                  </span>
                  {isActive && (
                    <span className="w-6 h-[2px] bg-[#A67C52] mt-0.5 rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Actions: Wishlist, Cart, Order Button */}
          <div className="flex items-center gap-3 sm:gap-4">
            
            {/* Wishlist */}
            <button
              onClick={onOpenWishlist}
              className="relative p-2 text-[#3D1220] hover:text-[#3D1220] transition-colors rounded-full"
              aria-label={`Wishlist with ${wishlistCount} items`}
            >
              <Heart className="w-5 h-5 stroke-[1.8]" />
              <span className="absolute 1.5 -top-0.5 -right-0.5 bg-[#3D1220] text-white text-[9px] font-semibold w-4 h-4 rounded-full flex items-center justify-center">
                {wishlistCount}
              </span>
            </button>

            {/* Cart */}
            <button
              onClick={onOpenCart}
              className="relative p-2 text-[#3D1220] hover:text-[#3D1220] transition-colors rounded-full"
              aria-label={`Cart with ${cartCount} items`}
            >
              <ShoppingBag className="w-5 h-5 stroke-[1.8]" />
              <span className="absolute -top-0.5 -right-0.5 bg-[#3D1220] text-white text-[9px] font-semibold w-4 h-4 rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            </button>

            {/* ORDER NOW pill button with Shopping Bag icon */}
            <button
              onClick={handleQuickOrder}
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 text-xs uppercase tracking-wider font-semibold text-white bg-[#3D1220] hover:bg-[#52182B] active:scale-[0.98] transition-all rounded-full shadow-sm hover:shadow"
            >
              <ShoppingBag className="w-3.5 h-3.5" />
              <span>ORDER NOW</span>
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-[#3D1220] hover:text-[#3D1220] transition-colors rounded"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#FAF5EF] border-b border-[#EBDCD3] px-6 py-6 space-y-4 animate-in slide-in-from-top-2 duration-200">
            <nav className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className="text-left text-base font-serif-display text-[#3D1220] hover:text-[#3D1220] py-1 border-b border-[#EBDCD3]/40"
                >
                  {link.label}
                </button>
              ))}
            </nav>
            <div className="pt-2 flex flex-col gap-3">
              <button
                onClick={handleQuickOrder}
                className="w-full py-3 text-xs tracking-wider uppercase font-semibold text-white bg-[#3D1220] hover:bg-[#52182B] transition-colors rounded-full flex items-center justify-center gap-2"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>ORDER NOW ({SWEET_SCENTS_PHONE_DISPLAY})</span>
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

