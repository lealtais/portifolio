import React from 'react';
import { LetterTile } from './LetterTile';

export function NameCutout({ text }) {
  return (
    <div style={{ display: "inline-flex", flexWrap: "wrap", justifyContent: "center" }}>
      {text.split("").map((ch, i) => (
        <LetterTile ch={ch} i={i} key={i} />
      ))}
    </div>
  );
}
