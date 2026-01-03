import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import GetContact from "../components/GetContact";
import { publicationsData } from "./publications";

const PublicationsPage = () => {
  return (
    <>
      <Navbar />
      {/* Hero Section */}
      <div
        className="relative hero bg-base-100 h-[60vh] bg-cover bg-center flex items-end"
        style={{
          backgroundImage:
            "url(/images/backgrounds/publications-background.jpg)",
        }}
      >
        <div className="absolute inset-0 bg-black/55"></div>
        <div className="absolute inset-0 backdrop-blur-[2px]"></div>

        <div className="relative flex flex-col m-4 md:m-10 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-white/90 drop-shadow-lg tracking-tight">
            Publications
          </h1>
          <p className="text-lg font-light pt-2 pl-1 text-white/90 drop-shadow">
            Expert insights, guides, and trends in home construction,
            renovation, and more.
          </p>
        </div>
      </div>

      <div
        className="relative bg-base-300 bg-cover p-6 md:p-10"
        style={{ backgroundImage: "url(/images/backgrounds/bg-3.jpg)" }}
      >
        <div className="absolute inset-0 bg-black/55"></div>
        <div className="absolute inset-0 backdrop-blur-[2px]"></div>

        <div className="relative max-w-7xl mx-auto py-10">
          <h2 className="text-5xl font-bold text-center mb-10 text-white/90 tracking-tight">
            Latest{" "}
            <span className="text-white underline underline-offset-8 decoration-white/25 hover:decoration-red-500 transition-all duration-300 overflow-hidden">
              Articles
            </span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {publicationsData.map((article) => (
              <Link
                key={article.slug}
                href={`/publications/${article.slug}`}
                className="card bg-white/5 shadow-xl ring-1 ring-white/10 rounded-2xl backdrop-blur-sm hover:scale-105 transition-all duration-300 overflow-hidden group"
              >
                <figure className="relative overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300 rounded-t-2xl"
                  />
                  <div className="absolute top-4 left-4">
                    <div className="badge bg-black/60 text-white/90 badge-lg rounded-lg">
                      {article.category}
                    </div>
                  </div>
                </figure>
                <div className="card-body">
                  <div className="flex items-center gap-2 text-sm text-white/55 mb-2">
                    <span>{article.date}</span>
                    <span>•</span>
                    <span>{article.readTime}</span>
                  </div>
                  <h3 className="card-title text-xl text-white/90 group-hover:text-red-500 transition-colors line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-sm text-white/70 line-clamp-3">
                    {article.excerpt}
                  </p>
                  <div className="card-actions justify-end mt-4">
                    <button className="btn bg-white/90 text-black group-hover:bg-red-500/60 group-hover:text-white btn-sm">
                      Read More →
                    </button>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <GetContact />
      <Footer />
    </>
  );
};

export default PublicationsPage;
