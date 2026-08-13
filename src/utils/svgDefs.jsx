import React from 'react';

export const PAGE_TEXTURE_SVG = `<svg xmlns='http://www.w3.org/2000/svg' width='900' height='1200'>
  <filter id='c'>
    <feTurbulence type='fractalNoise' baseFrequency='0.012 0.016' numOctaves='5' seed='24' result='n'/>
    <feDiffuseLighting in='n' lighting-color='#ffffff' surfaceScale='2.4' result='l'>
      <feDistantLight azimuth='235' elevation='55'/>
    </feDiffuseLighting>
    <feColorMatrix in='l' type='matrix' values='0.55 0 0 0 0  0 0.47 0 0 0  0 0 0.36 0 0  0 0 0 1 0' result='t'/>
    <feComposite in='t' in2='SourceGraphic' operator='multiply'/>
  </filter>
  <rect width='900' height='1200' fill='#D6BE97'/>
  <rect width='900' height='1200' filter='url(#c)'/>
</svg>`;
export const PAGE_TEXTURE_URI = `data:image/svg+xml;utf8,${encodeURIComponent(PAGE_TEXTURE_SVG)}`;

export const KRAFT_SVG = `<svg xmlns='http://www.w3.org/2000/svg' width='120' height='120'>
  <filter id='n'>
    <feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' seed='7' stitchTiles='stitch' result='t'/>
    <feColorMatrix in='t' type='matrix' values='0 0 0 0 0.68  0 0 0 0 0.56  0 0 0 0 0.40  0 0 0 0.4 0'/>
  </filter>
  <rect width='120' height='120' fill='#D8C3A0'/>
  <rect width='120' height='120' filter='url(#n)'/>
</svg>`;
export const KRAFT_URI = `data:image/svg+xml;utf8,${encodeURIComponent(KRAFT_SVG)}`;

export const BLOB_CLIPS = [
  "polygon(8% 12%, 40% 2%, 78% 6%, 96% 24%, 100% 58%, 90% 88%, 60% 100%, 22% 96%, 2% 70%, 4% 34%)",
  "polygon(4% 22%, 26% 2%, 66% 4%, 94% 14%, 100% 46%, 92% 78%, 70% 98%, 30% 96%, 6% 80%, 0% 48%)",
  "polygon(14% 4%, 54% 0%, 88% 10%, 100% 40%, 96% 72%, 76% 98%, 42% 100%, 10% 86%, 0% 56%, 2% 26%)",
];

export const TORN = `polygon(
  0% 2%, 4% 5%, 9% 1%, 14% 4%, 19% 0%, 24% 3%, 29% 6%, 34% 2%, 39% 5%, 44% 1%,
  49% 4%, 54% 0%, 59% 3%, 64% 6%, 69% 2%, 74% 5%, 79% 1%, 84% 4%, 89% 0%, 94% 3%, 100% 2%,
  100% 98%,
  94% 96%, 89% 99%, 84% 95%, 79% 98%, 74% 94%, 69% 97%, 64% 93%, 59% 96%, 54% 99%,
  49% 95%, 44% 98%, 39% 94%, 34% 97%, 29% 93%, 24% 96%, 19% 99%, 14% 95%, 9% 98%, 4% 94%, 0% 97%
)`;

export function PaperDefs() {
  return (
    <svg width="0" height="0" style={{ position: "absolute" }} aria-hidden="true">
      <defs>
        <filter id="roughEdge" x="-20%" y="-20%" width="140%" height="140%">
          <feTurbulence type="fractalNoise" baseFrequency="0.045" numOctaves="2" seed="3" result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="7" xChannelSelector="R" yChannelSelector="G" />
        </filter>
        <filter id="roughEdgeFine" x="-15%" y="-15%" width="130%" height="130%">
          <feTurbulence type="fractalNoise" baseFrequency="0.05" numOctaves="2" seed="9" result="noise2" />
          <feDisplacementMap in="SourceGraphic" in2="noise2" scale="2.5" xChannelSelector="R" yChannelSelector="G" />
        </filter>
        <radialGradient id="wingShade" cx="28%" cy="15%" r="85%">
          <stop offset="0%" stopColor="#2b2118" stopOpacity="0.04" />
          <stop offset="65%" stopColor="#2b2118" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#2b2118" stopOpacity="0.4" />
        </radialGradient>
        <radialGradient id="capShade" cx="32%" cy="22%" r="90%">
          <stop offset="0%" stopColor="#B8925A" stopOpacity="0.9" />
          <stop offset="55%" stopColor="#6E4A2C" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#2b2118" stopOpacity="0.9" />
        </radialGradient>
        <pattern id="kraftFill" patternUnits="userSpaceOnUse" width="120" height="120">
          <image href={KRAFT_URI} width="120" height="120" />
        </pattern>
      </defs>
    </svg>
  );
}
