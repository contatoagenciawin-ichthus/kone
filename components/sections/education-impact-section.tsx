"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const photos = [
  { country: "Brasil",    image: "/education/brasil.jpg",    span: "col-span-2 row-span-2" },
  { country: "Portugal",  image: "/education/portugal.jpg",  span: "" },
  { country: "Suíça",     image: "/education/suica.jpg",     span: "" },
  { country: "Tailândia", image: "/education/tailandia.jpg", span: "" },
  { country: "Japão",     image: "/education/japao.jpg",     span: "col-span-2" },
];

const pillars = [
  {
    label: "Jovens Aprendizes",
    desc: "Parcerias com programas de aprendizagem industrial para jovens de 14 a 24 anos.",
  },
  {
    label: "Ensino Técnico",
    desc: "Máquinas KonE em laboratórios de escolas técnicas e faculdades tecnológicas.",
  },
  {
    label: "WorldSkills",
    desc: "Presença em competições internacionais de habilidades técnicas.",
  },
  {
    label: "Linha Didática",
    desc: "Equipamentos desenvolvidos especialmente para ambientes de ensino.",
  },
];

export function EducationImpactSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      id="educacao"
      style={{ background: "#F5F4F0", paddingTop: "96px", paddingBottom: "96px" }}
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">

        {/* Eyebrow centrado */}
        <div
          className="flex items-center justify-center gap-4 mb-16"
          style={{
            opacity: visible ? 1 : 0,
            transition: "opacity 0.6s ease",
          }}
        >
          <div style={{ height: 1, flex: 1, maxWidth: 80, background: "#1C54E8" }} />
          <span style={{
            fontFamily: "var(--font-sans)", fontSize: "10px", fontWeight: 700,
            letterSpacing: "4px", textTransform: "uppercase", color: "#1C54E8",
          }}>
            Educação técnica global
          </span>
          <div style={{ height: 1, flex: 1, maxWidth: 80, background: "#1C54E8" }} />
        </div>

        {/* Grid principal: fotos (esq) + texto (dir) */}
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-16 items-start">

          {/* Mosaico de fotos */}
          <div
            className="grid grid-cols-3 auto-rows-[180px] gap-2 md:auto-rows-[200px]"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateX(0)" : "translateX(-24px)",
              transition: "opacity 0.7s ease 0.1s, transform 0.7s ease 0.1s",
            }}
          >
            {photos.map((photo) => (
              <article
                key={photo.country}
                className={`group relative overflow-hidden bg-[#111] ${photo.span}`}
              >
                <Image
                  src={photo.image}
                  alt={`Formação técnica KonE — ${photo.country}`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background: "linear-gradient(to top, rgba(10,22,40,0.85) 0%, rgba(10,22,40,0.1) 50%, transparent 100%)",
                  }}
                />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "9px", fontWeight: 700,
                    letterSpacing: "3px", textTransform: "uppercase",
                    color: "rgba(255,255,255,0.5)", marginBottom: "3px",
                  }}>
                    Formação técnica
                  </p>
                  <h3 style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "20px", fontWeight: 800,
                    color: "#fff", lineHeight: 1,
                  }}>
                    {photo.country}
                  </h3>
                </div>
              </article>
            ))}
          </div>

          {/* Coluna de texto */}
          <div
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(24px)",
              transition: "opacity 0.7s ease 0.22s, transform 0.7s ease 0.22s",
            }}
          >
            <h2 style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(36px, 4.5vw, 64px)",
              fontWeight: 800, lineHeight: 0.92,
              letterSpacing: "-1.5px", color: "#111",
              marginBottom: "20px",
            }}>
              Engenharia que<br />
              <span style={{ color: "#1C54E8" }}>forma pessoas.</span>
            </h2>

            <p style={{
              fontFamily: "var(--font-sans)",
              fontSize: "16px", fontWeight: 400,
              color: "#555451", lineHeight: 1.75,
              maxWidth: "440px", marginBottom: "40px",
            }}>
              A KonE apoia a formação técnica e participa de ambientes de
              aprendizado no Brasil e no exterior, conectando máquinas,
              conhecimento e prática industrial.
            </p>

            {/* Pilares */}
            <div style={{ display: "flex", flexDirection: "column", gap: "2px", marginBottom: "40px" }}>
              {pillars.map((p, i) => (
                <div
                  key={p.label}
                  style={{
                    padding: "18px 20px",
                    background: "#ECEAE3",
                    borderLeft: "3px solid transparent",
                    transition: "border-color 0.2s, background 0.2s",
                    opacity: visible ? 1 : 0,
                    transform: visible ? "translateX(0)" : "translateX(12px)",
                    transitionDelay: `${0.3 + i * 0.07}s`,
                  }}
                  onMouseEnter={e => {
                    const el = e.currentTarget as HTMLDivElement;
                    el.style.borderLeftColor = "#1C54E8";
                    el.style.background = "#E4E2DB";
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget as HTMLDivElement;
                    el.style.borderLeftColor = "transparent";
                    el.style.background = "#ECEAE3";
                  }}
                >
                  <p style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "12px", fontWeight: 700,
                    letterSpacing: "2px", textTransform: "uppercase",
                    color: "#111", marginBottom: "4px",
                  }}>
                    {p.label}
                  </p>
                  <p style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "13px", fontWeight: 400,
                    color: "#777672", lineHeight: 1.6,
                  }}>
                    {p.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <a
              href="#contato"
              style={{
                display: "inline-flex", alignItems: "center", gap: "10px",
                fontFamily: "var(--font-sans)", fontSize: "12px",
                fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase",
                background: "#111", color: "#fff",
                padding: "14px 28px", textDecoration: "none",
                transition: "background 0.2s",
              }}
              onMouseEnter={e => (e.currentTarget.style.background = "#1C54E8")}
              onMouseLeave={e => (e.currentTarget.style.background = "#111")}
            >
              Saiba mais sobre educação <span>→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}