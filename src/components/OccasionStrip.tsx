import React from 'react';
import { Sparkles } from 'lucide-react';

interface OccasionStripProps {
  onSelectOccasion: (occasion: string) => void;
  activeOccasion: string | null;
}

export const OccasionStrip: React.FC<OccasionStripProps> = ({
  onSelectOccasion,
  activeOccasion,
}) => {
  const occasions = [
    { label: 'All flowers', id: 'ALL' },
    { label: 'Romance', id: 'Romance' },
    { label: 'Birthdays', id: 'Birthdays' },
    { label: 'Celebrations', id: 'Celebrations' },
    { label: 'Just Because', id: 'Just Because' },
    { label: 'Special Moments', id: 'Special Moments' },
    { label: 'Custom', id: 'Custom' },
  ];

  return (
    <section className="bg-[#2A0B14] py-8 border-b border-[#3D1421] text-[#E8DCD4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* OUR FLOWERS Title with Flanking Lines */}
        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="h-[0.5px] w-16 sm:w-36 bg-[#D1A066]/40" />
          <h2 className="font-serif-display text-sm sm:text-base md:text-lg uppercase tracking-[0.32em] text-[#D1A066] font-medium text-center">
            OUR FLOWERS
          </h2>
          <div className="h-[0.5px] w-16 sm:w-36 bg-[#D1A066]/40" />
        </div>

        {/* Category / Occasion Selector Pills */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {occasions.map((occ) => {
            const isActive =
              (occ.id === 'ALL' && !activeOccasion) || activeOccasion === occ.id;
            return (
              <button
                key={occ.id}
                onClick={() => onSelectOccasion(occ.id === 'ALL' ? '' : occ.id)}
                className={`inline-flex items-center gap-1.5 px-4 py-1.5 text-xs font-medium rounded-full transition-all whitespace-nowrap cursor-pointer border ${
                  isActive
                    ? 'bg-[#D1A066] text-[#2A0B14] border-[#D1A066] font-semibold shadow-xs'
                    : 'bg-white/5 text-[#E8DCD4]/85 border-white/10 hover:border-[#D1A066]/60 hover:text-white'
                }`}
              >
                <span>{occ.label}</span>
              </button>
            );
          })}
        </div>

      </div>
    </section>
  );
};
