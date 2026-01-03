import Link from "next/link";
import Footer from "./components/Footer";

function Error() {
  return (
    <>
      
      <div className="text-center flex flex-col justify-center min-h-screen px-5 md:px-0 animate-fade-in">
        <p className="text-3xl font-semibold text-accent mt-10">404</p>
        <h1 className="mt-3 text-5xl font-bold">Page not found</h1>
        <p className="mt-3 text-lg font-normal text-pretty sm:text-xl/8">
          If you believe a problem has occured, contact us below. <br />{" "}
          Otherwise, click <span className="font-bold">Home</span> to return to
          the home screen.
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
}

export default Error;
