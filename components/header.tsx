"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const navItems = [
  { label: "Sobre", href: "/#sobre" },
  { label: "Máquinas", href: "/maquinas" },
  { label: "Portfólio", href: "/#produtos" },
  { label: "Educação", href: "/#educacao" },
  { label: "Serviços", href: "/#servicos" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 h-14 border-b border-black/10 bg-[#F5F4F0]/95 backdrop-blur">
      <div className="mx-auto flex h-full max-w-[1440px] items-center justify-between px-5 md:px-12 lg:px-20">
        <Link href="/#hero" className="flex items-center">
          <Image
            src="/machines/logo.png"
            alt="Kone Máquinas"
            width={130}
            height={44}
            priority
            className="h-auto w-28 md:w-32"
          />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-xs font-bold uppercase tracking-[0.18em] text-[#111] transition hover:text-[#1C54E8]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <a
          href="mailto:vendas@kone.ind.br?subject=Solicitação%20de%20orçamento%20-%20Kone%20Máquinas"
          className="hidden bg-[#1C54E8] px-5 py-3 text-xs font-bold uppercase tracking-[0.16em] text-white transition hover:bg-[#111] md:inline-flex"
        >
          Solicitar orçamento
        </a>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="inline-flex h-10 w-10 items-center justify-center border border-black/15 text-[#111] lg:hidden"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
        >
          {open ? "×" : "☰"}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-black/10 bg-[#F5F4F0] px-5 py-5 lg:hidden">
          <nav className="flex flex-col gap-4">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-sm font-bold uppercase tracking-[0.18em] text-[#111]"
              >
                {item.label}
              </Link>
            ))}

            <a
              href="mailto:vendas@kone.ind.br?subject=Solicitação%20de%20orçamento%20-%20Kone%20Máquinas"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex justify-center bg-[#1C54E8] px-5 py-4 text-xs font-bold uppercase tracking-[0.16em] text-white"
            >
              Solicitar orçamento
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}