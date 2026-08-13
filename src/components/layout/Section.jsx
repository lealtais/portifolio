import React from 'react';
import { SectionLabel } from './SectionLabel';

export function Section({ id, label, children }) {
  return (
    <section id={id} style={{ maxWidth: 880, margin: "0 auto", padding: "64px 20px" }}>
      <SectionLabel>{label}</SectionLabel>
      {children}
    </section>
  );
}
