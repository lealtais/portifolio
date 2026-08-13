import React from 'react';

export function StickerTag({ children }) {
  return (
    <span
      className="sticker-tag"
      style={{
        display: "inline-block",
        padding: "6px 14px",
        margin: "4px",
        background: "#EFE3C8",
        border: "1.5px dashed #B8925A",
        borderRadius: 999,
        fontFamily: "'Courier Prime', monospace",
        fontSize: 13,
        color: "#2E2822",
        transform: `rotate(${(children.toString().length % 5) - 2}deg)`,
        boxShadow: "0 1px 2px rgba(46,40,34,0.15)",
      }}
    >
      {children}
    </span>
  );
}
