import type { Metadata } from "next";
import Image from "next/image";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us — Schedule a Free Consultation",
  description:
    "Schedule a free 30-minute consultation with DMV Tax Resolution. Tell us about your IRS or state tax issue in Maryland, DC, or Virginia and we'll respond within one business day.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-[#1B2A4A] text-white py-16 px-4">
        <Image
          src="/capitol01.png"
          alt=""
          fill
          priority
          className="object-cover opacity-75"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1B2A4A] via-[#1B2A4A]/90 to-[#1B2A4A]/50" />
        <div className="relative max-w-4xl mx-auto">
          <div className="text-[#C9A84C] text-sm font-semibold tracking-wide mb-3 uppercase">Contact</div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Schedule your free consultation</h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            Tell us a little about your situation and we&apos;ll set up a free 30-minute consultation to review your options. No commitment, no pressure.
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-14 grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Form */}
        <div className="lg:col-span-2">
          <ContactForm />
        </div>

        {/* Contact info sidebar */}
        <div className="lg:col-span-1 space-y-5">
          <div className="bg-white border border-gray-200 rounded-xl p-5">
            <div className="font-semibold text-[#1B2A4A] mb-4">Contact us directly</div>
            <div className="space-y-3 text-sm">
              <div>
                <div className="text-xs text-gray-400 font-medium uppercase tracking-wide mb-1">Phone</div>
                <a href="tel:2406677234" className="text-[#C9A84C] font-bold text-base hover:underline">(240) 667-7234</a>
              </div>
              <div>
                <div className="text-xs text-gray-400 font-medium uppercase tracking-wide mb-1">Email</div>
                <a href="mailto:scromwell@hcaacpa.com" className="text-gray-700 hover:text-[#1B2A4A] transition-colors text-xs">scromwell@hcaacpa.com</a>
              </div>
              <div>
                <div className="text-xs text-gray-400 font-medium uppercase tracking-wide mb-1">Location</div>
                <div className="text-gray-700 text-xs leading-relaxed">Cromwell & Associates, LLC<br />College Park, Maryland</div>
              </div>
              <div>
                <div className="text-xs text-gray-400 font-medium uppercase tracking-wide mb-1">Hours</div>
                <div className="text-gray-700 text-xs">Monday–Friday, 9am–6pm</div>
              </div>
            </div>
          </div>

          <div className="bg-[#F7F8FA] rounded-xl p-5">
            <div className="font-semibold text-[#1B2A4A] mb-3 text-sm">What to expect</div>
            <ul className="space-y-3">
              {[
                "30-minute consultation at no charge",
                "We review your specific situation — not a generic overview",
                "You leave with a clear picture of your options",
                "No obligation to proceed",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-xs text-gray-600">
                  <span className="text-[#C9A84C] font-bold flex-shrink-0 mt-0.5">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-5">
            <div className="font-semibold text-[#1B2A4A] mb-3 text-sm">Service area</div>
            <div className="text-xs text-gray-500 space-y-1">
              <div>Maryland (all counties)</div>
              <div>Washington, DC</div>
              <div>Virginia (all counties)</div>
              <div className="text-gray-400 pt-1">Federal IRS cases — nationwide</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
