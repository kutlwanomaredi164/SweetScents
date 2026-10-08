import React, { useState } from 'react';
import { MapPin, Search, CheckCircle2, MessageCircle, Navigation } from 'lucide-react';
import { SUBURBS_DATABASE } from '../data/products';
import { createWhatsAppUrl } from '../utils/whatsapp';

export const DeliveryChecker: React.FC = () => {
  const [query, setQuery] = useState('');
  const [result, setResult] = useState<typeof SUBURBS_DATABASE[0] | null>(null);
  const [searched, setSearched] = useState(false);

  const handleCheck = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    const matched = SUBURBS_DATABASE.find(
      (s) =>
        s.name.toLowerCase().includes(query.trim().toLowerCase()) ||
        s.region.toLowerCase().includes(query.trim().toLowerCase())
    );

    setResult(matched || null);
    setSearched(true);
  };

  const handleWhatsAppDeliveryCheck = () => {
    const text = query.trim()
      ? `Hi Sweet Scents! Could you please advise delivery availability and rate for ${query.trim()} (JHB/PTA)?`
      : `Hi Sweet Scents! Could you please advise delivery rates and availability for my area in JHB/PTA?`;
    window.open(createWhatsAppUrl(text), '_blank');
  };

  return (
    <section id="delivery" className="py-20 bg-[#FFF9F5] border-b border-[#EBDCD3] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs uppercase tracking-[0.25em] text-[#3D1220] font-semibold block mb-2">
            LOCAL COURIER & CARE
          </span>
          <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl text-[#3D1220] font-light tracking-tight">
            DELIVERING BEAUTIFUL MOMENTS
          </h2>
          <p className="text-sm sm:text-base text-[#7A6169] mt-2 font-medium">
            JHB / PTA · Johannesburg & Pretoria Metropolitan Areas
          </p>
        </div>

        {/* Card with stylised map background */}
        <div className="max-w-4xl mx-auto bg-white rounded-3xl border border-[#EBDCD3] shadow-lg overflow-hidden relative">
          
          {/* Stylized Abstract Route / Map Visual Banner */}
          <div className="relative h-44 sm:h-52 bg-gradient-to-r from-[#EBDCD3] via-[#FFF9F5] to-[#EBDCD3] flex items-center justify-center p-6 border-b border-[#EBDCD3] overflow-hidden">
            {/* Abstract radial circles simulating distance rings */}
            <div className="absolute w-72 h-72 rounded-full border border-[#3D1220]/20 animate-pulse" />
            <div className="absolute w-96 h-96 rounded-full border border-[#C9A66B]/20" />
            <div className="absolute w-44 h-44 rounded-full bg-[#3D1220]/5" />

            {/* Stylized Node Badges */}
            <div className="relative z-10 flex items-center gap-6 sm:gap-14 text-center">
              <div className="bg-white/90 backdrop-blur-xs px-4 py-2.5 rounded-xl border border-[#D9C8BE] shadow-xs">
                <MapPin className="w-5 h-5 text-[#3D1220] mx-auto mb-1" />
                <span className="font-serif-display text-sm font-semibold text-[#3D1220] block">Johannesburg</span>
                <span className="text-[10px] text-[#7A6169]">Sandton · Rosebank · Midrand</span>
              </div>

              <div className="flex flex-col items-center">
                <Navigation className="w-5 h-5 text-[#3D1220] transform rotate-45 mb-1" />
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#3D1220]">Hand-Delivered</span>
                <div className="w-20 h-[1.5px] bg-gradient-to-r from-[#3D1220] to-[#3D1220] mt-1" />
              </div>

              <div className="bg-white/90 backdrop-blur-xs px-4 py-2.5 rounded-xl border border-[#D9C8BE] shadow-xs">
                <MapPin className="w-5 h-5 text-[#3D1220] mx-auto mb-1" />
                <span className="font-serif-display text-sm font-semibold text-[#3D1220] block">Pretoria</span>
                <span className="text-[10px] text-[#7A6169]">Menlyn · Centurion · Brooklyn</span>
              </div>
            </div>
          </div>

          {/* Suburb Search & Checker */}
          <div className="p-6 sm:p-10 space-y-6">
            <div className="text-center max-w-lg mx-auto">
              <h3 className="font-serif-display text-xl text-[#3D1220] font-medium">
                Check Delivery To Your Suburb
              </h3>
              <p className="text-xs text-[#7A6169] mt-1">
                Enter your area below to check service coverage and delivery information.
              </p>
            </div>

            <form onSubmit={handleCheck} className="max-w-xl mx-auto flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <Search className="w-4 h-4 text-[#7A6169] absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="e.g. Sandton, Centurion, Rosebank, Pretoria East..."
                  className="w-full pl-10 pr-4 py-3 bg-[#FFF9F5] border border-[#D9C8BE] rounded-xl text-xs text-[#3D1220] focus:outline-none focus:ring-2 focus:ring-[#3D1220]/20 focus:border-[#3D1220]"
                />
              </div>

              <button
                type="submit"
                className="px-6 py-3 bg-[#3D1220] hover:bg-[#3D1220] text-white text-xs font-semibold uppercase tracking-wider rounded-xl transition-colors cursor-pointer whitespace-nowrap"
              >
                CHECK DELIVERY
              </button>
            </form>

            {/* Quick popular suburbs buttons */}
            <div className="flex flex-wrap items-center justify-center gap-1.5 text-xs text-[#7A6169]">
              <span className="text-[11px] font-medium">Popular Areas:</span>
              {['Sandton', 'Centurion', 'Menlyn', 'Rosebank', 'Midrand', 'Fourways'].map((area) => (
                <button
                  key={area}
                  type="button"
                  onClick={() => {
                    setQuery(area);
                    const matched = SUBURBS_DATABASE.find((s) => s.name === area);
                    setResult(matched || null);
                    setSearched(true);
                  }}
                  className="px-2.5 py-1 bg-[#FFF9F5] hover:bg-[#EBDCD3] text-[#3D1220] rounded-md text-[11px] border border-[#D9C8BE] transition-colors"
                >
                  {area}
                </button>
              ))}
            </div>

            {/* Verification Result Display */}
            {searched && (
              <div className="max-w-xl mx-auto mt-4 p-5 bg-[#FFF9F5] border border-[#D9C8BE] rounded-2xl animate-in fade-in">
                {result ? (
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-xs font-semibold text-[#7C9275]">
                      <CheckCircle2 className="w-4 h-4" />
                      <span>Delivery Available to {result.name}!</span>
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-xs text-[#554047] pt-2 border-t border-[#D9C8BE]/60">
                      <div>
                        <span className="text-[10px] text-[#7A6169] block">Region:</span>
                        <span className="font-medium text-[#3D1220]">{result.region}</span>
                      </div>
                      <div>
                        <span className="text-[10px] text-[#7A6169] block">Estimated Window:</span>
                        <span className="font-medium text-[#3D1220]">{result.time}</span>
                      </div>
                    </div>
                    <p className="text-[11px] text-[#7A6169]">
                      * Note: Exact delivery fee will be confirmed with our florist upon booking. Orders must be booked 4 days in advance.
                    </p>
                  </div>
                ) : (
                  <div className="text-center space-y-2">
                    <p className="text-xs font-medium text-[#3D1220]">
                      We deliver everywhere in Johannesburg and Pretoria!
                    </p>
                    <p className="text-[11px] text-[#7A6169]">
                      "{query}" is within our custom courier network. Click below to verify specific gate/address rates directly.
                    </p>
                  </div>
                )}

                <div className="mt-4 pt-3 border-t border-[#D9C8BE] text-center">
                  <button
                    onClick={handleWhatsAppDeliveryCheck}
                    className="inline-flex items-center gap-2 text-xs font-semibold text-[#7C9275] hover:text-[#687D61] cursor-pointer"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>Confirm Delivery Slot on WhatsApp →</span>
                  </button>
                </div>
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
