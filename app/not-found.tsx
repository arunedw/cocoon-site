import Link from "next/link";
export const metadata = { title: "Page not found", robots: { index: false } };
export default function NotFound() {
  return (
    <section className="container-x py-28 text-center">
      <p className="label">404</p>
      <h1 className="mt-4 text-4xl font-semibold tracking-tight">This page has wandered off</h1>
      <p className="mx-auto mt-4 max-w-xl text-muted">The page you were looking for does not exist or has moved.</p>
      <div className="mt-8 flex justify-center gap-3"><Link href="/" className="btn-primary">Go home</Link><Link href="/resources" className="btn-ghost">Browse resources</Link></div>
    </section>
  );
}
