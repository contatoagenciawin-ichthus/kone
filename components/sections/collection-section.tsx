"use client";

import { FadeImage } from "@/components/fade-image";

const services = [
  {
    id: 1,
    name: "Assistência técnica",
    description:
      "Entrega técnica, startup, manutenção preventiva, corretiva e treinamento operacional.",
    image: "/machines/hero-ka-70.png",
  },
  {
    id: 2,
    name: "Reforma de máquinas",
    description:
      "Avaliação, desmontagem, revisão mecânica, elétrica, hidráulica, pneumática, pintura e testes.",
    image: "/machines/km-45-mf.png",
  },
  {
    id: 3,
    name: "Adequação NR-12",
    description:
      "Projetos de segurança, proteções, análise de risco e laudos técnicos para máquinas.",
    image: "/machines/kfu-22.png",
  },
  {
    id: 4,
    name: "Peças de reposição",
    description:
      "Peças genuínas direto da fábrica, com orientação técnica para a reposição correta.",
    image: "/machines/kmb-32-mc.png",
  },
];

export function CollectionSection() {
  return (
    <section id="servicos" className="bg-[#F5F4F0] px-6 py-20 md:px-12 md:py-28 lg:px-20">
      <div className="mx-auto max-w-[1440px]">
        <div className="mb-12 max-w-3xl">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-[#1C54E8]">
            Serviços
          </p>

          <h2 className="text-4xl font-semibold tracking-tight text-[#111] md:text-6xl">
            Suporte técnico completo para sua operação.
          </h2>

          <p className="mt-5 text-lg leading-8 text-[#555451]">
            Além da fabricação de máquinas, a Kone oferece suporte técnico,
            reformas, peças e adequações para manter sua produção em movimento.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <article key={service.id} className="group bg-white">
              <div className="relative h-[260px] overflow-hidden bg-white">
                <FadeImage
                  src={service.image}
                  alt={service.name}
                  fill
                  className="object-contain p-8 transition duration-500 group-hover:scale-105"
                />
              </div>

              <div className="border-t border-[#E2E0D8] p-6">
                <h3 className="text-2xl font-semibold text-[#111]">
                  {service.name}
                </h3>

                <p className="mt-3 leading-7 text-[#555451]">
                  {service.description}
                </p>

                <a
                  href="#contato"
                  className="mt-6 inline-flex text-sm font-bold uppercase tracking-[0.2em] text-[#111] transition hover:text-[#1C54E8]"
                >
                  Solicitar atendimento →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}