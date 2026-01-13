import type { Metadata } from "next";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Accessibility - EZU Construction",
  description:
    "EZU Construction accessibility statement and options for visitors who need support.",
  alternates: {
    canonical: "/accessibility",
  },
};

const AccessibilityPage = () => {
  return (
    <>
      <div className="pt-15 mx-14 min-h-screen">
        <h1 className="text-lg md:text-3xl text-left pt-6" id="accessibility">
          Accessibility{" "}
          <span className="text-primary font-extrabold text-4xl md:text-6xl">
            Options
          </span>
        </h1>
        <p className="pt-10 text-white/70">Please check back later.</p>
      </div>
      <Footer />
    </>
  );
};

export default AccessibilityPage;
