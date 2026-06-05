"use client";

import { useState } from "react";

const SEOFAQ = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const faqData = [
    // Services
    {
      question: "What types of construction services does EZU Construction offer?",
      answer: "EZU Construction provides end-to-end residential and commercial construction services: custom home building, home renovations, kitchen and bathroom remodeling, home additions, laneway and garden suites, basement renovations, secondary suites, garage conversions, sunrooms, and all major construction trades (framing, electrical, plumbing, insulation, drywall, flooring, tile, painting, windows & doors, exterior cladding, roofing, and interlocking paving). We serve Toronto and the Greater Toronto Area.",
      category: "Services"
    },
    {
      question: "Do you build laneway suites and garden suites in Toronto?",
      answer: "Yes. Laneway and garden suites are one of our specialized services. We handle the entire process: zoning feasibility review, architectural design, engineering, permit submission, and full construction. We're experienced with City of Toronto laneway suite bylaws and can assess your property's eligibility during a free initial consultation.",
      category: "Services"
    },
    {
      question: "Do you do basement renovations and legal basement suites?",
      answer: "Yes. We build finished basements for all uses — family rooms, home gyms, home offices, and OBC-compliant legal rental suites. Legal suites require fire-rated separation, egress windows, minimum ceiling heights, and independent mechanical systems. We design and build to these standards and manage all required permits and inspections.",
      category: "Services"
    },
    {
      question: "Can you handle commercial renovations?",
      answer: "Yes. In addition to residential work, EZU Construction handles light commercial renovations including office fit-outs, retail, restaurant, and multi-unit residential projects. Contact us to discuss your commercial project scope.",
      category: "Services"
    },
    {
      question: "Do you handle design, engineering, and permits in addition to construction?",
      answer: "Yes. We operate as a full-service design-build contractor. We coordinate architectural design, structural engineering, and all permit submissions — so you deal with one team, one contract, and one point of accountability from start to finish.",
      category: "Services"
    },
    // Pricing
    {
      question: "How much does a home renovation cost in Toronto?",
      answer: "Renovation costs vary significantly by scope. Kitchen renovations typically range from $25,000–$80,000+, bathroom renovations from $15,000–$40,000, basement finishing from $50,000–$130,000 (higher for legal suites), home additions from $150,000–$350,000+, and custom homes from $400,000+. We provide detailed, transparent fixed-price quotes after an initial consultation and site assessment.",
      category: "Pricing"
    },
    {
      question: "How much does a laneway suite cost in Toronto?",
      answer: "Laneway suites in Toronto typically cost $280,000–$450,000 depending on size, design complexity, site conditions, and finishes. This includes design, permits, and full construction. The investment is often offset within 8–12 years through rental income of $2,000–$3,500/month.",
      category: "Pricing"
    },
    {
      question: "Do you offer fixed-price contracts?",
      answer: "Yes. We quote fixed prices before breaking ground — not estimates or ranges. Your price is locked to a defined scope. If you request changes mid-project, we price and document them before proceeding. You always know what the final cost will be.",
      category: "Pricing"
    },
    {
      question: "Are there government rebates available for renovations in Ontario?",
      answer: "Yes. Canada Greener Homes and Enbridge Home Efficiency Rebate programs offer rebates for insulation, windows, doors, and heat pump upgrades. Some municipal programs also offer rebates for laneway suites and secondary suite development. We identify eligible measures during the scope phase and help you access available rebates.",
      category: "Pricing"
    },
    // Permits
    {
      question: "Do you handle permits for construction projects in Toronto and the GTA?",
      answer: "Yes. We manage all permit submissions for every project — building permits, electrical (ESA), plumbing, and any specialized permits required by the municipality. We pull permits before work starts and coordinate required inspections at every stage. No work is closed up before passing inspection.",
      category: "Permits"
    },
    {
      question: "Do I need a permit for a basement renovation in Ontario?",
      answer: "Most basement renovations require a building permit — especially if you're adding a bathroom, creating a rental suite, installing a new egress window, or making structural changes. We confirm permit requirements upfront and manage the entire process.",
      category: "Permits"
    },
    {
      question: "How long does it take to get a building permit in Toronto?",
      answer: "Toronto building permit timelines vary: simple residential projects often receive approvals in 2–6 weeks, while more complex permits (additions, new builds, laneway suites) can take 3–6 months. We submit complete, accurate applications to avoid revision requests that delay approval.",
      category: "Permits"
    },
    // Timeline
    {
      question: "How long does a typical renovation project take?",
      answer: "Timelines vary by scope: kitchen renovations typically take 4–10 weeks, bathroom renovations 3–6 weeks, basement finishing 6–12 weeks, home additions 12–24 weeks, laneway suites 6–9 months (construction only), and custom homes 9–18 months. We provide a detailed project schedule during planning and keep you updated at every milestone.",
      category: "Timeline"
    },
    {
      question: "Can I live in my home during the renovation?",
      answer: "It depends on scope. Kitchen and bathroom renovations usually allow you to stay — you'll have limited access but the home remains livable. For major structural work, full-home renovations, or projects affecting multiple systems simultaneously, temporary relocation is often the least stressful option. We discuss this honestly during planning.",
      category: "Timeline"
    },
    {
      question: "What happens if we discover unexpected issues during construction?",
      answer: "Older GTA homes frequently have surprises: outdated wiring, hidden moisture damage, or undersized structure. When we encounter unexpected conditions, we communicate immediately, outline options and costs clearly, and wait for your decision before proceeding. Change orders are documented in writing before any extra work begins.",
      category: "Timeline"
    },
    // Credentials
    {
      question: "Are you licensed and insured to do construction work in Ontario?",
      answer: "Yes. EZU Construction holds all required contractor licenses for Ontario residential and commercial construction. We carry comprehensive general liability insurance and WSIB coverage for all in-house employees and supervised trades. We're happy to provide proof of insurance before any project begins.",
      category: "Credentials"
    },
    {
      question: "How long has EZU Construction been in business?",
      answer: "EZU Construction was founded in 2016 in Markham, Ontario. We've completed 150+ projects across the Greater Toronto Area over the past 10 years, with a 5.0 client rating and a track record of zero unresolved client disputes.",
      category: "Credentials"
    },
    {
      question: "Do your projects come with a warranty?",
      answer: "Yes. All EZU projects are backed by our workmanship warranty. If something isn't right after handover, we come back and fix it — no arguments. Custom homes subject to Ontario's TARION new home warranty program are enrolled as required.",
      category: "Credentials"
    },
    // Service Area
    {
      question: "What areas in the GTA does EZU Construction serve?",
      answer: "We serve the full Greater Toronto Area: Toronto (all neighbourhoods), Markham, North York, Scarborough, Etobicoke, Vaughan, Richmond Hill, Mississauga, Brampton, Oakville, Burlington, Ajax, Pickering, and Stouffville. Our office is based in Markham, giving us fast response times across York Region and eastern Toronto.",
      category: "Service Area"
    },
    {
      question: "Do you work in Markham, Vaughan, and York Region?",
      answer: "Yes. Markham is our home base — we know the York Region permit process, local trade network, and common housing types (1980s–2000s detached homes, executive builds in Unionville and Cornell). We offer competitive pricing and fast project starts throughout York Region.",
      category: "Service Area"
    },
    // Process
    {
      question: "How do I get started with a construction project?",
      answer: "Call us at (647) 766-9999 or use the contact form on our website. We'll schedule a free consultation at your property, discuss your goals and constraints, and follow up with a detailed fixed-price quote. Most consultations take 45–60 minutes and result in a clear scope of work within 3–5 business days.",
      category: "Process"
    },
    {
      question: "What is a design-build contractor and why does it matter?",
      answer: "A design-build contractor handles both the design (drawings, permits) and the construction under one contract. This means the design is grounded in construction reality from day one — no expensive redesigns when the drawings hit a budget wall, and no coordination gap between designer and builder. EZU operates as a full design-build firm.",
      category: "Process"
    },
    {
      question: "How do you handle project changes or upgrades mid-project?",
      answer: "All changes are documented as written change orders with a clear price and schedule impact before any extra work proceeds. You approve in writing before we act. This keeps costs and timelines predictable and eliminates end-of-project billing surprises.",
      category: "Process"
    },
    // About Us
    {
      question: "What makes EZU Construction different from other Toronto contractors?",
      answer: "Three things: fixed-price contracts (you know the total before we start), in-house trade coordination (framing, electrical, plumbing, and finishes are managed by one team), and a decade of GTA-specific experience with the permit processes, housing stock, and building codes that apply to Toronto-area projects. Our 5.0 rating reflects how we actually run projects.",
      category: "About Us"
    },
    {
      question: "Can you work with my architect or interior designer?",
      answer: "Absolutely. We collaborate regularly with architects, interior designers, and other professionals. We review drawings for constructability, flag issues before they become expensive, and execute the build to the designer's intent. Whether you come with a full design team or no design at all, we adapt to your situation.",
      category: "About Us"
    },
    {
      question: "Where is EZU Construction located?",
      answer: "Our office is at 435 Steelcase Rd E, Markham, ON L3R 2M2. You can reach us by phone at (647) 766-9999 or by email at info@ezuconstruction.com. We serve the full Greater Toronto Area.",
      category: "About Us"
    },
  ];

  const categories = ["All", ...Array.from(new Set(faqData.map(item => item.category)))];
  const filtered = activeCategory === "All" ? faqData : faqData.filter(f => f.category === activeCategory);

  const toggleItem = (index: number) => {
    setOpenItems(prev =>
      prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
    );
  };

  return (
    <section className="relative py-16 px-4 bg-cover bg-center" style={{ backgroundImage: "url(/images/backgrounds/bg-3.jpg)" }}>
      <div className="absolute inset-0 bg-black/55"></div>
      <div className="absolute inset-0 backdrop-blur-[2px]"></div>

      <div className="relative max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white/90 tracking-tight mb-4">
            Frequently Asked{" "}
            <span className="text-white underline underline-offset-8 decoration-white/25 hover:decoration-red-500 transition-all duration-300">
              Questions
            </span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Answers to common questions about our services, pricing, permits, and process — from Toronto homeowners who asked them first.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => { setActiveCategory(category); setOpenItems([]); }}
              className={`px-4 py-2 rounded-lg transition-colors duration-200 text-sm font-medium ${
                activeCategory === category
                  ? "bg-red-500 text-white"
                  : "bg-white/10 text-white/80 hover:bg-red-500/20 hover:text-white border border-white/20"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* FAQ Items with FAQPage schema */}
        <div
          className="space-y-3 mb-12"
          itemScope
          itemType="https://schema.org/FAQPage"
        >
          {filtered.map((faq, index) => (
            <div
              key={index}
              className="card bg-white/5 shadow-xl ring-1 ring-white/10 rounded-2xl backdrop-blur-sm overflow-hidden"
              itemScope
              itemProp="mainEntity"
              itemType="https://schema.org/Question"
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-white/10 transition-colors duration-200"
                aria-expanded={openItems.includes(index)}
              >
                <h3 className="text-lg font-semibold text-white/90 pr-4" itemProp="name">
                  {faq.question}
                </h3>
                <svg
                  className={`w-5 h-5 text-red-400 transition-transform duration-300 flex-shrink-0 ${openItems.includes(index) ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {openItems.includes(index) && (
                <div
                  className="px-6 pb-5 animate-fade-in"
                  itemScope
                  itemType="https://schema.org/Answer"
                  itemProp="acceptedAnswer"
                >
                  <p className="text-white/75 leading-relaxed" itemProp="text">
                    {faq.answer}
                  </p>
                  <span className="inline-block mt-3 bg-red-500/20 text-red-400 text-xs font-medium px-2 py-1 rounded">
                    {faq.category}
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="bg-red-500/90 rounded-2xl p-8 text-center text-white backdrop-blur-sm">
          <h3 className="text-2xl font-bold mb-3">Still Have Questions?</h3>
          <p className="text-lg mb-6 max-w-2xl mx-auto text-white/90">
            Our team is ready to answer any question about your project — no obligation, no pressure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+16477669999"
              className="bg-white/15 text-white border-0 hover:bg-white/25 transition px-6 py-3 text-lg font-semibold rounded-lg"
            >
              Call (647) 766-9999
            </a>
            <a
              href="/contact"
              className="bg-transparent text-white border-2 border-white hover:bg-white hover:text-red-500 transition px-6 py-3 text-lg font-semibold rounded-lg"
            >
              Send Message
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SEOFAQ;
