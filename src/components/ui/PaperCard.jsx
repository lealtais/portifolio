import React from 'react';
import { KRAFT_URI, TORN } from '../../utils/svgDefs';
import { WashiTape } from './WashiTape';

export function PaperCard({ children, rotate = 0, tape = "both", tapeColor = "rose" }) {
  return (
    <div
      className="paper-card"
      style={{ position: "relative", transform: `rotate(${rotate}deg)` }}
    >
      {/* camada de fundo: textura + borda rasgada (recebe a distorção do filtro) */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          background: `url("${KRAFT_URI}") center/140px`,
          clipPath: TORN,
          filter: "url(#roughEdge)",
          boxShadow: "0 6px 14px rgba(46,40,34,0.22)",
        }}
      />
      {/* camada de conteúdo: texto sem distorção, por cima do fundo */}
      <div style={{ position: "relative", padding: "28px 24px 22px" }}>
        {(tape === "both" || tape === "left") && (
          <WashiTape
            color={tapeColor}
            style={{ top: -12, left: 18, transform: "rotate(-8deg)" }}
          />
        )}
        {(tape === "both" || tape === "right") && (
          <WashiTape
            color={tapeColor === "rose" ? "moss" : "rose"}
            style={{ top: -12, right: 18, transform: "rotate(7deg)" }}
          />
        )}
        {children}
      </div>
    </div>
  );
}
