import Link from "next/link";
import { footer } from "@/lib/site";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-line bg-white">
      <div className="container-x grid gap-10 py-14 md:grid-cols-5">
        <div className="md:col-span-1">
          <Logo />
          <p className="mt-4 text-sm text-muted">Everything an IB teacher needs, working together, so no student slips through.</p>
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
      <div className="border-t border-line py-6 text-center font-mono text-sm text-muted">© {new Date().getFullYear()} Cocoon by Edwisely · Made for teachers</div>
    </footer>
  );
}
