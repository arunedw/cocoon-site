# cocoon-site

Marketing website for Cocoon, the IB teaching platform by Edwisely.

Next.js 14 (App Router) + Tailwind. Live: https://cocoon-site-theta.vercel.app

## Run locally
    npm install
    npm run dev        # http://localhost:3000

## Where things live
- lib/site.ts            site URL, nav, footer, company contact details, page list (title, H1, meta, keyword)
- lib/content.ts         copy for product, programme, role and accreditation pages
- lib/resources.ts       resource hub articles
- components/            header (mega-menu), footer, FAQ, flow, CTA
- app/                   homepage, pricing, demo, contact, resources, catch-all pages, sitemap, robots, OG images
- public/screens         app screenshots (use the -v2 files)
