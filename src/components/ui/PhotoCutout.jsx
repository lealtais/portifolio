import React from 'react';
import { KRAFT_URI, TORN } from '../../utils/svgDefs';

export function PhotoCutout({ src, alt, size = 140, rotate = 0, style, className }) {
  const [broken, setBroken] = React.useState(false);
  return (
    <div className={className} style={{ position: "relative", width: size, transform: `rotate(${rotate}deg)`, ...style }}>
      {!broken && (
        <img
          src={src}
          alt={alt}
          onError={() => setBroken(true)}
          style={{
            width: "100%",
            display: "block",
            clipPath: TORN,
            filter: "url(#roughEdgeFine) sepia(0.35) saturate(1.05) contrast(1.05)",
            boxShadow: "0 6px 14px rgba(46,40,34,0.3)",
          }}
        />
      )}
      {broken && (
        <div
          style={{
            width: "100%",
            aspectRatio: "1",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            padding: 10,
            background: `url("${KRAFT_URI}") center/120px`,
            border: "2px dashed #8B3A3A",
            fontFamily: "'Courier Prime', monospace",
            fontSize: 11,
            color: "#8B3A3A",
            boxShadow: "0 4px 10px rgba(46,40,34,0.2)",
          }}
        >
          coloque {src.split("/").pop()} na pasta public/assets
        </div>
      )}
    </div>
  );
}
