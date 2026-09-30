import type { Metadata } from "next";
import "@fontsource-variable/inter";
import "@fontsource-variable/jetbrains-mono";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { site } from "@/lib/site";


export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: "Cocoon — The IB Teaching Platform for MYP & DP", template: "%s | Cocoon" },
  description: "Cocoon is the AI-native platform built only for IB MYP and DP teachers: plan units, teach, assess against criteria and stay accreditation-ready.",
  openGraph: { siteName: "Cocoon", type: "website" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const orgJsonLd = {
    "@context": "https://schema.org", "@type": "Organization", name: "Cocoon by Edwisely", url: site.url,
  };
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
