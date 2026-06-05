import Footer from "../components/Footer";
import CallToAction from "../components/CallToAction";
import Link from "next/link";
import OptimizedImage from "../components/OptimizedImage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About EZU Construction — Toronto GTA Custom Home Builders Since 2016",
  description:
    "EZU Construction is a Canadian-owned custom home builder and renovation contractor serving Toronto and the GTA since 2016. Licensed, insured, and 5-star rated. Learn our story.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About EZU Construction — Toronto GTA Since 2016",
    description:
      "Canadian-owned custom home builders and renovation specialists in Toronto and the GTA. Learn our story, our team, and our commitment to quality.",
    url: "https://ezuconstruction.ca/about",
    images: [
      {
        url: "/images/backgrounds/social-media.avif",
        width: 1200,
        height: 630,
        alt: "About EZU Construction",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About EZU Construction",
    description:
      "Canadian-owned custom home builders and renovation specialists in Toronto and the GTA since 2016.",
    images: ["/images/backgrounds/social-media.avif"],
  },
};

const milestones = [
  { year: "2016", label: "Founded in Markham, ON", description: "EZU Construction was established with a focus on high-quality residential renovations in the Greater Toronto Area." },
  { year: "2018", label: "First Custom Home Build", description: "We completed our first full custom home build — a milestone that expanded our capabilities and reputation across the GTA." },
  { year: "2020", label: "50 Projects Completed", description: "Despite industry disruptions, we delivered 50+ completed projects with zero client disputes — a record we remain proud of." },
  { year: "2022", label: "Expanded Trade Services", description: "We expanded our in-house trade capabilities to include electrical, plumbing, and structural framing — reducing reliance on subcontractors." },
  { year: "2024", label: "Laneway Suite Certification", description: "We obtained specialized expertise in City of Toronto laneway and garden suite design and construction." },
  { year: "2026", label: "150+ Projects & Growing", description: "Now with 150+ completed projects and a 5.0 client rating, we continue to grow through referrals and a reputation for reliable, honest work." },
];

const values = [
  {
    title: "Honest Pricing",
    body: "We quote fixed prices and stick to them. Hidden extras and surprise invoices are not how we operate — your quote is your price.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 11h.01M12 11h.01M15 11h.01M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
      </svg>
    ),
  },
  {
    title: "Quality That Lasts",
    body: "We build with materials and methods that perform in Ontario's climate — not the cheapest option, but the right one for long-term durability.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: "Clear Communication",
    body: "You have a dedicated contact for your project. You always know what's happening, what's next, and what decisions require your input.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
  },
  {
    title: "Canadian Owned",
    body: "EZU is proudly Canadian-owned and operated. We invest in local trades, source Canadian materials where possible, and reinvest in the communities we build in.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
      </svg>
    ),
  },
];

const teamMembers = [
  {
    name: "Project Leadership",
    role: "Construction Management",
    bio: "Our project leaders bring deep GTA construction experience across custom homes, additions, and complex renovations — managing every project from permit to handover.",
    image: "https://placehold.co/400x400/1a1a1a/ffffff?text=Team+Photo+Needed",
  },
  {
    name: "Design & Planning",
    role: "Design-Build Coordination",
    bio: "Our design team bridges architecture and construction — producing drawings that are beautiful, buildable, and grounded in real budget realities.",
    image: "https://placehold.co/400x400/1a1a1a/ffffff?text=Team+Photo+Needed",
  },
  {
    name: "Trade Supervision",
    role: "Site & Trade Management",
    bio: "Our site supervisors coordinate all trades — framing, electrical, plumbing, finishes — ensuring quality at every stage and keeping your project on schedule.",
    image: "https://placehold.co/400x400/1a1a1a/ffffff?text=Team+Photo+Needed",
  },
];

const AboutPage = () => {
  return (
    <>
      {/* Hero */}
      <div
        className="relative hero bg-base-100 h-[70vh] bg-cover bg-center flex items-end"
        style={{ backgroundImage: "url(/images/backgrounds/social-media.avif)" }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="absolute inset-0 backdrop-blur-[2px]"></div>
        <div className="relative flex flex-col m-4 md:m-10 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-white/90 drop-shadow-lg tracking-tight">
            About EZU Construction
          </h1>
          <p className="text-lg md:text-xl font-light pt-2 pl-1 text-white/80 drop-shadow max-w-2xl">
            A Canadian-owned construction company built on honest work, reliable timelines, and results that hold up — since 2016.
          </p>
        </div>
      </div>

      <div
        className="relative bg-base-300 bg-cover p-6 md:p-10"
        style={{ backgroundImage: "url(/images/backgrounds/bg-2.jpg)" }}
      >
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]"></div>

        <div className="relative max-w-7xl mx-auto py-10 space-y-10">

          {/* Our Story */}
          <div className="bg-black/45 shadow-2xl ring-1 ring-white/10 rounded-2xl backdrop-blur-sm p-8">
            <h2 className="text-4xl font-bold text-center mb-8 text-white/90 tracking-tight">
              Our{" "}
              <span className="text-white underline underline-offset-8 decoration-white/25 hover:decoration-red-500 transition duration-300">
                Story
              </span>
            </h2>
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div className="space-y-4 text-white/70 text-lg leading-relaxed">
                <p>
                  EZU Construction was founded in 2016 in Markham, Ontario, with a straightforward premise: build things properly, price them honestly, and stand behind the work when it&apos;s done.
                </p>
                <p>
                  What started as a residential renovation company quickly grew into a full-service design-build firm handling custom homes, multi-phase additions, legal suites, and commercial renovations across the Greater Toronto Area.
                </p>
                <p>
                  Ten years in, we haven&apos;t changed the premise. Every project starts with a fixed price and a realistic schedule. Every project ends with a walkthrough that confirms the work is done to standard. In between, you have a single point of contact who keeps you informed.
                </p>
                <p>
                  We&apos;re proudly Canadian-owned, headquartered in Markham, and we&apos;ve built our reputation project by project — not through advertising, but through the referrals of homeowners who came back or sent their neighbours.
                </p>
              </div>
              <div className="relative rounded-2xl overflow-hidden shadow-xl h-72 md:h-auto">
                <OptimizedImage
                  src="/images/backgrounds/splash-page-background.jpg"
                  alt="EZU Construction project in Toronto GTA"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Values */}
          <div className="bg-black/45 shadow-2xl ring-1 ring-white/10 rounded-2xl backdrop-blur-sm p-8">
            <h2 className="text-4xl font-bold text-center mb-8 text-white/90 tracking-tight">
              What We{" "}
              <span className="text-white underline underline-offset-8 decoration-white/25 hover:decoration-red-500 transition duration-300">
                Stand For
              </span>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((v) => (
                <div key={v.title} className="bg-white/5 ring-1 ring-white/10 rounded-xl p-5 flex flex-col gap-3">
                  <div>{v.icon}</div>
                  <h3 className="text-lg font-bold text-white/90">{v.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{v.body}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Milestones */}
          <div className="bg-black/45 shadow-2xl ring-1 ring-white/10 rounded-2xl backdrop-blur-sm p-8">
            <h2 className="text-4xl font-bold text-center mb-10 text-white/90 tracking-tight">
              Company{" "}
              <span className="text-white underline underline-offset-8 decoration-white/25 hover:decoration-red-500 transition duration-300">
                Milestones
              </span>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {milestones.map((m) => (
                <div key={m.year} className="flex gap-4 items-start">
                  <div className="text-3xl font-bold text-red-500 min-w-[64px]">{m.year}</div>
                  <div>
                    <div className="text-lg font-semibold text-white/90">{m.label}</div>
                    <p className="text-white/60 text-sm leading-relaxed mt-1">{m.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Team */}
          <div className="bg-black/45 shadow-2xl ring-1 ring-white/10 rounded-2xl backdrop-blur-sm p-8">
            <h2 className="text-4xl font-bold text-center mb-4 text-white/90 tracking-tight">
              Our{" "}
              <span className="text-white underline underline-offset-8 decoration-white/25 hover:decoration-red-500 transition duration-300">
                Team
              </span>
            </h2>
            <p className="text-center text-white/50 text-sm mb-8">
              [Team photos coming soon — placeholders shown below]
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {teamMembers.map((member) => (
                <div key={member.name} className="bg-white/5 ring-1 ring-white/10 rounded-2xl p-6 flex flex-col items-center text-center gap-4">
                  <div className="relative w-24 h-24 rounded-full overflow-hidden ring-2 ring-red-500/30">
                    <OptimizedImage
                      src={member.image}
                      alt={member.name}
                      fill
                      sizes="96px"
                      className="object-cover"
                      unoptimized
                    />
                  </div>
                  <div>
                    <div className="text-lg font-bold text-white/90">{member.name}</div>
                    <div className="text-sm text-red-400 font-medium">{member.role}</div>
                    <p className="text-white/60 text-sm leading-relaxed mt-2">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Credentials & Certifications */}
          <div className="bg-black/45 shadow-2xl ring-1 ring-white/10 rounded-2xl backdrop-blur-sm p-8">
            <h2 className="text-4xl font-bold text-center mb-8 text-white/90 tracking-tight">
              Credentials &{" "}
              <span className="text-white underline underline-offset-8 decoration-white/25 hover:decoration-red-500 transition duration-300">
                Coverage
              </span>
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white/5 ring-1 ring-white/10 rounded-xl p-5 text-center">
                <div className="text-red-500 text-3xl font-bold mb-2">Licensed</div>
                <p className="text-white/60 text-sm">Licensed contractor operating under all applicable Ontario provincial and municipal licensing requirements.</p>
              </div>
              <div className="bg-white/5 ring-1 ring-white/10 rounded-xl p-5 text-center">
                <div className="text-red-500 text-3xl font-bold mb-2">Insured</div>
                <p className="text-white/60 text-sm">Comprehensive general liability insurance. WSIB coverage on all in-house employees and supervised subtrades.</p>
              </div>
              <div className="bg-white/5 ring-1 ring-white/10 rounded-xl p-5 text-center">
                <div className="text-red-500 text-3xl font-bold mb-2">Warranted</div>
                <p className="text-white/60 text-sm">All projects backed by our workmanship warranty. Custom homes backed by provincial warranty requirements under TARION where applicable.</p>
              </div>
            </div>
          </div>

          {/* Serve area */}
          <div className="bg-black/45 shadow-2xl ring-1 ring-white/10 rounded-2xl backdrop-blur-sm p-8">
            <h2 className="text-4xl font-bold text-center mb-6 text-white/90 tracking-tight">
              Where We{" "}
              <span className="text-white underline underline-offset-8 decoration-white/25 hover:decoration-red-500 transition duration-300">
                Build
              </span>
            </h2>
            <p className="text-center text-white/60 max-w-2xl mx-auto mb-8">
              Based in Markham, we serve the full Greater Toronto Area — from downtown Toronto to Oakville, Richmond Hill to Scarborough.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {["Toronto", "Markham", "North York", "Scarborough", "Etobicoke", "Vaughan", "Richmond Hill", "Mississauga", "Brampton", "Oakville", "Burlington", "Ajax", "Pickering", "Stouffville"].map((city) => (
                <span key={city} className="px-4 py-2 bg-white/10 ring-1 ring-white/10 rounded-full text-white/70 text-sm hover:bg-red-500/20 hover:text-white transition">
                  {city}
                </span>
              ))}
            </div>
          </div>

          {/* Social Media */}
          <div className="bg-black/45 shadow-2xl ring-1 ring-white/10 rounded-2xl backdrop-blur-sm p-8">
            <h2 className="text-4xl font-bold text-center mb-8 text-white/90 tracking-tight">
              Follow Us on{" "}
              <span className="text-white underline underline-offset-8 decoration-white/25 hover:decoration-red-500 transition duration-300">
                Social Media
              </span>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { href: "https://instagram.com/ezu.construction", label: "IG", platform: "Instagram", handle: "@ezu.construction" },
                { href: "https://facebook.com/ezuconstruction", label: "FB", platform: "Facebook", handle: "EZU Construction" },
                { href: "https://linkedin.com/company/ezu-construction", label: "IN", platform: "LinkedIn", handle: "EZU Construction Inc." },
                { href: "https://youtube.com/@ezuconstruction", label: "YT", platform: "YouTube", handle: "EZU Construction" },
              ].map((s) => (
                <Link
                  key={s.platform}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card bg-white/5 shadow-xl ring-1 ring-white/10 rounded-2xl backdrop-blur-sm hover:scale-105 transition-all duration-300 p-6 text-center group"
                >
                  <div className="text-4xl font-semibold text-white/80 mb-4">{s.label}</div>
                  <h3 className="text-2xl font-bold text-white/90 group-hover:text-red-500 transition-colors">{s.platform}</h3>
                  <p className="text-white/70 mt-2">{s.handle}</p>
                </Link>
              ))}
            </div>
          </div>

        </div>
      </div>
      <CallToAction />
      <Footer />
    </>
  );
};

export default AboutPage;
