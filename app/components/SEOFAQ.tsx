"use client";

import { useState } from "react";

const SEOFAQ = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const faqData = [
    {
      question: "What types of construction services does EZU Construction offer in Toronto?",
      answer: "EZU Construction provides comprehensive construction services including custom home building, home renovations, kitchen and bathroom remodeling, home additions, drywall installation and repair, flooring installation, tile work, interlocking paving, and painting services. We serve the Greater Toronto Area including Toronto, North York, Mississauga, Brampton, Markham, and Vaughan.",
      category: "Services"
    },
    {
      question: "How much does a home renovation cost in Toronto?",
      answer: "Home renovation costs in Toronto vary depending on scope and complexity of project. Kitchen renovations typically range from $20,000-$50,000, bathroom renovations from $10,000-$25,000, and whole-home renovations from $75,000-$200,000+. We provide detailed, transparent quotes after an initial consultation and site assessment. Contact us for a free, no-obligation estimate tailored to your specific needs.",
      category: "Pricing"
    },
    {
      question: "Do you handle permits for construction projects in Toronto?",
      answer: "Yes, EZU Construction handles all necessary permits for construction projects in Toronto and Greater Toronto Area. We have extensive experience with Toronto Building Code requirements and municipal permit processes. Our team ensures all projects comply with local building codes and regulations, handling everything from building permits to electrical and plumbing permits.",
      category: "Permits"
    },
    {
      question: "How long does a typical home renovation project take?",
      answer: "Project timelines vary based on scope and complexity. Kitchen renovations typically take 4-8 weeks, bathroom renovations 3-6 weeks, home additions 8-16 weeks, and whole-home renovations 16-32 weeks. We provide detailed project timelines during the planning phase and keep you informed throughout the construction process with regular progress updates.",
      category: "Timeline"
    },
    {
      question: "Are you licensed and insured for construction work in Ontario?",
      answer: "Yes, EZU Construction is fully licensed and insured for all construction work in Ontario. We hold WSIB coverage, liability insurance, and all necessary contractor licenses. Our team consists of certified and experienced professionals who adhere to Ontario Building Code standards and safety regulations.",
      category: "Credentials"
    },
    {
      question: "What areas in Toronto do you serve?",
      answer: "EZU Construction serves the entire Greater Toronto Area including Toronto, North York, Scarborough, Etobicoke, East York, York, as well as surrounding cities like Mississauga, Brampton, Markham, Vaughan, Richmond Hill, Oakville, and Burlington. We're your local Toronto construction experts.",
      category: "Service Area"
    },
    {
      question: "How do I get started with a construction project?",
      answer: "Getting started is easy! Contact us through our website or call us to schedule a free consultation. We'll discuss your project goals, assess your space, provide design recommendations, and give you a detailed quote. Once you're ready to proceed, we'll handle all aspects from permits to project management to final completion.",
      category: "Process"
    },
    {
      question: "What makes EZU Construction different from other Toronto contractors?",
      answer: "EZU Construction stands out through our commitment to quality craftsmanship, transparent communication, and customer satisfaction. We offer personalized service, detailed project management, competitive pricing, and a portfolio of successful projects across Toronto. Our 5-star customer ratings and numerous testimonials reflect our dedication to excellence in every construction project.",
      category: "About Us"
    },
    {
      question: "Can you work with my architect or designer?",
      answer: "Absolutely! EZU Construction collaborates seamlessly with architects, interior designers, and other professionals. We have experience working with design teams to bring visions to life while ensuring practical construction solutions. Whether you have a design team or need design assistance, we adapt to your project requirements.",
      category: "Collaboration"
    }
  ];

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const categories = Array.from(new Set(faqData.map(item => item.category)));

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
            Get answers to common questions about construction services, permits, pricing, and working with EZU Construction in Toronto
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          <button
            onClick={() => setOpenItems([])}
            className="px-4 py-2 bg-red-500/90 text-white rounded-lg hover:bg-red-500 transition-colors duration-300 backdrop-blur-sm"
          >
            All Categories
          </button>
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => {
                const categoryItems = faqData
                  .map((item, itemIndex) => item.category === category ? itemIndex : -1)
                  .filter(index => index !== -1);
                setOpenItems(categoryItems);
              }}
              className="px-4 py-2 bg-white/10 text-white/90 rounded-lg hover:bg-red-500/20 hover:text-white transition-colors duration-300 border border-white/20"
            >
              {category}
            </button>
          ))}
        </div>

        {/* FAQ Items */}
        <div className="space-y-4 mb-12">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="card bg-white/5 shadow-xl ring-1 ring-white/10 rounded-2xl backdrop-blur-sm overflow-hidden"
              itemScope
              itemType="https://schema.org/Question"
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-white/10 transition-colors duration-200"
                aria-expanded={openItems.includes(index)}
              >
                <h3 
                  className="text-lg font-semibold text-white/90 pr-4"
                  itemProp="name"
                >
                  {faq.question}
                </h3>
                <svg
                  className={`w-5 h-5 text-red-400 transition-transform duration-300 flex-shrink-0 ${
                    openItems.includes(index) ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7 7" />
                </svg>
              </button>
              
              {openItems.includes(index) && (
                <div 
                  className="px-6 pb-4 animate-fade-in"
                  itemScope
                  itemType="https://schema.org/Answer"
                  itemProp="acceptedAnswer"
                >
                  <p 
                    className="text-white/80 leading-relaxed"
                    itemProp="text"
                  >
                    {faq.answer}
                  </p>
                  <div className="mt-3">
                    <span className="inline-block bg-red-500/20 text-red-400 text-xs font-medium px-2 py-1 rounded">
                      {faq.category}
                    </span>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-red-500/90 rounded-2xl p-8 text-center text-white backdrop-blur-sm">
          <h3 className="text-2xl font-bold mb-4">
            Still Have Questions?
          </h3>
          <p className="text-lg mb-6 max-w-2xl mx-auto text-white/90">
            Our construction experts are ready to answer all your questions and provide detailed information about your specific project needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:6477669999"
              className="btn bg-white/10 text-white/90 border-0 hover:bg-white/20 hover:text-white transition-colors duration-300 px-6 py-3 text-lg font-semibold rounded-lg"
            >
              Call Us: (647) 766-9999
            </a>
            <a
              href="/contact"
              className="btn bg-transparent text-white border-2 border-white hover:bg-white hover:text-red-500 px-6 py-3 text-lg font-semibold rounded-lg"
            >
              Send Message
            </a>
          </div>
        </div>

        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": faqData.map(faq => ({
                "@type": "Question",
                "name": faq.question,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": faq.answer
                }
              }))
            })
          }}
        />
      </div>
    </section>
  );
};

export default SEOFAQ;
