import React from 'react';

export function PaperFlower({ style, size = 64 }) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} style={{ filter: "url(#roughEdge)", ...style }}>
      {[0, 60, 120, 180, 240, 300].map((a) => (
        <ellipse
          key={a}
          cx="50"
          cy="28"
          rx="13"
          ry="20"
          fill="url(#kraftFill)"
          stroke="#241a14"
          strokeWidth="2.5"
          transform={`rotate(${a} 50 50)`}
        />
      ))}
      <circle cx="50" cy="50" r="10" fill="#C2828C" stroke="#241a14" strokeWidth="2.5" />
    </svg>
  );
}
