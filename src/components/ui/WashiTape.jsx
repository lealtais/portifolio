import React from 'react';

export function WashiTape({ style = {}, color = "rose" }) {
  const bg =
    color === "rose"
      ? "repeating-linear-gradient(45deg, rgba(194,130,140,0.75) 0 6px, rgba(216,163,160,0.75) 6px 12px)"
      : "repeating-linear-gradient(45deg, rgba(107,115,85,0.7) 0 6px, rgba(150,155,120,0.7) 6px 12px)";
  return (
    <div
      className="washi-tape"
      style={{
        position: "absolute",
        width: 70,
        height: 26,
        background: bg,
        boxShadow: "0 1px 3px rgba(46,40,34,0.25)",
        opacity: 0.92,
        ...style,
      }}
    />
  );
}
