import React from "react";

/* ============================================================
   DESIGN SYSTEM — "Caderno de Campo" (scrapbook / collage)
   Tokens
   - paper:   #F3ECDD  (papel envelhecido, fundo)
   - kraft:   #D8C3A0  (papel kraft, cards)
   - ink:     #2E2822  (texto principal)
   - moss:    #6B7355  (verde botânico — accent secundário)
   - rose:    #C2828C  (rosa empoeirado — accent terciário)
   - wax:     #8B3A3A  (vermelho lacre — accent principal / CTA)
   - ochre:   #B8925A  (dourado velho — detalhes/bordas)
   Type
   - display: "Fraunces"      (títulos de seção)
   - hand:    "Caveat"        (rótulos manuscritos, assinaturas)
   - mono:    "Courier Prime" (legendas, datas, metadados "datilografados")
   Signature element: cartões de papel kraft com borda rasgada (clip-path)
   e cantos presos com fita washi — reaproveitado em Projetos, Experiência e Skills.
============================================================ */

/* ---- textura de papel kraft (usada em cards, letras e ícones) ---- */
/* ---- textura de página: papel pardo amassado (inspirada na referência de vinco/dobra) ---- */
const PAGE_TEXTURE_SVG = `<svg xmlns='http://www.w3.org/2000/svg' width='900' height='1200'>
  <filter id='c'>
    <feTurbulence type='fractalNoise' baseFrequency='0.012 0.016' numOctaves='5' seed='24' result='n'/>
    <feDiffuseLighting in='n' lighting-color='#ffffff' surfaceScale='2.4' result='l'>
      <feDistantLight azimuth='235' elevation='55'/>
    </feDiffuseLighting>
    <feColorMatrix in='l' type='matrix' values='0.55 0 0 0 0  0 0.47 0 0 0  0 0 0.36 0 0  0 0 0 1 0' result='t'/>
    <feComposite in='t' in2='SourceGraphic' operator='multiply'/>
  </filter>
  <rect width='900' height='1200' fill='#D6BE97'/>
  <rect width='900' height='1200' filter='url(#c)'/>
</svg>`;
const PAGE_TEXTURE_URI = `data:image/svg+xml;utf8,${encodeURIComponent(PAGE_TEXTURE_SVG)}`;

const KRAFT_SVG = `<svg xmlns='http://www.w3.org/2000/svg' width='120' height='120'>
  <filter id='n'>
    <feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' seed='7' stitchTiles='stitch' result='t'/>
    <feColorMatrix in='t' type='matrix' values='0 0 0 0 0.68  0 0 0 0 0.56  0 0 0 0 0.40  0 0 0 0.4 0'/>
  </filter>
  <rect width='120' height='120' fill='#D8C3A0'/>
  <rect width='120' height='120' filter='url(#n)'/>
</svg>`;
const KRAFT_URI = `data:image/svg+xml;utf8,${encodeURIComponent(KRAFT_SVG)}`;

/* filtros SVG globais: borda de papel rasgado (roughEdge) + preenchimento kraft para ícones */
function PaperDefs() {
  return (
    <svg width="0" height="0" style={{ position: "absolute" }} aria-hidden="true">
      <defs>
        <filter id="roughEdge" x="-20%" y="-20%" width="140%" height="140%">
          <feTurbulence type="fractalNoise" baseFrequency="0.045" numOctaves="2" seed="3" result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="7" xChannelSelector="R" yChannelSelector="G" />
        </filter>
        <filter id="roughEdgeFine" x="-15%" y="-15%" width="130%" height="130%">
          <feTurbulence type="fractalNoise" baseFrequency="0.05" numOctaves="2" seed="9" result="noise2" />
          <feDisplacementMap in="SourceGraphic" in2="noise2" scale="2.5" xChannelSelector="R" yChannelSelector="G" />
        </filter>
        <radialGradient id="wingShade" cx="28%" cy="15%" r="85%">
          <stop offset="0%" stopColor="#2b2118" stopOpacity="0.04" />
          <stop offset="65%" stopColor="#2b2118" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#2b2118" stopOpacity="0.4" />
        </radialGradient>
        <radialGradient id="capShade" cx="32%" cy="22%" r="90%">
          <stop offset="0%" stopColor="#B8925A" stopOpacity="0.9" />
          <stop offset="55%" stopColor="#6E4A2C" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#2b2118" stopOpacity="0.9" />
        </radialGradient>
        <pattern id="kraftFill" patternUnits="userSpaceOnUse" width="120" height="120">
          <image href={KRAFT_URI} width="120" height="120" />
        </pattern>
      </defs>
    </svg>
  );
}

const BLOB_CLIPS = [
  "polygon(8% 12%, 40% 2%, 78% 6%, 96% 24%, 100% 58%, 90% 88%, 60% 100%, 22% 96%, 2% 70%, 4% 34%)",
  "polygon(4% 22%, 26% 2%, 66% 4%, 94% 14%, 100% 46%, 92% 78%, 70% 98%, 30% 96%, 6% 80%, 0% 48%)",
  "polygon(14% 4%, 54% 0%, 88% 10%, 100% 40%, 96% 72%, 76% 98%, 42% 100%, 10% 86%, 0% 56%, 2% 26%)",
];

/* letra recortada em "papel" — imita a tipografia da referência (tile kraft + traço grosso) */
function LetterTile({ ch, i }) {
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

function NameCutout({ text }) {
  return (
    <div style={{ display: "inline-flex", flexWrap: "wrap", justifyContent: "center" }}>
      {text.split("").map((ch, i) => (
        <LetterTile ch={ch} i={i} key={i} />
      ))}
    </div>
  );
}

/* ---- elementos decorativos de "papel recortado" (originais, não reproduzem as referências) ---- */
function PaperCoffeeCup({ style }) {
  return (
    <svg viewBox="0 0 100 100" width="76" height="76" style={{ overflow: "visible", ...style }}>
      <g filter="url(#roughEdge)">
        <ellipse cx="42" cy="78" rx="30" ry="7" fill="url(#kraftFill)" stroke="#241a14" strokeWidth="3" />
        <path d="M16 40 h52 l-6 32 a10 10 0 0 1-10 8H32a10 10 0 0 1-10-8Z" fill="url(#kraftFill)" stroke="#241a14" strokeWidth="3" />
        <path d="M68 46 q16-2 14 12 t-16 10" fill="none" stroke="#241a14" strokeWidth="3" />
      </g>
      <g fill="none" stroke="#241a14" strokeWidth="2.5" strokeLinecap="round" opacity="0.75">
        <path className="steam-line" style={{ animationDelay: "0s" }} d="M28 32 q-3-9 3-15 t2-14" />
        <path className="steam-line" style={{ animationDelay: "0.6s" }} d="M40 32 q-3-10 3-17 t2-15" />
        <path className="steam-line" style={{ animationDelay: "1.2s" }} d="M52 32 q-3-9 3-15 t2-14" />
      </g>
    </svg>
  );
}

function PaperFlower({ style, size = 64 }) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} style={{ filter: "url(#roughEdge)", ...style }}>
      {[0, 60, 120, 180, 240, 300].map((a) => (
        <ellipse
          key={a}
          cx="50"
          cy="28"
          rx="13"
          ry="20"
          fill="url(#kraftFill)"
          stroke="#241a14"
          strokeWidth="2.5"
          transform={`rotate(${a} 50 50)`}
        />
      ))}
      <circle cx="50" cy="50" r="10" fill="#C2828C" stroke="#241a14" strokeWidth="2.5" />
    </svg>
  );
}

/* borboleta — ilustração autoral, rabo-de-andorinha realista:
   asas espelhadas (mesma geometria nos dois lados), sombreado em gradiente,
   veios ramificados e ocelo na cauda — recortada em papel kraft */
function PaperButterfly({ style, size = 180 }) {
  const ink = "#2b2118";
  const wing = (
    <g>
      {/* asa dianteira */}
      <path
        d="M160,68
           C 192,36 244,26 284,52
           C 312,70 316,102 292,126
           C 270,148 236,150 206,140
           C 186,133 172,120 163,100
           C 159,90 158,78 160,68 Z"
        fill="url(#kraftFill)" stroke="none"
      />
      <path
        d="M160,68
           C 192,36 244,26 284,52
           C 312,70 316,102 292,126
           C 270,148 236,150 206,140
           C 186,133 172,120 163,100
           C 159,90 158,78 160,68 Z"
        fill="url(#wingShade)" stroke={ink} strokeWidth="3"
      />
      {/* asa traseira + cauda */}
      <path
        d="M160,150
           C 190,150 224,160 250,186
           C 274,210 286,244 276,272
           C 270,290 254,296 242,282
           C 238,300 222,304 214,290
           C 224,320 224,344 244,368
           C 250,376 244,384 235,378
           C 214,362 202,338 197,314
           C 190,330 174,326 172,306
           C 168,270 163,220 158,190
           C 157,176 157,162 160,150 Z"
        fill="url(#kraftFill)" stroke="none"
      />
      <path
        d="M160,150
           C 190,150 224,160 250,186
           C 274,210 286,244 276,272
           C 270,290 254,296 242,282
           C 238,300 222,304 214,290
           C 224,320 224,344 244,368
           C 250,376 244,384 235,378
           C 214,362 202,338 197,314
           C 190,330 174,326 172,306
           C 168,270 163,220 158,190
           C 157,176 157,162 160,150 Z"
        fill="url(#wingShade)" stroke={ink} strokeWidth="3"
      />
      {/* veios da dianteira */}
      <g fill="none" stroke={ink} strokeWidth="1.4" opacity="0.65">
        <path d="M163,72 C 190,55 230,46 268,54" />
        <path d="M163,85 C 195,72 235,66 278,74" />
        <path d="M165,100 C 198,92 236,90 285,98" />
        <path d="M168,116 C 198,112 230,114 270,122" />
        <path d="M172,132 C 198,132 222,136 250,142" />
      </g>
      {/* veios da traseira */}
      <g fill="none" stroke={ink} strokeWidth="1.4" opacity="0.65">
        <path d="M162,158 C 190,162 216,174 236,196" />
        <path d="M160,175 C 186,182 206,198 220,222" />
        <path d="M160,195 C 180,206 194,226 200,252" />
        <path d="M160,220 C 174,236 182,258 184,282" />
      </g>
      {/* banda marginal */}
      <path
        d="M284,52 C 312,70 316,102 292,126 C 270,148 236,150 206,140"
        fill="none" stroke={ink} strokeWidth="6" opacity="0.5" strokeLinecap="round"
      />
      {/* ocelo da cauda */}
      <circle cx="222" cy="286" r="8" fill="#B8925A" stroke={ink} strokeWidth="1.6" />
      <circle cx="222" cy="286" r="3.4" fill="#8B3A3A" />
    </g>
  );
  return (
    <svg viewBox="0 0 320 400" width={size} height={size * 1.25} style={{ filter: "url(#roughEdgeFine)", ...style }}>
      {/* espelha a mesma geometria dos dois lados do corpo para simetria realista */}
      <g>{wing}</g>
      <g transform="translate(320,0) scale(-1,1)">{wing}</g>
      {/* corpo */}
      <path d="M154,58 C148,140 148,300 158,378 C160,388 168,388 170,378 C178,300 178,140 172,58 Z" fill={ink} />
      {[80, 130, 180, 230, 280, 330]?.map((y) => (
        <line key={y} x1="154" y1={y} x2="172" y2={y} stroke="#F3ECDD" strokeWidth="1.1" opacity="0.4" />
      ))}
      {/* antenas com clava */}
      <path d="M158,60 C 148,36 130,20 112,20" fill="none" stroke={ink} strokeWidth="2.4" strokeLinecap="round" />
      <path d="M170,60 C 180,36 198,20 216,20" fill="none" stroke={ink} strokeWidth="2.4" strokeLinecap="round" />
      <ellipse cx="108" cy="18" rx="5" ry="3.4" fill={ink} transform="rotate(-20 108 18)" />
      <ellipse cx="220" cy="18" rx="5" ry="3.4" fill={ink} transform="rotate(20 220 18)" />
    </svg>
  );
}

/* cogumelo — chapéu abaulado com lamelas por baixo e talo reticulado, recortado em papel */
function PaperMushroom({ style, size = 130 }) {
  const ink = "#2b2118";
  return (
    <svg viewBox="0 0 200 260" width={size} height={size * 1.3} style={{ filter: "url(#roughEdgeFine)", ...style }}>
      {/* talo */}
      <path
        d="M84,118 C81,155 78,195 75,232 C74,242 126,242 125,232 C122,195 119,155 116,118 Z"
        fill="url(#kraftFill)" stroke={ink} strokeWidth="2.6"
      />
      <clipPath id="stemClip">
        <path d="M84,118 C81,155 78,195 75,232 C74,242 126,242 125,232 C122,195 119,155 116,118 Z" />
      </clipPath>
      <g clipPath="url(#stemClip)" stroke={ink} strokeWidth="1" opacity="0.45">
        {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
          <path key={"a" + i} d={`M${60 + i * 12},110 L${90 + i * 12},250`} />
        ))}
        {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
          <path key={"b" + i} d={`M${140 - i * 12},110 L${110 - i * 12},250`} />
        ))}
      </g>
      {/* lamelas (vistas de baixo, na aba do chapéu) */}
      <g stroke={ink} strokeWidth="1.3" opacity="0.6">
        {Array.from({ length: 17 }).map((_, i) => {
          const t = i / 16;
          const x = 14 + t * 172;
          return <line key={i} x1={x} y1="118" x2={100 + (x - 100) * 0.35} y2="128" />;
        })}
      </g>
      {/* chapéu */}
      <path
        d="M6,120 C6,55 46,10 100,10 C154,10 194,55 194,120 C160,132 40,132 6,120 Z"
        fill="url(#kraftFill)" stroke="none"
      />
      <path
        d="M6,120 C6,55 46,10 100,10 C154,10 194,55 194,120 C160,132 40,132 6,120 Z"
        fill="url(#capShade)" stroke={ink} strokeWidth="3"
      />
      <path d="M6,120 C40,132 160,132 194,120" fill="none" stroke={ink} strokeWidth="2.4" opacity="0.7" />
    </svg>
  );
}

/* moldura de papel pra fotos/imagens próprias — recorte rasgado + leve tom kraft.
   Aponta pra arquivos locais (você adiciona os arquivos, o componente só referencia o caminho). */
function PhotoCutout({ src, alt, size = 140, rotate = 0, style, className }) {
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
          coloque {src.split("/").pop()} na pasta assets
        </div>
      )}
    </div>
  );
}

const TORN = `polygon(
  0% 2%, 4% 5%, 9% 1%, 14% 4%, 19% 0%, 24% 3%, 29% 6%, 34% 2%, 39% 5%, 44% 1%,
  49% 4%, 54% 0%, 59% 3%, 64% 6%, 69% 2%, 74% 5%, 79% 1%, 84% 4%, 89% 0%, 94% 3%, 100% 2%,
  100% 98%,
  94% 96%, 89% 99%, 84% 95%, 79% 98%, 74% 94%, 69% 97%, 64% 93%, 59% 96%, 54% 99%,
  49% 95%, 44% 98%, 39% 94%, 34% 97%, 29% 93%, 24% 96%, 19% 99%, 14% 95%, 9% 98%, 4% 94%, 0% 97%
)`;

function WashiTape({ style = {}, color = "rose" }) {
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

function WaxSeal({ label = "★", size = 68, as = "div", href, onClick, title }) {
  const Tag = as;
  return (
    <span style={{ position: "relative", display: "inline-flex", width: size, height: size, flexShrink: 0 }}>
      <span
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: -7,
          borderRadius: "50%",
          border: "2px dashed #8B3A3A",
          filter: "url(#roughEdge)",
          opacity: 0.75,
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
          borderRadius: "50%",
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          background: "radial-gradient(circle at 35% 30%, #9c4444 0%, #8B3A3A 55%, #6f2c2c 100%)",
          boxShadow: "inset 0 2px 3px rgba(255,255,255,0.2), inset 0 -3px 5px rgba(0,0,0,0.35)",
          color: "#f3ecdd",
          fontFamily: "'Caveat', cursive",
          fontWeight: 600,
          fontSize: size * 0.3,
          textDecoration: "none",
          cursor: href || onClick ? "pointer" : "default",
          border: "2px solid #6f2c2c",
          filter: "url(#roughEdge)",
        }}
      >
        {label}
      </Tag>
    </span>
  );
}

function StickerTag({ children }) {
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

function PaperCard({ children, rotate = 0, tape = "both", tapeColor = "rose" }) {
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

function SectionLabel({ children }) {
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

function Section({ id, label, children }) {
  return (
    <section id={id} style={{ maxWidth: 880, margin: "0 auto", padding: "64px 20px" }}>
      <SectionLabel>{label}</SectionLabel>
      {children}
    </section>
  );
}

/* ============================================================
   CONTEÚDO — edite os placeholders (nome, links) conforme precisar
============================================================ */

const PROJETOS = [
  {
    title: "Apps de rádio (streaming ao vivo)",
    meta: "Java · ExoMedia/Media3 · Chromecast · Firebase",
    text:
      "Rádio Luz da Vida, Rádio Cidade Livre e Rádio Pontual FM — apps de streaming com descoberta de Chromecast e Bluetooth, migração ExoMedia 4→5, Remote Config e popup diário de oração alimentado por planilha do Google.",
  },
  {
    title: "Classificador de nódulos pulmonares (TCC)",
    meta: "Keras · TensorFlow Lite · Python",
    text:
      "Modelo de suporte ao diagnóstico precoce de câncer de pulmão (benigno / maligno / normal), treinado sobre o dataset IQ-OTH/NCCD, com plano de conversão para TFLite e integração num app mobile voltado a profissionais de saúde.",
  },
  {
    title: "Integração WhatsApp via Z-API",
    meta: "Python · Supabase · Z-API",
    text:
      "Desafio técnico para a b2bflow: script que lê contatos do Supabase e envia mensagens personalizadas pelo WhatsApp via Z-API, com logging, dotenv, sanitização de telefone por regex e resumo de enviados/falhos.",
  },
  {
    title: "Estabilização pós-QA de app Android",
    meta: "Java · Debug",
    text:
      "Correção de crash na navegação por back (tela preta), links de compartilhamento quebrados e ajustes visuais apontados em revisão de design pós-QA.",
  },
];

const EXPERIENCIA = [
  {
    periodo: "nov/2025 — atual",
    cargo: "Estagiária Desenvolvedora Android",
    empresa: "Virtues Media & App",
    text: "Java, Kotlin, Material Design e criptografia de chaves de API em apps mobile.",
  },
  {
    periodo: "fev/2025 — nov/2025",
    cargo: "Estagiária de Informática",
    empresa: "All Net",
    text: "Ensino de lógica de programação e desenvolvimento de jogos digitais.",
  },
];

const SKILLS = [
  "Java", "Kotlin", "Android SDK", "ConstraintLayout", "Firebase",
  "ExoMedia / Media3", "Supabase", "Z-API", "Spring Boot",
  "Keras / TensorFlow Lite", "Git",
];

export default function Portfolio() {
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
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:wght@400;600&family=Caveat:wght@500;600&family=Courier+Prime&family=Lora:wght@400;500&family=Alfa+Slab+One&display=swap');
        @media (max-width: 640px) { .hero-deco { display: none; } }
        @keyframes steamRise {
          0%   { transform: translateY(4px) scaleY(0.85); opacity: 0; }
          25%  { opacity: 0.75; }
          70%  { opacity: 0.35; }
          100% { transform: translateY(-16px) scaleY(1.2); opacity: 0; }
        }
        .steam-line { animation: steamRise 2.4s ease-in-out infinite; transform-box: fill-box; transform-origin: bottom center; }
      `}</style>

      <PaperDefs />

      {/* HERO */}
      <header style={{ padding: "80px 20px 30px", textAlign: "center", position: "relative", overflow: "hidden" }}>
        <PaperButterfly
          className="hero-deco"
          size={210}
          style={{ position: "absolute", top: -30, right: -50, transform: "rotate(12deg)", opacity: 0.95 }}
        />
        <PaperMushroom className="hero-deco" size={110} style={{ position: "absolute", bottom: -8, left: "6%", transform: "rotate(-4deg)" }} />
        <PaperFlower className="hero-deco" style={{ position: "absolute", top: 24, left: "8%" }} />
        <PaperCoffeeCup className="hero-deco" style={{ position: "absolute", bottom: 6, left: "14%", transform: "rotate(6deg)" }} />
        <PaperFlower className="hero-deco" size={44} style={{ position: "absolute", bottom: 10, right: "16%", transform: "rotate(10deg)" }} />
        <PhotoCutout
          className="hero-deco"
          src="./assets/lua.png"
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
        <div style={{ display: "flex", gap: 28, alignItems: "center", flexWrap: "wrap", justifyContent: "center" }}>
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
          <PhotoCutout src="./assets/globo.png" alt="globo antigo" size={150} rotate={4} />
        </div>
      </Section>

      {/* PROJETOS */}
      <Section id="projetos" label="Projetos">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 40,
          }}
        >
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
            src="./assets/relogio-bolso.png"
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
            src="./assets/vinil-flores.png"
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

      <footer style={{ textAlign: "center", padding: "30px 20px 50px", fontFamily: "'Courier Prime', monospace", fontSize: 11, color: "#8a7d68" }}>
        feito à mão, com Java e papel kraft
      </footer>
    </div>
  );
}
