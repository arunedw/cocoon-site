import type { Metadata } from "next";
import Link from "next/link";
import CTA from "@/components/sections/CTA";
export const metadata: Metadata = { title: "Pricing", description: "Cocoon plans for IB schools. Talk to us for a quote based on your programmes and size.", alternates: { canonical: "/pricing" } };

const tiers = [
  { name: "Plan", for: "For teams starting with planning", items: ["Inquiry Hooks", "PPT Engine", "Unit & lesson planning", "IB reference library"] },
  { name: "Teach & Assess", for: "For a complete MYP/DP teaching workflow", items: ["Everything in Plan", "Teach Studio + room pulse", "Objective & subjective assessment", "Criterion-based AI marking", "Reports"], featured: true },
  { name: "Whole school", for: "For coordinators and leadership", items: ["Everything in Teach & Assess", "Accreditation evidence (IB, CIS, NEASC)", "Coordinator dashboards", "Onboarding & training", "Priority support"] },
];

export default function Pricing() {
  return (
    <>
      <section className="container-x pt-10 sm:pt-12 text-center">
        <p className="label">Pricing</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">Plans that fit your IB school</h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg text-muted">Pricing depends on your programmes and number of teachers. Tell us about your school and we will send a quote.</p>
      </section>
      <section className="container-x mt-12 grid gap-6 md:grid-cols-3">
        {tiers.map((t) => (
          <div key={t.name} className={`card flex flex-col p-8 ${t.featured ? "border-navy ring-1 ring-navy" : ""}`}>
            <h2 className="text-xl font-semibold">{t.name}</h2>
            <p className="mt-1 text-base text-muted">{t.for}</p>
            <ul className="mt-6 flex-1 space-y-2 text-base">{t.items.map((i) => <li key={i}>✓ {i}</li>)}</ul>
            <Link href="/demo" className={`mt-8 ${t.featured ? "btn-primary" : "btn-ghost"}`}>Talk to us</Link>
          </div>
        ))}
      </section>
      <CTA />
    </>
  );
}
