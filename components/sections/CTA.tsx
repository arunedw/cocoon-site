import Link from "next/link";
export default function CTA({ title = "See Cocoon in your classroom", sub = "A 30-minute walkthrough with an IB educator on our team." }: { title?: string; sub?: string }) {
  return (
    <section className="container-x mt-24">
      <div className="rounded-3xl bg-navy px-8 py-14 text-center text-white">
        <h2 className="text-3xl font-semibold tracking-tight">{title}</h2>
        <p className="mx-auto mt-3 max-w-xl text-white/80">{sub}</p>
        <div className="mt-8 flex justify-center gap-3">
          <Link href="/demo" className="btn bg-white text-navy hover:bg-navy-soft">Book a demo</Link>
          <Link href="/pilot" className="btn border border-white/40 text-white hover:bg-white/10">Join the pilot</Link>
        </div>
      </div>
    </section>
  );
}
