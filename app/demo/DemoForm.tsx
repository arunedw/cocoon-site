import { company } from "@/lib/site";
export default function DemoForm() {
  return (
    <div className="card p-8">
      <h2 className="text-2xl font-semibold">Request your demo</h2>
      <ol className="mt-5 space-y-3 text-[15px]">
        <li><span className="font-mono text-navy">01</span> Tell us about your school and programmes</li>
        <li><span className="font-mono text-navy">02</span> See a live walkthrough tailored to your MYP or DP team</li>
        <li><span className="font-mono text-navy">03</span> Plan a pilot or rollout with our team</li>
      </ol>
      <a href={`${company.website}/request-demo`} className="btn-primary mt-8 w-full">Request a demo ↗</a>
      <p className="mt-4 text-sm text-muted">Opens the Edwisely demo form. Prefer email? Write to <a href={`mailto:${company.emailSales}`} className="text-navy underline">{company.emailSales}</a>.</p>
    </div>
  );
}
