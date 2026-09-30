import type { Metadata } from "next";
import Link from "next/link";
import { company, tel } from "@/lib/site";

export const metadata: Metadata = { title: "Contact us", description: "Reach the Cocoon team at Edwisely: phone, email, office address in Hyderabad, and regional contacts in India and the USA.", alternates: { canonical: "/contact" }, openGraph: { images: ["/og?title=Talk%20to%20the%20Cocoon%20team"] } };

const Icon = ({ d }: { d: string }) => (
  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-navy-soft text-navy">
    <svg aria-hidden viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><path d={d} /></svg>
  </span>
);
const PHONE = "M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z";
const MAIL = "M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm18 2-10 7L2 6";
const PIN = "M12 21s-7-6.2-7-11a7 7 0 1 1 14 0c0 4.8-7 11-7 11zm0-8.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z";

export default function Contact() {
  const a = company.address;
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(company.mapsQuery)}`;
  const embed = `https://www.google.com/maps?q=${encodeURIComponent(company.mapsQuery)}&output=embed`;
  const cards = [
    { label: "Call us", value: company.phone, href: tel(company.phone), icon: PHONE },
    { label: "General enquiries", value: company.emailGeneral, href: `mailto:${company.emailGeneral}`, icon: MAIL },
    { label: "Partnerships & sales", value: company.emailSales, href: `mailto:${company.emailSales}`, icon: MAIL },
  ];
  return (
    <>
      <section className="container-x pt-10 sm:pt-12">
        <p className="label">Contact</p>
        <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">Talk to the Cocoon team</h1>
        <p className="mt-5 max-w-3xl text-lg text-muted sm:text-xl">Questions about Cocoon, a pilot for your school, or a partnership? Reach us directly, or <Link href="/demo" className="font-medium text-navy underline underline-offset-4">book a demo</Link>.</p>
      </section>

      <section className="container-x mt-12 grid gap-5 md:grid-cols-3">
        {cards.map((c) => (
          <a key={c.label} href={c.href} className="card flex items-center gap-4 p-6 hover:border-navy">
            <Icon d={c.icon} />
            <span><span className="label block">{c.label}</span><span className="mt-1 block text-lg font-semibold text-navy">{c.value}</span></span>
          </a>
        ))}
      </section>

      <section className="container-x mt-5 grid gap-5 lg:grid-cols-5">
        <div className="card overflow-hidden lg:col-span-3">
          <div className="flex gap-4 p-6">
            <Icon d={PIN} />
            <div>
              <p className="label">Head office</p>
              <address className="mt-2 not-italic leading-relaxed">
                Edwisely, 3rd Floor, Trendz Orbit Building<br />Diamond Hills, Lumbini Avenue<br />{a.locality}<br />{a.region} {a.postal}, {a.countryName}
              </address>
              <a href={mapsUrl} target="_blank" rel="noopener noreferrer" className="mt-3 inline-block text-sm font-medium text-navy hover:underline">Open in Google Maps ↗</a>
            </div>
          </div>
          <iframe title="Map of the Edwisely office in Gachibowli, Hyderabad" src={embed} loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="h-72 w-full border-0 border-t border-line" />
        </div>

        <div className="card p-6 lg:col-span-2">
          <p className="label">Follow us</p>
          <p className="mt-2 text-muted">Product releases, research and events from the Edwisely team.</p>
          <ul className="mt-5 space-y-3">
            {company.social.map((s) => (
              <li key={s.name}>
                <a href={s.href} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between rounded-xl border border-line p-4 hover:border-navy">
                  <span><span className="block font-semibold text-navy">{s.name}</span><span className="text-sm text-muted">{s.handle}</span></span>
                  <span aria-hidden className="text-navy">↗</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="container-x mt-16">
        <h2 className="label">Regional contacts</h2>
        <div className="mt-5 grid gap-5 md:grid-cols-3">
          {company.offices.map((o) => (
            <div key={o.city} className="card p-6">
              <p className="text-lg font-semibold">{o.city}</p>
              <p className="text-muted">{o.note}</p>
              <a href={tel(o.phone)} className="mt-3 inline-block font-medium text-navy hover:underline">{o.phone}</a>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
