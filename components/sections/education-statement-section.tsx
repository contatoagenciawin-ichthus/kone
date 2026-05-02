"use client";

import { useEffect, useRef, useState } from "react";

export function EducationStatementSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.25 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden"
      style={{ background: "#0A1628", minHeight: "480px" }}
    >
      {/* Grade técnica de fundo */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(28,84,232,0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(28,84,232,0.06) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Acento diagonal */}
      <div
        className="absolute pointer-events-none"
        style={{
          right: 0, top: 0, width: "520px", height: "100%",
          background: "linear-gradient(135deg, transparent 45%, rgba(28,84,232,0.07) 45%)",
        }}
      />

      {/* Linha acento esquerda */}
      <div
        className="absolute left-0 top-0 bottom-0 w-[3px]"
        style={{ background: "#1C54E8" }}
      />

      <div
        className="relative z-10 max-w-[1440px] mx-auto px-8 md:px-20 flex flex-col justify-center"
        style={{ minHeight: "480px", paddingTop: "80px", paddingBottom: "80px" }}
      >
        {/* Eyebrow */}
        <div
          className="flex items-center gap-3 mb-8"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateX(0)" : "translateX(-20px)",
            transition: "opacity 0.6s ease, transform 0.6s ease",
          }}
        >
          <div style={{ height: 1, width: 40, background: "#1C54E8" }} />
          <span style={{
            fontFamily: "var(--font-sans)", fontSize: "10px", fontWeight: 700,
            letterSpacing: "4px", textTransform: "uppercase", color: "#1C54E8",
          }}>
            Impacto Social · Desde 1974
          </span>
        </div>

        {/* Headline */}
        <h2
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(42px, 7vw, 96px)",
            fontWeight: 800,
            lineHeight: 0.92,
            letterSpacing: "-2px",
            color: "#FFFFFF",
            maxWidth: "880px",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 0.7s ease 0.1s, transform 0.7s ease 0.1s",
          }}
        >
          Máquinas que{" "}
          <span style={{ color: "#1C54E8" }}>formam</span>
          <br />
          o futuro da{" "}
          <span style={{
            display: "inline-block",
            borderBottom: "3px solid #1C54E8",
            paddingBottom: "2px",
          }}>
            indústria.
          </span>
        </h2>

        {/* Subtítulo */}
        <p
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "clamp(15px, 1.6vw, 19px)",
            fontWeight: 400,
            color: "rgba(255,255,255,0.62)",
            lineHeight: 1.7,
            maxWidth: "600px",
            marginTop: "28px",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(16px)",
            transition: "opacity 0.7s ease 0.22s, transform 0.7s ease 0.22s",
          }}
        >
          A KonE acredita que a verdadeira engenharia começa na formação humana.
          Por isso, nossas máquinas estão presentes em escolas técnicas, centros
          de treinamento e competições internacionais em mais de quatro países.
        </p>

        {/* Stat strip */}
        <div
          className="flex flex-wrap gap-px mt-14"
          style={{
            opacity: visible ? 1 : 0,
            transition: "opacity 0.7s ease 0.38s",
          }}
        >
          {[
            { value: "50+",  label: "Anos de história" },
            { value: "4",    label: "Países com presença educacional" },
            { value: "40+",  label: "Modelos de máquinas" },
            { value: "1974", label: "Ano de fundação" },
          ].map((stat, i) => (
            <div
              key={stat.label}
              style={{
                padding: "20px 32px",
                borderLeft:   i === 0 ? "1px solid rgba(255,255,255,0.1)" : "none",
                borderRight:  "1px solid rgba(255,255,255,0.1)",
                borderTop:    "1px solid rgba(255,255,255,0.1)",
                borderBottom: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              <p style={{
                fontFamily: "var(--font-display)",
                fontSize: "36px", fontWeight: 800,
                color: "#1C54E8", lineHeight: 1,
              }}>
                {stat.value}
              </p>
              <p style={{
                fontFamily: "var(--font-mono)",
                fontSize: "10px", fontWeight: 600,
                letterSpacing: "2px", textTransform: "uppercase",
                color: "rgba(255,255,255,0.45)",
                marginTop: "6px",
              }}>
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}