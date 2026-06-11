"use client";
import { useState } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "", email: "", phone: "", situation: "", message: "",
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // Form action can be wired to Formspree, Resend, or any handler
    setSubmitted(true);
  }

  return (
    <>
      <section className="bg-[#1B2A4A] text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
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
          {submitted ? (
            <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
              <div className="text-4xl mb-4">✓</div>
              <h2 className="text-xl font-bold text-[#1B2A4A] mb-2">We&apos;ll be in touch shortly</h2>
              <p className="text-gray-600">
                Thank you for reaching out. We typically respond within one business day to schedule your consultation.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">Full name *</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#C9A84C] focus:ring-2 focus:ring-[#C9A84C]/20 transition-all"
                    placeholder="Jane Smith"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">Phone number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#C9A84C] focus:ring-2 focus:ring-[#C9A84C]/20 transition-all"
                    placeholder="(301) 555-0100"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">Email address *</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#C9A84C] focus:ring-2 focus:ring-[#C9A84C]/20 transition-all"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">What best describes your situation?</label>
                <select
                  name="situation"
                  value={form.situation}
                  onChange={handleChange}
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#C9A84C] focus:ring-2 focus:ring-[#C9A84C]/20 transition-all bg-white"
                >
                  <option value="">Select one...</option>
                  <option value="owe-irs">I owe money to the IRS</option>
                  <option value="owe-state">I owe Maryland, DC, or Virginia state taxes</option>
                  <option value="unfiled">I have unfiled tax returns</option>
                  <option value="garnishment">My wages are being garnished</option>
                  <option value="levy">My bank account was levied</option>
                  <option value="audit">I'm being audited</option>
                  <option value="payroll">My business owes payroll taxes</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                  Tell us more <span className="text-gray-400 font-normal">(optional)</span>
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#C9A84C] focus:ring-2 focus:ring-[#C9A84C]/20 transition-all resize-vertical"
                  placeholder="Approximate amount owed, years involved, current collection status — anything that helps us prepare for your consultation."
                />
              </div>

              <p className="text-xs text-gray-400">
                All information is confidential. Submitting this form does not create an attorney-client relationship.
              </p>

              <button
                type="submit"
                className="w-full bg-[#C9A84C] hover:bg-[#b8963f] text-[#1B2A4A] font-bold px-6 py-4 rounded-lg text-base transition-colors"
              >
                Request Free Consultation
              </button>
            </form>
          )}
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
