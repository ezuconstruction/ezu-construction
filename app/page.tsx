import HeroSection from "./components/HeroSection";
import TrustBadges from "./components/TrustBadges";
import ConstructionServices from "./components/ConstructionServices";
import ImageDiff from "./components/ImageDiff";
import CustomerFeedback from "./components/CustomerFeedback";
import RecentArticles from "./components/RecentArticles";
import SEOFAQ from "./components/SEOFAQ";
import CallToAction from "./components/CallToAction";
import Footer from "./components/Footer";
import Notice from "./components/Notice";
import StructuredData from "./components/StructuredData";
import EnhancedServices from "./components/EnhancedServices";

export default function Home() {
  return (
    <div className="min-h-screen">
      <StructuredData />
      <main>
        <HeroSection />
        <TrustBadges />
        <EnhancedServices />
        <ConstructionServices />
        <ImageDiff />
        <RecentArticles />
        <SEOFAQ />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}
