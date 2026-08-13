import React from 'react';
import { KRAFT_URI, BLOB_CLIPS } from '../../utils/svgDefs';

export function LetterTile({ ch, i }) {
  if (ch === " ") return <span style={{ display: "inline-block", width: 22 }} />;
  const rotations = [-6, 4, -3, 7, -5, 3, -7, 5];
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: "clamp(46px, 8vw, 72px)",
        height: "clamp(52px, 9vw, 82px)",
        margin: "0 1px",
        background: `url("${KRAFT_URI}") center/120px`,
        clipPath: BLOB_CLIPS[i % BLOB_CLIPS.length],
        filter: "url(#roughEdge)",
        transform: `rotate(${rotations[i % rotations.length]}deg)`,
        boxShadow: "0 3px 5px rgba(46,40,34,0.35)",
        position: "relative",
      }}
    >
      <span
        style={{
          fontFamily: "'Alfa Slab One', serif",
          fontSize: "clamp(26px, 5vw, 42px)",
          color: "#241a14",
          transform: `rotate(${-rotations[i % rotations.length] * 0.4}deg)`,
          textShadow: "0 1px 0 rgba(255,255,255,0.15)",
        }}
      >
        {ch}
      </span>
    </span>
  );
}
