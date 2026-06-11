import Link from "next/link";
import type { Metadata } from "next";
import { services } from "@/lib/services";
import ConsultBanner from "@/components/ConsultBanner";

export const metadata: Metadata = {
  title: "Tax Resolution Services",
  description:
    "IRS and state tax resolution services for Maryland, DC, and Virginia. Offer In Compromise, wage garnishment, audits, unfiled returns, installment agreements, and more.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="bg-[#1B2A4A] text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-[#C9A84C] text-sm font-semibold tracking-wide mb-3 uppercase">Services</div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Tax resolution for MD, DC & VA</h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            We handle every form of IRS and state tax resolution. As an attorney-CPA, Stephen Cromwell can represent clients in Tax Court — a capability that enrolled agents and non-attorney CPAs don&apos;t have.
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((svc) => (
            <Link
              key={svc.slug}
              href={`/services/${svc.slug}`}
              className="group bg-white rounded-xl border border-gray-200 p-6 hover:border-[#C9A84C] hover:shadow-md transition-all"
            >
              <h2 className="font-bold text-[#1B2A4A] text-lg mb-2 group-hover:text-[#C9A84C] transition-colors">
                {svc.shortTitle}
              </h2>
              <p className="text-sm text-gray-600 leading-relaxed mb-3">{svc.description}</p>
              <span className="text-sm text-[#C9A84C] font-semibold">Learn more →</span>
            </Link>
          ))}
        </div>
      </section>

      <ConsultBanner />
    </>
  );
}
