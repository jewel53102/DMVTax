export type Location = {
  slug: string;
  city: string;
  stateAbbr: "MD" | "VA" | "DC";
  stateName: string;
  county?: string;
  taxAuthority: string;
  blurb: string;
};

export const locations: Location[] = [
  {
    slug: "rockville-md",
    city: "Rockville",
    stateAbbr: "MD",
    stateName: "Maryland",
    county: "Montgomery County",
    taxAuthority: "Maryland Comptroller",
    blurb:
      "Rockville is the county seat of Montgomery County and home to a large share of the state and federal government workers we regularly represent — many with wage garnishment or unfiled-return issues tied to complex W-2 and side-income situations.",
  },
  {
    slug: "silver-spring-md",
    city: "Silver Spring",
    stateAbbr: "MD",
    stateName: "Maryland",
    county: "Montgomery County",
    taxAuthority: "Maryland Comptroller",
    blurb:
      "Silver Spring sits right on the DC line, and we frequently work with Silver Spring clients who have both a DC income tax history and a Maryland filing obligation — two jurisdictions that require separate resolution processes.",
  },
  {
    slug: "bethesda-md",
    city: "Bethesda",
    stateAbbr: "MD",
    stateName: "Maryland",
    county: "Montgomery County",
    taxAuthority: "Maryland Comptroller",
    blurb:
      "Bethesda's mix of federal employees, medical professionals, and small business owners means the tax issues we see here range from straightforward back-tax balances to more complex payroll tax and audit matters.",
  },
  {
    slug: "college-park-md",
    city: "College Park",
    stateAbbr: "MD",
    stateName: "Maryland",
    county: "Prince George's County",
    taxAuthority: "Maryland Comptroller",
    blurb:
      "College Park is where our office is based, in Prince George's County. We work with individuals and small businesses across the county, including University of Maryland-area faculty, staff, and contractors navigating multi-year filing gaps.",
  },
  {
    slug: "arlington-va",
    city: "Arlington",
    stateAbbr: "VA",
    stateName: "Virginia",
    county: "Arlington County",
    taxAuthority: "Virginia Department of Taxation",
    blurb:
      "Arlington's proximity to DC means many of our clients here have federal contracting or consulting income with irregular withholding — a common driver of back-tax balances that catch people off guard at filing time.",
  },
  {
    slug: "alexandria-va",
    city: "Alexandria",
    stateAbbr: "VA",
    stateName: "Virginia",
    taxAuthority: "Virginia Department of Taxation",
    blurb:
      "Alexandria's independent-city tax administration works alongside the Virginia Department of Taxation, and we handle both levels when Alexandria clients have combined state and local exposure.",
  },
  {
    slug: "fairfax-va",
    city: "Fairfax",
    stateAbbr: "VA",
    stateName: "Virginia",
    county: "Fairfax County",
    taxAuthority: "Virginia Department of Taxation",
    blurb:
      "Fairfax County is home to a large concentration of small and mid-sized businesses, and payroll tax and Trust Fund Recovery Penalty cases make up a meaningful share of the business tax matters we handle in the area.",
  },
  {
    slug: "washington-dc",
    city: "Washington",
    stateAbbr: "DC",
    stateName: "District of Columbia",
    taxAuthority: "DC Office of Tax and Revenue",
    blurb:
      "DC's Office of Tax and Revenue runs its own collection and resolution programs, separate from both the IRS and any Maryland or Virginia obligations — a distinction that matters for DC residents who work across state lines.",
  },
];

export function getLocationBySlug(slug: string): Location | undefined {
  return locations.find((l) => l.slug === slug);
}
