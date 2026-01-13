import Link from "next/link";
import OptimizedImage from "./OptimizedImage";

const Services = () => {
  const services = [
    {
      title: "Custom Home Builders",
      image: "/images/services/custom-home-builders.jpg",
      alt: "Luxury custom-built home exterior",
      description:
        "We design and build high-quality custom homes tailored to your style, needs, and budget from blueprint to move-in.",
      link: "/services/custom-homes",
      linkTitle: "Start your custom home",
    },
    {
      title: "Whole Home Renovations",
      image: "/images/services/whole-home-renovation.jpg",
      alt: "Modernized full-home renovation",
      description:
        "Transform your entire home with expert renovations that update layout, design, and functionality in one go.",
      link: "/services/home-renovations",
      linkTitle: "Renovate your home today",
    },
    {
      title: "Home Additions",
      image: "/images/services/home-additions.jpg",
      alt: "Beautiful home addition",
      description:
        "Add valuable living space with seamless home additions that match your home's style and boost its value.",
      link: "/services/home-additions",
      linkTitle: "Learn more about additions",
    },
    {
      title: "Kitchen Renovations",
      image: "/images/services/kitchen-renovations.jpg",
      alt: "Fully upgraded kitchen with modern finishes",
      description:
        "Get a functional, stylish kitchen upgrade with better storage, smarter layouts, and high-end finishes.",
      link: "/services/kitchen-renovations",
      linkTitle: "Start your kitchen remodel",
    },
    {
      title: "Bathroom Renovations",
      image: "/images/services/bathroom-renovations.jpg",
      alt: "Remodeled bathroom with walk-in shower",
      description:
        "Upgrade your bathroom with custom tiling, better lighting, and spa-inspired features that feel timeless.",
      link: "/services/bathroom-renovations",
      linkTitle: "Upgrade your bathroom",
    },
    {
      title: "Home Office Renovations",
      image: "/images/services/bedroom-renovations.png",
      alt: "Cozy renovated office with focused lighting",
      description:
        "Refresh your home office with custom storage, modern finishes, and a layout designed for comfort and focus.",
      link: "/services/home-office-renovations",
      linkTitle: "Refresh your office space",
    },
  ];

  return (
    <section className="relative px-2 md:px-5 py-5 md:pt-20 animate-fade-in bg-[url(/images/backgrounds/our-services-background.png)] object-cover bg-center">
      <div className="absolute inset-0 bg-black/55"></div>
      <div className="absolute inset-0 backdrop-blur-[2px]"></div>

      <div className="relative bg-black/45 shadow-2xl ring-1 ring-white/10 rounded-2xl backdrop-blur-sm animate-fade-in p-5 md:p-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white/90 tracking-tight mb-4">
            Our{" "}
            <span className="text-white underline underline-offset-8 decoration-white/25 hover:decoration-red-500 transition duration-300">
              Residential Services
            </span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            From custom dream homes to specialized renovations, we bring your
            vision to life with exceptional craftsmanship and attention to
            detail.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((item) => (
            <Link href={item.link} key={item.title}>
              <div className="card bg-white/5 shadow-xl ring-1 ring-white/10 rounded-2xl backdrop-blur-sm animate-fade-in hover:scale-105 transition-all duration-300 overflow-hidden group">
                <div className="relative h-48 overflow-hidden">
                  <OptimizedImage
                    src={item.image}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>

                <div className="card-body p-6">
                  <h3 className="card-title text-2xl text-white/90 group-hover:text-red-500 transition duration-200 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-lg text-white/70 mb-4">
                    {item.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <div className="btn bg-white/90 text-black group-hover:bg-red-500 text-lg group-hover:text-white transition duration-200 rounded-lg">
                      {item.linkTitle}
                    </div>
                    <div className="text-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-xl text-white/70 mb-6">
            Need something custom? We're here to help.
          </p>
          <Link
            href="/contact"
            className="bg-red-500 text-white text-xl px-8 py-3 rounded-lg hover:bg-red-600 transition duration-200 font-semibold"
          >
            Discuss Your Project
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
