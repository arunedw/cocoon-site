import type { Metadata } from "next";
import "@fontsource-variable/inter";
import "@fontsource-variable/jetbrains-mono";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { site, company } from "@/lib/site";


export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: "Cocoon — The IB Teaching Platform for MYP & DP", template: "%s | Cocoon" },
  description: "Cocoon is the AI-native platform built only for IB MYP and DP teachers: plan units, teach, assess against criteria and stay accreditation-ready.",
  openGraph: { siteName: "Cocoon", type: "website", locale: "en_GB" },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const orgJsonLd = [
    { "@context": "https://schema.org", "@type": "Organization", name: "Cocoon by Edwisely", url: site.url, logo: site.url + "/icon.svg",
      parentOrganization: { "@type": "Organization", name: "Edwisely", url: company.website },
      address: { "@type": "PostalAddress", streetAddress: company.address.street, addressLocality: company.address.locality, addressRegion: company.address.region, postalCode: company.address.postal, addressCountry: company.address.country },
      contactPoint: [
        { "@type": "ContactPoint", telephone: company.phone, email: company.emailGeneral, contactType: "customer support" },
        { "@type": "ContactPoint", email: company.emailSales, contactType: "sales" },
        ...company.offices.map((o) => ({ "@type": "ContactPoint", telephone: o.phone, contactType: "sales", areaServed: o.city })),
      ],
      sameAs: company.social.map((s) => s.href) },
    { "@context": "https://schema.org", "@type": "WebSite", name: "Cocoon", url: site.url },
  ];
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans" suppressHydrationWarning>
        <a href="#main" className="skip">Skip to content</a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }} />
      </body>
    </html>
  );
}
