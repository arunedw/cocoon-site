export default function Flow({ label, title, steps }: { label: string; title: string; steps: { name: string; desc: string }[] }) {
  return (
    <section className="container-x mt-24">
      <p className="label">{label}</p>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight">{title}</h2>
      <ol className="mt-8 grid gap-4" style={{ gridTemplateColumns: `repeat(auto-fit, minmax(190px, 1fr))` }}>
        {steps.map((s, i) => (
          <li key={s.name} className="card relative p-6">
            <span className="font-mono text-sm text-navy">{String(i + 1).padStart(2, "0")}</span>
            <h3 className="mt-2 text-lg font-semibold">{s.name}</h3>
            <p className="mt-2 text-[15px] text-muted">{s.desc}</p>
            {i < steps.length - 1 && <span aria-hidden className="absolute -right-3 top-1/2 z-10 hidden h-6 w-6 -translate-y-1/2 place-items-center rounded-full border border-line bg-paper text-navy lg:grid">→</span>}
          </li>
        ))}
      </ol>
    </section>
  );
}
