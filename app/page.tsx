import Navbar from "./components/Navbar";
import Splash from "./components/Splash";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import GetContact from "./components/GetContact";
import Difference from "./components/Difference";
import Notice from "./components/Notice";

export default function Home() {
  return (
    <div>
      <Navbar />
      <main>
        <Splash />
        <Notice />
        <Services />
        <GetContact />
      </main>
      <Footer />
    </div>
  );
}
