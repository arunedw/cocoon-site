"use client";
import { useState } from "react";
const field = "w-full rounded-xl border border-line bg-white px-4 py-3 text-base outline-none focus:border-navy";
export default function DemoForm() {
  const [done, setDone] = useState(false);
  if (done) return (
    <div className="card grid place-items-center p-10 text-center">
      <div><h2 className="text-2xl font-semibold">Thanks, we will be in touch</h2><p className="mt-2 text-muted">Prototype only: nothing was sent.</p></div>
    </div>
  );
  return (
    <form className="card space-y-4 p-8" onSubmit={(e) => { e.preventDefault(); setDone(true); }}>
      <div className="grid gap-4 sm:grid-cols-2">
        <input required className={field} placeholder="First name*" aria-label="First name" />
        <input required className={field} placeholder="Last name*" aria-label="Last name" />
      </div>
      <input required type="email" className={field} placeholder="Work email*" aria-label="Work email" />
      <input required className={field} placeholder="School name*" aria-label="School name" />
      <div className="grid gap-4 sm:grid-cols-2">
        <select required className={field} aria-label="Role" defaultValue=""><option value="" disabled>Role*</option><option>Teacher</option><option>MYP/DP Coordinator</option><option>Head of School</option><option>IT / Admin</option></select>
        <select required className={field} aria-label="Programme" defaultValue=""><option value="" disabled>Programme*</option><option>MYP</option><option>DP</option><option>Both</option></select>
      </div>
      <label className="flex gap-2 text-sm text-muted"><input required type="checkbox" /> I agree to the Privacy Policy and Terms.</label>
      <button className="btn-primary w-full">Book a demo</button>
    </form>
  );
}
