"use client";

import Image from "next/image";

const items = [
  {
    title: "Formação profissional",
    text: "A Kone apoia jovens aprendizes, recém-formados e iniciativas voltadas à capacitação da mão de obra industrial.",
  },
  {
    title: "Equipamentos para ensino",
    text: "Máquinas com rigidez, durabilidade e precisão para escolas técnicas, centros de treinamento e instituições de ensino.",
  },
  {
    title: "Linha didática",
    text: "Soluções compactas desenvolvidas para layouts escolares, mantendo o padrão de qualidade da indústria brasileira.",
  },
];

export function TechnologySection() {
  return (
    <section id="educacao" className="bg-[#111] px-6 py-20 text-white md:px-12 md:py-28 lg:px-20">
      <div className="mx-auto grid max-w-[1440px] gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-[#1C54E8]">
            Educação técnica
          </p>

          <h2 className="text-4xl font-semibold tracking-tight md:text-6xl">
            Dedicada ao aprendizado da indústria.
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/65">
            A Kone acredita que conhecimento e profissionalismo são ativos
            essenciais para o desenvolvimento industrial. Por isso, também
            fornece equipamentos e soluções voltadas à formação técnica.
          </p>

          <div className="mt-10 grid gap-4">
            {items.map((item, index) => (
              <div key={item.title} className="border border-white/10 bg-white/[0.03] p-6">
                <span className="font-mono text-sm text-[#1C54E8]">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3 className="mt-4 text-2xl font-semibold">
                  {item.title}
                </h3>

                <p className="mt-3 leading-7 text-white/60">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative min-h-[420px] overflow-hidden bg-[#F5F4F0]">
          <Image
            src="/machines/kmb-32-mc.png"
            alt="Furadeira de bancada Kone KMB-32 MC para ensino técnico"
            fill
            className="object-contain p-10"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />

          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/75 to-transparent p-8">
            <p className="max-w-md text-sm uppercase tracking-[0.25em] text-white/60">
              Linha didática
            </p>
            <p className="mt-2 text-2xl font-semibold">
              Equipamentos compactos para ambientes de ensino e treinamento.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}