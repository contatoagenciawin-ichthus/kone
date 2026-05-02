"use client"

import { useState, useEffect, useCallback, useRef } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"

export const HEADER_HEIGHT = 56

const slides = [
  {
    model: "KONE",
    category: "Máquinas-ferramenta",
    categoryEn: "Machine Tools",
    categoryEs: "Máquinas-herramienta",
    headline: "Engenharia brasileira\npara a indústria.",
    headlineEn: "Brazilian engineering\nfor industry.",
    headlineEs: "Ingeniería brasileña\npara la industria.",
    spec: "Desde 1974 · Fabricação nacional · Atendimento técnico",
    specEn: "Since 1974 · Brazilian manufacturing · Technical support",
    specEs: "Desde 1974 · Fabricación brasileña · Soporte técnico",
    description:
      "A Kone desenvolve e fabrica furadeiras, fresadoras e soluções técnicas para diferentes segmentos industriais no Brasil e no exterior.",
    descriptionEn:
      "Kone develops and manufactures drilling machines, milling machines and technical solutions for different industrial segments in Brazil and abroad.",
    descriptionEs:
      "Kone desarrolla y fabrica taladros, fresadoras y soluciones técnicas para diferentes segmentos industriales en Brasil y en el exterior.",
    image: "/machines/hero-ka-70.png",
    isEvent: false,
    badge: "Desde 1974",
    badgeEn: "Since 1974",
    badgeEs: "Desde 1974",
  },
  {
    model: "KA-70",
    category: "Furadeira de Coluna",
    categoryEn: "Column Drilling Machine",
    categoryEs: "Taladro de Columna",
    headline: "Capacidade\nsem igual.",
    headlineEn: "Unmatched\ncapacity.",
    headlineEs: "Capacidad\nsin igual.",
    spec: "Furação até 70 mm · Cone Morse 5 · Linha pesada",
    specEn: "Drilling up to 70 mm · Morse Taper 5 · Heavy-duty line",
    specEs: "Perforación hasta 70 mm · Cono Morse 5 · Línea pesada",
    description:
      "A linha KA reúne robustez, potência e estabilidade para operações industriais exigentes.",
    descriptionEn:
      "The KA line combines robustness, power and stability for demanding industrial operations.",
    descriptionEs:
      "La línea KA combina robustez, potencia y estabilidad para operaciones industriales exigentes.",
    image: "/machines/hero-ka-70.png",
    isEvent: false,
    badge: null,
    badgeEn: null,
    badgeEs: null,
  },
  {
    model: "KFU-3",
    category: "Fresadora Universal",
    categoryEn: "Universal Milling Machine",
    categoryEs: "Fresadora Universal",
    headline: "Fresagem de\nalta precisão.",
    headlineEn: "High-precision\nmilling.",
    headlineEs: "Fresado de\nalta precisión.",
    spec: "Mesa 300×1500 mm · ISO 40 · 12 velocidades",
    specEn: "Table 300×1500 mm · ISO 40 · 12 speeds",
    specEs: "Mesa 300×1500 mm · ISO 40 · 12 velocidades",
    description:
      "Fresadora universal para processos de usinagem que exigem rigidez, precisão e versatilidade.",
    descriptionEn:
      "Universal milling machine for machining processes requiring rigidity, precision and versatility.",
    descriptionEs:
      "Fresadora universal para procesos de mecanizado que requieren rigidez, precisión y versatilidad.",
    image: "/machines/kfu-3.png",
    isEvent: false,
    badge: null,
    badgeEn: null,
    badgeEs: null,
  },
]

type Lang = "pt" | "en" | "es"
interface HeroSectionProps { lang?: Lang }

const textVariants = {
  enter: { opacity: 0, x: -24 },
  center: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 24 },
}

const imageVariants = {
  enter: { opacity: 0, scale: 0.92, y: 12 },
  center: { opacity: 1, scale: 1, y: 0 },
  exit: { opacity: 0, scale: 1.04, y: -8 },
}

const ctas = {
  pt: { primary: "Ver máquinas", secondary: "Solicitar orçamento" },
  en: { primary: "View machines", secondary: "Request a quote" },
  es: { primary: "Ver máquinas", secondary: "Solicitar cotización" },
}

export function HeroSection({ lang = "pt" }: HeroSectionProps) {
  const [current, setCurrent] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const touchStartX = useRef<number | null>(null)

  const goTo = useCallback((index: number) => setCurrent(index), [])
  const next = useCallback(() => setCurrent((p) => (p + 1) % slides.length), [])
  const prev = useCallback(() => setCurrent((p) => (p - 1 + slides.length) % slides.length), [])

  useEffect(() => {
    if (isPaused) return
    const t = setInterval(next, 7000)
    return () => clearInterval(t)
  }, [next, isPaused])

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
  }
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return
    const delta = touchStartX.current - e.changedTouches[0].clientX
    if (Math.abs(delta) > 50) delta > 0 ? next() : prev()
    touchStartX.current = null
  }

  const slide = slides[current]

  const getField = (f: "category" | "headline" | "spec" | "description" | "badge") => {
    if (lang === "en") return slide[`${f}En` as keyof typeof slide] as string
    if (lang === "es") return slide[`${f}Es` as keyof typeof slide] as string
    return slide[f as keyof typeof slide] as string
  }

  const cta = ctas[lang]
  const modelLabel = lang === "en" ? "Model" : "Modelo"

  return (
    <section
      id="hero"
      className="relative w-full overflow-hidden bg-[#F5F4F0] pt-[56px]"
      style={{ minHeight: "calc(100dvh - 0px)" }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Linha acento topo */}
      <div className="absolute top-[56px] left-0 right-0 h-[3px] bg-[#1C54E8] z-10" />

      {/* Textura de fundo — grade metálica industrial tênue */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            radial-gradient(circle, #111 0.5px, transparent 0.5px),
            linear-gradient(rgba(17,17,17,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(17,17,17,0.03) 1px, transparent 1px)
          `,
          backgroundSize: "32px 32px, 64px 64px, 64px 64px",
          opacity: 0.5,
        }}
      />

      {/* Gradiente lateral esquerdo */}
      <div
        className="absolute inset-y-0 left-0 w-1/2 pointer-events-none z-[1]"
        style={{
          background: "linear-gradient(to right, #F5F4F0 0%, transparent 100%)",
          opacity: 0.6,
        }}
      />

      {/* ─── LAYOUT MOBILE ─── */}
      <div className="relative z-10 flex flex-col lg:hidden">

        <div className="px-5 pt-8 pb-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              variants={textVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="h-[1px] w-8 bg-[#1C54E8]" />
                <span style={{
                  fontFamily: "var(--font-sans)", fontSize: "9px", fontWeight: 700,
                  letterSpacing: "3px", textTransform: "uppercase", color: "#1C54E8",
                }}>
                  {getField("category")}
                </span>
                {getField("badge") && (
                  <span style={{
                    fontFamily: "var(--font-sans)", fontSize: "8px", fontWeight: 700,
                    letterSpacing: "2px", textTransform: "uppercase",
                    background: "#1C54E8", color: "#fff", padding: "2px 6px",
                  }}>
                    {getField("badge")}
                  </span>
                )}
              </div>

              <p style={{
                fontFamily: "var(--font-mono)", fontSize: "10px", fontWeight: 700,
                letterSpacing: "2px", textTransform: "uppercase", color: "#777672", marginBottom: "4px",
              }}>
                {modelLabel} / {slide.model}
              </p>

              <h1 style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(40px, 11vw, 64px)",
                fontWeight: 800, lineHeight: 0.9, letterSpacing: "-1px",
                color: "#111", whiteSpace: "pre-line", marginBottom: "12px",
              }}>
                {getField("headline")}
              </h1>

              <p style={{
                fontFamily: "var(--font-mono)", fontSize: "12px", fontWeight: 500,
                color: "#777672", lineHeight: 1.5,
                borderLeft: "2px solid #1C54E8", paddingLeft: "10px", marginBottom: "10px",
              }}>
                {getField("spec")}
              </p>

              <p style={{
                fontFamily: "var(--font-sans)", fontSize: "13px", fontWeight: 400,
                color: "#555451", lineHeight: 1.65, marginBottom: "16px", maxWidth: "400px",
              }}>
                {getField("description")}
              </p>

              <div className="flex gap-2">
                <a
                  href="#produtos"
                  style={{
                    flex: 1,
                    fontFamily: "var(--font-sans)",
                    fontSize: "11px",
                    fontWeight: 700,
                    letterSpacing: "1.5px",
                    textTransform: "uppercase",
                    background: "#1C54E8",
                    color: "#fff",
                    border: "none",
                    padding: "0 12px",
                    minHeight: "44px",
                    cursor: "pointer",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "6px",
                    textDecoration: "none",
                  }}
                >
                  {cta.primary} <span>→</span>
                </a>
                <a
                  href="mailto:vendas@kone.ind.br?subject=Solicitação%20de%20orçamento%20-%20Kone%20Máquinas"
                  style={{
                    flex: 1,
                    fontFamily: "var(--font-sans)",
                    fontSize: "11px",
                    fontWeight: 700,
                    letterSpacing: "1.5px",
                    textTransform: "uppercase",
                    background: "transparent",
                    color: "#111",
                    border: "1.5px solid #111",
                    padding: "0 12px",
                    minHeight: "44px",
                    cursor: "pointer",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textDecoration: "none",
                  }}
                >
                  {cta.secondary}
                </a>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Faixa da imagem */}
        <div className="relative w-full bg-[#ECEAE3]" style={{ height: "240px" }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              variants={imageVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full h-full"
            >
              <div className="relative w-full h-full">
                <Image
                  src={slide.image}
                  alt={`KonE ${slide.model}`}
                  fill
                  priority={current === 0}
                  style={{ objectFit: "contain", objectPosition: "center" }}
                  sizes="100vw"
                />
              </div>
            </motion.div>
          </AnimatePresence>

          <div
            className="absolute top-0 right-0 flex flex-col items-center justify-center text-center"
            style={{ width: 56, height: 56, background: "#111" }}
          >
            <span style={{ fontFamily: "var(--font-sans)", fontSize: "7px", fontWeight: 700, color: "rgba(255,255,255,0.4)", letterSpacing: "1px", textTransform: "uppercase" }}>ISO</span>
            <span style={{ fontFamily: "var(--font-display)", fontSize: "14px", fontWeight: 800, color: "#1C54E8", lineHeight: 1 }}>9001</span>
          </div>
        </div>

        {/* Navegação mobile */}
        <div className="flex items-center gap-3 px-5 py-4">
          <button onClick={prev} aria-label="Anterior" style={{
            minWidth: 44, minHeight: 44, border: "1.5px solid #E2E0D8",
            background: "transparent", cursor: "pointer",
            display: "flex", alignItems: "center", justifyContent: "center",
            color: "#777672", fontSize: "16px", flexShrink: 0,
          }}>←</button>

          <div className="flex gap-2 items-center flex-1 justify-center">
            {slides.map((_, i) => (
              <button key={i} onClick={() => goTo(i)} aria-label={`Slide ${i + 1}`}
                style={{
                  width: i === current ? 16 : 5, height: 5,
                  background: i === current ? "#1C54E8" : "#D0CEC7",
                  border: "none", cursor: "pointer", padding: 0,
                  transition: "all 0.3s ease", flexShrink: 0,
                  marginTop: "10px", marginBottom: "10px",
                }}
              />
            ))}
          </div>

          <button onClick={next} aria-label="Próximo" style={{
            minWidth: 44, minHeight: 44, border: "1.5px solid #E2E0D8",
            background: "transparent", cursor: "pointer",
            display: "flex", alignItems: "center", justifyContent: "center",
            color: "#777672", fontSize: "16px", flexShrink: 0,
          }}>→</button>

          <span style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: "#777672", flexShrink: 0 }}>
            {String(current + 1).padStart(2, "0")}/{String(slides.length).padStart(2, "0")}
          </span>
        </div>
      </div>

      {/* ─── LAYOUT DESKTOP ─── */}
      <div
        className="relative z-10 hidden lg:flex items-center max-w-[1440px] mx-auto px-20"
        style={{ minHeight: `calc(100dvh - ${HEADER_HEIGHT}px)` }}
      >
        <div className="w-full grid grid-cols-2 gap-16 items-center py-16">

          {/* Coluna esquerda — texto */}
          <div className="flex flex-col justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                variants={textVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-[1px] w-10 bg-[#1C54E8]" />
                  <span style={{
                    fontFamily: "var(--font-sans)", fontSize: "10px", fontWeight: 700,
                    letterSpacing: "4px", textTransform: "uppercase", color: "#1C54E8",
                  }}>
                    {getField("category")}
                  </span>
                  {getField("badge") && (
                    <span style={{
                      fontFamily: "var(--font-sans)", fontSize: "9px", fontWeight: 700,
                      letterSpacing: "2px", textTransform: "uppercase",
                      background: "#1C54E8", color: "#fff", padding: "3px 8px",
                    }}>
                      {getField("badge")}
                    </span>
                  )}
                </div>

                <p style={{
                  fontFamily: "var(--font-mono)", fontSize: "11px", fontWeight: 700,
                  letterSpacing: "2px", textTransform: "uppercase", color: "#777672", marginBottom: "4px",
                }}>
                  {modelLabel} / {slide.model}
                </p>

                <h1 style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(52px, 7vw, 112px)",
                  fontWeight: 800, lineHeight: 0.9, letterSpacing: "-2px",
                  color: "#111", whiteSpace: "pre-line", marginBottom: "20px",
                }}>
                  {getField("headline")}
                </h1>

                <p style={{
                  fontFamily: "var(--font-mono)", fontSize: "13px", fontWeight: 500,
                  color: "#777672", lineHeight: 1.6,
                  borderLeft: "2px solid #1C54E8", paddingLeft: "14px",
                  marginBottom: "14px", maxWidth: "440px",
                }}>
                  {getField("spec")}
                </p>

                <p style={{
                  fontFamily: "var(--font-sans)", fontSize: "15px", fontWeight: 400,
                  color: "#555451", lineHeight: 1.7,
                  marginBottom: "32px", maxWidth: "480px",
                }}>
                  {getField("description")}
                </p>

                <div className="flex flex-wrap gap-3">
                  <a
                    href="#produtos"
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "12px",
                      fontWeight: 700,
                      letterSpacing: "2px",
                      textTransform: "uppercase",
                      background: "#1C54E8",
                      color: "#fff",
                      border: "none",
                      padding: "12px 28px",
                      minHeight: "44px",
                      cursor: "pointer",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "8px",
                      textDecoration: "none",
                    }}
                  >
                    {cta.primary} <span>→</span>
                  </a>
                  <a
                    href="mailto:vendas@kone.ind.br?subject=Solicitação%20de%20orçamento%20-%20Kone%20Máquinas"
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "12px",
                      fontWeight: 700,
                      letterSpacing: "2px",
                      textTransform: "uppercase",
                      background: "transparent",
                      color: "#111",
                      border: "2px solid #111",
                      padding: "11px 28px",
                      minHeight: "44px",
                      cursor: "pointer",
                      display: "inline-flex",
                      alignItems: "center",
                      textDecoration: "none",
                    }}
                  >
                    {cta.secondary}
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navegação desktop */}
            <div className="flex items-center gap-4 mt-14">
              <button onClick={prev} aria-label="Anterior" style={{
                minWidth: 44, minHeight: 44, border: "1.5px solid #E2E0D8",
                background: "transparent", cursor: "pointer",
                display: "flex", alignItems: "center", justifyContent: "center",
                color: "#777672", fontSize: "16px",
              }}>←</button>

              <div className="flex gap-2 items-center">
                {slides.map((_, i) => (
                  <button key={i} onClick={() => goTo(i)} aria-label={`Slide ${i + 1}`}
                    style={{
                      width: i === current ? 20 : 5, height: 5,
                      background: i === current ? "#1C54E8" : "#D0CEC7",
                      border: "none", cursor: "pointer", padding: 0,
                      transition: "all 0.3s ease", flexShrink: 0,
                    }}
                  />
                ))}
              </div>

              <button onClick={next} aria-label="Próximo" style={{
                minWidth: 44, minHeight: 44, border: "1.5px solid #E2E0D8",
                background: "transparent", cursor: "pointer",
                display: "flex", alignItems: "center", justifyContent: "center",
                color: "#777672", fontSize: "16px",
              }}>→</button>

              <div className="h-[1px] flex-1 bg-[#D0CEC7] opacity-40" />

              <span style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: "#777672" }}>
                {String(current + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
              </span>
            </div>
          </div>

          {/* Coluna direita — imagem */}
          <div
            className="relative flex justify-center items-center"
            style={{ height: "clamp(400px, 60vh, 620px)", perspective: "1200px" }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                variants={imageVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                className="relative w-full h-full"
              >
                <div className="relative w-full h-full">
                  <Image
                    src={slide.image}
                    alt={`KonE ${slide.model}`}
                    fill
                    priority={current === 0}
                    style={{ objectFit: "contain", objectPosition: "center" }}
                    sizes="50vw"
                  />
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Sombra projetada */}
            <div
              className="absolute bottom-4 left-1/2 -translate-x-1/2 -z-10"
              style={{
                width: "65%", height: "24px",
                background: "radial-gradient(ellipse, rgba(0,0,0,0.18) 0%, transparent 70%)",
                filter: "blur(10px)",
              }}
            />

            {/* Badge ISO */}
            <div
              className="absolute top-0 right-0 flex flex-col items-center justify-center text-center"
              style={{ width: 72, height: 72, background: "#111" }}
            >
              <span style={{ fontFamily: "var(--font-sans)", fontSize: "8px", fontWeight: 700, color: "rgba(255,255,255,0.4)", letterSpacing: "1.5px", textTransform: "uppercase" }}>ISO</span>
              <span style={{ fontFamily: "var(--font-display)", fontSize: "16px", fontWeight: 800, color: "#1C54E8", lineHeight: 1 }}>9001</span>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "8px", color: "rgba(255,255,255,0.3)", marginTop: "2px" }}>:2000</span>
            </div>

            {/* Detalhe industrial diagonal */}
            <svg
              className="absolute bottom-0 left-0 opacity-[0.07] pointer-events-none"
              width="120" height="120" viewBox="0 0 120 120"
              fill="none"
            >
              <line x1="0" y1="120" x2="120" y2="0" stroke="#1C54E8" strokeWidth="1" />
              <line x1="20" y1="120" x2="120" y2="20" stroke="#1C54E8" strokeWidth="1" />
              <line x1="40" y1="120" x2="120" y2="40" stroke="#1C54E8" strokeWidth="1" />
            </svg>
          </div>
        </div>
      </div>

      {/* Barra de progresso */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#E2E0D8] z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 7, ease: "linear" }}
            style={{ height: "100%", background: "#1C54E8" }}
          />
        </AnimatePresence>
      </div>
    </section>
  )
}