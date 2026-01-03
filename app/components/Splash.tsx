import Link from "next/link";

const Splash = () => {
  return (
    <div className="relative hero bg-base-100 min-h-screen bg-[url(/images/backgrounds/splash-page-background.jpg)] bg-cover bg-center flex">
      {/* Background scrim */}
      <div className="absolute inset-0 bg-black/55"></div>
      <div className="absolute inset-0 backdrop-blur-[2px]"></div>
      
      <div className="relative px-8 py-10 bg-black/45 shadow-2xl ring-1 ring-white/10 rounded-r-4xl backdrop-blur-sm animate-fade-in mt-15">
        <Link 
          className="inline-block mb-3 font-semibold bg-red-500/20 px-4 py-1 text-lg text-white/90 border border-red-500/30 rounded-lg hover:bg-red-500/30 transition" 
          href="/publications"
        >
          Proudly Canadian Owned 🍁
        </Link>
        <h1 className="text-5xl text-white/90 font-bold tracking-tight">
          <span className="text-red-500 underline underline-offset-8 decoration-white/25 hover:decoration-white/50 transition">
            Your
          </span>{" "}
          next home.
        </h1>
        <p className="pt-6 pb-1 text-white/70 max-w-150">
          Custom homes and renovations built to last. We specialize in new home
          builds, kitchen and bathroom remodels, and whole-home upgrades:
          designed for modern living, built with precision.
        </p>
        <p className="font-bold text-lg pb-6 text-white/90">
          Get a free consultation today and bring your vision to life!
        </p>
        <Link
          className="bg-white/90 text-black text-xl mb-6 mt-8 px-3 py-2 rounded-lg hover:bg-red-500/70 hover:text-white transition duration-200 font-semibold"
          href="/contact"
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
};
export default Splash;
