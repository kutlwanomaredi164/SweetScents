import React, { useState } from 'react';
import { Instagram, ArrowUpRight, X, Heart } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/products';
import { SWEET_SCENTS_INSTAGRAM } from '../utils/whatsapp';

export const InstagramGallery: React.FC = () => {
  const [activeImage, setActiveImage] = useState<typeof GALLERY_ITEMS[0] | null>(null);

  return (
    <section id="gallery" className="py-20 bg-[#FFF9F5] border-b border-[#EBDCD3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#3D1220] font-semibold mb-2">
              <Instagram className="w-3.5 h-3.5" />
              <span>{SWEET_SCENTS_INSTAGRAM}</span>
            </div>
            <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl text-[#3D1220] font-light tracking-tight">
              A LITTLE FLOWER INSPIRATION
            </h2>
            <p className="text-sm sm:text-base text-[#7A6169] mt-2 max-w-xl">
              Real bouquets crafted with care and delivered to doorstep celebrations throughout Johannesburg & Pretoria.
            </p>
          </div>

          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-[#3D1220] hover:text-[#3D1220] transition-colors py-2 border-b border-[#3D1220]/30 hover:border-[#3D1220]"
          >
            <span>Follow {SWEET_SCENTS_INSTAGRAM}</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Masonry / Editorial Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {GALLERY_ITEMS.map((item, index) => {
            // vary heights for masonry feel
            const isTall = index === 1 || index === 4;
            return (
              <div
                key={item.id}
                onClick={() => setActiveImage(item)}
                className={`group relative rounded-2xl overflow-hidden cursor-pointer shadow-xs hover:shadow-xl transition-all duration-300 border border-[#EBDCD3] ${
                  isTall ? 'sm:row-span-2 aspect-[3/4]' : 'aspect-square'
                }`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-center group-hover:scale-[1.05] transition-transform duration-500 ease-out"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />

                {/* Dark Rose Gradient Scrim on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#3D1220]/80 via-[#3D1220]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-end text-white">
                  <span className="text-[10px] uppercase tracking-widest text-[#EBDCD3] font-medium">
                    {item.tag}
                  </span>
                  <h3 className="font-serif-display text-lg sm:text-xl font-medium mt-1">
                    {item.title}
                  </h3>
                  <p className="text-xs text-white/90 mt-1 line-clamp-2">
                    {item.caption}
                  </p>
                  
                  <div className="mt-3 pt-3 border-t border-white/20 flex items-center justify-between text-xs font-medium">
                    <span className="flex items-center gap-1.5 text-white/90">
                      <Instagram className="w-3.5 h-3.5" />
                      <span>{SWEET_SCENTS_INSTAGRAM}</span>
                    </span>
                    <span className="flex items-center gap-1 text-[#EBDCD3]">
                      <span>View</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Lightbox Modal */}
      {activeImage && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in"
          onClick={() => setActiveImage(null)}
        >
          <div
            className="relative bg-white rounded-2xl overflow-hidden max-w-2xl w-full border border-white/10 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveImage(null)}
              className="absolute top-4 right-4 z-10 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors"
              aria-label="Close image"
            >
              <X className="w-5 h-5" />
            </button>

            <img
              src={activeImage.image}
              alt={activeImage.title}
              className="w-full max-h-[70vh] object-cover"
              referrerPolicy="no-referrer"
            />

            <div className="p-6 bg-[#FFF9F5]">
              <div className="flex items-center justify-between text-xs text-[#3D1220] font-semibold uppercase tracking-wider mb-1">
                <span>{activeImage.tag}</span>
                <span>{SWEET_SCENTS_INSTAGRAM}</span>
              </div>
              <h3 className="font-serif-display text-2xl text-[#3D1220] font-medium">
                {activeImage.title}
              </h3>
              <p className="text-xs text-[#7A6169] mt-2">
                {activeImage.caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
