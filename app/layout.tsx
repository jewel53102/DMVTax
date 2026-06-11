import type { Metadata } from "next";
import "./globals.css";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: {
    default: "DMV Tax Resolution | IRS & State Tax Help in MD, DC & VA",
    template: "%s | DMV Tax Resolution",
  },
  description:
    "Attorney-CPA tax resolution firm serving Maryland, DC, and Virginia. We resolve IRS debt, back taxes, wage garnishments, and audits. Free consultation.",
  metadataBase: new URL("https://www.dmvtaxresolution.com"),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="flex flex-col min-h-screen">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
