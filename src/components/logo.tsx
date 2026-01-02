import type { SVGProps } from 'react';

export function Logo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 50"
      width="160"
      height="40"
      {...props}
    >
      <defs>
        <linearGradient id="logo-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style={{ stopColor: 'hsl(var(--primary))', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: 'hsl(var(--accent))', stopOpacity: 1 }} />
        </linearGradient>
      </defs>
      
      {/* Icon */}
      <g transform="translate(0, -5) scale(0.9)">
        {/* Head */}
        <circle cx="25" cy="12" r="6" fill="url(#logo-gradient)" />
        <path d="M25 8 l-3 4 h2 v3 h2 v-3 h2 z" fill="hsl(var(--background))" />
        
        {/* Body X */}
        <path d="M15 20 l10 10 l10 -10 l-4 -4 l-6 6 l-6 -6 z" fill="url(#logo-gradient)" />
        <path d="M15 40 l10 -10 l10 10 l-4 4 l-6 -6 l-6 6 z" fill="url(#logo-gradient)" />

        {/* Center detail */}
        <rect x="23" y="28" width="4" height="4" fill="hsl(var(--background))" rx="1" />
        <path d="M24 29h-2 M26 29h2 M25 28v-2 M25 32v2" stroke="url(#logo-gradient)" strokeWidth="0.5" />

        {/* Circuit lines */}
        <path d="M15 20 h-5 v-5 h-2" fill="none" stroke="url(#logo-gradient)" strokeWidth="1" />
        <circle cx="8" cy="15" r="1.5" fill="hsl(var(--accent))" />

        <path d="M35 20 h5 v-5 h2" fill="none" stroke="url(#logo-gradient)" strokeWidth="1" />
        <circle cx="42" cy="15" r="1.5" fill="hsl(var(--primary))" />
        
        <path d="M15 40 h-5 v5 h-2" fill="none" stroke="url(#logo-gradient)" strokeWidth="1" />
        <circle cx="8" cy="45" r="1.5" fill="hsl(var(--accent))" />
        
        <path d="M35 40 h5 v5 h2" fill="none" stroke="url(#logo-gradient)" strokeWidth="1" />
        <circle cx="42" cy="45" r="1.5" fill="hsl(var(--primary))" />

        <path d="M18 17 l-3 -3" fill="none" stroke="url(#logo-gradient)" strokeWidth="1" />
        <circle cx="15" cy="14" r="1.5" fill="hsl(var(--accent))" />

        <path d="M32 17 l3 -3" fill="none" stroke="url(#logo-gradient)" strokeWidth="1" />
        <circle cx="35" cy="14" r="1.5" fill="hsl(var(--primary))" />
      </g>
      
      {/* Text */}
      <text
        x="50"
        y="30"
        fontFamily="var(--font-headline), sans-serif"
        fontSize="24"
        fontWeight="bold"
        fill="hsl(var(--foreground))"
        className="font-headline"
      >
        XNet
      </text>
    </svg>
  );
}
