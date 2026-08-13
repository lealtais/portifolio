import React from 'react';
import { PAGE_TEXTURE_URI, PaperDefs } from './utils/svgDefs';
import { PaperButterfly } from './components/decorations/PaperButterfly';
import { PaperMushroom } from './components/decorations/PaperMushroom';
import { PaperFlower } from './components/decorations/PaperFlower';
import { PaperCoffeeCup } from './components/decorations/PaperCoffeeCup';
import { NameCutout } from './components/typography/NameCutout';
import { Section } from './components/layout/Section';
import { PaperCard } from './components/ui/PaperCard';
import { PhotoCutout } from './components/ui/PhotoCutout';
import { StickerTag } from './components/ui/StickerTag';
import { WaxSeal } from './components/ui/WaxSeal';
import { PROJETOS, EXPERIENCIA, SKILLS } from './data/content';

export default function App() {
  return (
    <div
      style={{
        background: `url("${PAGE_TEXTURE_URI}") repeat`,
        backgroundSize: "900px 1200px",
        minHeight: "100vh",
        color: "#2E2822",
        fontFamily: "'Lora', serif",
      }}
    >
      <PaperDefs />

      {/* HERO */}
      <header style={{ padding: "80px 20px 30px", textAlign: "center", position: "relative", overflow: "hidden" }}>
        {/* Novas decorações */}
        <PhotoCutout
          className="hero-deco"
          src="/assets/poste.png"
          alt="poste"
          size={160}
          style={{ position: "absolute", top: 15, left: -15, transform: "rotate(-2deg)" }}
        />
        <PhotoCutout
          className="hero-deco"
          src="/assets/nuvem.png"
          alt="nuvem"
          size={200}
          style={{ position: "absolute", top: 5, left: "50%", marginLeft: -100 }}
        />
        <PhotoCutout
          className="hero-deco"
          src="/assets/estrelas.png"
          alt="estrelas penduradas"
          size={110}
          style={{ position: "absolute", top: -10, right: "8%" }}
        />
        <PhotoCutout
          className="hero-deco"
          src="/assets/lua.png"
          alt="lua"
          size={82}
          rotate={-10}
          style={{ position: "absolute", bottom: 18, right: "5%" }}
        />

        <div style={{ position: "relative", display: "inline-block" }}>
          <NameCutout text="Taís Leal" />
        </div>
        <p
          style={{
            fontFamily: "'Caveat', cursive",
            fontSize: 26,
            color: "#8B3A3A",
            marginTop: 14,
          }}
        >
          desenvolvedora android — java &amp; kotlin
        </p>
        <p style={{ fontFamily: "'Courier Prime', monospace", fontSize: 13, color: "#6B5E4E" }}>
          Santos, SP · github.com/lealtais
        </p>
      </header>

      {/* SOBRE */}
      <Section id="sobre" label="Sobre">
        <div style={{ position: "relative", display: "flex", gap: 28, alignItems: "center", flexWrap: "wrap", justifyContent: "center" }}>
          <PhotoCutout
            className="hero-deco"
            src="/assets/cafe.png"
            alt="xícara de café"
            size={140}
            rotate={-6}
            style={{ position: "absolute", top: -40, left: -20, zIndex: 10 }}
          />
          <div style={{ flex: "1 1 320px", minWidth: 260 }}>
            <PaperCard rotate={-0.6} tapeColor="moss">
              <p style={{ margin: 0, lineHeight: 1.7, fontSize: 16 }}>
                Desenvolvedora Android com foco em Java, construindo e mantendo apps de
                streaming de rádio (players, Chromecast, Bluetooth, notificações) e um
                projeto de machine learning aplicado à saúde. Atualmente cursando Sistemas
                para Internet na Faculdade de Tecnologia Rubens Lara (Santos), com previsão
                de formatura em 2027.
              </p>
            </PaperCard>
          </div>
          <PhotoCutout src="/assets/globo.png" alt="globo antigo" size={150} rotate={4} />
        </div>
      </Section>

      {/* PROJETOS */}
      <Section id="projetos" label="Projetos">
        <div
          style={{
            position: "relative",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 40,
          }}
        >
          <PhotoCutout
            className="hero-deco"
            src="/assets/pinceis.png"
            alt="pincéis"
            size={150}
            rotate={8}
            style={{ position: "absolute", top: -60, right: -15, zIndex: 10 }}
          />
          {PROJETOS.map((p, i) => (
            <PaperCard key={p.title} rotate={i % 2 === 0 ? -1.2 : 1.4} tapeColor={i % 2 === 0 ? "rose" : "moss"}>
              <h3 style={{ fontFamily: "'Fraunces', serif", fontSize: 20, margin: "0 0 4px" }}>
                {p.title}
              </h3>
              <div style={{ fontFamily: "'Courier Prime', monospace", fontSize: 12, color: "#6B5E4E", marginBottom: 10 }}>
                {p.meta}
              </div>
              <p style={{ margin: 0, fontSize: 14.5, lineHeight: 1.6 }}>{p.text}</p>
            </PaperCard>
          ))}
        </div>
      </Section>

      {/* EXPERIÊNCIA */}
      <Section id="experiencia" label="Experiência">
        <div style={{ position: "relative" }}>
          <PhotoCutout
            src="/assets/relogio-bolso.png"
            alt="relógio de bolso"
            size={110}
            rotate={-6}
            style={{ position: "absolute", top: -70, right: 4 }}
            className="hero-deco"
          />
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          {EXPERIENCIA.map((e) => (
            <div
              key={e.cargo}
              style={{
                display: "flex",
                gap: 18,
                alignItems: "flex-start",
                background: "#EFE3C8",
                border: "1px solid #C9B389",
                borderLeft: "5px solid #8B3A3A",
                padding: "16px 20px",
                boxShadow: "0 3px 8px rgba(46,40,34,0.12)",
              }}
            >
              <div
                style={{
                  fontFamily: "'Courier Prime', monospace",
                  fontSize: 12,
                  color: "#8B3A3A",
                  whiteSpace: "nowrap",
                  paddingTop: 3,
                }}
              >
                {e.periodo}
              </div>
              <div>
                <div style={{ fontFamily: "'Fraunces', serif", fontSize: 17, fontWeight: 600 }}>
                  {e.cargo} <span style={{ fontWeight: 400 }}>· {e.empresa}</span>
                </div>
                <p style={{ margin: "4px 0 0", fontSize: 14, lineHeight: 1.6 }}>{e.text}</p>
              </div>
            </div>
          ))}
          </div>
        </div>
      </Section>

      {/* SKILLS */}
      <Section id="skills" label="Skills">
        <div style={{ textAlign: "center" }}>
          <PhotoCutout
            src="/assets/vinil-flores.png"
            alt="disco de vinil com flores"
            size={160}
            rotate={-3}
            style={{ margin: "0 auto 24px" }}
          />
          {SKILLS.map((s) => (
            <StickerTag key={s}>{s}</StickerTag>
          ))}
        </div>
      </Section>

      {/* CONTATO */}
      <Section id="contato" label="Contato">
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 22, flexWrap: "wrap" }}>
          <WaxSeal as="a" href="mailto:seu@email.com" label="✉" title="Enviar e-mail" />
          <WaxSeal as="a" href="https://github.com/lealtais" label="GH" title="GitHub" size={56} />
          <p style={{ fontFamily: "'Caveat', cursive", fontSize: 22, color: "#6B5E4E", margin: 0 }}>
            vamos conversar sobre o próximo projeto
          </p>
        </div>
      </Section>

      <footer style={{ position: "relative", textAlign: "center", padding: "40px 20px 80px", fontFamily: "'Courier Prime', monospace", fontSize: 11, color: "#8a7d68", overflow: "hidden", marginTop: 40 }}>
        <PhotoCutout
          className="hero-deco"
          src="/assets/cogumelo-footer.png"
          alt="cogumelo"
          size={120}
          rotate={-8}
          style={{ position: "absolute", bottom: 15, left: "10%" }}
        />
        feito à mão, com Java e papel kraft
        <PhotoCutout
          className="hero-deco"
          src="/assets/gato-footer.png"
          alt="gatinho"
          size={110}
          rotate={6}
          style={{ position: "absolute", bottom: 20, right: "10%" }}
        />
      </footer>
    </div>
  );
}
