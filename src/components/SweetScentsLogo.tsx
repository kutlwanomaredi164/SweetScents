import React from 'react';

interface SweetScentsLogoProps {
  className?: string;
  subtitle?: string;
}

export const SweetScentsLogo: React.FC<SweetScentsLogoProps> = ({
  className = 'h-14 w-auto',
  subtitle = 'FLOWERS & GIFTS',
}) => {
  return (
    <div className={`inline-flex flex-col items-center justify-center select-none ${className}`}>
      <svg
        viewBox="0 0 320 280"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full overflow-visible"
        aria-label="Sweet Scents Flowers & Gifts"
      >
        <g id="sweet-scents-emblem">
          {/* Delicate Botanical Floral Line-Art in Rich Wine Burgundy */}
          <g stroke="#3D1220" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none">
            {/* Top buds and branches */}
            <path d="M192 78 C 196 68, 204 62, 212 60 C 216 66, 212 74, 206 78 Z" fill="#EBDCD3" fillOpacity="0.4" />
            <path d="M206 78 C 210 70, 222 72, 226 78 C 224 86, 216 88, 208 84" />
            <path d="M212 60 L 216 48 C 218 42, 224 40, 228 44 C 230 48, 226 56, 222 58" />
            <path d="M228 44 C 232 38, 238 38, 240 42 C 242 46, 238 52, 232 54" />
            
            {/* Upper Right Blossom */}
            <path d="M188 88 C 182 82, 184 72, 192 70 C 198 74, 196 82, 190 86" />
            <circle cx="204" cy="76" r="3.2" fill="#3D1220" />
            <path d="M202 74 L 198 70 M 206 73 L 210 68 M 206 78 L 212 80 M 202 79 L 198 82" />

            {/* Left side flower cluster hugging the S spine */}
            <path d="M136 94 C 128 88, 126 78, 134 72 C 142 74, 144 84, 138 92" />
            <path d="M140 92 C 146 84, 156 86, 160 92 C 158 100, 148 102, 142 96" />
            
            {/* Leaf cluster on left */}
            <path d="M128 128 C 112 126, 106 118, 110 110 C 122 112, 128 122, 128 128 Z" fill="#EBDCD3" fillOpacity="0.4" />
            <path d="M110 110 L 126 126" />
            <path d="M122 134 C 110 136, 102 142, 106 148 C 114 148, 122 142, 124 136 Z" />
            <path d="M106 148 L 122 136" />
          </g>

          {/* Bold, Elegant Deep Burgundy Serif Monogram Letter S */}
          <path
            d="M 188 88 
               C 184 82, 176 76, 162 76 
               C 142 76, 132 90, 132 104 
               C 132 122, 148 132, 168 142 
               C 188 152, 202 166, 202 188 
               C 202 216, 178 230, 152 230 
               C 132 230, 116 222, 108 214 
               L 114 200 
               C 124 210, 138 216, 152 216 
               C 172 216, 184 204, 184 188 
               C 184 170, 168 160, 148 150 
               C 128 140, 114 126, 114 104 
               C 114 80, 136 62, 162 62 
               C 178 62, 192 70, 198 78 
               Z"
            fill="#3D1220"
          />

          {/* Foreground Blooming Main Blossom around lower S curve */}
          <g stroke="#3D1220" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="#FAF5EF" fillOpacity="0.95">
            <path d="M136 156 C 132 144, 144 136, 150 144 C 152 152, 144 158, 138 158" />
            <path d="M142 160 C 154 158, 162 168, 156 174 C 148 178, 142 170, 140 164" />
            <path d="M138 168 C 144 180, 134 190, 126 186 C 122 178, 130 170, 136 166" />
            <path d="M130 166 C 122 176, 110 172, 112 162 C 118 156, 126 160, 130 164" />
            <path d="M132 158 C 122 150, 126 138, 134 142 C 138 148, 136 156, 132 160" />
            
            {/* Pistils / Stamen Details in flower center */}
            <circle cx="136" cy="162" r="2.8" fill="#3D1220" />
            <path d="M134 160 L 130 156 M 138 160 L 142 156 M 138 164 L 142 168 M 133 164 L 128 167" strokeWidth="1.2" />
          </g>

          {/* Lower accent leaves */}
          <g stroke="#3D1220" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" fill="none">
            <path d="M156 186 C 166 194, 168 206, 162 212 C 154 210, 152 198, 156 186 Z" fill="#EBDCD3" fillOpacity="0.3" />
            <path d="M156 188 L 162 210" />
            <path d="M124 186 C 116 196, 112 208, 118 214 C 126 210, 126 198, 124 186 Z" fill="#EBDCD3" fillOpacity="0.3" />
          </g>
        </g>

        {/* Text: SWEET SCENTS */}
        <text
          x="160"
          y="256"
          textAnchor="middle"
          fill="#3D1220"
          fontFamily="'Cormorant Garamond', 'Playfair Display', Georgia, serif"
          fontSize="23"
          fontWeight="600"
          letterSpacing="0.28em"
        >
          SWEET SCENTS
        </text>

        {/* Subtitle: FLOWERS & GIFTS */}
        <text
          x="160"
          y="276"
          textAnchor="middle"
          fill="#6E4B55"
          fontFamily="'DM Sans', -apple-system, BlinkMacSystemFont, sans-serif"
          fontSize="9"
          fontWeight="600"
          letterSpacing="0.44em"
        >
          {subtitle}
        </text>
      </svg>
    </div>
  );
};
