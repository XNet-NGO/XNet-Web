import { ImageResponse } from 'next/og';

// Route segment config
export const runtime = 'edge';

// Image metadata
export const size = {
  width: 32,
  height: 32,
};
export const contentType = 'image/png';

// Image generation
export default function Icon() {
  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          fontSize: 24,
          background: 'transparent',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 50 50"
          width="32"
          height="32"
        >
          <defs>
            <linearGradient id="logo-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="hsl(207, 60%, 70%)" stopOpacity="1" />
              <stop offset="100%" stopColor="hsl(180, 60%, 50%)" stopOpacity="1" />
            </linearGradient>
          </defs>
          
          <g>
            {/* Head */}
            <circle cx="25" cy="12" r="6" fill="url(#logo-gradient)" />
            <path d="M25 8 l-3 4 h2 v3 h2 v-3 h2 z" fill="hsl(222.2, 84%, 4.9%)" />
            
            {/* Body X */}
            <path d="M15 20 l10 10 l10 -10 l-4 -4 l-6 6 l-6 -6 z" fill="url(#logo-gradient)" />
            <path d="M15 40 l10 -10 l10 10 l-4 4 l-6 -6 l-6 6 z" fill="url(#logo-gradient)" />

            {/* Center detail */}
            <rect x="23" y="28" width="4" height="4" fill="hsl(222.2, 84%, 4.9%)" rx="1" />
            <path d="M24 29h-2 M26 29h2 M25 28v-2 M25 32v2" stroke="url(#logo-gradient)" strokeWidth="0.5" />

            {/* Circuit lines */}
            <path d="M15 20 h-5 v-5 h-2" fill="none" stroke="url(#logo-gradient)" strokeWidth="1" />
            <circle cx="8" cy="15" r="1.5" fill="hsl(180, 60%, 50%)" />

            <path d="M35 20 h5 v-5 h2" fill="none" stroke="url(#logo-gradient)" strokeWidth="1" />
            <circle cx="42" cy="15" r="1.5" fill="hsl(207, 60%, 70%)" />
            
            <path d="M15 40 h-5 v5 h-2" fill="none" stroke="url(#logo-gradient)" strokeWidth="1" />
            <circle cx="8" cy="45" r="1.5" fill="hsl(180, 60%, 50%)" />
            
            <path d="M35 40 h5 v5 h2" fill="none" stroke="url(#logo-gradient)" strokeWidth="1" />
            <circle cx="42" cy="45" r="1.5" fill="hsl(207, 60%, 70%)" />

            <path d="M18 17 l-3 -3" fill="none" stroke="url(#logo-gradient)" strokeWidth="1" />
            <circle cx="15" cy="14" r="1.5" fill="hsl(180, 60%, 50%)" />

            <path d="M32 17 l3 -3" fill="none" stroke="url(#logo-gradient)" strokeWidth="1" />
            <circle cx="35" cy="14" r="1.5" fill="hsl(207, 60%, 70%)" />
          </g>
        </svg>
      </div>
    ),
    {
      ...size,
    }
  );
}
