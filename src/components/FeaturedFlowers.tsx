import React from 'react';
import { Eye, Heart, ArrowRight } from 'lucide-react';
import { Product } from '../data/products';

interface FeaturedFlowersProps {
  products: Product[];
  onSelectProduct: (product: Product) => void;
  wishlistIds: string[];
  onToggleWishlist: (productId: string) => void;
  onViewAllClick: () => void;
}

export const FeaturedFlowers: React.FC<FeaturedFlowersProps> = ({
  products,
  onSelectProduct,
  wishlistIds,
  onToggleWishlist,
  onViewAllClick,
}) => {
  const featured = products.filter((p) => p.isFeatured).slice(0, 4);

  return (
    <section id="featured" className="py-20 bg-[#FFF9F5] border-b border-[#EBDCD3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-[#3D1220] font-semibold block mb-2">
              FEATURED BOUQUETS
            </span>
            <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl text-[#3D1220] font-light tracking-tight">
              FIND YOUR PERFECT BOUQUET
            </h2>
            <p className="text-sm sm:text-base text-[#7A6169] mt-2 max-w-xl">
              From classic roses to colourful seasonal arrangements, find something beautiful for every occasion.
            </p>
          </div>

          <button
            onClick={onViewAllClick}
            className="group inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-[#3D1220] hover:text-[#3D1220] transition-colors py-2 border-b border-[#3D1220]/30 hover:border-[#3D1220]"
          >
            <span>Explore All Blooms</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* 4-Card Product Grid with Smooth 1.04x Hover and Slide-Up Details */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {featured.map((product) => {
            const isWishlisted = wishlistIds.includes(product.id);
            return (
              <div
                key={product.id}
                className="group relative bg-white rounded-xl overflow-hidden border border-[#EBDCD3] shadow-xs hover:shadow-xl hover:shadow-[#3D1220]/10 transition-all duration-300 flex flex-col"
              >
                {/* Product Image Container with Zoom 1.04x */}
                <div className="relative aspect-[4/3] sm:aspect-square overflow-hidden bg-[#EBDCD3]/30">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover object-center group-hover:scale-[1.04] transition-transform duration-500 ease-out"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  
                  {/* Category Tag */}
                  {product.tag && (
                    <div className="absolute top-3 left-3 bg-[#FFF9F5]/90 backdrop-blur-xs px-2.5 py-1 rounded text-[11px] font-medium text-[#3D1220] border border-[#EBDCD3]">
                      {product.tag}
                    </div>
                  )}

                  {/* Wishlist Button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onToggleWishlist(product.id);
                    }}
                    className="absolute top-3 right-3 p-2 bg-white/80 backdrop-blur-xs hover:bg-white text-[#3D1220] rounded-full transition-all shadow-xs"
                    aria-label={`Save ${product.name} to wishlist`}
                  >
                    <Heart
                      className={`w-4 h-4 transition-colors ${
                        isWishlisted ? 'fill-[#3D1220] text-[#3D1220]' : 'hover:text-[#3D1220]'
                      }`}
                    />
                  </button>

                  {/* Quick Action Overlay button */}
                  <div className="absolute inset-x-3 bottom-3 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-200">
                    <button
                      onClick={() => onSelectProduct(product)}
                      className="w-full py-2.5 bg-[#3D1220] text-white text-xs font-semibold uppercase tracking-wider rounded-lg shadow-md hover:bg-[#54182C] transition-colors flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>View Bouquet</span>
                    </button>
                  </div>
                </div>

                {/* Product Information */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="text-[11px] uppercase tracking-wider text-[#7C9275] font-semibold mb-1">
                      {product.category}
                    </div>
                    <h3 className="font-serif-display text-xl font-medium text-[#3D1220] group-hover:text-[#3D1220] transition-colors leading-snug">
                      {product.name}
                    </h3>
                    <p className="text-xs text-[#7A6169] mt-1.5 line-clamp-2 leading-relaxed font-normal">
                      {product.shortDescription}
                    </p>
                  </div>

                  <div className="pt-4 mt-2 border-t border-[#EBDCD3]/60 flex items-center justify-between">
                    <div>
                      <span className="text-[11px] text-[#7A6169] block leading-none">Starting from</span>
                      <span className="text-base font-semibold text-[#3D1220] font-serif-display">
                        R{product.basePrice}
                      </span>
                    </div>

                    <button
                      onClick={() => onSelectProduct(product)}
                      className="text-xs font-medium text-[#3D1220] hover:text-[#3D1220] transition-colors px-2 py-1 flex items-center gap-1 cursor-pointer"
                    >
                      <span>Options</span>
                      <span aria-hidden="true">→</span>
                    </button>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
