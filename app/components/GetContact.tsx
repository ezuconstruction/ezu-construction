import Link from "next/link";

const GetContact = () => {
  return (
    <div className="px-2 md:px-5 py-5 pb-20 md:pt-20 bg-base-200 animate-fade-in bg-[url(/images/our-services-background.png)] object-cover">
      <div className="bg-black/30 shadow-lg ring-1 ring-black/5 rounded-2xl backdrop-blur-xs animate-fade-in p-5 md:p-10 pb-8 mx-3">
        <h2 className="text-4xl font-bold text-center mb-10 text-white">
          Let's make your dream a <span className="text-secondary text-6xl">reality.</span>
        </h2>
        <div className="flex justify-center">
            <Link href="/contact" className="btn btn-accent text-4xl w-60 h-15 rounded-lg">Contact Us</Link>
        </div>
      </div>
    </div>
  );
}
export default GetContact