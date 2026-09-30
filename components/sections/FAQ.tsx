import Chevron from "../Chevron";
export default function FAQ({ items, title = "Frequently asked questions" }: { items: { q: string; a: string }[]; title?: string }) {
  return (
    <section className="container-x mt-24 max-w-4xl">
      <h2 className="text-center text-3xl font-semibold tracking-tight">{title}</h2>
      <div className="card mt-8 divide-y divide-line">
        {items.map((f) => (
          <details key={f.q} className="group">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-6 font-medium [&::-webkit-details-marker]:hidden">
              {f.q}
              <span className="grid h-8 w-8 place-items-center rounded-full border border-line text-navy group-open:bg-navy group-open:text-white">
                <Chevron className="group-open:rotate-180" />
              </span>
            </summary>
            <p className="px-6 pb-6 -mt-2 text-muted">{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
