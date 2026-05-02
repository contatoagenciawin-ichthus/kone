import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const name = String(body.name || "").trim();
    const company = String(body.company || "").trim();
    const phone = String(body.phone || "").trim();
    const message = String(body.message || "").trim();

    if (!name || !company || !phone) {
      return Response.json(
        { ok: false, error: "Nome, empresa e WhatsApp são obrigatórios." },
        { status: 400 }
      );
    }

    await resend.emails.send({
      from: "Kone Máquinas <onboarding@resend.dev>",
      to: process.env.CONTACT_TO_EMAIL || "vendas@kone.ind.br",
      subject: `Novo contato pelo site — ${company}`,
      replyTo: "vendas@kone.ind.br",
      html: `
        <h2>Novo contato pelo site da Kone</h2>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>Empresa:</strong> ${company}</p>
        <p><strong>WhatsApp:</strong> ${phone}</p>
        <p><strong>Mensagem:</strong></p>
        <p>${message || "Não informado."}</p>
      `,
    });

    return Response.json({ ok: true });
  } catch {
    return Response.json(
      { ok: false, error: "Erro ao enviar contato." },
      { status: 500 }
    );
  }
}