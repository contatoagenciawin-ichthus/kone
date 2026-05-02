"use client";

import Image from "next/image";

const machines = [
  { name: "KA-45", category: "Linha KA", type: "Furadeira de Coluna", image: "/machines/ka-45.png" },
  { name: "KA-50", category: "Linha KA", type: "Furadeira de Coluna", image: "/machines/ka-50.png" },
  { name: "KA-70", category: "Linha KA", type: "Furadeira de Coluna", image: "/machines/hero-ka-70.png" },

  { name: "KM-30", category: "Linha KM", type: "Furadeira de Coluna", image: "/machines/km-30.png" },
  { name: "KM-38", category: "Linha KM", type: "Furadeira de Coluna", image: "/machines/km-38-mi.png" },
  { name: "KM-45 MF", category: "Linha KM", type: "Furadeira de Coluna", image: "/machines/km-45-mf.png" },
  { name: "KM-50", category: "Linha KM", type: "Furadeira de Coluna", image: "/machines/km-50.png" },

  { name: "KFU-2", category: "Linha KFU", type: "Fresadora Universal", image: "/machines/kfu-22.png" },
  { name: "KFU-3", category: "Linha KFU", type: "Fresadora Universal", image: "/machines/kfu-3.png" },

  { name: "KMB-32", category: "Linha KMB", type: "Furadeira de Bancada", image: "/machines/kmb-32.png" },
  { name: "KMB-32 MC", category: "Linha KMB", type: "Furadeira de Bancada", image: "/machines/kmb-32-mc.png" },
];

export function GallerySection() {
  return (
    <section id="produtos" className="bg-white px-6 py-20 md:px-12 md:py-28 lg:px-20">
      <div className="mx-auto max-w-[1440px]">
        <div className="mb-12 max-w-3xl">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-[#1C54E8]">
            Portfólio
          </p>

          <h2 className="text-4xl font-semibold tracking-tight text-[#111] md:text-6xl">
            Máquinas para diferentes demandas da indústria.
          </h2>

          <p className="mt-5 text-lg leading-8 text-[#555451]">
            Linha completa de furadeiras de coluna, furadeiras de bancada e
            fresadoras universais Kone.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {machines.map((machine) => (
            <article
              key={machine.name}
              className="group border border-[#E2E0D8] bg-[#F5F4F0]"
            >
              <div className="relative h-[260px] overflow-hidden bg-white">
                <Image
                  src={machine.image}
                  alt={`${machine.type} Kone ${machine.name}`}
                  fill
                  className="object-contain p-8 transition duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>

              <div className="p-6">
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#1C54E8]">
                  {machine.category}
                </p>

                <h3 className="mt-3 text-3xl font-semibold text-[#111]">
                  {machine.name}
                </h3>

                <p className="mt-2 text-sm font-medium text-[#555451]">
                  {machine.type}
                </p>

                <a
                  href="#contato"
                  className="mt-6 inline-flex text-sm font-bold uppercase tracking-[0.2em] text-[#111] transition hover:text-[#1C54E8]"
                >
                  Solicitar orçamento →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}