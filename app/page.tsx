import Link from "next/link";
import Image from "next/image";
import ConsultBanner from "@/components/ConsultBanner";

const testimonials = [
  {
    name: "James T.",
    location: "Silver Spring, MD",
    text: "I owed the IRS over $80,000 and had three years of unfiled returns. Stephen handled everything — we filed the missing returns and settled the balance for under $12,000. I can't recommend him enough.",
  },
  {
    name: "Patricia M.",
    location: "Arlington, VA",
    text: "My wages were being garnished by the IRS and I was panicking. They stopped the garnishment within a week and set me up on a payment plan I can actually afford.",
  },
  {
    name: "David & Lisa R.",
    location: "Washington, DC",
    text: "We had both IRS and Maryland state tax issues from a bad year in our small business. Having one person handle both at once made the whole process so much less overwhelming.",
  },
  {
    name: "Kevin O.",
    location: "Rockville, MD",
    text: "I was audited after claiming home office deductions. Stephen handled all the communication with the IRS — I didn't have to deal with them once. The audit closed with no additional taxes owed.",
  },
];

const serviceGrid = [
  { slug: "offer-in-compromise", label: "Offer In Compromise", icon: "⚖️", desc: "Settle tax debt for less than you owe" },
  { slug: "back-taxes", label: "Back Taxes", icon: "📋", desc: "Stop IRS collection and resolve what you owe" },
  { slug: "wage-garnishment", label: "Wage Garnishment", icon: "🛑", desc: "Stop the IRS from taking your paycheck" },
  { slug: "unfiled-tax-returns", label: "Unfiled Returns", icon: "📁", desc: "Get into compliance before the IRS acts" },
  { slug: "irs-audit-representation", label: "Audit Representation", icon: "🔍", desc: "Expert representation in IRS audits" },
  { slug: "penalty-abatement", label: "Penalty Abatement", icon: "✂️", desc: "Reduce penalties added to your balance" },
  { slug: "installment-agreements", label: "Payment Plans", icon: "📅", desc: "Structured plans that stop collection" },
  { slug: "bank-levy", label: "Bank Levy Release", icon: "🏦", desc: "Release frozen bank accounts fast" },
  { slug: "payroll-tax-relief", label: "Payroll Tax Relief", icon: "💼", desc: "Resolve business payroll tax problems" },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#1B2A4A] text-white py-20 px-4">
        <Image
          src="/capitol01.png"
          alt=""
          fill
          priority
          className="object-cover opacity-75"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1B2A4A] via-[#1B2A4A]/90 to-[#1B2A4A]/50" />
        <div className="relative max-w-5xl mx-auto">
          <div className="inline-block bg-[#C9A84C]/20 text-[#C9A84C] text-sm font-semibold px-3 py-1.5 rounded-full mb-6 tracking-wide">
            Serving Maryland · DC · Virginia
          </div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6 max-w-3xl">
            IRS letter? Wage garnishment?<br className="hidden md:block" />
            Years of unfiled returns?
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl leading-relaxed">
            DMV Tax Resolution is a local attorney-CPA firm that resolves IRS and state tax problems for individuals and businesses across Maryland, DC, and Virginia. We stop collection and find the best path forward for your situation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="bg-[#C9A84C] hover:bg-[#b8963f] text-[#1B2A4A] font-bold px-8 py-4 rounded-lg text-lg transition-colors text-center"
            >
              Schedule Free Consultation
            </Link>
            <a
              href="tel:2406677234"
              className="border border-white/30 hover:border-white text-white font-semibold px-8 py-4 rounded-lg text-lg transition-colors text-center"
            >
              Call (240) 667-7234
            </a>
          </div>
          <div className="mt-12 flex flex-wrap gap-6 text-sm text-gray-300">
            <div className="flex items-center gap-2"><span className="text-[#C9A84C] font-bold">✓</span> Attorney + CPA credentials</div>
            <div className="flex items-center gap-2"><span className="text-[#C9A84C] font-bold">✓</span> Free 30-minute consultation</div>
            <div className="flex items-center gap-2"><span className="text-[#C9A84C] font-bold">✓</span> IRS, MD, DC & VA representation</div>
            <div className="flex items-center gap-2"><span className="text-[#C9A84C] font-bold">✓</span> Tax Court representation</div>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="bg-white border-b border-gray-100 py-6 px-4">
        <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-8 text-sm text-gray-500 font-medium">
          <span>Attorney (ESQ)</span>
          <span className="text-gray-200">|</span>
          <span>Certified Public Accountant (CPA)</span>
          <span className="text-gray-200">|</span>
          <span>NTPI Tax Fellow®</span>
          <span className="text-gray-200">|</span>
          <span>AICPA Member</span>
          <span className="text-gray-200">|</span>
          <span>Certified Tax Resolution Specialist</span>
        </div>
      </section>

      {/* Pain points */}
      <section className="py-16 px-4 bg-[#F7F8FA]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1B2A4A] mb-2 text-center">Is any of this happening to you?</h2>
          <p className="text-gray-500 text-center mb-10">These are the situations we resolve every day for clients across the DMV area.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "You received an IRS notice and don't know what it means",
              "The IRS is garnishing your paycheck and you can't cover your bills",
              "You haven't filed taxes in several years and you're afraid of what happens next",
              "You owe back taxes to the IRS or Maryland Comptroller you can't pay",
              "Your bank account was frozen or levied by the IRS or state",
              "You're being audited and don't know how to respond",
              "Your business owes payroll taxes and you're worried about personal liability",
              "You received a Notice of Intent to Levy",
            ].map((scenario) => (
              <div key={scenario} className="bg-white rounded-lg border border-gray-200 px-5 py-4 flex items-start gap-3">
                <span className="text-[#C9A84C] font-bold mt-0.5 flex-shrink-0">→</span>
                <span className="text-gray-700 text-sm leading-relaxed">{scenario}</span>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/contact" className="inline-block bg-[#1B2A4A] hover:bg-[#243860] text-white font-bold px-8 py-4 rounded-lg transition-colors">
              Get a free consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1B2A4A] mb-2 text-center">Tax resolution services</h2>
          <p className="text-gray-500 text-center mb-10">We handle every form of IRS and state tax resolution for individuals and businesses in MD, DC, and VA.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {serviceGrid.map((svc) => (
              <Link
                key={svc.slug}
                href={`/services/${svc.slug}`}
                className="group bg-white rounded-xl border border-gray-200 p-6 hover:border-[#C9A84C] hover:shadow-md transition-all"
              >
                <div className="text-2xl mb-3">{svc.icon}</div>
                <div className="font-semibold text-[#1B2A4A] mb-1 group-hover:text-[#C9A84C] transition-colors">{svc.label}</div>
                <div className="text-sm text-gray-500">{svc.desc}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why local */}
      <section className="bg-[#1B2A4A] text-white py-16 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-4 mb-5">
              <Image
                src="/stephen-cromwell.png"
                alt="Stephen Cromwell, ESQ, CPA"
                width={64}
                height={64}
                className="rounded-full object-cover object-top border-2 border-[#C9A84C]"
              />
              <div>
                <div className="font-semibold text-white text-sm">Stephen Cromwell</div>
                <div className="text-[#C9A84C] text-xs">ESQ, CPA · College Park, MD</div>
              </div>
            </div>
            <div className="text-[#C9A84C] text-sm font-semibold tracking-wide mb-3 uppercase">Why local matters</div>
            <h2 className="text-2xl md:text-3xl font-bold mb-5">
              National firms don&apos;t know the Maryland Comptroller. We do.
            </h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              Large national tax resolution firms handle IRS issues — but they&apos;re often unfamiliar with state-specific programs in Maryland, Virginia, and DC. When you have both IRS and state tax debt, that gap costs you.
            </p>
            <p className="text-gray-300 leading-relaxed mb-6">
              We&apos;re a local firm based in College Park, Maryland. We know the Comptroller&apos;s collection process, Virginia&apos;s OIC program, and DC OTR. We handle everything in one place so nothing falls through the cracks.
            </p>
            <Link href="/about" className="text-[#C9A84C] font-semibold hover:underline">
              About Stephen Cromwell, ESQ, CPA →
            </Link>
          </div>
          <div className="space-y-4">
            {[
              { state: "Maryland", detail: "Maryland Comptroller, Central Collection Unit (CCU), MD OIC program" },
              { state: "DC", detail: "DC Office of Tax and Revenue (OTR), DC-specific OIC and installment programs" },
              { state: "Virginia", detail: "Virginia Dept. of Taxation, VA OIC program, VA streamlined installment agreements" },
              { state: "Federal (IRS)", detail: "All IRS resolution programs, Tax Court, US District Court representation" },
            ].map((item) => (
              <div key={item.state} className="bg-white/10 rounded-lg px-5 py-4">
                <div className="font-semibold text-[#C9A84C] mb-1">{item.state}</div>
                <div className="text-sm text-gray-300">{item.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 bg-[#F7F8FA]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1B2A4A] mb-2 text-center">What clients say</h2>
          <p className="text-gray-500 text-center mb-10">Real clients from Maryland, DC, and Virginia.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-white rounded-xl border border-gray-200 p-6">
                <p className="text-gray-700 leading-relaxed mb-4 italic">&ldquo;{t.text}&rdquo;</p>
                <div>
                  <div className="font-semibold text-[#1B2A4A] text-sm">{t.name}</div>
                  <div className="text-xs text-gray-400">{t.location}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case results */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1B2A4A] mb-2 text-center">Recent results</h2>
          <p className="text-gray-500 text-center mb-10 text-sm">All cases anonymized. Results vary by individual situation.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { owed: "$94,000", settled: "$11,200", type: "Offer In Compromise", location: "Montgomery County, MD" },
              { owed: "$62,000", settled: "Levy released", type: "Bank Levy Released", location: "Northern Virginia" },
              { owed: "$38,000", settled: "$215/mo payment", type: "Installment Agreement", location: "Washington, DC" },
              { owed: "$127,000", settled: "$24,500", type: "OIC + MD State Resolution", location: "Prince George's County, MD" },
              { owed: "4 years unfiled", settled: "Fully compliant, no prosecution", type: "Unfiled Returns + OIC", location: "Alexandria, VA" },
              { owed: "Wage garnishment", settled: "Released in 4 days", type: "Wage Levy Release", location: "Bethesda, MD" },
            ].map((r) => (
              <div key={r.type + r.location} className="bg-white rounded-xl border border-gray-200 p-5">
                <div className="text-xs text-[#C9A84C] font-semibold uppercase tracking-wide mb-2">{r.type}</div>
                <div className="text-sm text-gray-500 mb-1">Owed: <span className="font-semibold text-gray-800">{r.owed}</span></div>
                <div className="text-sm text-gray-500 mb-3">Outcome: <span className="font-semibold text-[#1B2A4A]">{r.settled}</span></div>
                <div className="text-xs text-gray-400">{r.location}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ConsultBanner />
    </>
  );
}
