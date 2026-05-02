"use client";

const pillars = [
  {
    title: "Fabricação nacional",
    description:
      "Máquinas-ferramenta desenvolvidas e fabricadas no Brasil para diferentes segmentos da indústria.",
  },
  {
    title: "Robustez industrial",
    description:
      "Equipamentos projetados para precisão, durabilidade e operação contínua em ambientes exigentes.",
  },
  {
    title: "Suporte completo",
    description:
      "Assistência técnica, reforma de máquinas, peças de reposição e adequação NR-12.",
  },
];

export function PhilosophySection() {
  return (
    <section id="sobre" className="bg-[#111] px-6 py-20 text-white md:px-12 lg:px-20">
      <div className="mx-auto max-w-[1440px]">
        <div className="max-w-4xl">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-[#1C54E8]">
            Kone Máquinas
          </p>

          <h2 className="text-4xl font-semibold tracking-tight md:text-6xl lg:text-7xl">
            Engenharia brasileira para mover a indústria.
          </h2>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/70">
            Desde 1974, a Kone fabrica máquinas-ferramenta com foco em qualidade,
            durabilidade e funcionalidade para clientes no Brasil e no exterior.
          </p>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-3">
          {pillars.map((pillar, index) => (
            <div
              key={pillar.title}
              className="border border-white/10 bg-white/[0.03] p-8"
            >
              <span className="text-sm font-mono text-[#1C54E8]">
                {String(index + 1).padStart(2, "0")}
              </span>

              <h3 className="mt-6 text-2xl font-semibold">
                {pillar.title}
              </h3>

              <p className="mt-4 leading-7 text-white/60">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}