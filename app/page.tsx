import HeroSection from "./components/HeroSection";
import TrustBadges from "./components/TrustBadges";
import EnhancedServices from "./components/EnhancedServices";
import CallToAction from "./components/CallToAction";
import Footer from "./components/Footer";
import Notice from "./components/Notice";
import StructuredData from "./components/StructuredData";

export default function Home() {
  return (
    <div className="min-h-screen">
      <StructuredData />
      <main>
        <HeroSection />
        <TrustBadges />
        <EnhancedServices />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}
