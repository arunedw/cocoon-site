import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { articles } from "@/lib/resources";
import { site } from "@/lib/site";
import CTA from "@/components/sections/CTA";

export function generateStaticParams() { return articles.map((a) => ({ slug: a.slug })); }
export const dynamicParams = false;
export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const a = articles.find((x) => x.slug === params.slug); if (!a) return {};
  return { title: a.title, description: a.description, alternates: { canonical: `/resources/${a.slug}` }, openGraph: { type: "article", title: a.title, description: a.description, publishedTime: a.date, images: [`/og?title=${encodeURIComponent(a.title)}`] } };
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const a = articles.find((x) => x.slug === params.slug); if (!a) notFound();
  const ld = [
    { "@context": "https://schema.org", "@type": "Article", headline: a.title, description: a.description, datePublished: a.date, author: { "@type": "Organization", name: "Cocoon by Edwisely" }, publisher: { "@type": "Organization", name: "Cocoon by Edwisely", logo: { "@type": "ImageObject", url: site.url + "/icon.svg" } }, mainEntityOfPage: `${site.url}/resources/${a.slug}` },
    { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: site.url },
      { "@type": "ListItem", position: 2, name: "Resources", item: site.url + "/resources" },
      { "@type": "ListItem", position: 3, name: a.title, item: `${site.url}/resources/${a.slug}` } ] },
  ];
  return (
    <>
      <article className="container-x max-w-3xl pt-10 sm:pt-12">
        <nav className="label" aria-label="Breadcrumb"><Link href="/" className="hover:underline">Home</Link> / <Link href="/resources" className="hover:underline">Resources</Link></nav>
        <p className="label mt-8">{a.programme} · {a.topic} · {a.readMins} min read</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">{a.title}</h1>
        <p className="mt-6 text-lg text-muted sm:text-xl">{a.intro}</p>
        {a.sections.map((s) => (
          <section key={s.h} className="mt-12">
            <h2 className="text-2xl font-semibold tracking-tight">{s.h}</h2>
            {s.p?.map((x) => <p key={x} className="mt-4 leading-relaxed">{x}</p>)}
            {s.list && <ul className="mt-4 list-disc space-y-2 pl-6">{s.list.map((x) => <li key={x}>{x}</li>)}</ul>}
            {s.table && (
              <div className="card mt-5 overflow-x-auto">
                <table className="w-full text-left text-[15px]">
                  <thead className="bg-navy-soft"><tr>{s.table.head.map((h) => <th key={h} scope="col" className="px-4 py-3 font-semibold">{h}</th>)}</tr></thead>
                  <tbody className="divide-y divide-line">{s.table.rows.map((r) => <tr key={r[0]}>{r.map((c, i) => i === 0 ? <th key={i} scope="row" className="px-4 py-3 font-medium">{c}</th> : <td key={i} className="px-4 py-3 text-muted">{c}</td>)}</tr>)}</tbody>
                </table>
              </div>
            )}
          </section>
        ))}
        {a.related && <Link href={a.related.href} className="btn-ghost mt-12">{a.related.label} →</Link>}
      </article>
      <CTA />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
    </>
  );
}
