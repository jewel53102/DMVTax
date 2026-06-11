import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="bg-[#1B2A4A] text-gray-300 mt-20">
      <div className="max-w-6xl mx-auto px-4 py-14 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <div className="text-white font-bold text-lg mb-1">DMV Tax Resolution</div>
          <div className="text-[#C9A84C] text-xs font-medium mb-4 tracking-wide">Maryland · DC · Virginia</div>
          <p className="text-sm leading-relaxed text-gray-400 mb-4">
            Attorney-CPA tax resolution firm helping individuals and businesses in the DC Metro area resolve IRS and state tax problems — including back taxes, wage garnishments, audits, and unfiled returns.
          </p>
          <div className="text-sm space-y-1">
            <div>
              <a href="tel:2406677234" className="text-[#C9A84C] hover:underline font-medium">(240) 667-7234</a>
            </div>
            <div>
              <a href="mailto:scromwell@hcaacpa.com" className="hover:text-white transition-colors">scromwell@hcaacpa.com</a>
            </div>
            <div className="text-gray-400">College Park, Maryland</div>
            <div className="text-gray-400">Mon–Fri, 9am–6pm</div>
          </div>
        </div>

        <div>
          <div className="text-white font-semibold text-sm mb-4">Services</div>
          <ul className="space-y-2 text-sm">
            {[
              ["Offer In Compromise", "/services/offer-in-compromise"],
              ["Back Taxes Owed", "/services/back-taxes"],
              ["Unfiled Tax Returns", "/services/unfiled-tax-returns"],
              ["Wage Garnishment", "/services/wage-garnishment"],
              ["IRS Audit Representation", "/services/irs-audit-representation"],
              ["Penalty Abatement", "/services/penalty-abatement"],
              ["Installment Agreements", "/services/installment-agreements"],
              ["Bank Levy Release", "/services/bank-levy"],
              ["Payroll Tax Relief", "/services/payroll-tax-relief"],
            ].map(([label, href]) => (
              <li key={href}>
                <Link href={href} className="hover:text-white transition-colors">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="text-white font-semibold text-sm mb-4">Company</div>
          <ul className="space-y-2 text-sm mb-8">
            {[
              ["About Us", "/about"],
              ["Blog", "/blog"],
              ["Contact", "/contact"],
              ["Free Consultation", "/contact"],
            ].map(([label, href]) => (
              <li key={label}>
                <Link href={href} className="hover:text-white transition-colors">
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="text-white font-semibold text-sm mb-3">Credentials</div>
          <ul className="text-xs text-gray-400 space-y-1">
            <li>Attorney (ESQ)</li>
            <li>Certified Public Accountant (CPA)</li>
            <li>NTPI Tax Fellow®</li>
            <li>AICPA Member</li>
            <li>Certified Tax Resolution Specialist</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-5 px-4 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} DMV Tax Resolution · Cromwell & Associates, LLC · College Park, MD ·{" "}
        <span className="italic">Not legal advice. Results may vary.</span>
      </div>
    </footer>
  );
}
