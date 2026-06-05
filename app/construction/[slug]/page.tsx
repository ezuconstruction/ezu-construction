import Footer from "@/app/components/Footer";
import Link from "next/link";
import OptimizedImage from "@/app/components/OptimizedImage";
import Breadcrumb from "@/app/components/Breadcrumb";
import { constructionData } from "../construction";
import CallToAction from "@/app/components/CallToAction";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return constructionData.map((construction) => ({
    slug: construction.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const construction = constructionData.find((c) => c.slug === slug);

  if (!construction) {
    return {
      title: "Service Not Found",
    };
  }

  return {
    title: `${construction.title} | EZU Construction`,
    description: construction.subtitle,
    alternates: {
      canonical: `/construction/${construction.slug}`,
    },
    openGraph: {
      title: `${construction.title} | EZU Construction`,
      description: construction.subtitle,
      images: [
        {
          url: construction.heroImage,
          width: 1200,
          height: 630,
          alt: construction.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${construction.title} | EZU Construction`,
      description: construction.subtitle,
      images: [construction.heroImage],
    },
  };
}

const ConstructionPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  const construction = constructionData.find((c) => c.slug === slug);

  if (!construction) {
    notFound();
  }

  return (
    <div>
      <div
        className="relative hero bg-base-100 h-[80vh] bg-cover bg-center flex items-end"
        style={{ backgroundImage: `url(${construction.heroImage})` }}
      >
        <div className="absolute inset-0 bg-black/55"></div>
        <div className="absolute inset-0 backdrop-blur-[2px]"></div>

        <div className="relative m-4 md:m-10 animate-fade-in">
          <Breadcrumb
            items={[
              { name: "Construction", url: "https://ezuconstruction.ca/construction" },
              { name: construction.title, url: `https://ezuconstruction.ca/construction/${construction.slug}` },
            ]}
          />
          <h1 className="text-5xl md:text-7xl font-bold text-white/90 drop-shadow-lg tracking-tight mt-2">
            {construction.title}
          </h1>
          <p className="text-xl font-light pt-2 pl-1 text-white/90 drop-shadow">
            {construction.subtitle}
          </p>
        </div>
      </div>

      <div
        className="relative bg-base-300 bg-cover p-6 md:p-10"
        style={{ backgroundImage: `url(${construction.bgImage})` }}
      >
        <div className="absolute inset-0 bg-black/55"></div>
        <div className="absolute inset-0 backdrop-blur-[2px]"></div>

        <div className="relative">
          <p className="pb-10 text-lg max-w-6xl mx-auto text-center animate-fade-in my-3 text-white/90">
            {construction.introText}
          </p>

          <div className="bg-black/45 shadow-2xl ring-1 ring-white/10 rounded-2xl backdrop-blur-sm animate-fade-in py-10 mb-10 mx-0 px-5 flex flex-col md:flex-row justify-center items-center gap-10">
            <div className="relative max-w-sm w-full">
              <OptimizedImage
                src={construction.whyChooseUs.image}
                alt={construction.whyChooseUs.title}
                width={800}
                height={600}
                sizes="(max-width: 768px) 100vw, 400px"
                className="max-w-sm w-full rounded-2xl shadow-xl object-cover"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-4 text-white/90 animate-fade-in tracking-tight">
                {construction.whyChooseUs.title}
              </h2>
              <ul className="grid gap-3 text-left text-lg animate-fade-in font-semibold text-white/70">
                {construction.whyChooseUs.points.map((point) => (
                  <li key={point} className="flex items-start gap-2">
                    <span className="text-red-500">-</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {construction.types && construction.types.length > 0 && (
            <div className="py-5 md:pb-10 md:pt-10 animate-fade-in">
              <div className="bg-black/45 shadow-2xl ring-1 ring-white/10 rounded-2xl backdrop-blur-sm animate-fade-in p-5 md:p-10">
                <h2 className="text-4xl font-bold text-center mb-10 text-white/90 tracking-tight">
                  {construction.title}{" "}
                  <span className="text-white underline underline-offset-8 decoration-white/25 hover:decoration-red-500 transition duration-300">
                    Options
                  </span>
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {construction.types.map((item) => (
                    <div
                      className="card bg-white/5 shadow-xl ring-1 ring-white/10 rounded-2xl backdrop-blur-sm animate-fade-in hover:scale-105 transition-all duration-300 pt-5"
                      key={item.title}
                    >
                      <figure className="relative h-60">
                        <OptimizedImage
                          src={item.image}
                          alt={item.title}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          className="object-cover rounded-t-2xl"
                        />
                      </figure>
                      <div className="card-body">
                        <h3 className="card-title text-2xl text-white/90">
                          {item.title}
                        </h3>
                        <p className="pb-2 text-lg text-white/70">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          <div className="py-5 md:pb-10 md:pt-10 animate-fade-in mb-10">
            <div className="bg-black/45 shadow-2xl ring-1 ring-white/10 rounded-2xl backdrop-blur-sm animate-fade-in p-5 md:p-10">
              <h2 className="text-4xl font-bold text-center mb-10 text-white/90 tracking-tight">
                Essential{" "}
                <span className="text-white underline underline-offset-8 decoration-white/25 hover:decoration-red-500 transition-all duration-300 overflow-hidden">
                  Considerations
                </span>
              </h2>
              <div className="grid md:grid-cols-2 gap-8 text-lg font-semibold">
                {construction.considerations.map((item) => (
                  <div className="flex items-start gap-3" key={item.title}>
                    <OptimizedImage
                      src={item.icon}
                      alt=""
                      width={32}
                      height={32}
                      sizes="32px"
                      className="w-8 h-8 flex-shrink-0 mt-1 invert opacity-70"
                    />
                    <div>
                      <h3 className="text-xl font-bold text-white/90">
                        {item.title}
                      </h3>
                      <p className="font-normal text-base text-white/70">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-black/45 shadow-2xl ring-1 ring-white/10 rounded-2xl backdrop-blur-sm animate-fade-in py-10 px-2 lg:px-50 pb-5 mx-0">
            <h2 className="text-4xl font-bold mb-4 text-white/90 text-center pb-2 tracking-tight">
              Our {construction.title}{" "}
              <span className="text-white underline underline-offset-8 decoration-white/25 hover:decoration-red-500 transition-all duration-300 overflow-hidden">
                Process
              </span>
            </h2>
            <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
              {construction.process.map((step, index) => (
                <li key={step.title}>
                  {index > 0 && <hr className="border-white/20" />}
                  <div className="timeline-middle">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="h-5 w-5 text-red-500"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div
                    className={`${
                      index % 2 === 0
                        ? "timeline-start mb-10 md:text-end hover:scale-105 transition-transform pr-2"
                        : "timeline-end md:mb-10 hover:scale-105 transition-transform pl-0 md:pl-2"
                    }`}
                  >
                    <time className="font-mono italic text-white/70">
                      {step.step}
                    </time>
                    <div className="text-lg font-black text-white/90 hover:text-red-500 transition duration-300">
                      {step.title}
                    </div>
                    <p className="text-white/70">{step.description}</p>
                  </div>
                  <hr className="border-white/20" />
                </li>
              ))}
            </ul>
          </div>

          <div className="py-5 md:pb-10 md:pt-20 animate-fade-in mb-5">
            <div className="bg-black/45 shadow-2xl ring-1 ring-white/10 rounded-2xl backdrop-blur-sm animate-fade-in p-5 md:p-10">
              <h2 className="text-4xl font-bold text-center mb-10 text-white/90 tracking-tight">
                Our Recent{" "}
                <span className="text-white underline underline-offset-8 decoration-white/25 hover:decoration-red-500 transition-all duration-300 overflow-hidden">
                  {construction.title} Projects
                </span>
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                {construction.portfolio.map((item) => (
                  <div
                    className="card bg-white/5 shadow-xl ring-1 ring-white/10 rounded-2xl backdrop-blur-sm animate-fade-in hover:scale-105 transition-all duration-300 pt-5 group"
                    key={item.title}
                  >
                    <figure className="relative h-80">
                      <OptimizedImage
                        src={item.image}
                        alt={item.alt}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover rounded-t-2xl"
                      />
                    </figure>
                    <div className="card-body">
                      <h3 className="card-title text-2xl text-white/90 group-hover:text-red-500 transition-300 transition-all duration-200">
                        {item.title}
                      </h3>
                      <p className="pb-2 text-lg text-white/70">
                        {item.description}
                      </p>
                      <Link
                        href={item.link}
                        className="btn bg-white/90 text-black group-hover:bg-red-500 group-hover:text-white transition-300 text-lg transition duration-200"
                      >
                        {item.linkTitle}
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="py-5 md:pb-20 animate-fade-in">
            <div className="bg-black/45 shadow-2xl ring-1 ring-white/10 rounded-2xl backdrop-blur-sm animate-fade-in p-5 md:p-10">
              <h2 className="text-4xl font-bold text-center mb-10 text-white/90 tracking-tight">
                {construction.title}{" "}
                <span className="text-white underline underline-offset-8 decoration-white/25 hover:decoration-red-500 transition-all duration-300 overflow-hidden">
                  FAQ
                </span>
              </h2>
              <div className="mb-10" id="qna">
                {construction.faqs.map((item) => (
                  <div
                    className="collapse collapse-arrow bg-white/5 shadow-xl ring-1 ring-white/10 rounded-2xl backdrop-blur-sm animate-fade-in mb-2 py-1"
                    key={item.question}
                  >
                    <input type="checkbox" name="my-accordion-2" />
                    <div className="collapse-title font-semibold text-2xl text-white/90">
                      {item.question}
                    </div>
                    <div className="collapse-content text-lg text-white/70">
                      {item.answer}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <CallToAction />
      <Footer />
    </div>
  );
};

export default ConstructionPage;
