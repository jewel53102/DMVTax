import Link from "next/link";

export default function ConsultBanner() {
  return (
    <section className="bg-[#1B2A4A] text-white py-14 px-4 mt-20">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-3">
          Ready to resolve your tax problem?
        </h2>
        <p className="text-gray-300 mb-8 text-lg">
          Schedule a free, no-obligation 30-minute consultation. We&apos;ll review your situation and tell you exactly what your options are.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="bg-[#C9A84C] hover:bg-[#b8963f] text-[#1B2A4A] font-bold px-8 py-4 rounded-lg text-lg transition-colors"
          >
            Schedule Free Consultation
          </Link>
          <a
            href="tel:2406677234"
            className="border border-white/30 hover:border-white text-white font-semibold px-8 py-4 rounded-lg text-lg transition-colors"
          >
            Call (240) 667-7234
          </a>
        </div>
      </div>
    </section>
  );
}
