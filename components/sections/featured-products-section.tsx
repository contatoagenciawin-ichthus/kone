"use client";

import { FadeImage } from "@/components/fade-image";

const lines = [
  {
    title: "Furadeiras de Coluna",
    description: "Linhas KM e KA para operações industriais de diferentes capacidades.",
    image: "/machines/hero-ka-70.png",
    span: "col-span-2 row-span-2",
  },
  {
    title: "Fresadoras Universais",
    description: "KFU-2 e KFU-3 para usinagem com rigidez, precisão e versatilidade.",
    image: "/machines/kfu-3.png",
    span: "col-span-2 row-span-1",
  },
  {
    title: "Furadeiras de Bancada",
    description: "Soluções compactas para oficinas, escolas técnicas e bancadas industriais.",
    image: "/machines/kmb-32-mc.png",
    span: "col-span-1 row-span-1",
  },
  {
    title: "Adequação NR-12",
    description: "Projetos de segurança, proteções e adequação de máquinas.",
    image: "/machines/kfu-2.png",
    span: "col-span-1 row-span-1",
  },
];

export function FeaturedProductsSection() {
  return (
    <section id="maquinas" className="relative bg-[#F5F4F0] px-6 py-20 md:px-12 md:py-28 lg:px-20">
      <div className="mx-auto max-w-[1440px]">
        <div className="mb-12 max-w-3xl">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-[#1C54E8]">
            Linhas de máquinas
          </p>

          <h2 className="text-4xl font-semibold tracking-tight text-[#111] md:text-6xl">
            Soluções para diferentes aplicações industriais.
          </h2>

          <p className="mt-5 text-lg leading-8 text-[#555451]">
            Da bancada à produção pesada, a Kone oferece máquinas-ferramenta
            para oficinas, ferramentarias, indústrias e instituições de ensino.
          </p>
        </div>

        <div className="grid auto-rows-[220px] grid-cols-1 gap-4 md:grid-cols-4 md:auto-rows-[260px]">
          {lines.map((item) => (
            <article
              key={item.title}
              className={`group relative overflow-hidden border border-[#E2E0D8] bg-white ${item.span}`}
            >
              <FadeImage
                src={item.image}
                alt={item.title}
                fill
                className="object-contain p-8 transition duration-500 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-2xl font-semibold">
                  {item.title}
                </h3>

                <p className="mt-2 max-w-md text-sm leading-6 text-white/75">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}