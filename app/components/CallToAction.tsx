import Link from "next/link";

const CallToAction = () => {
  return (
    <section className="relative py-10 px-4 bg-gradient-to-r from-red-500/20 to-red-600/20 backdrop-blur-sm">
      <div className="container mx-auto max-w-4xl text-center">
        <div className="bg-black/45 shadow-2xl ring-1 ring-white/10 rounded-2xl backdrop-blur-sm p-10 md:p-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white/90 tracking-tight mb-6">
            Let's make your dream a{" "}
            <span className="text-white underline underline-offset-8 decoration-white/25 hover:decoration-red-500 transition duration-300">
              reality
            </span>
            .
          </h2>
          
          <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
            Ready to transform your space? Our expert team is standing by to bring your vision to life with quality craftsmanship and exceptional service.
          </p>
          
          <div className="justify-center items-center">
            <Link
              className="bg-white/90 text-black text-xl px-8 py-4 rounded-lg hover:bg-red-500/70 hover:text-white transition duration-200 font-bold shadow-lg"
              href="/contact"
            >
              Start Your Project
            </Link>
          </div>
          <div className="text-white/90 text-lg mt-6">
              or call us at{" "}
              <a href="tel:6477669999" className="text-red-400 hover:text-red-300 transition">
                (647) 766-9999
              </a>
            </div>
          
          <div className="mt-8 flex justify-center gap-8 text-white/60">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Free Consultation
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              No Obligation
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Fast Response
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
