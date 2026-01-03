import Link from "next/link";

const GetContact = () => {
  return (
    <div className="relative py-10 px-0 md:px-5 bg-base-200 animate-fade-in bg-[url(/images/backgrounds/our-services-background.png)] object-cover bg-center">
      {/* Background scrim */}
      <div className="absolute inset-0 bg-black/55"></div>
      <div className="absolute inset-0 backdrop-blur-[2px]"></div>

      <div className="relative bg-black/45 shadow-2xl ring-1 ring-white/10 rounded-2xl backdrop-blur-sm animate-fade-in p-5 md:p-10 pb-8 mx-3">
        <h2 className="text-4xl font-bold text-center mb-10 text-white/90 tracking-tight">
          Let's make your dream a{" "}
          <span className="text-white underline underline-offset-8 decoration-white/25  hover:decoration-red-500 transition duration-300 overflow-hidden">
            reality
          </span>
          .
        </h2>
        <div className="flex justify-center">
          <Link
            className="bg-white/90 text-black text-3xl px-4 py-3 rounded-lg hover:bg-red-500/70 hover:text-white transition duration-200 font-bold"
            href="/contact"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};
export default GetContact;
