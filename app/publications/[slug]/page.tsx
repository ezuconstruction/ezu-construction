import Link from "next/link";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import GetContact from "@/app/components/GetContact";
import { publicationsData, ContentBlock } from "../publications";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return publicationsData.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = publicationsData.find((a) => a.slug === slug);
  
  if (!article) {
    return {
      title: "Article Not Found",
    };
  }

  return {
    title: `${article.title} | EZU Construction`,
    description: article.description,
    keywords: article.tags.join(", "),
    openGraph: {
      title: article.title,
      description: article.description,
      images: [article.image],
      type: "article",
      publishedTime: article.date,
    },
  };
}

const renderContentBlock = (block: ContentBlock, index: number) => {
  switch (block.type) {
    case "paragraph":
      return (
        <p key={index} className="text-xl text-white/90 leading-relaxed mb-6">
          {block.text}
        </p>
      );
    case "heading":
      const HeadingTag = `h${block.level}` as "h2" | "h3";
      return (
        <HeadingTag
          key={index}
          className={`${block.level === 2 ? "text-3xl" : "text-2xl"} font-bold text-white/90 mt-8 mb-4 tracking-tight`}
        >
          {block.text}
        </HeadingTag>
      );
    case "image":
      return (
        <figure key={index} className="my-8">
          <img
            src={block.src}
            alt={block.alt}
            className="w-full rounded-2xl shadow-xl max-h-120 object-cover"
          />
          {block.caption && (
            <figcaption className="text-center text-white/70 italic mt-2">
              {block.caption}
            </figcaption>
          )}
          <hr className="border-red-500/50 border-2 my-2"></hr>
        </figure>
      );
    case "list":
      const ListTag = block.ordered ? "ol" : "ul";
      return (
        <ListTag
          key={index}
          className={`${block.ordered ? "list-decimal" : "list-disc"} list-inside space-y-2 text-xl text-white/90 mb-6 ml-4`}
        >
          {block.items.map((item, i) => (
            <li key={i} className="leading-relaxed">{item}</li>
          ))}
        </ListTag>
      );
    case "quote":
      return (
        <blockquote
          key={index}
          className="border-l-4 border-red-500 pl-6 my-8 italic text-xl text-white/80 bg-white/5 rounded-r-2xl p-4"
        >
          <p>"{block.text}"</p>
          {block.author && (
            <cite className="block mt-2 text-right text-white/55 not-italic">
              — {block.author}
            </cite>
          )}
        </blockquote>
      );
    default:
      return null;
  }
};

const PublicationPage = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  const article = publicationsData.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  return (
    <div>
      <Navbar />
      {/* Hero Section */}
      <div
        className="relative hero bg-base-100 h-[65vh] bg-cover bg-center flex items-end"
        style={{ backgroundImage: `url(${article.image})` }}
      >
        <div className="absolute inset-0 bg-black/55"></div>
        <div className="absolute inset-0 backdrop-blur-[2px]"></div>

        {/* content above overlay */}
        <div className="relative z-10 flex flex-col m-4 md:m-10 animate-fade-in w-full max-w-4xl">
          <div className="badge bg-red-500/20 text-white/90 border border-red-500/30 badge-lg mb-4 w-fit">
            {article.category}
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-white/90 drop-shadow-lg tracking-tight">
            {article.title}
          </h1>

          <div className="flex items-center gap-4 mt-4 text-white/90 bg-black/45 ring-1 ring-white/10 max-w-xl justify-center rounded-2xl p-3 backdrop-blur-sm">
            <img
              src="/EZU-Red-White.png"
              alt="profile image"
              className="rounded-md w-8 h-7"
            />
            <span className="text-lg">{article.author}</span>
            <span className="text-lg">•</span>
            <span className="text-lg">{article.date}</span>
            <span className="text-lg">•</span>
            <span className="text-lg">{article.readTime}</span>
          </div>
        </div>
      </div>

      <div
        className="relative bg-base-300 bg-cover p-6 md:p-10"
        style={{ backgroundImage: "url(/images/backgrounds/bg-3.jpg)" }}
      >
        <div className="absolute inset-0 bg-black/55"></div>
        <div className="absolute inset-0 backdrop-blur-[2px]"></div>

        <div className="relative max-w-4xl mx-auto">
          {/* Article Content */}
          <article className="py-10">
            <div className="bg-black/45 shadow-2xl ring-1 ring-white/10 rounded-2xl backdrop-blur-sm p-8 md:p-12">
              <div className="prose prose-invert max-w-none">
                {article.content.map((block, index) =>
                  renderContentBlock(block, index)
                )}
              </div>

              {/* Tags */}
              {article.tags && article.tags.length > 0 && (
                <div className="mt-10 pt-8 border-t border-white/20">
                  <div className="flex flex-wrap gap-2">
                    {article.tags.map((tag, index) => (
                      <div
                        key={index}
                        className="badge bg-white/5 text-white/90 border border-white/10 badge-lg hover:cursor-pointer hover:bg-red-500 hover:text-white transition duration-300"
                      >
                        {tag}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </article>

          {/* Related Articles */}
          <div className="py-10">
            <h2 className="text-3xl font-bold mb-6 text-white/90 tracking-tight">
              Related{" "}
              <span className="text-white underline underline-offset-8 decoration-white/25 hover:decoration-red-500 transition duration-200">
                Articles
              </span>
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {publicationsData
                .filter((a) => a.slug !== article.slug)
                .slice(0, 2)
                .map((related) => (
                  <Link
                    key={related.slug}
                    href={`/publications/${related.slug}`}
                    className="card bg-white/5 shadow-xl ring-1 ring-white/10 rounded-2xl backdrop-blur-sm hover:scale-105 transition-all duration-300 overflow-hidden group"
                  >
                    <figure>
                      <img
                        src={related.image}
                        alt={related.title}
                        className="w-full h-40 object-cover group-hover:scale-110 transition-transform duration-300 rounded-t-2xl"
                      />
                    </figure>
                    <div className="card-body">
                      <h3 className="card-title text-lg text-white/90 group-hover:text-red-500 transition-colors line-clamp-2">
                        {related.title}
                      </h3>
                      <p className="text-sm text-white/70 line-clamp-2">
                        {related.excerpt}
                      </p>
                    </div>
                  </Link>
                ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="py-10 flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/publications"
              className="btn bg-white/10 text-white/90 border border-white/20 hover:bg-white/20 btn-lg"
            >
              ← Back to Publications
            </Link>

            <Link
              href="/contact"
              className="btn bg-white/90 text-black hover:bg-red-500 hover:text-white transition duration-200 btn-lg"
            >
              Start Your Project
            </Link>
          </div>
        </div>
      </div>
      <GetContact />
      <Footer />
    </div>
  );
};

export default PublicationPage;
