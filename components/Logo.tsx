import Link from "next/link";
export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2" aria-label="Cocoon home">
      <span className="grid h-8 w-8 place-items-center rounded-full bg-navy text-sm font-semibold text-white">C</span>
      <span className="leading-tight">
        <span className="block text-lg font-semibold tracking-tight">cocoon<span className="text-navy">.</span></span>
        <span className="block font-mono text-[11px] uppercase tracking-widest text-muted">by Edwisely</span>
      </span>
    </Link>
  );
}
