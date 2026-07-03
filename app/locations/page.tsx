import Link from "next/link";
import type { Metadata } from "next";
import { locations } from "@/lib/locations";
import ConsultBanner from "@/components/ConsultBanner";

export const metadata: Metadata = {
  title: "Areas We Serve",
  description:
    "DMV Tax Resolution represents individuals and businesses throughout Maryland, DC, and Virginia, including Rockville, Silver Spring, Bethesda, Arlington, Alexandria, Fairfax, and Washington, DC.",
};

export default function LocationsPage() {
  return (
    <>
      <section className="bg-[#1B2A4A] text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-[#C9A84C] text-sm font-semibold tracking-wide mb-3 uppercase">Areas We Serve</div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Tax resolution across Maryland, DC & Virginia</h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            We represent clients throughout the DMV area by phone and video consultation, with in-person meetings available from our College Park, Maryland office. Here's where we regularly work.
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {locations.map((loc) => (
            <Link
              key={loc.slug}
              href={`/locations/${loc.slug}`}
              className="group bg-white rounded-xl border border-gray-200 p-6 hover:border-[#C9A84C] hover:shadow-md transition-all"
            >
              <h2 className="font-bold text-[#1B2A4A] text-lg mb-1 group-hover:text-[#C9A84C] transition-colors">
                {loc.city}, {loc.stateAbbr}
              </h2>
              <p className="text-sm text-gray-500 mb-3">{loc.county ?? loc.stateName}</p>
              <span className="text-sm text-[#C9A84C] font-semibold">View details →</span>
            </Link>
          ))}
        </div>
      </section>

      <ConsultBanner />
    </>
  );
}
