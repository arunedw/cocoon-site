"use client";
import Link from "next/link";
import { useState } from "react";
import { nav } from "@/lib/site";
import Logo from "./Logo";
import Chevron from "./Chevron";

export default function Header() {
  const [open, setOpen] = useState<string | null>(null);
  const [mobile, setMobile] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/95 backdrop-blur" onMouseLeave={() => setOpen(null)}>
      <div className="container-x flex h-[72px] items-center gap-6 justify-between">
        <Logo />
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
          {nav.map((g) =>
            g.href ? (
              <Link key={g.label} href={g.href} className="rounded-full px-3.5 py-2 text-[15px] hover:bg-navy-soft">{g.label}</Link>
            ) : (
              <div key={g.label} className="relative" onMouseEnter={() => setOpen(g.label)}>
                <button className="flex items-center gap-1 rounded-full px-3.5 py-2 text-[15px] hover:bg-navy-soft" aria-expanded={open === g.label} onClick={() => setOpen(open === g.label ? null : g.label)}>
                  {g.label} <Chevron className={open === g.label ? "rotate-180" : ""} />
                </button>
                {open === g.label && (
                  <div className="absolute left-1/2 top-full -translate-x-1/2 pt-2">
                    <div className="card flex gap-8 p-6 shadow-lg">
                      {g.columns!.map((c) => (
                        <div key={c.title} className="w-64">
                          <p className="label mb-3">{c.title}</p>
                          <ul className="space-y-3">
                            {c.links.map((l) => (
                              <li key={l.href}>
                                <Link href={l.href} onClick={() => setOpen(null)} className="block rounded-lg p-2 -m-2 hover:bg-navy-soft">
                                  <span className="block text-[15px] font-medium">{l.label}</span>
                                  {l.desc && <span className="block text-sm text-muted">{l.desc}</span>}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )
          )}
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          <a href="https://main.df01b5aorupdv.amplifyapp.com" className="text-[15px] hover:underline">Sign in</a>
          <Link href="/demo" className="btn-primary">Book a demo</Link>
        </div>
        <button className="lg:hidden rounded-full border border-line px-3 py-1.5 text-sm" onClick={() => setMobile(!mobile)} aria-expanded={mobile}>
          {mobile ? "Close" : "Menu"}
        </button>
      </div>
      {mobile && (
        <div className="border-t border-line bg-paper lg:hidden">
          <div className="container-x space-y-4 py-4">
            {nav.map((g) => (
              <div key={g.label} className="border-b border-line pb-3">
                {g.href ? (
                  <Link href={g.href} onClick={() => setMobile(false)} className="block py-2 text-lg font-medium">{g.label}</Link>
                ) : (
                  <details className="group">
                    <summary className="flex cursor-pointer list-none items-center justify-between py-2 text-lg font-medium [&::-webkit-details-marker]:hidden">
                      {g.label}<Chevron className="group-open:rotate-180" />
                    </summary>
                    {g.columns!.flatMap((c) => c.links).map((l) => (
                      <Link key={l.href} href={l.href} onClick={() => setMobile(false)} className="block py-2 pl-3 text-base text-muted">{l.label}</Link>
                    ))}
                  </details>
                )}
              </div>
            ))}
            <Link href="/demo" onClick={() => setMobile(false)} className="btn-primary w-full">Book a demo</Link>
          </div>
        </div>
      )}
    </header>
  );
}
