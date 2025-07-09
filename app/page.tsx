import Navbar from "./components/Navbar";
import Splash from "./components/Splash";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import GetContact from "./components/GetContact";

export default function Home() {
  return (
    <div>
      <Navbar />
      <main>
        <Splash />
        <Services />
        <Projects />
        <GetContact />
      </main>
      <Footer />
    </div>
  );
}
