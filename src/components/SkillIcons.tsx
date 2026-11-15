import React from "react";

/**
 * ==============================================================================
 * SKILL ICONS (Crisp SVGs matching the exact design)
 * ==============================================================================
 * Provides pixel-perfect, high-resolution vector icons for:
 * 1. Shopify (Green bag with white handles and italic 'S')
 * 2. Liquid (Blue droplet)
 * 3. JavaScript (Official yellow badge with dark JS letters)
 * 4. TypeScript (Official blue badge with white TS letters)
 * 5. React.js (Cyan 3-ring atom with central nucleus)
 * 6. Next.js (Black circular badge with modern white N monogram)
 * 7. Figma (Official colorful 5-piece brand logo)
 */

export function ShopifyIcon() {
  return (
    <svg width="30" height="34" viewBox="0 0 100 114" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M82.2 18.4c-.2-.6-.7-1-1.3-1.1-.6 0-16.7-1.2-16.7-1.2s-11-10.9-12.2-12.1C50.8 2.8 49.3 2 47.7 2c0 0-.4 0-.5 0C44.7 2.1 43.1 3.5 42 5.1L27.6 25.4 12.3 29.8c-1.3.4-2.1 1.6-2.2 2.9-.1 1.3.6 2.5 1.8 3.1l6.7 3.3L3.8 89.2c-.4 2.2.8 4.4 2.9 5.2l61.6 24.3c.7.3 1.4.4 2.1.4 1.4 0 2.8-.6 3.7-1.7l30.9-38.3c1.2-1.5 1.4-3.5.6-5.2L82.2 18.4z"
        fill="#95BF47"
      />
      <path
        d="M64.2 16.1l-11.8 12.2-16.1-4.7 16-16.2c.4-.4 1.2-.6 1.9-.4l10 9.1z"
        fill="#5E8E3E"
      />
      <path
        d="M51.2 28.3L40.7 75.8l-18-8.9 9.8-43.9 18.7 5.3z"
        fill="#FFFFFF"
        opacity="0.3"
      />
      <path
        d="M58.3 48.6c-4.9-1.2-7.5-3.3-7.5-6.6 0-4.1 3.7-6.2 8.3-6.2 4.1 0 7.3 1.5 9.4 3.7l3.6-5.2c-3.1-2.9-7.8-4.6-13.4-4.6-9.1 0-15.5 5.3-15.5 12.9 0 6.6 4.7 10.4 11.7 12.3 5.4 1.4 7.6 3.4 7.6 6.8 0 4.5-4.2 7-9.5 7-5.1 0-9.2-2.3-11.7-5.4l-4.1 5.3c3.5 4.3 9.4 6.6 15.6 6.6 9.8 0 16.7-5.3 16.7-13.5 0-7.3-4.9-11.2-11.7-13.1z"
        fill="#FFFFFF"
      />
    </svg>
  );
}

export function LiquidIcon() {
  return (
    <svg width="28" height="34" viewBox="0 0 24 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12 2C12 2 3 13.5 3 19.5C3 24.5 7 28.5 12 28.5C17 28.5 21 24.5 21 19.5C21 13.5 12 2 12 2Z"
        fill="#2663EB"
      />
      <path
        d="M12 6.5C12 6.5 6.5 14.5 6.5 19C6.5 22.3 9 25 12 25C15 25 17.5 22.3 17.5 19C17.5 14.5 12 6.5 12 6.5Z"
        fill="#4583FF"
        opacity="0.75"
      />
      <circle cx="10" cy="15" r="2" fill="#FFFFFF" opacity="0.8" />
    </svg>
  );
}

export function JavaScriptIcon() {
  return (
    <div className="w-[30px] h-[30px] bg-[#F7DF1E] rounded-[6px] flex items-end justify-end p-[2px] shadow-sm select-none">
      <span className="font-extrabold text-[15px] leading-[15px] text-[#1a1a1a] tracking-[-1px]">
        JS
      </span>
    </div>
  );
}

export function TypeScriptIcon() {
  return (
    <div className="w-[30px] h-[30px] bg-[#3178C6] rounded-[6px] flex items-end justify-end p-[2px] shadow-sm select-none">
      <span className="font-extrabold text-[15px] leading-[15px] text-[#FFFFFF] tracking-[-1px]">
        TS
      </span>
    </div>
  );
}

export function ReactIcon() {
  return (
    <svg width="34" height="30" viewBox="0 0 115 102" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="57.5" cy="51" rx="55" ry="20" stroke="#00D8FF" strokeWidth="6" />
      <ellipse
        cx="57.5"
        cy="51"
        rx="55"
        ry="20"
        stroke="#00D8FF"
        strokeWidth="6"
        transform="rotate(60 57.5 51)"
      />
      <ellipse
        cx="57.5"
        cy="51"
        rx="55"
        ry="20"
        stroke="#00D8FF"
        strokeWidth="6"
        transform="rotate(120 57.5 51)"
      />
      <circle cx="57.5" cy="51" r="9" fill="#00D8FF" />
    </svg>
  );
}

export function NextJsIcon() {
  return (
    <div className="w-[30px] h-[30px] bg-[#000000] rounded-full flex items-center justify-center text-white font-bold text-[16px] shadow-sm select-none">
      <svg width="20" height="20" viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg">
        <mask id="next-mask" maskUnits="userSpaceOnUse" x="0" y="0" width="180" height="180" style={{ maskType: "alpha" }}>
          <circle cx="90" cy="90" r="90" fill="black" />
        </mask>
        <g mask="url(#next-mask)">
          <path
            d="M149.5 163.5L68.8 60H52V120H64.4V75.6L139.8 171.4C143.2 168.9 146.4 166.3 149.5 163.5Z"
            fill="url(#paint0_linear)"
          />
          <path d="M115.5 60H128V120H115.5V60Z" fill="url(#paint1_linear)" />
        </g>
        <defs>
          <linearGradient id="paint0_linear" x1="109" y1="116.5" x2="144.5" y2="160.5" gradientUnits="userSpaceOnUse">
            <stop stopColor="white" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="paint1_linear" x1="121.7" y1="60" x2="120.7" y2="106.3" gradientUnits="userSpaceOnUse">
            <stop stopColor="white" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

export function FigmaIcon() {
  return (
    <svg width="26" height="34" viewBox="0 0 38 57" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M19 28.5C19 23.2533 23.2533 19 28.5 19C33.7467 19 38 23.2533 38 28.5C38 33.7467 33.7467 38 28.5 38C23.2533 38 19 33.7467 19 28.5Z" fill="#1ABCFE" />
      <path d="M0 47.5C0 42.2533 4.25329 38 9.5 38H19V47.5C19 52.7467 14.7467 57 9.5 57C4.25329 57 0 52.7467 0 47.5Z" fill="#0ACF83" />
      <path d="M19 0V19H28.5C33.7467 19 38 14.7467 38 9.5C38 4.25329 33.7467 0 28.5 0H19Z" fill="#FF7262" />
      <path d="M0 9.5C0 14.7467 4.25329 19 9.5 19H19V0H9.5C4.25329 0 0 4.25329 0 9.5Z" fill="#F24E1E" />
      <path d="M0 28.5C0 33.7467 4.25329 38 9.5 38H19V19H9.5C4.25329 19 0 23.2533 0 28.5Z" fill="#A259FF" />
    </svg>
  );
}
