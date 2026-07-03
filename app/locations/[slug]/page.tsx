import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { locations, getLocationBySlug } from "@/lib/locations";
import { services } from "@/lib/services";
import ConsultBanner from "@/components/ConsultBanner";
import JsonLd from "@/components/JsonLd";
import { BUSINESS, SITE_URL } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return locations.map((l) => ({ slug: l.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const loc = getLocationBySlug(slug);
  if (!loc) return {};
  return {
    title: `Tax Attorney & CPA Serving ${loc.city}, ${loc.stateAbbr}`,
    description: `IRS and ${loc.stateName} tax resolution for individuals and businesses in ${loc.city}, ${loc.stateAbbr}. Free consultation with an attorney-CPA team.`,
    alternates: { canonical: `/locations/${slug}` },
  };
}

export default async function LocationPage({ params }: Props) {
  const { slug } = await params;
  const loc = getLocationBySlug(slug);
  if (!loc) notFound();

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Tax Resolution",
    name: `Tax Resolution Services in ${loc.city}, ${loc.stateAbbr}`,
    description: `IRS and ${loc.stateName} state tax resolution for clients in ${loc.city}, ${loc.stateAbbr}.`,
    url: `${SITE_URL}/locations/${loc.slug}`,
    areaServed: { "@type": "City", name: `${loc.city}, ${loc.stateAbbr}` },
    provider: {
      "@type": "LegalService",
      name: BUSINESS.name,
    },
  };

  return (
    <>
      <JsonLd data={serviceJsonLd} />
      <section className="bg-[#1B2A4A] text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <nav className="mb-6">
            <Link href="/locations" className="text-[#C9A84C] text-sm hover:underline">
              ← All areas we serve
            </Link>
          </nav>
          <div className="text-[#C9A84C] text-sm font-semibold tracking-wide mb-3 uppercase">
            {loc.county ?? loc.stateName}
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Tax Attorney &amp; CPA Serving {loc.city}, {loc.stateAbbr}
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl">{loc.blurb}</p>
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
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

      <div className="max-w-4xl mx-auto px-4 py-14">
        <div className="prose prose-gray max-w-none mb-12">
          <p>
            {`We represent ${loc.city} individuals and businesses on both federal IRS matters and ${loc.stateName} state tax issues handled through the ${loc.taxAuthority}. Consultations are available by phone and video, with in-person meetings available from our College Park, Maryland office for clients who prefer to meet in person.`}
          </p>
          <p>
            {`Because federal and state tax authorities run entirely separate collection and resolution processes, a ${loc.city} client with both an IRS balance and a ${loc.stateName} balance needs both addressed — resolving one doesn't touch the other. We handle both together so nothing gets left unresolved.`}
          </p>
        </div>

        <h2 className="text-2xl font-bold text-[#1B2A4A] mb-2">{`Services available to ${loc.city} clients`}</h2>
        <p className="text-gray-500 mb-8">{`Every service below is available to individuals and businesses in ${loc.city}.`}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
          {services.map((svc) => (
            <Link
              key={svc.slug}
              href={`/services/${svc.slug}`}
              className="group bg-white rounded-xl border border-gray-200 p-5 hover:border-[#C9A84C] hover:shadow-md transition-all"
            >
              <div className="font-semibold text-[#1B2A4A] mb-1 group-hover:text-[#C9A84C] transition-colors">{svc.shortTitle}</div>
              <div className="text-sm text-gray-500">{svc.tagline}</div>
            </Link>
          ))}
        </div>

        <div className="bg-[#F7F8FA] rounded-xl p-6 mb-14">
          <h2 className="text-xl font-bold text-[#1B2A4A] mb-4">Frequently asked questions</h2>
          <div className="space-y-5">
            <div>
              <div className="font-semibold text-[#1B2A4A] mb-1.5">{`Do you have an office in ${loc.city}?`}</div>
              <div className="text-gray-600 text-sm leading-relaxed">
                {`Our office is based in College Park, Maryland. We represent ${loc.city} clients by phone and video consultation — most tax resolution work with the IRS and ${loc.stateName} doesn't require an in-person meeting, though one is available if you prefer it.`}
              </div>
            </div>
            <div>
              <div className="font-semibold text-[#1B2A4A] mb-1.5">{`Can you handle both IRS and ${loc.stateName} state issues?`}</div>
              <div className="text-gray-600 text-sm leading-relaxed">
                {`Yes. We regularly handle federal and ${loc.stateName} state tax matters together, since resolving one doesn't affect the other and both need to be addressed for a complete resolution.`}
              </div>
            </div>
            <div>
              <div className="font-semibold text-[#1B2A4A] mb-1.5">How do I get started?</div>
              <div className="text-gray-600 text-sm leading-relaxed">
                Schedule a free 30-minute consultation. We&apos;ll review your situation and explain your realistic
                options before you commit to anything.
              </div>
            </div>
          </div>
        </div>

        <h2 className="text-xl font-bold text-[#1B2A4A] mb-4">Other areas we serve</h2>
        <div className="flex flex-wrap gap-2">
          {locations
            .filter((l) => l.slug !== loc.slug)
            .map((l) => (
              <Link
                key={l.slug}
                href={`/locations/${l.slug}`}
                className="text-sm bg-white border border-gray-200 rounded-full px-4 py-2 text-gray-600 hover:border-[#C9A84C] hover:text-[#C9A84C] transition-colors"
              >
                {l.city}, {l.stateAbbr}
              </Link>
            ))}
        </div>
      </div>

      <ConsultBanner />
    </>
  );
}
