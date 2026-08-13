import React from 'react';

export function PaperMushroom({ style, size = 130 }) {
  const ink = "#2b2118";
  return (
    <svg viewBox="0 0 200 260" width={size} height={size * 1.3} style={{ filter: "url(#roughEdgeFine)", ...style }}>
      {/* talo */}
      <path
        d="M84,118 C81,155 78,195 75,232 C74,242 126,242 125,232 C122,195 119,155 116,118 Z"
        fill="url(#kraftFill)" stroke={ink} strokeWidth="2.6"
      />
      <clipPath id="stemClip">
        <path d="M84,118 C81,155 78,195 75,232 C74,242 126,242 125,232 C122,195 119,155 116,118 Z" />
      </clipPath>
      <g clipPath="url(#stemClip)" stroke={ink} strokeWidth="1" opacity="0.45">
        {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
          <path key={"a" + i} d={`M${60 + i * 12},110 L${90 + i * 12},250`} />
        ))}
        {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
          <path key={"b" + i} d={`M${140 - i * 12},110 L${110 - i * 12},250`} />
        ))}
      </g>
      {/* lamelas (vistas de baixo, na aba do chapéu) */}
      <g stroke={ink} strokeWidth="1.3" opacity="0.6">
        {Array.from({ length: 17 }).map((_, i) => {
          const t = i / 16;
          const x = 14 + t * 172;
          return <line key={i} x1={x} y1="118" x2={100 + (x - 100) * 0.35} y2="128" />;
        })}
      </g>
      {/* chapéu */}
      <path
        d="M6,120 C6,55 46,10 100,10 C154,10 194,55 194,120 C160,132 40,132 6,120 Z"
        fill="url(#kraftFill)" stroke="none"
      />
      <path
        d="M6,120 C6,55 46,10 100,10 C154,10 194,55 194,120 C160,132 40,132 6,120 Z"
        fill="url(#capShade)" stroke={ink} strokeWidth="3"
      />
      <path d="M6,120 C40,132 160,132 194,120" fill="none" stroke={ink} strokeWidth="2.4" opacity="0.7" />
    </svg>
  );
}
