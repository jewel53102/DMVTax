import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ConsultBanner from "@/components/ConsultBanner";
import JsonLd from "@/components/JsonLd";
import { BUSINESS, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "About — Stephen Cromwell, ESQ, CPA",
  description:
    "DMV Tax Resolution is led by Stephen Cromwell, an attorney and CPA serving Maryland, DC, and Virginia. Learn about our credentials, approach, and why local representation matters.",
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: BUSINESS.founder,
  jobTitle: "Attorney & Certified Public Accountant",
  description:
    "Attorney, CPA, and NTPI Tax Fellow serving Maryland, DC, and Virginia clients with IRS and state tax resolution.",
  url: `${SITE_URL}/about`,
  image: `${SITE_URL}/stephen-cromwell.png`,
  worksFor: {
    "@type": "LegalService",
    name: BUSINESS.name,
  },
  hasCredential: [
    "Attorney (ESQ)",
    "Certified Public Accountant (CPA)",
    "NTPI Tax Fellow",
    "AICPA Member",
    "Certified Tax Resolution Specialist",
  ],
};

export default function AboutPage() {
  return (
    <>
      <JsonLd data={personJsonLd} />
      <section className="relative overflow-hidden bg-[#1B2A4A] text-white py-16 px-4">
        <Image
          src="/capitol01.png"
          alt=""
          fill
          priority
          className="object-cover opacity-75"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1B2A4A] via-[#1B2A4A]/90 to-[#1B2A4A]/50" />
        <div className="relative max-w-4xl mx-auto flex flex-col md:flex-row gap-10 items-center md:items-start">
          <div className="flex-shrink-0">
            <Image
              src="/stephen-cromwell.png"
              alt="Stephen Cromwell, ESQ, CPA"
              width={200}
              height={240}
              className="rounded-xl object-cover shadow-lg"
              priority
            />
          </div>
          <div>
            <div className="text-[#C9A84C] text-sm font-semibold tracking-wide mb-3 uppercase">About</div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">
              Stephen Cromwell, ESQ, CPA
            </h1>
            <div className="text-[#C9A84C] text-sm font-medium mb-4">NTPI Tax Fellow® · AICPA Member · Certified Tax Resolution Specialist</div>
            <p className="text-gray-300 text-lg max-w-2xl">
              Attorney, CPA, and NTPI Tax Fellow® serving Maryland, DC, and Virginia clients with IRS and state tax resolution from his College Park, MD office.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-6 text-gray-700 leading-relaxed">
            <p>
              DMV Tax Resolution is the practice of Stephen Cromwell — an attorney, Certified Public Accountant, and NTPI Tax Fellow® based in College Park, Maryland. For over a decade, Stephen has represented individuals and businesses throughout the DC Metro area in resolving IRS and state tax problems.
            </p>
            <p>
              Most people who contact us are in a difficult situation they didn&apos;t plan for. A few years of financial hardship. A business that fell behind on payroll taxes. A divorce that left one spouse with a shared tax liability they didn&apos;t know about. An audit notice for deductions they legitimately took. We don&apos;t judge how someone got here — we focus on finding the best way forward.
            </p>

            <h2 className="text-xl font-bold text-[#1B2A4A] mt-8">Why attorney + CPA matters</h2>
            <p>
              Most tax resolution practitioners are either enrolled agents (EAs) or CPAs. Both can represent clients before the IRS. But neither can take a dispute to Tax Court, the US District Court, or the US Court of Federal Claims. If your case requires litigation — or if the IRS knows you have the option to litigate — the outcome of your negotiation changes.
            </p>
            <p>
              As an attorney, Stephen can represent clients in all federal tax courts. As a CPA, he understands the financial details of your situation at a level that informs every decision in the resolution process. You don&apos;t have to choose between legal expertise and accounting expertise — you get both.
            </p>

            <h2 className="text-xl font-bold text-[#1B2A4A] mt-8">Why local representation matters for DMV clients</h2>
            <p>
              Large national tax resolution firms handle federal IRS cases regularly. But Maryland, Virginia, and DC each have their own tax authorities, their own collection processes, and their own resolution programs — and national firms are often unfamiliar with the specifics.
            </p>
            <p>
              The Maryland Comptroller operates differently from the IRS. The Central Collection Unit (CCU) handles delinquent state accounts and adds collection fees on top of existing balances. The Maryland OIC program has different eligibility criteria than the federal program. Virginia&apos;s Department of Taxation has a streamlined installment program but moves aggressively on liens for unresolved accounts. DC OTR operates on its own timeline and resolution process.
            </p>
            <p>
              When you owe both the IRS and the state, resolving one while the other escalates is a real risk with a national firm. We handle Maryland, Virginia, DC, and federal simultaneously — from a single point of contact who knows all four jurisdictions.
            </p>

            <h2 className="text-xl font-bold text-[#1B2A4A] mt-8">Our approach</h2>
            <p>
              We start every engagement by understanding your full picture: what you owe, to whom, why, and what your current financial situation actually looks like. From that, we identify every resolution option available to you — not just the most common ones — and give you an honest assessment of which path makes the most sense.
            </p>
            <p>
              We don&apos;t make promises about outcomes we can&apos;t guarantee. What we do promise is that we&apos;ll handle every part of the process — communication with the IRS and state authorities, documentation, negotiation — so you can focus on your life while we resolve your tax problem.
            </p>

            <div className="bg-[#F7F8FA] rounded-xl p-6 mt-8">
              <div className="font-bold text-[#1B2A4A] mb-4">Credentials & memberships</div>
              <ul className="space-y-2 text-sm">
                {[
                  "Attorney at Law (ESQ) — Licensed to practice in Maryland and DC",
                  "Certified Public Accountant (CPA)",
                  "NTPI Tax Fellow® — National Tax Practice Institute",
                  "Certified Tax Resolution Specialist (CTRS)",
                  "American Institute of Certified Public Accountants (AICPA) Member",
                  "Admitted to practice in: Tax Court, US District Court, US Court of Federal Claims, US Bankruptcy Court",
                ].map((cred) => (
                  <li key={cred} className="flex items-start gap-2">
                    <span className="text-[#C9A84C] font-bold mt-0.5 flex-shrink-0">✓</span>
                    <span className="text-gray-700">{cred}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-6 space-y-5">
              <div className="bg-[#1B2A4A] text-white rounded-xl p-6">
                <div className="font-bold text-lg mb-2">Free consultation</div>
                <p className="text-gray-300 text-sm mb-4">
                  Schedule a free 30-minute consultation to discuss your situation.
                </p>
                <Link
                  href="/contact"
                  className="block w-full bg-[#C9A84C] hover:bg-[#b8963f] text-[#1B2A4A] font-bold px-4 py-3 rounded-lg text-center transition-colors"
                >
                  Schedule Now
                </Link>
                <a
                  href="tel:2406677234"
                  className="block w-full text-center text-sm text-gray-300 hover:text-white mt-3 transition-colors"
                >
                  or call (240) 667-7234
                </a>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-5">
                <div className="font-semibold text-[#1B2A4A] mb-3 text-sm">Contact</div>
                <div className="text-sm text-gray-600 space-y-2">
                  <div>
                    <a href="tel:2406677234" className="text-[#C9A84C] font-medium hover:underline">(240) 667-7234</a>
                  </div>
                  <div>
                    <a href="mailto:scromwell@hcaacpa.com" className="hover:text-[#1B2A4A] transition-colors text-xs">scromwell@hcaacpa.com</a>
                  </div>
                  <div className="text-xs text-gray-400 pt-1">
                    Cromwell & Associates, LLC<br />
                    College Park, Maryland<br />
                    Mon–Fri, 9am–6pm
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ConsultBanner />
    </>
  );
}
