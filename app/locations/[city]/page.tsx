import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/app/components/Footer";
import CallToAction from "@/app/components/CallToAction";
import { locationsData } from "@/app/data/locations";

export async function generateStaticParams() {
  return locationsData.map((loc) => ({ city: loc.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string }>;
}): Promise<Metadata> {
  const { city } = await params;
  const loc = locationsData.find((l) => l.slug === city);
  if (!loc) return { title: "Not Found" };

  return {
    title: `Custom Home Builders & Renovation Contractors in ${loc.name}, ON`,
    description: `EZU Construction — custom home builders and renovation specialists serving ${loc.name}, ${loc.region}. Kitchen renovations, home additions, laneway suites, basement finishing & more. Free quote.`,
    alternates: { canonical: `/locations/${loc.slug}` },
    openGraph: {
      title: `EZU Construction — ${loc.name} Custom Homes & Renovations`,
      description: `Licensed renovation contractor and custom home builder serving ${loc.name} and surrounding ${loc.region} communities since 2016.`,
      url: `https://ezuconstruction.ca/locations/${loc.slug}`,
      images: [
        {
          url: "/images/backgrounds/splash-page-background.jpg",
          width: 1200,
          height: 630,
          alt: `EZU Construction serving ${loc.name}`,
        },
      ],
    },
  };
}

const services = [
  { title: "Custom Homes", href: "/services/custom-homes", description: "Design-to-build custom homes tailored to your lot and lifestyle." },
  { title: "Home Renovations", href: "/services/home-renovations", description: "Full-home remodels, open-concept conversions, and structural renovations." },
  { title: "Kitchen Renovations", href: "/services/kitchen-renovations", description: "Custom kitchen remodels from layout to final finishes." },
  { title: "Bathroom Renovations", href: "/services/bathroom-renovations", description: "Waterproofed, spa-inspired bathroom upgrades." },
  { title: "Home Additions", href: "/services/home-additions", description: "Second-storey additions, rear extensions, and sunrooms." },
  { title: "Laneway & Garden Suites", href: "/services/laneway-garden-suites", description: "Design, permits, and construction of Toronto-area laneway suites." },
  { title: "Basement Renovations", href: "/services/basement-renovations", description: "Legal suites, family rooms, gyms, and income suite development." },
  { title: "Secondary Suites", href: "/services/secondary-suites", description: "OBC-compliant secondary suites that generate rental income." },
];

export default async function LocationPage({
  params,
}: {
  params: Promise<{ city: string }>;
}) {
  const { city } = await params;
  const loc = locationsData.find((l) => l.slug === city);
  if (!loc) notFound();

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "GeneralContractor"],
    "@id": `https://ezuconstruction.ca/locations/${loc.slug}`,
    "name": "EZU Construction",
    "description": `Custom home builders and renovation contractors serving ${loc.name}, ${loc.region} and surrounding communities.`,
    "url": `https://ezuconstruction.ca/locations/${loc.slug}`,
    "telephone": "+16477669999",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "435 Steelcase Rd E",
      "addressLocality": "Markham",
      "addressRegion": "ON",
      "postalCode": "L3R 2M2",
      "addressCountry": "CA",
    },
    "areaServed": {
      "@type": "City",
      "name": loc.name,
      "addressRegion": "ON",
      "addressCountry": "CA",
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": loc.latitude,
      "longitude": loc.longitude,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      {/* Hero */}
      <div className="relative hero bg-base-100 h-[60vh] bg-[url(/images/backgrounds/splash-page-background.jpg)] bg-cover bg-center flex items-end">
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="absolute inset-0 backdrop-blur-[2px]"></div>
        <div className="relative flex flex-col m-4 md:m-10 animate-fade-in">
          {/* Breadcrumb */}
          <nav aria-label="breadcrumb" className="mb-4 text-white/50 text-sm flex gap-2 items-center">
            <Link href="/" className="hover:text-white transition">Home</Link>
            <span>/</span>
            <Link href="/locations" className="hover:text-white transition">Locations</Link>
            <span>/</span>
            <span className="text-white/80">{loc.name}</span>
          </nav>
          <h1 className="text-4xl md:text-6xl font-bold text-white/90 drop-shadow-lg tracking-tight">
            Custom Home Builders &amp; Renovations in {loc.name}
          </h1>
          <p className="text-lg md:text-xl font-light pt-2 pl-1 text-white/75 max-w-2xl">
            {loc.description}
          </p>
        </div>
      </div>

      <div
        className="relative bg-base-300 bg-cover p-6 md:p-10"
        style={{ backgroundImage: "url(/images/backgrounds/bg-3.jpg)" }}
      >
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]"></div>

        <div className="relative max-w-6xl mx-auto py-10 space-y-10">

          {/* Local Context */}
          <div className="bg-black/45 shadow-2xl ring-1 ring-white/10 rounded-2xl backdrop-blur-sm p-8">
            <h2 className="text-3xl font-bold text-white/90 mb-4 tracking-tight">
              Serving {loc.name} &amp; {loc.region}
            </h2>
            <p className="text-white/70 text-lg leading-relaxed">{loc.localContext}</p>
            <div className="mt-6 flex flex-col sm:flex-row gap-4">
              <Link
                href={`/contact?location=${loc.slug}`}
                className="bg-red-500 text-white font-semibold text-lg px-6 py-3 rounded-lg hover:bg-red-600 transition text-center"
              >
                Get a Free Quote in {loc.name}
              </Link>
              <Link
                href="tel:+16477669999"
                className="border-2 border-white/30 text-white text-lg px-6 py-3 rounded-lg hover:bg-white/10 transition text-center"
              >
                (647) 766-9999
              </Link>
            </div>
          </div>

          {/* Services */}
          <div className="bg-black/45 shadow-2xl ring-1 ring-white/10 rounded-2xl backdrop-blur-sm p-8">
            <h2 className="text-3xl font-bold text-white/90 mb-8 tracking-tight">
              Our Services in {loc.name}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {services.map((s) => (
                <Link
                  key={s.href}
                  href={s.href}
                  className="bg-white/5 ring-1 ring-white/10 rounded-xl p-4 hover:ring-red-500/40 hover:bg-white/10 transition group"
                >
                  <div className="text-lg font-bold text-white/90 group-hover:text-red-400 transition mb-2">
                    {s.title}
                  </div>
                  <p className="text-white/55 text-sm">{s.description}</p>
                </Link>
              ))}
            </div>
          </div>

          {/* Why EZU */}
          <div className="bg-black/45 shadow-2xl ring-1 ring-white/10 rounded-2xl backdrop-blur-sm p-8">
            <h2 className="text-3xl font-bold text-white/90 mb-6 tracking-tight">
              Why {loc.name} Homeowners Choose EZU
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: "Local Knowledge", body: `We understand ${loc.name}'s housing stock, permit processes, and zoning bylaws — no learning curve on your project.` },
                { title: "Fixed Pricing", body: "We lock scope and price before breaking ground. No hidden extras, no surprise invoices." },
                { title: "GTA Since 2016", body: "10+ years building and renovating homes across the Greater Toronto Area, with a 5-star client rating." },
                { title: "All Trades In-House", body: "Framing, electrical, plumbing, insulation, finishes — all coordinated by one team, one contract." },
              ].map((item) => (
                <div key={item.title} className="flex gap-3 items-start">
                  <span className="text-red-500 text-2xl font-bold mt-0.5">-</span>
                  <div>
                    <div className="text-white/90 font-semibold text-lg">{item.title}</div>
                    <p className="text-white/60 text-sm mt-1">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact CTA */}
          <div className="bg-black/45 shadow-2xl ring-1 ring-white/10 rounded-2xl backdrop-blur-sm p-8 text-center">
            <h2 className="text-3xl font-bold text-white/90 mb-3 tracking-tight">
              Ready to Start Your {loc.name} Project?
            </h2>
            <p className="text-white/60 mb-6 max-w-xl mx-auto">
              Get a free, no-obligation consultation and quote. We typically respond within 24 hours.
            </p>
            <Link
              href={`/contact?location=${loc.slug}`}
              className="inline-block bg-red-500 text-white font-semibold text-xl px-8 py-4 rounded-lg hover:bg-red-600 transition shadow-lg shadow-red-500/25"
            >
              Get Your Free Quote
            </Link>
            <div className="mt-4 text-white/50 text-sm">
              Or call us directly:{" "}
              <Link href="tel:+16477669999" className="text-white/80 hover:text-white transition font-medium">
                (647) 766-9999
              </Link>
            </div>
          </div>

        </div>
      </div>

      <CallToAction />
      <Footer />
    </>
  );
}
