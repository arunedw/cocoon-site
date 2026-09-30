import Image from "next/image";
import Link from "next/link";
import CTA from "@/components/sections/CTA";
import { site } from "@/lib/site";
import FAQ from "@/components/sections/FAQ";
import Flow from "@/components/sections/Flow";

const pillars = [
  { tag: "Plan", title: "Inquiry-led units in minutes", body: "Pick a topic and level. Cocoon drafts inquiry hooks and a lesson deck built on the IB inquiry cycle, anchored to Key Concepts and ATL skills.", img: "/screens/inquiry-hooks-v2.png", href: "/product/unit-planning" },
  { tag: "Teach", title: "Teach live and read the room", body: "Run a sectioned lesson blueprint in Teach Studio and check the room's pulse as you go: lost, mixed, tracking or flying.", img: "/screens/teach-studio-v2.png", href: "/product/teach" },
  { tag: "Assess", title: "Criterion-based marking, teacher in control", body: "Cocoon evaluates every response in depth: criterion by criterion, strand by strand, against the band descriptors. You see the evidence behind each suggestion, adjust the band and release when ready.", img: "/screens/marking-v2.png", href: "/product/assessment" },
];

const faqs = [
  { q: "Is Cocoon only for IB schools?", a: "Yes. Cocoon is built specifically for IB MYP and DP teachers and coordinators." },
  { q: "Does the AI grade students on its own?", a: "No. The AI suggests bands with strand-level evidence; teachers make every final decision and control when results are released." },
  { q: "Can we export plans and decks?", a: "Yes. Unit plans print or save as PDF, and lesson decks export to PowerPoint, PDF or Google Slides." },
  { q: "Can Cocoon help with accreditation?", a: "Yes. Everyday teaching artefacts are tagged as evidence for IB, CIS and NEASC." },
];

export default function Home() {
  const faqLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) };
  return (
    <>
      <section className="container-x pt-10 text-center sm:pt-14">
        <p className="label">IB MYP · DP · Built for teachers</p>
        <h1 className="mx-auto mt-5 max-w-5xl text-4xl font-semibold tracking-tight sm:text-6xl lg:text-7xl">{site.tagline}</h1>
        <p className="mx-auto mt-6 max-w-3xl text-lg text-muted sm:text-xl">Cocoon is the IB teaching platform for MYP and DP: plan inquiry-led units, teach, mark against criteria and stay accreditation-ready, so no student slips through.</p>
        <div className="mt-8 flex justify-center gap-3">
          <Link href="/demo" className="btn-primary">Book a demo</Link>
          <Link href="/product" className="btn-ghost">Explore the product</Link>
        </div>
        <div className="card mx-auto mt-10 overflow-hidden p-2 shadow-xl">
          <Image src="/screens/home-v2.png" alt="Cocoon teacher home: week at a glance, priorities and students needing support" width={3420} height={2042} className="rounded-xl" quality={90} sizes="(min-width: 1440px) 1360px, 100vw" priority />
        </div>
      </section>


      <section className="container-x mt-20 space-y-24">
        {pillars.map((p, i) => (
          <div key={p.tag} className={`grid items-center gap-12 lg:gap-16 md:grid-cols-2 ${i % 2 ? "md:[&>*:first-child]:order-2" : ""}`}>
            <div>
              <p className="label">{p.tag}</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight">{p.title}</h2>
              <p className="mt-4 text-muted">{p.body}</p>
              <Link href={p.href} className="mt-6 inline-block text-sm font-medium text-navy hover:underline">Learn more →</Link>
            </div>
            <div className="card overflow-hidden p-2"><Image src={p.img} alt={`${p.tag} in Cocoon`} width={3420} height={2042} className="rounded-xl" quality={90} sizes="(min-width: 768px) 50vw, 100vw" /></div>
          </div>
        ))}
      </section>

      <section className="container-x mt-20">
        <div className="card grid gap-8 p-10 md:grid-cols-2">
          <div>
            <p className="label">Accreditation</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight">Tag once, comply everywhere</h2>
          </div>
          <div>
            <p className="text-muted">Every unit, lesson and assessment becomes evidence for IB, CIS and NEASC, with no extra work for teachers.</p>
            <Link href="/accreditation" className="mt-4 inline-block text-sm font-medium text-navy hover:underline">See how →</Link>
          </div>
        </div>
      </section>

      <section className="container-x mt-20">
        <h2 className="text-center text-3xl font-semibold tracking-tight">MYP or DP, Cocoon fits</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {[["IB MYP", "Criteria A–D, command terms, global contexts and ATL built in.", "/programmes/myp"], ["IB DP", "Unit planning, IA and EE supervision, and exam readiness.", "/programmes/dp"]].map(([t, d, h]) => (
            <Link key={h} href={h} className="card block p-8 hover:border-navy">
              <h3 className="text-xl font-semibold">{t}</h3><p className="mt-2 text-muted">{d}</p>
            </Link>
          ))}
        </div>
      </section>

      <Flow label="How Cocoon evaluates" title="Marking that goes down to the strand" steps={[
        { name: "Criterion", desc: "Pick the MYP criteria the task assesses, A to D." },
        { name: "Strand", desc: "Each criterion is broken into its strands (i, ii, iii…), judged one at a time." },
        { name: "Evidence", desc: "For every strand, Cocoon quotes what the student did and marks it demonstrated or partial." },
        { name: "Band", desc: "Strand judgements roll up to a best-fit band against the descriptors." },
        { name: "Teacher decision", desc: "You review, change any band and release results. Nothing is automatic." },
      ]} />

      <FAQ items={faqs} title="Questions" />

      <CTA />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
    </>
  );
}
