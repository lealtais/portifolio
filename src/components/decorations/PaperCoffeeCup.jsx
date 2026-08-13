import React from 'react';

export function PaperCoffeeCup({ style }) {
  return (
    <svg viewBox="0 0 100 100" width="76" height="76" style={{ overflow: "visible", ...style }}>
      <g filter="url(#roughEdge)">
        <ellipse cx="42" cy="78" rx="30" ry="7" fill="url(#kraftFill)" stroke="#241a14" strokeWidth="3" />
        <path d="M16 40 h52 l-6 32 a10 10 0 0 1-10 8H32a10 10 0 0 1-10-8Z" fill="url(#kraftFill)" stroke="#241a14" strokeWidth="3" />
        <path d="M68 46 q16-2 14 12 t-16 10" fill="none" stroke="#241a14" strokeWidth="3" />
      </g>
      <g fill="none" stroke="#241a14" strokeWidth="2.5" strokeLinecap="round" opacity="0.75">
        <path className="steam-line" style={{ animationDelay: "0s" }} d="M28 32 q-3-9 3-15 t2-14" />
        <path className="steam-line" style={{ animationDelay: "0.6s" }} d="M40 32 q-3-10 3-17 t2-15" />
        <path className="steam-line" style={{ animationDelay: "1.2s" }} d="M52 32 q-3-9 3-15 t2-14" />
      </g>
    </svg>
  );
}
