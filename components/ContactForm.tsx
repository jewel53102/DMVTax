"use client";
import { useState } from "react";
import { trackEvent } from "@/lib/gtag";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "", email: "", phone: "", situation: "", message: "",
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const body = [
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `Email: ${form.email}`,
      `Situation: ${form.situation}`,
      "",
      form.message,
    ].join("\n");

    const mailto = `mailto:groves.ruby@gemini-lane.com?cc=scromwell@hcaacpa.com&subject=${encodeURIComponent(
      `Consultation request — ${form.situation || "General"}`
    )}&body=${encodeURIComponent(body)}`;

    trackEvent("generate_lead", {
      form_name: "contact_consultation_request",
      situation: form.situation,
    });

    window.location.href = mailto;
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
        <div className="text-4xl mb-4">✓</div>
        <h2 className="text-xl font-bold text-[#1B2A4A] mb-2">We&apos;ll be in touch shortly</h2>
        <p className="text-gray-600">
          Thank you for reaching out. We typically respond within one business day to schedule your consultation.
        </p>
      </div>
    );
  }

  return (
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
  );
}
