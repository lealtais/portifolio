import React from 'react';

export function WaxSeal({ label = "★", size = 68, as = "div", href, onClick, title }) {
  const Tag = as;
  return (
    <span style={{ position: "relative", display: "inline-flex", width: size, height: size, flexShrink: 0 }}>
      <span
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: -4,
          borderRadius: "50%",
          border: "1.5px dashed #8B3A3A",
          opacity: 0.5,
        }}
      />
      <Tag
        href={href}
        onClick={onClick}
        title={title}
        className="wax-seal"
        style={{
          width: size,
          height: size,
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          background: `url("/assets/selo.png") center/contain no-repeat`,
          color: "#f3ecdd",
          fontFamily: "'Caveat', cursive",
          fontWeight: 600,
          fontSize: size * 0.35,
          textDecoration: "none",
          cursor: href || onClick ? "pointer" : "default",
          textShadow: "1px 1px 3px rgba(0,0,0,0.4)"
        }}
      >
        {label}
      </Tag>
    </span>
  );
}
