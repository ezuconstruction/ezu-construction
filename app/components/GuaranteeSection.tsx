import Link from "next/link";

const guarantees = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 11h.01M12 11h.01M15 11h.01M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
      </svg>
    ),
    title: "Fixed-Price Commitment",
    body: "Your quote is your price. We lock scope and cost before breaking ground — no surprise invoices, no hidden extras. What we quote is what you pay.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "On-Time Delivery",
    body: "We set a realistic schedule and stick to it. Detailed planning, early material ordering, and disciplined trade sequencing keep your project on track.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Workmanship Warranty",
    body: "Every project is backed by our workmanship warranty. If something isn't right, we come back and make it right — no arguments, no excuses.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
      </svg>
    ),
    title: "Clear Communication",
    body: "A dedicated project contact keeps you informed at every milestone. You always know what's happening, what's next, and who to call.",
  },
];

const GuaranteeSection = () => {
  return (
    <section className="relative bg-cover bg-center py-20 px-6 bg-[url(/images/backgrounds/bg-2.jpg)]">
      <div className="absolute inset-0 bg-black/65 backdrop-blur-[2px]"></div>
      <div className="relative max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white/90 tracking-tight mb-4">
            Our Promise{" "}
            <span className="text-white underline underline-offset-8 decoration-red-500/50">
              to You
            </span>
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Every EZU project comes with these commitments — not as marketing copy, but as how we
            actually run our business.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {guarantees.map((g) => (
            <div
              key={g.title}
              className="bg-black/45 ring-1 ring-white/10 rounded-2xl backdrop-blur-sm p-6 flex flex-col gap-4 hover:ring-red-500/30 transition duration-300"
            >
              <div>{g.icon}</div>
              <h3 className="text-xl font-bold text-white/90">{g.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">{g.body}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/contact"
            className="inline-block bg-red-500 text-white font-semibold text-lg px-8 py-3 rounded-lg hover:bg-red-600 transition duration-200 shadow-lg shadow-red-500/25"
          >
            Start Your Project — Free Quote
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GuaranteeSection;
