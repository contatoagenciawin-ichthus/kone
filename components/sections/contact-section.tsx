"use client";

import { useState } from "react";

export function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    company: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const whatsappNumber = "5519981557550";

  const whatsappText = encodeURIComponent(
    `Olá, sou ${form.name || "[nome]"} da empresa ${form.company || "[empresa]"}.
Gostaria de falar com a Kone Máquinas.

WhatsApp: ${form.phone || "[whatsapp]"}
Mensagem: ${form.message || "Tenho interesse em solicitar um orçamento."}`
  );

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappText}`;

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Erro ao enviar");

      setStatus("sent");
      window.open(whatsappUrl, "_blank");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contato" className="bg-[#F5F4F0] px-6 py-20 md:px-12 md:py-28 lg:px-20">
      <div className="mx-auto grid max-w-[1440px] gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div>
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-[#1C54E8]">
            Contato
          </p>

          <h2 className="text-4xl font-semibold tracking-tight text-[#111] md:text-6xl">
            Fale com a Kone.
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#555451]">
            Nossa equipe técnica está pronta para entender sua necessidade e indicar
            a melhor solução em máquinas, peças, assistência ou adequação técnica.
          </p>

          <div className="mt-10 space-y-4 text-[#111]">
            <p>
              <strong>E-mail:</strong>{" "}
              <a href="mailto:vendas@kone.ind.br" className="hover:text-[#1C54E8]">
                vendas@kone.ind.br
              </a>
            </p>

            <p>
              <strong>WhatsApp:</strong>{" "}
              <a href="https://wa.me/5519981557550" target="_blank" rel="noreferrer" className="hover:text-[#1C54E8]">
                (19) 98155-7550
              </a>
            </p>

            <p className="max-w-xl leading-7">
              <strong>Endereço:</strong> Rua Lourenço Emelino Masuti, 500 —
              Bairro São Francisco, Limeira - SP, CEP 13.484-160
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="border border-[#E2E0D8] bg-white p-6 md:p-8">
          <div className="grid gap-5">
            <label className="grid gap-2">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#555451]">
                Nome
              </span>
              <input
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="h-12 border border-[#E2E0D8] px-4 outline-none focus:border-[#1C54E8]"
                placeholder="Seu nome"
              />
            </label>

            <label className="grid gap-2">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#555451]">
                Empresa
              </span>
              <input
                required
                value={form.company}
                onChange={(e) => setForm({ ...form, company: e.target.value })}
                className="h-12 border border-[#E2E0D8] px-4 outline-none focus:border-[#1C54E8]"
                placeholder="Nome da empresa"
              />
            </label>

            <label className="grid gap-2">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#555451]">
                WhatsApp
              </span>
              <input
                required
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="h-12 border border-[#E2E0D8] px-4 outline-none focus:border-[#1C54E8]"
                placeholder="(00) 00000-0000"
              />
            </label>

            <label className="grid gap-2">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#555451]">
                Mensagem
              </span>
              <textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="min-h-32 resize-none border border-[#E2E0D8] p-4 outline-none focus:border-[#1C54E8]"
                placeholder="Conte rapidamente o que você procura."
              />
            </label>

            <button
              type="submit"
              disabled={status === "sending"}
              className="min-h-12 bg-[#1C54E8] px-6 py-4 text-xs font-bold uppercase tracking-[0.2em] text-white transition hover:bg-[#111] disabled:opacity-60"
            >
              {status === "sending" ? "Enviando..." : "Enviar contato"}
            </button>

            {status === "sent" && (
              <p className="text-sm text-green-700">
                Contato enviado. O WhatsApp será aberto com a mensagem preenchida.
              </p>
            )}

            {status === "error" && (
              <p className="text-sm text-red-700">
                Não foi possível enviar agora. Tente pelo WhatsApp ou e-mail.
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}