import React from 'react';
import { X, Heart, Eye, Trash2 } from 'lucide-react';
import { Product } from '../data/products';

interface WishlistDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  wishlistProducts: Product[];
  onRemoveFromWishlist: (productId: string) => void;
  onSelectProduct: (product: Product) => void;
  onShopClick: () => void;
}

export const WishlistDrawer: React.FC<WishlistDrawerProps> = ({
  isOpen,
  onClose,
  wishlistProducts,
  onRemoveFromWishlist,
  onSelectProduct,
  onShopClick,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/60 backdrop-blur-xs flex justify-end animate-in fade-in duration-200">
      
      <div
        className="w-full max-w-md bg-[#FFF9F5] h-full shadow-2xl flex flex-col justify-between border-l border-[#EBDCD3] relative"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Header */}
        <div className="p-5 border-b border-[#EBDCD3] flex items-center justify-between bg-white">
          <div className="flex items-center gap-2">
            <Heart className="w-5 h-5 text-[#3D1220] fill-[#3D1220]" />
            <h3 className="font-serif-display text-xl font-medium text-[#3D1220]">
              Saved Wishlist ({wishlistProducts.length})
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-[#7A6169] hover:text-[#3D1220] rounded-full hover:bg-[#EBDCD3]/40"
            aria-label="Close wishlist"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Wishlist Items List */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {wishlistProducts.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#EBDCD3] flex items-center justify-center text-[#3D1220]">
                <Heart className="w-7 h-7" />
              </div>
              <h4 className="font-serif-display text-2xl text-[#3D1220]">
                Your wishlist is empty
              </h4>
              <p className="text-xs text-[#7A6169] max-w-xs leading-relaxed">
                Click the heart icon on any floral arrangement to save your favorites for upcoming occasions.
              </p>
              <button
                onClick={() => {
                  onClose();
                  onShopClick();
                }}
                className="mt-2 px-6 py-3 bg-[#3D1220] text-white text-xs uppercase tracking-widest font-semibold rounded-xl hover:bg-[#3D1220] transition-colors"
              >
                Browse Flowers
              </button>
            </div>
          ) : (
            wishlistProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white p-4 rounded-xl border border-[#EBDCD3] shadow-2xs flex gap-3 items-center"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-20 h-20 object-cover rounded-lg border border-[#EBDCD3]"
                  referrerPolicy="no-referrer"
                />

                <div className="flex-1 min-w-0">
                  <h4 className="font-serif-display text-base font-semibold text-[#3D1220] truncate">
                    {product.name}
                  </h4>
                  <div className="text-xs text-[#3D1220] font-medium">
                    From R{product.basePrice}
                  </div>
                  <p className="text-[11px] text-[#7A6169] mt-0.5 line-clamp-1">
                    {product.shortDescription}
                  </p>

                  <div className="mt-2 flex items-center gap-2">
                    <button
                      onClick={() => {
                        onClose();
                        onSelectProduct(product);
                      }}
                      className="px-3 py-1 bg-[#3D1220] text-white text-[11px] font-semibold uppercase tracking-wider rounded hover:bg-[#3D1220] transition-colors flex items-center gap-1"
                    >
                      <Eye className="w-3 h-3" />
                      <span>View</span>
                    </button>
                    <button
                      onClick={() => onRemoveFromWishlist(product.id)}
                      className="p-1 text-[#9E868E] hover:text-[#3D1220] rounded"
                      title="Remove"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {wishlistProducts.length > 0 && (
          <div className="p-5 border-t border-[#EBDCD3] bg-white text-center">
            <button
              onClick={() => {
                onClose();
                onShopClick();
              }}
              className="w-full py-3 border border-[#3D1220] text-[#3D1220] hover:bg-[#EBDCD3] text-xs font-semibold uppercase tracking-widest rounded-xl transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
