import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import GetContact from "@/app/components/GetContact";
import Link from "next/link";
import { servicesData } from "../services";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const service = servicesData.find((s) => s.slug === params.slug);
  
  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  return {
    title: `${service.title} | EZU Construction`,
    description: service.subtitle,
  };
}

const ServicePage = ({ params }: { params: { slug: string } }) => {
  const service = servicesData.find((s) => s.slug === params.slug);

  if (!service) {
    notFound();
  }

  return (
    <div>
      <Navbar />
      {/* Hero Section */}
      <div
        className="relative hero bg-base-100 h-[80vh] bg-cover bg-center flex items-end"
        style={{ backgroundImage: `url(${service.heroImage})` }}
      >
        <div className="absolute inset-0 bg-black/55"></div>
        <div className="absolute inset-0 backdrop-blur-[2px]"></div>

        <div className="relative flex flex-col m-4 md:m-10 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-white/90 drop-shadow-lg tracking-tight">
            {service.title}
          </h1>
          <p className="text-xl font-light pt-2 pl-1 text-white/90 drop-shadow">
            {service.subtitle}
          </p>
        </div>
      </div>

      <div
        className="relative bg-base-300 bg-cover p-6 md:p-10"
        style={{ backgroundImage: `url(${service.bgImage})` }}
      >
        <div className="absolute inset-0 bg-black/55"></div>
        <div className="absolute inset-0 backdrop-blur-[2px]"></div>

        <div className="relative">
          {/* Intro Paragraph */}
          <p className="pb-10 text-lg max-w-6xl mx-auto text-center animate-fade-in my-3 text-white/90">
            {service.introText}
          </p>

          {/* Why Choose Us */}
          <div className="bg-black/45 shadow-2xl ring-1 ring-white/10 rounded-2xl backdrop-blur-sm animate-fade-in py-10 mb-10 mx-0 px-5 flex flex-col md:flex-row justify-center items-center gap-10">
            <div>
              <img
                src={service.whyChooseUs.image}
                alt={service.whyChooseUs.title}
                className="max-w-sm w-full rounded-2xl shadow-xl"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-4 text-white/90 animate-fade-in tracking-tight">
                {service.whyChooseUs.title}
              </h2>
              <ul className="grid gap-3 text-left text-lg animate-fade-in font-semibold text-white/70">
                {service.whyChooseUs.points.map((point, key) => (
                  <li key={key} className="flex items-start gap-2">
                    <span className="text-red-500">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Types Section */}
          <div className="py-5 md:pb-10 md:pt-10 animate-fade-in">
            <div className="bg-black/45 shadow-2xl ring-1 ring-white/10 rounded-2xl backdrop-blur-sm animate-fade-in p-5 md:p-10">
              <h2 className="text-4xl font-bold text-center mb-10 text-white/90 tracking-tight">
                {service.title}{" "}
                <span className="text-white underline underline-offset-8 decoration-white/25 hover:decoration-red-500 transition duration-300">
                  Options
                </span>
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {service.types.map((item, key) => (
                  <div
                    className="card bg-white/5 shadow-xl ring-1 ring-white/10 rounded-2xl backdrop-blur-sm animate-fade-in hover:scale-105 transition-all duration-300 pt-5"
                    key={key}
                  >
                    <figure>
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-100 h-60 object-cover rounded-t-2xl"
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

          {/* Considerations Section */}
          <div className="py-5 md:pb-10 md:pt-10 animate-fade-in mb-10">
            <div className="bg-black/45 shadow-2xl ring-1 ring-white/10 rounded-2xl backdrop-blur-sm animate-fade-in p-5 md:p-10">
              <h2 className="text-4xl font-bold text-center mb-10 text-white/90 tracking-tight">
                Essential{" "}
                <span className="text-white underline underline-offset-8 decoration-white/25 hover:decoration-red-500 transition-all duration-300 overflow-hidden">
                  Considerations
                </span>
              </h2>
              <div className="grid md:grid-cols-2 gap-8 text-lg font-semibold">
                {service.considerations.map((item, key) => (
                  <div className="flex items-start gap-3" key={key}>
                    <img
                      src={item.icon}
                      alt="icon"
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

          {/* Process Timeline */}
          <div className="bg-black/45 shadow-2xl ring-1 ring-white/10 rounded-2xl backdrop-blur-sm animate-fade-in py-10 px-2 lg:px-50 pb-5 mx-0">
            <h2 className="text-4xl font-bold mb-4 text-white/90 text-center pb-2 tracking-tight">
              Our {service.title}{" "}
              <span className="text-white underline underline-offset-8 decoration-white/25 hover:decoration-red-500 transition-all duration-300 overflow-hidden">
                Process
              </span>
            </h2>
            <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
              {service.process.map((step, index) => (
                <li key={index}>
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

          {/* Recent Projects */}
          <div className="py-5 md:pb-10 md:pt-20 animate-fade-in mb-5">
            <div className="bg-black/45 shadow-2xl ring-1 ring-white/10 rounded-2xl backdrop-blur-sm animate-fade-in p-5 md:p-10">
              <h2 className="text-4xl font-bold text-center mb-10 text-white/90 tracking-tight">
                Our Recent{" "}
                <span className="text-white underline underline-offset-8 decoration-white/25 hover:decoration-red-500 transition-all duration-300 overflow-hidden">
                  {service.title} Projects
                </span>
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                {service.portfolio.map((item, key) => (
                  <div
                    className="card bg-white/5 shadow-xl ring-1 ring-white/10 rounded-2xl backdrop-blur-sm animate-fade-in hover:scale-105 transition-all duration-300 pt-5 group"
                    key={key}
                  >
                    <figure>
                      <img
                        src={item.image}
                        alt={item.alt}
                        className="w-100 h-80 object-cover rounded-t-2xl"
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

          {/* FAQ Section */}
          <div className="py-5 md:pb-20 animate-fade-in">
            <div className="bg-black/45 shadow-2xl ring-1 ring-white/10 rounded-2xl backdrop-blur-sm animate-fade-in p-5 md:p-10">
              <h2 className="text-4xl font-bold text-center mb-10 text-white/90 tracking-tight">
                {service.title}{" "}
                <span className="text-white underline underline-offset-8 decoration-white/25  hover:decoration-red-500 transition-all duration-300 overflow-hidden">
                  FAQ
                </span>
              </h2>
              <div className="mb-10" id="qna">
                {service.faqs.map((item, key) => (
                  <div
                    className="collapse collapse-arrow bg-white/5 shadow-xl ring-1 ring-white/10 rounded-2xl backdrop-blur-sm animate-fade-in mb-2 py-1"
                    key={key}
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
      <GetContact />
      <Footer />
    </div>
  );
};

export default ServicePage;
