import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import GetContact from "../components/GetContact";
import Link from "next/link";

const SocialMediaPage = () => {
  return (
    <>
      <Navbar />
      {/* Hero Section */}
      <div
        className="relative hero bg-base-100 h-[70vh] bg-cover bg-center flex items-end"
        style={{
          backgroundImage: "url(/images/backgrounds/social-media.avif)",
        }}
      >
        <div className="absolute inset-0 bg-black/55"></div>
        <div className="absolute inset-0 backdrop-blur-[2px]"></div>
        
        <div className="relative flex flex-col m-4 md:m-10 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-white/90 drop-shadow-lg tracking-tight">
            Social Media
          </h1>
          <p className="text-lg font-light pt-2 pl-1 text-white/90 drop-shadow">
            Follow our latest projects, tips, and updates
          </p>
        </div>
      </div>

      <div
        className="relative bg-base-300 bg-cover p-6 md:p-10"
        style={{ backgroundImage: "url(/images/backgrounds/bg-2.jpg)" }}
      >
        <div className="absolute inset-0 bg-black/55"></div>
        <div className="absolute inset-0 backdrop-blur-[2px]"></div>
        
        <div className="relative max-w-7xl mx-auto py-10">
          {/* Social Media Links */}
          <div className="bg-black/45 shadow-2xl ring-1 ring-white/10 rounded-2xl backdrop-blur-sm p-8 mb-10">
            <h2 className="text-4xl font-bold text-center mb-8 text-white/90 tracking-tight">
              Follow Us on{" "}
              <span className="text-white underline underline-offset-8 decoration-white/25">
                Social Media
              </span>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Link
                href="https://instagram.com/ezuconstruction"
                target="_blank"
                rel="noopener noreferrer"
                className="card bg-white/5 shadow-xl ring-1 ring-white/10 rounded-2xl backdrop-blur-sm hover:scale-105 transition-all duration-300 p-6 text-center group"
              >
                <div className="text-5xl mb-4">📷</div>
                <h3 className="text-2xl font-bold text-white/90 group-hover:text-red-500 transition-colors">
                  Instagram
                </h3>
                <p className="text-white/70 mt-2">@ezu.construction</p>
              </Link>
              <Link
                href="https://facebook.com/ezuconstruction"
                target="_blank"
                rel="noopener noreferrer"
                className="card bg-white/5 shadow-xl ring-1 ring-white/10 rounded-2xl backdrop-blur-sm hover:scale-105 transition-all duration-300 p-6 text-center group"
              >
                <div className="text-5xl mb-4">👥</div>
                <h3 className="text-2xl font-bold text-white/90 group-hover:text-red-500 transition-colors">
                  Facebook
                </h3>
                <p className="text-white/70 mt-2">EZU Construction</p>
              </Link>
              <Link
                href="https://linkedin.com/company/ezuconstruction"
                target="_blank"
                rel="noopener noreferrer"
                className="card bg-white/5 shadow-xl ring-1 ring-white/10 rounded-2xl backdrop-blur-sm hover:scale-105 transition-all duration-300 p-6 text-center group"
              >
                <div className="text-5xl mb-4">💼</div>
                <h3 className="text-2xl font-bold text-white/90 group-hover:text-red-500 transition-colors">
                  LinkedIn
                </h3>
                <p className="text-white/70 mt-2">EZU Construction Inc.</p>
              </Link>
              <Link
                href="https://youtube.com/@ezuconstruction"
                target="_blank"
                rel="noopener noreferrer"
                className="card bg-white/5 shadow-xl ring-1 ring-white/10 rounded-2xl backdrop-blur-sm hover:scale-105 transition-all duration-300 p-6 text-center group"
              >
                <div className="text-5xl mb-4">▶️</div>
                <h3 className="text-2xl font-bold text-white/90 group-hover:text-red-500 transition-colors">
                  YouTube
                </h3>
                <p className="text-white/70 mt-2">EZU Construction</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <GetContact />
      <Footer />
    </>
  );
};

export default SocialMediaPage;
