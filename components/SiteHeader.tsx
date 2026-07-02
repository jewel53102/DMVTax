"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const services = [
  { label: "Offer In Compromise", href: "/services/offer-in-compromise" },
  { label: "Back Taxes Owed", href: "/services/back-taxes" },
  { label: "Unfiled Tax Returns", href: "/services/unfiled-tax-returns" },
  { label: "Installment Agreements", href: "/services/installment-agreements" },
  { label: "Penalty Abatement", href: "/services/penalty-abatement" },
  { label: "Wage Garnishment Relief", href: "/services/wage-garnishment" },
  { label: "IRS Audit Representation", href: "/services/irs-audit-representation" },
  { label: "Bank Levy Release", href: "/services/bank-levy" },
  { label: "Payroll Tax Relief", href: "/services/payroll-tax-relief" },
  { label: "Currently Not Collectible", href: "/services/currently-not-collectible" },
];

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="bg-[#1B2A4A] text-white">
      {/* Top bar */}
      <div className="bg-[#C9A84C] text-[#1B2A4A] text-sm py-2 px-4 text-center font-medium">
        Free consultation — call{" "}
        <a href="tel:2406677234" className="font-bold hover:underline">
          (240) 667-7234
        </a>{" "}
        or{" "}
        <Link href="/contact" className="font-bold hover:underline">
          schedule online →
        </Link>
      </div>

      <nav className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5">
          <Image
            src="/dmv-dome-white-1024.png"
            alt=""
            width={52}
            height={52}
            className="flex-shrink-0"
          />
          <span className="flex flex-col leading-none">
            <span className="text-xl font-bold tracking-tight text-white">
              DMV Tax Resolution
            </span>
            <span className="text-xs text-[#C9A84C] font-medium tracking-wide mt-0.5">
              Maryland · DC · Virginia
            </span>
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6 text-sm font-medium">
          <div className="relative group">
            <button className="flex items-center gap-1 text-gray-200 hover:text-white transition-colors py-2">
              Services
              <svg className="w-3.5 h-3.5 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className="absolute top-full left-0 mt-1 w-60 bg-white text-gray-800 rounded-lg shadow-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
              {services.map((s) => (
                <Link
                  key={s.href}
                  href={s.href}
                  className="block px-4 py-2.5 text-sm hover:bg-[#F7F8FA] hover:text-[#C9A84C] transition-colors first:rounded-t-lg last:rounded-b-lg"
                >
                  {s.label}
                </Link>
              ))}
            </div>
          </div>
          <Link href="/about" className="text-gray-200 hover:text-white transition-colors">
            About
          </Link>
          <Link href="/blog" className="text-gray-200 hover:text-white transition-colors">
            Blog
          </Link>
          <Link
            href="/contact"
            className="bg-[#C9A84C] hover:bg-[#b8963f] text-[#1B2A4A] font-bold px-4 py-2 rounded-lg transition-colors"
          >
            Free Consultation
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-gray-200 hover:text-white"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-white/10 px-4 pb-4">
          <button
            className="w-full text-left py-3 text-gray-200 font-medium flex items-center justify-between"
            onClick={() => setServicesOpen(!servicesOpen)}
          >
            Services
            <svg className={`w-4 h-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {servicesOpen && (
            <div className="pl-4 pb-2 space-y-2">
              {services.map((s) => (
                <Link
                  key={s.href}
                  href={s.href}
                  className="block text-sm text-gray-300 hover:text-white py-1"
                  onClick={() => setMenuOpen(false)}
                >
                  {s.label}
                </Link>
              ))}
            </div>
          )}
          <Link href="/about" className="block py-3 text-gray-200 font-medium border-t border-white/10" onClick={() => setMenuOpen(false)}>
            About
          </Link>
          <Link href="/blog" className="block py-3 text-gray-200 font-medium border-t border-white/10" onClick={() => setMenuOpen(false)}>
            Blog
          </Link>
          <Link
            href="/contact"
            className="block mt-3 bg-[#C9A84C] text-[#1B2A4A] font-bold px-4 py-3 rounded-lg text-center"
            onClick={() => setMenuOpen(false)}
          >
            Free Consultation
          </Link>
        </div>
      )}
    </header>
  );
}
