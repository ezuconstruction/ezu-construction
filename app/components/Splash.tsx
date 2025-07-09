import Link from "next/link";

const Splash = () => {
  return (
    <div className="hero bg-base-100 min-h-screen bg-[url(/images/splash-page-background.jpg)] bg-cover flex">
      <div className="px-10 py-10 bg-black/30 shadow-lg ring-1 ring-black/5 rounded-r-4xl backdrop-blur-xs animate-fade-in">
        <h1 className="text-5xl text-white font-bold">
          <span className="text-accent">Your</span> next home.
        </h1>
        <p className="pt-6 pb-1 text-gray-200 max-w-150">
          Custom homes and renovations built to last. We specialize in new home
          builds, kitchen and bathroom remodels, and whole-home upgrades:
          designed for modern living, built with precision.
        </p>
        <p className="font-bold text-lg pb-6">
          Get a free consultation today and bring your vision to life.
        </p>
        <Link
          className="bg-transparent text-xl mb-6 mt-8 px-3 py-2 outline-2 hover:bg-white hover:text-black hover:outline-white transition duration-200 font-semibold"
          href="/contact"
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
};
export default Splash;
