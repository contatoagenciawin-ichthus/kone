import Link from "next/link"
import { Download, ExternalLink, FileText, MessageCircle } from "lucide-react"
import { machineCategories, machines } from "@/lib/data/machines"

const whatsappNumber = "5519981557550"

function getWhatsappLink(machineName: string) {
  const message = `Olá, vim pelo site da Kone e gostaria de mais informações sobre a máquina ${machineName}.`
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
}

export default function MaquinasPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <div className="mb-12 max-w-3xl">
          <span className="mb-4 inline-flex rounded-full border px-4 py-2 text-sm font-medium">
            Catálogo técnico
          </span>

          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
            Máquinas e equipamentos Kone
          </h1>

          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Consulte os modelos disponíveis, veja as principais informações de
            cada equipamento e acesse os catálogos técnicos completos em PDF.
          </p>
        </div>

        <div className="space-y-14">
          {machineCategories.map((category) => {
            const categoryMachines = machines.filter(
              (machine) => machine.category === category
            )

            return (
              <section key={category}>
                <div className="mb-6">
                  <h2 className="text-2xl font-semibold">{category}</h2>
                  <div className="mt-3 h-px w-full bg-border" />
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {categoryMachines.map((machine) => (
                    <article
                      key={machine.slug}
                      className="flex flex-col rounded-2xl border bg-card p-6 shadow-sm transition hover:shadow-md"
                    >
                      <div className="mb-5">
                        <div className="mb-3 flex flex-wrap gap-2">
                          {machine.models.map((model) => (
                            <span
                              key={model}
                              className="rounded-full bg-muted px-3 py-1 text-xs font-medium"
                            >
                              {model}
                            </span>
                          ))}
                        </div>

                        <h3 className="text-2xl font-semibold">
                          {machine.name}
                        </h3>

                        <p className="mt-3 text-sm leading-6 text-muted-foreground">
                          {machine.description}
                        </p>
                      </div>

                      <ul className="mb-6 space-y-2 text-sm text-muted-foreground">
                        {machine.highlights.map((highlight) => (
                          <li key={highlight} className="flex gap-2">
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-current" />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>

                      {machine.orientation === "landscape" && (
                        <div className="mb-6 rounded-xl border bg-muted/40 p-3 text-xs text-muted-foreground">
                          Este catálogo está em formato paisagem, ideal para
                          visualização em tela ampla ou impressão horizontal.
                        </div>
                      )}

                      <div className="mt-auto flex flex-col gap-3">
                        <Link
                          href={machine.pdfUrl}
                          target="_blank"
                          className="inline-flex items-center justify-center gap-2 rounded-xl border px-4 py-3 text-sm font-medium transition hover:bg-muted"
                        >
                          <ExternalLink className="h-4 w-4" />
                          Abrir catálogo
                        </Link>

                        <a
                          href={machine.pdfUrl}
                          download
                          className="inline-flex items-center justify-center gap-2 rounded-xl border px-4 py-3 text-sm font-medium transition hover:bg-muted"
                        >
                          <Download className="h-4 w-4" />
                          Baixar PDF
                        </a>

                        <a
                          href={getWhatsappLink(machine.name)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-4 py-3 text-sm font-medium text-primary-foreground transition hover:opacity-90"
                        >
                          <MessageCircle className="h-4 w-4" />
                          Falar sobre este modelo
                        </a>
                      </div>
                    </article>
                  ))}
                </div>
              </section>
            )
          })}
        </div>

        <section className="mt-16 rounded-3xl border bg-muted/40 p-8 md:p-10">
          <div className="max-w-3xl">
            <FileText className="mb-5 h-8 w-8" />

            <h2 className="text-2xl font-semibold">
              Precisa de ajuda para escolher o equipamento?
            </h2>

            <p className="mt-4 text-muted-foreground">
              A equipe Kone pode orientar você na escolha da máquina mais
              adequada para sua necessidade técnica, aplicação e operação.
            </p>

            <a
              href={getWhatsappLink("catálogo de máquinas")}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition hover:opacity-90"
            >
              <MessageCircle className="h-4 w-4" />
              Falar com a Kone pelo WhatsApp
            </a>
          </div>
        </section>
      </section>
    </main>
  )
}