import React from "react";

/**
 * ==============================================================================
 * REAL BRAND ICONS & VECTOR SVGS (Pixel-Perfect & High-Resolution)
 * ==============================================================================
 */

/* 1. Official Shopify Vector Icon */
export function ShopifyIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 114" fill="none" xmlns="http://www.w3.org/2000/svg">
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

/* 2. Liquid Engine Droplet Icon */
export function LiquidIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12 2C12 2 3 13.5 3 19.5C3 24.5 7 28.5 12 28.5C17 28.5 21 24.5 21 19.5C21 13.5 12 2 12 2Z"
        fill="#0284c7"
      />
      <path
        d="M12 6.5C12 6.5 6.5 14.5 6.5 19C6.5 22.3 9 25 12 25C15 25 17.5 22.3 17.5 19C17.5 14.5 12 6.5 12 6.5Z"
        fill="#38bdf8"
        opacity="0.8"
      />
      <circle cx="10" cy="15" r="2.5" fill="#FFFFFF" opacity="0.9" />
    </svg>
  );
}

/* 3. Official React Vector Icon */
export function ReactIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 115 102" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="57.5" cy="51" rx="55" ry="20" stroke="#0ea5e9" strokeWidth="6" />
      <ellipse
        cx="57.5"
        cy="51"
        rx="55"
        ry="20"
        stroke="#0ea5e9"
        strokeWidth="6"
        transform="rotate(60 57.5 51)"
      />
      <ellipse
        cx="57.5"
        cy="51"
        rx="55"
        ry="20"
        stroke="#0ea5e9"
        strokeWidth="6"
        transform="rotate(120 57.5 51)"
      />
      <circle cx="57.5" cy="51" r="9" fill="#0ea5e9" />
    </svg>
  );
}

/* 4. Official Next.js Monogram */
export function NextJsIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="90" cy="90" r="90" fill="#0f172a" />
      <mask id="next-mask" maskUnits="userSpaceOnUse" x="0" y="0" width="180" height="180" style={{ maskType: "alpha" }}>
        <circle cx="90" cy="90" r="90" fill="black" />
      </mask>
      <g mask="url(#next-mask)">
        <path
          d="M149.5 163.5L68.8 60H52V120H64.4V75.6L139.8 171.4C143.2 168.9 146.4 166.3 149.5 163.5Z"
          fill="white"
        />
        <path d="M115.5 60H128V120H115.5V60Z" fill="white" />
      </g>
    </svg>
  );
}

/* 5. TypeScript Badge */
export function TypeScriptIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <div className={`${className} bg-[#0284c7] rounded-[5px] flex items-end justify-end p-[2px] shadow-sm select-none`}>
      <span className="font-extrabold text-[12px] leading-[12px] text-white tracking-[-0.8px]">
        TS
      </span>
    </div>
  );
}

/* 6. JavaScript Badge */
export function JavaScriptIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <div className={`${className} bg-[#F7DF1E] rounded-[5px] flex items-end justify-end p-[2px] shadow-sm select-none`}>
      <span className="font-extrabold text-[12px] leading-[12px] text-[#1a1a1a] tracking-[-0.8px]">
        JS
      </span>
    </div>
  );
}

/* 7. Tailwind CSS */
export function TailwindIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.335 6.182 14.975 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.335 13.382 8.975 12 6.001 12z"
        fill="#38BDF8"
      />
    </svg>
  );
}

/* 8. Figma */
export function FigmaIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 38 57" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M19 28.5C19 23.2533 23.2533 19 28.5 19C33.7467 19 38 23.2533 38 28.5C38 33.7467 33.7467 38 28.5 38C23.2533 38 19 33.7467 19 28.5Z" fill="#1ABCFE" />
      <path d="M0 47.5C0 42.2533 4.25329 38 9.5 38H19V47.5C19 52.7467 14.7467 57 9.5 57C4.25329 57 0 52.7467 0 47.5Z" fill="#0ACF83" />
      <path d="M19 0V19H28.5C33.7467 19 38 14.7467 38 9.5C38 4.25329 33.7467 0 28.5 0H19Z" fill="#FF7262" />
      <path d="M0 9.5C0 14.7467 4.25329 19 9.5 19H19V0H9.5C4.25329 0 0 4.25329 0 9.5Z" fill="#F24E1E" />
      <path d="M0 28.5C0 33.7467 4.25329 38 9.5 38H19V19H9.5C4.25329 19 0 23.2533 0 28.5Z" fill="#A259FF" />
    </svg>
  );
}

/* 9. Framer Motion */
export function MotionIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M4 0h16v8h-8zM4 8h8l8 8H4zM4 16h8v8z" fill="#0284c7" />
    </svg>
  );
}

/* 10. Official GitHub */
export function GitHubIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

/* 11. Official LinkedIn */
export function LinkedInIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
  );
}

/* 12. Official Globe / Website */
export function GlobeIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
      <path d="M2 12h20" />
    </svg>
  );
}
