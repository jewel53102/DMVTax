import type { Metadata } from "next";
import "./globals.css";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import JsonLd from "@/components/JsonLd";
import { BUSINESS, SITE_URL } from "@/lib/site";

const title = "DMV Tax Resolution | IRS & State Tax Help in MD, DC & VA";
const description =
  "Attorney-CPA tax resolution firm serving Maryland, DC, and Virginia. We resolve IRS debt, back taxes, wage garnishments, and audits. Free consultation.";

export const metadata: Metadata = {
  title: {
    default: title,
    template: "%s | DMV Tax Resolution",
  },
  description,
  metadataBase: new URL(SITE_URL),
  openGraph: {
    type: "website",
    siteName: BUSINESS.name,
    url: SITE_URL,
    title,
    description,
  },
  twitter: {
    card: "summary",
    title,
    description,
  },
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": ["LegalService", "AccountingService"],
  name: BUSINESS.name,
  alternateName: BUSINESS.legalName,
  url: SITE_URL,
  logo: `${SITE_URL}/dmv-dome-white-1024.png`,
  image: `${SITE_URL}/dmv-dome-white-1024.png`,
  telephone: BUSINESS.telephone,
  email: BUSINESS.email,
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    addressLocality: BUSINESS.addressLocality,
    addressRegion: BUSINESS.addressRegion,
    addressCountry: BUSINESS.addressCountry,
  },
  areaServed: BUSINESS.areaServed.map((name) => ({ "@type": "State", name })),
  founder: {
    "@type": "Person",
    name: BUSINESS.founder,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:00",
    closes: "18:00",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="flex flex-col min-h-screen">
        <JsonLd data={localBusinessJsonLd} />
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
