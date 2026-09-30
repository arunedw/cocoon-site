import Link from "next/link";
import { footer, company, tel } from "@/lib/site";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-line bg-white">
      <div className="container-x grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-6">
        <div className="md:col-span-2">
          <Logo />
          <p className="mt-4 text-[15px] text-muted">Everything an IB teacher needs, working together, so no student slips through.</p>
          <address className="mt-5 space-y-1 text-[15px] not-italic text-muted">
            <p>{company.address.street}, {company.address.locality} {company.address.postal}</p>
            <p><a href={tel(company.phone)} className="hover:underline">{company.phone}</a></p>
            <p><a href={`mailto:${company.emailGeneral}`} className="hover:underline">{company.emailGeneral}</a></p>
          </address>
          <ul className="mt-4 flex gap-3">
            {company.social.map((s) => <li key={s.name}><a href={s.href} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-navy hover:underline">{s.name.split(" ")[0]}</a></li>)}
          </ul>
        </div>
        {footer.map((col) => (
          <div key={col.title}>
            <p className="label mb-3">{col.title}</p>
            <ul className="space-y-2">
              {col.links.map((l) => (
                <li key={l.href}><Link href={l.href} className="text-[15px] hover:underline">{l.label}</Link></li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-line py-6 text-center font-mono text-sm text-muted">© {new Date().getFullYear()} Cocoon by <a href={company.website} className="hover:underline">Edwisely</a> · Made for teachers</div>
    </footer>
  );
}
