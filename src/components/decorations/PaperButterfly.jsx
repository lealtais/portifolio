import React from 'react';

export function PaperButterfly({ style, size = 180 }) {
  const ink = "#2b2118";
  const wing = (
    <g>
      {/* asa dianteira */}
      <path
        d="M160,68
           C 192,36 244,26 284,52
           C 312,70 316,102 292,126
           C 270,148 236,150 206,140
           C 186,133 172,120 163,100
           C 159,90 158,78 160,68 Z"
        fill="url(#kraftFill)" stroke="none"
      />
      <path
        d="M160,68
           C 192,36 244,26 284,52
           C 312,70 316,102 292,126
           C 270,148 236,150 206,140
           C 186,133 172,120 163,100
           C 159,90 158,78 160,68 Z"
        fill="url(#wingShade)" stroke={ink} strokeWidth="3"
      />
      {/* asa traseira + cauda */}
      <path
        d="M160,150
           C 190,150 224,160 250,186
           C 274,210 286,244 276,272
           C 270,290 254,296 242,282
           C 238,300 222,304 214,290
           C 224,320 224,344 244,368
           C 250,376 244,384 235,378
           C 214,362 202,338 197,314
           C 190,330 174,326 172,306
           C 168,270 163,220 158,190
           C 157,176 157,162 160,150 Z"
        fill="url(#kraftFill)" stroke="none"
      />
      <path
        d="M160,150
           C 190,150 224,160 250,186
           C 274,210 286,244 276,272
           C 270,290 254,296 242,282
           C 238,300 222,304 214,290
           C 224,320 224,344 244,368
           C 250,376 244,384 235,378
           C 214,362 202,338 197,314
           C 190,330 174,326 172,306
           C 168,270 163,220 158,190
           C 157,176 157,162 160,150 Z"
        fill="url(#wingShade)" stroke={ink} strokeWidth="3"
      />
      {/* veios da dianteira */}
      <g fill="none" stroke={ink} strokeWidth="1.4" opacity="0.65">
        <path d="M163,72 C 190,55 230,46 268,54" />
        <path d="M163,85 C 195,72 235,66 278,74" />
        <path d="M165,100 C 198,92 236,90 285,98" />
        <path d="M168,116 C 198,112 230,114 270,122" />
        <path d="M172,132 C 198,132 222,136 250,142" />
      </g>
      {/* veios da traseira */}
      <g fill="none" stroke={ink} strokeWidth="1.4" opacity="0.65">
        <path d="M162,158 C 190,162 216,174 236,196" />
        <path d="M160,175 C 186,182 206,198 220,222" />
        <path d="M160,195 C 180,206 194,226 200,252" />
        <path d="M160,220 C 174,236 182,258 184,282" />
      </g>
      {/* banda marginal */}
      <path
        d="M284,52 C 312,70 316,102 292,126 C 270,148 236,150 206,140"
        fill="none" stroke={ink} strokeWidth="6" opacity="0.5" strokeLinecap="round"
      />
      {/* ocelo da cauda */}
      <circle cx="222" cy="286" r="8" fill="#B8925A" stroke={ink} strokeWidth="1.6" />
      <circle cx="222" cy="286" r="3.4" fill="#8B3A3A" />
    </g>
  );
  return (
    <svg viewBox="0 0 320 400" width={size} height={size * 1.25} style={{ filter: "url(#roughEdgeFine)", ...style }}>
      {/* espelha a mesma geometria dos dois lados do corpo para simetria realista */}
      <g>{wing}</g>
      <g transform="translate(320,0) scale(-1,1)">{wing}</g>
      {/* corpo */}
      <path d="M154,58 C148,140 148,300 158,378 C160,388 168,388 170,378 C178,300 178,140 172,58 Z" fill={ink} />
      {[80, 130, 180, 230, 280, 330]?.map((y) => (
        <line key={y} x1="154" y1={y} x2="172" y2={y} stroke="#F3ECDD" strokeWidth="1.1" opacity="0.4" />
      ))}
      {/* antenas com clava */}
      <path d="M158,60 C 148,36 130,20 112,20" fill="none" stroke={ink} strokeWidth="2.4" strokeLinecap="round" />
      <path d="M170,60 C 180,36 198,20 216,20" fill="none" stroke={ink} strokeWidth="2.4" strokeLinecap="round" />
      <ellipse cx="108" cy="18" rx="5" ry="3.4" fill={ink} transform="rotate(-20 108 18)" />
      <ellipse cx="220" cy="18" rx="5" ry="3.4" fill={ink} transform="rotate(20 220 18)" />
    </svg>
  );
}
