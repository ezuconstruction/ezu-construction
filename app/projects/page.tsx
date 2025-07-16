import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const page = () => {
  return (
    <>
      <Navbar />
      <div className="text-center flex flex-col justify-center min-h-screen px-5 md:px-0 animate-fade-in">
        <p className="text-3xl font-semibold text-accent mt-10">403</p>
        <h1 className="mt-3 text-5xl font-bold">Page Unavailable</h1>
        <p className="mt-3 text-lg font-normal text-pretty sm:text-xl/8">
          This page is currently unavailable. Check back later!
        </p>
        <div className="mt-7 flex items-center justify-center gap-x-6">
          <Link href="/" className="btn btn-info text-lg">
            Home
          </Link>
          <Link href="/contact">Contact Us →</Link>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default page;
