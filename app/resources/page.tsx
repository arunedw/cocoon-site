import type { Metadata } from "next";
import Link from "next/link";
import { articles } from "@/lib/resources";
import CTA from "@/components/sections/CTA";
export const metadata: Metadata = { title: "IB MYP & DP Teacher Resources", description: "Guides, explainers and templates for IB MYP and DP teachers and coordinators: criteria, strands, command terms and more.", alternates: { canonical: "/resources" } };

export default function Resources() {
  return (
    <>
      <section className="container-x pt-10 sm:pt-12">
        <p className="label">Resources</p>
        <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">Resources for IB teachers</h1>
        <p className="mt-5 max-w-3xl text-lg text-muted sm:text-xl">Practical guides for MYP and DP teachers and coordinators, written by people who know the programmes.</p>
      </section>
      <section className="container-x mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {articles.map((a) => (
          <Link key={a.slug} href={`/resources/${a.slug}`} className="card flex flex-col p-7 hover:border-navy">
            <p className="label">{a.programme} · {a.topic}</p>
            <h2 className="mt-3 text-xl font-semibold leading-snug">{a.title}</h2>
            <p className="mt-3 flex-1 text-muted">{a.description}</p>
            <p className="mt-6 font-mono text-sm text-muted">{a.readMins} min read</p>
          </Link>
        ))}
      </section>
      <CTA />
    </>
  );
}
