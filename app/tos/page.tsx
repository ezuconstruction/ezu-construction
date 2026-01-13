import type { Metadata } from "next";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Terms of Service - EZU Construction",
  description:
    "Review the EZU Construction terms of service for website usage and service engagement.",
  alternates: {
    canonical: "/tos",
  },
};

const TermsPage = () => {
  return (
    <>
      <div className="pt-15 mx-14 min-h-screen">
        <h1 className="text-lg md:text-3xl text-left pt-6" id="tos">
          Terms of{" "}
          <span className="text-secondary font-extrabold text-4xl md:text-6xl">
            Service
          </span>
        </h1>
        <p className="pt-10 text-white/70">Please check back later.</p>
      </div>
      <Footer />
    </>
  );
};

export default TermsPage;
