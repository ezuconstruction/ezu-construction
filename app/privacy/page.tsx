import type { Metadata } from "next";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy - EZU Construction",
  description:
    "Read the EZU Construction privacy policy covering data collection, usage, and protection practices.",
  alternates: {
    canonical: "/privacy",
  },
};

const PrivacyPage = () => {
  return (
    <>
      <div className="pt-15 mx-14 min-h-screen">
        <h1 className="text-lg md:text-3xl text-left pt-6" id="privacy">
          Privacy{" "}
          <span className="text-primary font-extrabold text-4xl md:text-6xl">
            Policy
          </span>
        </h1>
        <p className="pt-10 text-white/70">Please check back later.</p>
      </div>
      <Footer />
    </>
  );
};

export default PrivacyPage;
