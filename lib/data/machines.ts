export type MachineCategory =
  | "Furadeiras de Coluna"
  | "Furadeiras de Bancada"
  | "Fresadoras Universais"

export type Machine = {
  slug: string
  name: string
  category: MachineCategory
  description: string
  models: string[]
  pdfUrl: string
  orientation: "portrait" | "landscape"
  highlights: string[]
}

export const machines: Machine[] = [
  {
    slug: "km-30",
    name: "KM-30",
    category: "Furadeiras de Coluna",
    description:
      "Furadeira de coluna indicada para operações industriais que exigem precisão, robustez e desempenho em processos de furação.",
    models: ["KM-30"],
    pdfUrl: "/catalogos/km-30.pdf",
    orientation: "portrait",
    highlights: [
      "Furadeira de coluna",
      "Mesa opcional inclinável",
      "Catálogo técnico em PDF",
    ],
  },
  {
    slug: "km-38",
    name: "KM-38",
    category: "Furadeiras de Coluna",
    description:
      "Furadeira de coluna para aplicações industriais, com estrutura robusta e informações técnicas completas para consulta.",
    models: ["KM-38"],
    pdfUrl: "/catalogos/km-38.pdf",
    orientation: "portrait",
    highlights: [
      "Furadeira de coluna",
      "Mesas opcionais",
      "Ficha técnica completa",
    ],
  },
  {
    slug: "km-45",
    name: "KM-45",
    category: "Furadeiras de Coluna",
    description:
      "Modelo de furadeira de coluna com mesa coordenada opcional e catálogo técnico detalhado para avaliação do equipamento.",
    models: ["KM-45"],
    pdfUrl: "/catalogos/km-45.pdf",
    orientation: "portrait",
    highlights: [
      "Furadeira de coluna",
      "Mesas opcionais",
      "Material técnico para download",
    ],
  },
  {
    slug: "km-50",
    name: "KM-50",
    category: "Furadeiras de Coluna",
    description:
      "Furadeira de coluna para operações que demandam maior capacidade, precisão e confiabilidade no uso industrial.",
    models: ["KM-50"],
    pdfUrl: "/catalogos/km-50.pdf",
    orientation: "portrait",
    highlights: [
      "Furadeira de coluna",
      "Mesa opcional",
      "Dados técnicos completos",
    ],
  },
  {
    slug: "ka-45",
    name: "KA-45",
    category: "Furadeiras de Coluna",
    description:
      "Furadeira de coluna da linha KA, com recursos técnicos voltados à produtividade, precisão e uso industrial contínuo.",
    models: ["KA-45"],
    pdfUrl: "/catalogos/ka-45.pdf",
    orientation: "portrait",
    highlights: [
      "Linha KA",
      "Mesas opcionais",
      "Catálogo técnico revisado",
    ],
  },
  {
    slug: "ka-50",
    name: "KA-50",
    category: "Furadeiras de Coluna",
    description:
      "Modelo da linha KA com catálogo técnico completo, indicado para aplicações industriais com exigência de robustez.",
    models: ["KA-50"],
    pdfUrl: "/catalogos/ka-50.pdf",
    orientation: "portrait",
    highlights: [
      "Linha KA",
      "Furadeira de coluna",
      "PDF técnico completo",
    ],
  },
  {
    slug: "ka-70",
    name: "KA-70",
    category: "Furadeiras de Coluna",
    description:
      "Furadeira de coluna de grande porte, indicada para operações industriais que exigem alta capacidade e estrutura reforçada.",
    models: ["KA-70"],
    pdfUrl: "/catalogos/ka-70.pdf",
    orientation: "portrait",
    highlights: [
      "Grande porte",
      "Linha KA",
      "Ficha técnica detalhada",
    ],
  },
  {
    slug: "kmb-32-kmb-32mc",
    name: "KMB-32 / KMB-32 MC",
    category: "Furadeiras de Bancada",
    description:
      "Furadeiras de bancada com catálogo técnico conjunto para consulta dos modelos KMB-32 e KMB-32 MC.",
    models: ["KMB-32", "KMB-32 MC"],
    pdfUrl: "/catalogos/kmb-32-kmb-32mc.pdf",
    orientation: "portrait",
    highlights: [
      "Furadeira de bancada",
      "Dois modelos no catálogo",
      "Ficha técnica completa",
    ],
  },
  {
    slug: "kfu-1-kfu-2-kfu-3",
    name: "KFU-1 / KFU-2 / KFU-3",
    category: "Fresadoras Universais",
    description:
      "Linha de fresadoras universais KFU, com catálogo técnico em formato paisagem reunindo os modelos KFU-1, KFU-2 e KFU-3.",
    models: ["KFU-1", "KFU-2", "KFU-3"],
    pdfUrl: "/catalogos/kfu-1-kfu-2-kfu-3.pdf",
    orientation: "landscape",
    highlights: [
      "Fresadoras universais",
      "Catálogo em modo paisagem",
      "Três modelos no mesmo material",
    ],
  },
]

export const machineCategories: MachineCategory[] = [
  "Furadeiras de Coluna",
  "Furadeiras de Bancada",
  "Fresadoras Universais",
]