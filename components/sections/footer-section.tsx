"use client";

import Image from "next/image";
import Link from "next/link";

const footerLinks = {
  maquinas: [
    { label: "Furadeiras de Coluna", href: "#maquinas" },
    { label: "Fresadoras Universais", href: "#produtos" },
    { label: "Furadeiras de Bancada", href: "#produtos" },
  ],
  servicos: [
    { label: "Assistência Técnica", href: "#servicos" },
    { label: "Reforma de Máquinas", href: "#servicos" },
    { label: "Adequação NR-12", href: "#servicos" },
    { label: "Peças de Reposição", href: "#servicos" },
  ],
  empresa: [
    { label: "Sobre a Kone", href: "#sobre" },
    { label: "Educação Técnica", href: "#educacao" },
    { label: "Contato", href: "#contato" },
  ],
};

export function FooterSection() {
  return (
    <footer id="contato" className="bg-[#111] text-white">
      {/* Main */}
      <div className="border-t border-white/10 px-6 py-16 md:px-12 md:py-20 lg:px-20">
        <div className="mx-auto grid max-w-[1440px] grid-cols-2 gap-12 md:grid-cols-4 lg:grid-cols-5">
          {/* Brand + contato */}
          <div className="col-span-2 lg:col-span-2">
            <Link href="#hero" className="inline-flex items-center">
              <Image
                src="/machines/logo.png"
                alt="Kone Máquinas"
                width={160}
                height={60}
                className="h-auto w-40 invert"
              />
            </Link>

            <p className="mt-6 max-w-sm text-sm leading-7 text-white/60">
              Máquinas-ferramenta industriais, assistência técnica, reformas,
              peças de reposição e soluções para formação técnica.
            </p>

            {/* CONTATO */}
            <div className="mt-8 space-y-3 text-sm text-white/70">
              <p className="max-w-sm leading-6">
                Rua Lourenço Emelino Masuti, 500 — Bairro São Francisco,
                Limeira - SP, CEP 13.484-160
              </p>

              <p>
                <a href="mailto:vendas@kone.ind.br" className="hover:text-white">
                  vendas@kone.ind.br
                </a>
              </p>

              <p>
                <a
                  href="https://wa.me/5519981557550"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white"
                >
                  WhatsApp: (19) 98155-7550
                </a>
              </p>
            </div>
          </div>

          {/* Máquinas */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-white">Máquinas</h4>
            <ul className="space-y-3">
              {footerLinks.maquinas.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/55 transition hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Serviços */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-white">Serviços</h4>
            <ul className="space-y-3">
              {footerLinks.servicos.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/55 transition hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Empresa */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-white">Empresa</h4>
            <ul className="space-y-3">
              {footerLinks.empresa.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/55 transition hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/10 px-6 py-6 md:px-12 lg:px-20">
        <div className="mx-auto flex max-w-[1440px] flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-xs text-white/45">
            © 2026 Kone Máquinas. Todos os direitos reservados.
          </p>

          <div className="flex items-center gap-4">
            <Link href="#" className="text-xs text-white/45 hover:text-white">
              Instagram
            </Link>
            <Link href="#" className="text-xs text-white/45 hover:text-white">
              LinkedIn
            </Link>
            <Link href="#contato" className="text-xs text-white/45 hover:text-white">
              Contato
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}