import React, { useState } from 'react';
import { Eye, Heart, Search, X, MessageCircle } from 'lucide-react';
import { Product } from '../data/products';
import { createWhatsAppUrl } from '../utils/whatsapp';

interface ShopCatalogueProps {
  products: Product[];
  activeCategory: string;
  onSelectCategory: (category: string) => void;
  activeOccasion: string | null;
  onClearOccasion: () => void;
  onSelectProduct: (product: Product) => void;
  wishlistIds: string[];
  onToggleWishlist: (productId: string) => void;
}

export const ShopCatalogue: React.FC<ShopCatalogueProps> = ({
  products,
  activeCategory,
  onSelectCategory,
  activeOccasion,
  onClearOccasion,
  onSelectProduct,
  wishlistIds,
  onToggleWishlist,
}) => {
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { label: 'ALL', id: 'ALL' },
    { label: 'ROSES', id: 'ROSES' },
    { label: 'MIXED', id: 'MIXED' },
    { label: 'LUXURY', id: 'LUXURY' },
    { label: 'CUSTOM', id: 'CUSTOM' },
    { label: 'SPECIAL', id: 'SPECIAL' },
  ];

  const filteredProducts = products.filter((item) => {
    // Category match
    const categoryMatch = activeCategory === 'ALL' || item.category === activeCategory;
    
    // Occasion match
    const occasionMatch = !activeOccasion || item.occasion.includes(activeOccasion);

    // Search query match
    const searchMatch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());

    return categoryMatch && occasionMatch && searchMatch;
  });

  const handleQuickWhatsAppInquiry = (e: React.MouseEvent, product: Product) => {
    e.stopPropagation();
    const text = `Hi Sweet Scents! I am interested in ordering the "${product.name}" starting from R${product.basePrice}. Could you please advise availability?`;
    window.open(createWhatsAppUrl(text), '_blank');
  };

  return (
    <section id="shop" className="py-20 bg-[#FFF9F5] border-b border-[#EBDCD3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs uppercase tracking-[0.25em] text-[#3D1220] font-semibold block mb-2">
            CATALOGUE
          </span>
          <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl text-[#3D1220] font-light tracking-tight">
            SHOP THE COLLECTION
          </h2>
          <p className="text-sm sm:text-base text-[#7A6169] mt-2">
            Beautiful flowers, thoughtfully arranged. Handcrafted for Johannesburg & Pretoria deliveries.
          </p>
        </div>

        {/* Filter Bar & Search */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
          
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 p-1 bg-white border border-[#EBDCD3] rounded-xl overflow-x-auto max-w-full scrollbar-none shadow-xs">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => onSelectCategory(cat.id)}
                  className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                    isActive
                      ? 'bg-[#3D1220] text-white shadow-xs'
                      : 'text-[#554047] hover:text-[#3D1220] hover:bg-[#EBDCD3]/40'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-[#7A6169] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search arrangements..."
              className="w-full pl-10 pr-8 py-2.5 bg-white border border-[#EBDCD3] rounded-xl text-xs text-[#3D1220] placeholder:text-[#9E868E] focus:outline-none focus:ring-2 focus:ring-[#3D1220]/20 focus:border-[#3D1220] transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[#7A6169] hover:text-[#3D1220]"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Active Occasion Filter Notification */}
        {activeOccasion && (
          <div className="mb-8 flex items-center justify-between bg-[#EBDCD3]/50 border border-[#D9C8BE] px-4 py-2.5 rounded-lg text-xs text-[#3D1220]">
            <div className="flex items-center gap-2">
              <span className="font-medium">Filtered by Occasion:</span>
              <span className="font-semibold underline">{activeOccasion}</span>
            </div>
            <button
              onClick={onClearOccasion}
              className="text-[#3D1220] hover:text-[#3D1220] font-semibold flex items-center gap-1 cursor-pointer"
            >
              <span>Clear Filter</span>
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        )}

        {/* Product Cards Grid */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-2xl border border-dashed border-[#EBDCD3] p-8">
            <p className="font-serif-display text-2xl text-[#3D1220]">No floral arrangements found</p>
            <p className="text-xs text-[#7A6169] mt-2">
              Try adjusting your search criteria or explore our custom bouquet service.
            </p>
            <button
              onClick={() => {
                onSelectCategory('ALL');
                onClearOccasion();
                setSearchQuery('');
              }}
              className="mt-4 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-[#3D1220] rounded-lg hover:bg-[#3D1220] transition-colors"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
            {filteredProducts.map((product) => {
              const isWishlisted = wishlistIds.includes(product.id);
              return (
                <div
                  key={product.id}
                  onClick={() => onSelectProduct(product)}
                  className="group bg-white rounded-xl overflow-hidden border border-[#EBDCD3] shadow-xs hover:shadow-xl hover:shadow-[#3D1220]/10 transition-all duration-300 flex flex-col cursor-pointer"
                >
                  {/* Card Visual Header with zoom */}
                  <div className="relative aspect-[4/3] overflow-hidden bg-[#EBDCD3]/20">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover object-center group-hover:scale-[1.04] transition-transform duration-500 ease-out"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                    />

                    {product.tag && (
                      <span className="absolute top-3 left-3 bg-[#FFF9F5]/90 backdrop-blur-xs text-[#3D1220] text-[10px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded border border-[#EBDCD3]">
                        {product.tag}
                      </span>
                    )}

                    {/* Wishlist Button */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onToggleWishlist(product.id);
                      }}
                      className="absolute top-3 right-3 p-2 bg-white/80 backdrop-blur-xs hover:bg-white text-[#3D1220] rounded-full transition-all shadow-xs"
                      aria-label="Toggle Wishlist"
                    >
                      <Heart
                        className={`w-4 h-4 ${
                          isWishlisted ? 'fill-[#3D1220] text-[#3D1220]' : 'hover:text-[#3D1220]'
                        }`}
                      />
                    </button>
                  </div>

                  {/* Card Body */}
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between text-[11px] text-[#7C9275] font-semibold uppercase tracking-wider mb-1">
                        <span>{product.category}</span>
                        <span className="text-[#9E868E] font-normal">{product.tiers.length} Sizes</span>
                      </div>

                      <h3 className="font-serif-display text-xl font-medium text-[#3D1220] group-hover:text-[#3D1220] transition-colors leading-snug">
                        {product.name}
                      </h3>

                      <p className="text-xs text-[#7A6169] mt-1.5 line-clamp-2 leading-relaxed">
                        {product.shortDescription}
                      </p>

                      {/* Stem / Quantity Tiers preview */}
                      <div className="mt-4 pt-3 border-t border-[#EBDCD3]/60 space-y-1">
                        <span className="text-[10px] uppercase tracking-wider font-semibold text-[#9E868E] block mb-1">
                          Available Tiers:
                        </span>
                        <div className="grid grid-cols-2 gap-1 text-[11px] text-[#554047]">
                          {product.tiers.slice(0, 4).map((tier, idx) => (
                            <div key={idx} className="flex justify-between py-0.5 border-b border-dashed border-[#EBDCD3]/60">
                              <span className="truncate pr-1">{tier.label}</span>
                              <span className="font-semibold text-[#3D1220] tabular-nums">R{tier.price}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Actions footer */}
                    <div className="mt-5 pt-3 border-t border-[#EBDCD3] flex items-center justify-between gap-2">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onSelectProduct(product);
                        }}
                        className="flex-1 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-[#3D1220] hover:bg-[#3D1220] rounded transition-colors flex items-center justify-center gap-1.5"
                      >
                        <Eye className="w-3.5 h-3.5" />
                        <span>View Details</span>
                      </button>

                      <button
                        onClick={(e) => handleQuickWhatsAppInquiry(e, product)}
                        className="p-2 border border-[#7C9275] text-[#7C9275] hover:bg-[#7C9275] hover:text-white rounded transition-colors"
                        title="Quick WhatsApp Inquiry"
                        aria-label="Quick WhatsApp Inquiry"
                      >
                        <MessageCircle className="w-4 h-4" />
                      </button>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>
        )}

      </div>
    </section>
  );
};
