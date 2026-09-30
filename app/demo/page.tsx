import type { Metadata } from "next";
import DemoForm from "./DemoForm";
export const metadata: Metadata = { title: "Book a demo", description: "See Cocoon in action. Book a 30-minute walkthrough with an IB educator.", alternates: { canonical: "/demo" } };

export default function Demo() {
  return (
    <section className="container-x grid gap-12 pt-10 sm:pt-12 md:grid-cols-2">
      <div>
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">See Cocoon in action</h1>
        <p className="mt-5 text-lg text-muted">Book a 30-minute walkthrough tailored to your MYP or DP team.</p>
        <ul className="mt-8 space-y-3">
          {["Plan inquiry-led units and decks in minutes", "Mark against IB criteria with AI assist", "Keep accreditation evidence ready, all year"].map((b) => <li key={b} className="flex gap-2">✓ <span>{b}</span></li>)}
        </ul>
      </div>
      <DemoForm />
    </section>
  );
}
