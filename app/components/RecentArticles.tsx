import Link from "next/link";
import { publicationsData } from "../publications/publications";

const RecentArticles = () => {
  // Get the 3 most recent articles
  const recentArticles = publicationsData.slice(0, 3);

  return (
    <section className="relative py-16 px-4 bg-cover bg-center" style={{ backgroundImage: "url(/images/backgrounds/publications-background-dark.jpg)" }}>
      <div className="absolute inset-0 bg-black/55"></div>
      <div className="absolute inset-0 backdrop-blur-[2px]"></div>
      
      <div className="relative max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white/90 tracking-tight mb-4">
            Latest{" "}
            <span className="text-white underline underline-offset-8 decoration-white/25 hover:decoration-red-500 transition-all duration-300">
              Construction Insights
            </span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Expert tips, trends, and guides to help you make informed decisions about your home renovation projects
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {recentArticles.map((article, index) => (
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

        <div className="text-center">
          <Link
            href="/publications"
            className="btn bg-white/90 text-black hover:bg-white px-8 py-3 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            View All Articles
          </Link>
        </div>
      </div>
    </section>
  );
};

export default RecentArticles;
