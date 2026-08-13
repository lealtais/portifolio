import React from 'react';

export function SectionLabel({ children }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 28 }}>
      <span
        style={{
          fontFamily: "'Caveat', cursive",
          fontSize: 34,
          color: "#8B3A3A",
          transform: "rotate(-2deg)",
        }}
      >
        {children}
      </span>
      <span style={{ flex: 1, height: 2, background: "repeating-linear-gradient(90deg, #B8925A 0 6px, transparent 6px 12px)" }} />
    </div>
  );
}
