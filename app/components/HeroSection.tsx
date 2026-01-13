import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="relative hero bg-base-100 min-h-screen bg-[url(/images/backgrounds/splash-page-background.jpg)] bg-cover bg-center flex items-center">
      <div className="absolute inset-0 bg-black/55"></div>
      <div className="absolute inset-0 backdrop-blur-[2px]"></div>

      <div className="relative container mx-auto px-8 py-10">
        <div className="max-w-3xl">
          <Link
            className="inline-block mb-3 font-semibold bg-red-500/50 px-4 py-1 text-lg text-white/90 border border-red-500/30 rounded-lg hover:bg-red-500/70 transition animate-fade-in"
            href="/publications"
          >
            Proudly Canadian Owned{" "}
            <span className="hidden md:inline-block">and Operated</span>
          </Link>

          <h1 className="text-5xl md:text-7xl text-white/90 font-bold tracking-tight mb-6 animate-fade-in">
            <span className="text-red-500 underline underline-offset-8 decoration-white/25 hover:decoration-white/50 transition">
              Your
            </span>{" "}
            next home.
          </h1>

          <p className="text-lg md:text-xl text-white/70 max-w-2xl mb-8 animate-fade-in-up">
            Custom homes and renovations built to last. We specialize in new home
            builds, kitchen and bathroom remodels, and whole-home upgrades:
            designed for modern living, built with precision.
          </p>

          {/* Stats
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10 animate-fade-in-up">
            <div className="text-center">
              <div className="text-3xl font-bold text-red-500">15+</div>
              <div className="text-white/70">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-red-500">200+</div>
              <div className="text-white/70">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-red-500">5.0</div>
              <div className="text-white/70">Client Rating</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-red-500">100%</div>
              <div className="text-white/70">Satisfaction</div>
            </div>
          </div>
          */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up">
            <Link
              className="bg-white/90 text-black text-xl px-6 py-3 rounded-lg hover:bg-red-500/70 hover:text-white transition duration-200 font-semibold text-center"
              href="/contact"
            >
              Get Free Consultation
            </Link>
            <Link
              className="border-2 border-white/50 text-white text-xl px-6 py-3 rounded-lg hover:bg-white/10 transition duration-200 font-semibold text-center"
              href="/projects"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
