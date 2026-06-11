import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { services, getServiceBySlug } from "@/lib/services";
import ConsultBanner from "@/components/ConsultBanner";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const svc = getServiceBySlug(slug);
  if (!svc) return {};
  return {
    title: svc.title,
    description: svc.description,
    alternates: { canonical: `/services/${slug}` },
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const svc = getServiceBySlug(slug);
  if (!svc) notFound();

  const paragraphs = svc.body.split("\n\n");

  return (
    <>
      <section className="bg-[#1B2A4A] text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <nav className="mb-6">
            <Link href="/services" className="text-[#C9A84C] text-sm hover:underline">
              ← All services
            </Link>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold mb-3">{svc.title}</h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl">{svc.tagline}</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="bg-[#C9A84C] hover:bg-[#b8963f] text-[#1B2A4A] font-bold px-6 py-3 rounded-lg transition-colors text-center"
            >
              Schedule Free Consultation
            </Link>
            <a
              href="tel:2406677234"
              className="border border-white/30 hover:border-white text-white font-semibold px-6 py-3 rounded-lg transition-colors text-center"
            >
              Call (240) 667-7234
            </a>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-14 grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Main content */}
        <div className="lg:col-span-2">
          <div className="prose prose-gray max-w-none">
            {paragraphs.map((para, i) => {
              if (para.startsWith("**") && para.endsWith("**") && para.indexOf("**", 2) === para.length - 2) {
                return <h3 key={i} className="text-[#1B2A4A] font-bold text-lg mt-6 mb-2">{para.replace(/\*\*/g, "")}</h3>;
              }
              if (para.startsWith("**")) {
                const formatted = para.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>").replace(/\n/g, "<br/>");
                return <p key={i} className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: formatted }} />;
              }
              if (para.startsWith("- ")) {
                const items = para.split("\n").filter(l => l.startsWith("- ")).map(l => l.slice(2));
                return (
                  <ul key={i} className="list-disc list-inside space-y-1 mb-4 text-gray-700">
                    {items.map((item, j) => <li key={j} dangerouslySetInnerHTML={{ __html: item.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>") }} />)}
                  </ul>
                );
              }
              if (/^\d+\./.test(para)) {
                const items = para.split("\n").filter(l => /^\d+\./.test(l)).map(l => l.replace(/^\d+\.\s*/, ""));
                return (
                  <ol key={i} className="list-decimal list-inside space-y-1 mb-4 text-gray-700">
                    {items.map((item, j) => <li key={j} dangerouslySetInnerHTML={{ __html: item.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>") }} />)}
                  </ol>
                );
              }
              return <p key={i} className="text-gray-700 leading-relaxed mb-4">{para}</p>;
            })}
          </div>

          {/* FAQs */}
          {svc.faqs.length > 0 && (
            <div className="mt-12">
              <h2 className="text-2xl font-bold text-[#1B2A4A] mb-6">Frequently asked questions</h2>
              <div className="space-y-5">
                {svc.faqs.map((faq) => (
                  <div key={faq.q} className="bg-[#F7F8FA] rounded-xl p-5">
                    <div className="font-semibold text-[#1B2A4A] mb-2">{faq.q}</div>
                    <div className="text-gray-600 text-sm leading-relaxed">{faq.a}</div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1">
          <div className="sticky top-6 space-y-5">
            <div className="bg-[#1B2A4A] text-white rounded-xl p-6">
              <div className="font-bold text-lg mb-2">Free consultation</div>
              <p className="text-gray-300 text-sm mb-4">
                Schedule a free 30-minute consultation. We&apos;ll review your situation and explain your options.
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
              <div className="font-semibold text-[#1B2A4A] mb-3 text-sm">Credentials</div>
              <ul className="text-xs text-gray-500 space-y-1.5">
                <li>✓ Attorney (ESQ)</li>
                <li>✓ Certified Public Accountant (CPA)</li>
                <li>✓ NTPI Tax Fellow®</li>
                <li>✓ AICPA Member</li>
                <li>✓ Tax Court representation</li>
              </ul>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-5">
              <div className="font-semibold text-[#1B2A4A] mb-3 text-sm">Service area</div>
              <ul className="text-xs text-gray-500 space-y-1.5">
                <li>Maryland (all counties)</li>
                <li>Washington, DC</li>
                <li>Virginia (all counties)</li>
                <li>Federal IRS (nationwide)</li>
              </ul>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-5">
              <div className="font-semibold text-[#1B2A4A] mb-3 text-sm">Other services</div>
              <ul className="text-xs space-y-2">
                {services
                  .filter((s) => s.slug !== slug)
                  .slice(0, 6)
                  .map((s) => (
                    <li key={s.slug}>
                      <Link href={`/services/${s.slug}`} className="text-[#C9A84C] hover:underline">
                        {s.shortTitle}
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <ConsultBanner />
    </>
  );
}
