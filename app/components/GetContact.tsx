import Link from "next/link";

const GetContact = () => {
  return (
    <div className="pb-10 px-0 md:px-5 bg-base-200 animate-fade-in bg-[url(/images/our-services-background.png)] object-cover">
      <div className="bg-black/30 shadow-lg ring-1 ring-black/5 rounded-2xl backdrop-blur-xs animate-fade-in p-5 md:p-10 pb-8 mx-3">
        <h2 className="text-4xl font-bold text-center mb-10 text-white">
          Let's make your dream a{" "}
          <span className="text-secondary text-6xl">reality.</span>
        </h2>
        <div className="flex justify-center">
          <Link
            className="bg-transparent text-4xl px-4 py-3 outline-2 hover:bg-accent/60 hover:text-white hover:outline-accent/60 transition duration-200 font-semibold"
            href="/contact"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}
export default GetContact