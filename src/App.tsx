import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { OccasionStrip } from './components/OccasionStrip';
import { ShopCatalogue } from './components/ShopCatalogue';
import { CustomBouquetBuilder } from './components/CustomBouquetBuilder';
import { AboutSection } from './components/AboutSection';
import { HowToOrder } from './components/HowToOrder';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { ProductDetailModal } from './components/ProductDetailModal';
import { CartDrawer, CartItem } from './components/CartDrawer';
import { WishlistDrawer } from './components/WishlistDrawer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { PRODUCTS, Product, AddOnOption } from './data/products';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('hero');

  // Navigation / Filter States
  const [activeCategory, setActiveCategory] = useState<string>('ALL');
  const [activeOccasion, setActiveOccasion] = useState<string | null>(null);

  // Modal State
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // Cart & Wishlist States
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const [wishlistIds, setWishlistIds] = useState<string[]>(['colour-roses']);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);

  // Smooth Navigation
  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Occasion Selection handler
  const handleSelectOccasion = (occasion: string) => {
    if (activeOccasion === occasion) {
      setActiveOccasion(null);
    } else {
      setActiveOccasion(occasion);
      scrollToSection('shop');
    }
  };

  // Wishlist toggle
  const handleToggleWishlist = (productId: string) => {
    setWishlistIds((prev) =>
      prev.includes(productId) ? prev.filter((id) => id !== productId) : [...prev, productId]
    );
  };

  // Cart operations
  const handleAddToCart = (data: {
    product: Product;
    selectedTierIndex: number;
    selectedAddOns: Array<{ addOn: AddOnOption; detail?: string; count?: number }>;
    quantity: number;
    cardMessage: string;
    deliveryDate: string;
  }) => {
    const newCartItem: CartItem = {
      cartId: `${data.product.id}-${Date.now()}`,
      ...data,
    };
    setCartItems((prev) => [...prev, newCartItem]);
  };

  const handleUpdateCartQuantity = (cartId: string, quantity: number) => {
    if (quantity <= 0) {
      handleRemoveCartItem(cartId);
      return;
    }
    setCartItems((prev) =>
      prev.map((item) => (item.cartId === cartId ? { ...item, quantity } : item))
    );
  };

  const handleRemoveCartItem = (cartId: string) => {
    setCartItems((prev) => prev.filter((item) => item.cartId !== cartId));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const wishlistProducts = PRODUCTS.filter((p) => wishlistIds.includes(p.id));
  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="min-h-screen flex flex-col bg-[#FFF9F5] text-[#332529]">
      {/* 1. NAVIGATION */}
      <Navbar
        cartCount={totalCartCount}
        wishlistCount={wishlistIds.length}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenWishlist={() => setIsWishlistOpen(true)}
        onNavigate={scrollToSection}
        activeSection={activeSection}
      />

      <main className="flex-1">
        {/* 2. HERO — THE MONEY SECTION */}
        <Hero
          onShopClick={() => scrollToSection('shop')}
          onCustomClick={() => scrollToSection('custom')}
        />

        {/* 3. QUICK CATEGORY STRIP */}
        <OccasionStrip
          onSelectOccasion={handleSelectOccasion}
          activeOccasion={activeOccasion}
        />

        {/* 5. SHOP CATALOGUE */}
        <ShopCatalogue
          products={PRODUCTS}
          activeCategory={activeCategory}
          onSelectCategory={setActiveCategory}
          activeOccasion={activeOccasion}
          onClearOccasion={() => setActiveOccasion(null)}
          onSelectProduct={(p) => setSelectedProduct(p)}
          wishlistIds={wishlistIds}
          onToggleWishlist={handleToggleWishlist}
        />

        {/* 7. CUSTOM BOUQUETS ("MAKE IT PERSONAL") */}
        <CustomBouquetBuilder />

        {/* 11. ABOUT SWEET SCENTS */}
        <AboutSection onDiscoverClick={() => scrollToSection('shop')} />

        {/* 12. HOW TO ORDER */}
        <HowToOrder />

        {/* 14. FAQ */}
        <FaqSection />
      </main>

      {/* 16. FOOTER */}
      <Footer onNavigate={scrollToSection} />

      {/* Interactive Product Details & WhatsApp Ordering Modal */}
      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={handleAddToCart}
        isWishlisted={selectedProduct ? wishlistIds.includes(selectedProduct.id) : false}
        onToggleWishlist={handleToggleWishlist}
      />

      {/* Slide-over Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateCartQuantity}
        onRemoveItem={handleRemoveCartItem}
        onClearCart={handleClearCart}
        onShopClick={() => scrollToSection('shop')}
      />

      {/* Slide-over Wishlist Drawer */}
      <WishlistDrawer
        isOpen={isWishlistOpen}
        onClose={() => setIsWishlistOpen(false)}
        wishlistProducts={wishlistProducts}
        onRemoveFromWishlist={handleToggleWishlist}
        onSelectProduct={(p) => setSelectedProduct(p)}
        onShopClick={() => scrollToSection('shop')}
      />

      {/* Floating Instant WhatsApp Button */}
      <FloatingWhatsApp />
    </div>
  );
}
