"use client";

const specs = [
  { label: "Desde", value: "1974" },
  { label: "Modelos", value: "+40" },
  { label: "Fabricação", value: "Brasil" },
  { label: "Qualidade", value: "ISO 9001" },
];

export function EditorialSection() {
  return (
    <section className="bg-[#111] text-white">
      <div className="grid grid-cols-2 border-t border-white/10 md:grid-cols-4">
        {specs.map((spec) => (
          <div
            key={spec.label}
            className="border-b border-r border-white/10 p-8 text-center last:border-r-0 md:border-b-0"
          >
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-white/45">
              {spec.label}
            </p>

            <p className="text-4xl font-semibold tracking-tight text-white md:text-5xl">
              {spec.value}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}