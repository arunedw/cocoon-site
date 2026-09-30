import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { pages } from "@/lib/site";
import { content } from "@/lib/content";
import Placeholder from "@/components/sections/Placeholder";
import CTA from "@/components/sections/CTA";
import FAQ from "@/components/sections/FAQ";
import Flow from "@/components/sections/Flow";

const find = (slug: string[]) => pages.find((p) => p.slug.join("/") === slug.join("/"));
const IMG = { width: 3420, height: 2042 };

export function generateStaticParams() { return pages.map((p) => ({ slug: p.slug })); }
export const dynamicParams = false;

export function generateMetadata({ params }: { params: { slug: string[] } }): Metadata {
  const p = find(params.slug); if (!p) return {};
  return { title: p.title, description: p.description, alternates: { canonical: "/" + p.slug.join("/") }, openGraph: { title: p.title, description: p.description } };
}

export default function Page({ params }: { params: { slug: string[] } }) {
  const p = find(params.slug); if (!p) notFound();
  const c = content[p.slug.join("/")];

  if (!c) return (
    <>
      <section className="container-x pt-10 sm:pt-12">
        <p className="label">{p.slug.join(" / ")}</p>
        <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">{p.h1}</h1>
        <p className="mt-5 max-w-3xl text-lg text-muted sm:text-xl">{p.description}</p>
      </section>
      <section className="container-x mt-12 grid gap-4">{p.sections.map((s) => <Placeholder key={s} name={s} />)}</section>
      <CTA />
    </>
  );

  const crumbs = [{ name: "Home", url: "/" }, ...p.slug.map((_, i) => ({ name: p.slug[i], url: "/" + p.slug.slice(0, i + 1).join("/") }))];
  const ld = [
    { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: c.faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
    { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: crumbs.map((b, i) => ({ "@type": "ListItem", position: i + 1, name: b.name, item: b.url })) },
  ];

  return (
    <>
      <section className="container-x pt-10 sm:pt-12">
        <nav className="label" aria-label="Breadcrumb">
          <Link href="/" className="hover:underline">Home</Link>
          {p.slug.map((s, i) => <span key={s}> / {i < p.slug.length - 1 ? s : <span className="text-ink">{c.eyebrow}</span>}</span>)}
        </nav>
        <h1 className="mt-5 max-w-4xl text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">{p.h1}</h1>
        <p className="mt-5 max-w-3xl text-lg text-muted sm:text-xl">{c.lead}</p>
        <div className="mt-8 flex gap-3">
          <Link href="/demo" className="btn-primary">Book a demo</Link>
          <Link href="/pricing" className="btn-ghost">See plans</Link>
        </div>
        {c.heroImg && <div className="card mt-12 overflow-hidden p-2 shadow-xl"><Image src={c.heroImg} alt={c.heroAlt ?? ""} {...IMG} className="rounded-xl" quality={90} sizes="(min-width: 1440px) 1360px, 100vw" priority /></div>}
      </section>

      {c.pains && (
        <section className="container-x mt-20">
          <h2 className="text-2xl font-semibold tracking-tight">The problem</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {c.pains.map((x) => <div key={x.title} className="card p-6"><h3 className="font-semibold">{x.title}</h3><p className="mt-2 text-base text-muted">{x.body}</p></div>)}
          </div>
        </section>
      )}

      {c.flow && <Flow {...c.flow} />}

      <section className="container-x mt-20 space-y-20">
        {c.blocks.map((b, i) => (
          <div key={b.title} className={b.img ? `grid items-center gap-12 lg:gap-16 md:grid-cols-2 ${i % 2 ? "md:[&>*:first-child]:order-2" : ""}` : "max-w-3xl"}>
            <div>
              <p className="label">{b.label}</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight">{b.title}</h2>
              <p className="mt-4 text-muted">{b.body}</p>
              {b.bullets && <ul className="mt-5 space-y-2 text-base">{b.bullets.map((x) => <li key={x} className="flex gap-2"><span className="text-navy">✓</span>{x}</li>)}</ul>}
            </div>
            {b.img && <div className="card overflow-hidden p-2"><Image src={b.img} alt={b.alt ?? ""} {...IMG} className="rounded-xl" quality={90} sizes="(min-width: 768px) 50vw, 100vw" /></div>}
          </div>
        ))}
      </section>

      <FAQ items={c.faqs} />

      <section className="container-x mt-16">
        <p className="label text-center">Related</p>
        <div className="mt-4 flex flex-wrap justify-center gap-3">
          {c.related.map((r) => <Link key={r.href} href={r.href} className="btn-ghost">{r.label} →</Link>)}
        </div>
      </section>

      <CTA />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
    </>
  );
}
