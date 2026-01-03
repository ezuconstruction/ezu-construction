import Link from "next/link";

const Services = () => {
  return (
    <section className="relative px-2 md:px-5 py-5 md:pt-20 animate-fade-in bg-[url(/images/backgrounds/our-services-background.png)] object-cover bg-center">
      {/* Background scrim */}
      <div className="absolute inset-0 bg-black/55"></div>
      <div className="absolute inset-0 backdrop-blur-[2px]"></div>

      <div className="relative bg-black/45 shadow-2xl ring-1 ring-white/10 rounded-2xl backdrop-blur-sm animate-fade-in p-5 md:p-10">
        <h2 className="text-4xl font-bold text-center mb-10 text-white/90 tracking-tight">
          Our{" "}
          <span className="text-white underline underline-offset-8 decoration-white/25 hover:decoration-red-500 transition duration-300">
            Services
          </span>
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Custom Home Builders",
              image: "/images/services/custom-home-builders.jpg",
              src: "Luxury custom-built home exterior",
              description:
                "We design and build high-quality custom homes tailored to your style, needs, and budget; from blueprint to move-in.",
              link: "services/custom-homes",
              linktitle: "Start your custom home",
            },
            {
              title: "Whole Home Renovations",
              image: "/images/services/whole-home-renovation.jpg",
              src: "Modernized full-home renovation",
              description:
                "Transform your entire home with expert renovations that update layout, design, and functionality in one go.",
              link: "services/home-renovations",
              linktitle: "Renovate your home today",
            },
            {
              title: "Home Additions",
              image: "/images/services/home-additions.jpg",
              src: "Beautiful home addition",
              description:
                "Add valuable living space with seamless home additions that match your home's style and boost its value.",
              link: "services/home-additions",
              linktitle: "Learn more about additions",
            },
            {
              title: "Kitchen Renovations",
              image: "/images/services/kitchen-renovations.jpg",
              src: "Fully upgraded kitchen with modern finishes",
              description:
                "Get a functional, stylish kitchen upgrade with better storage, smarter layouts, and high-end finishes.",
              link: "services/kitchen-renovations",
              linktitle: "Start your kitchen remodel",
            },
            {
              title: "Bathroom Renovations",
              image: "/images/services/bathroom-renovations.jpg",
              src: "Remodeled bathroom with walk-in shower",
              description:
                "Upgrade your bathroom with custom tiling, better lighting, and spa-inspired features - efficient and elegant.",
              link: "services/bathroom-renovations",
              linktitle: "Upgrade your bathroom",
            },
            {
              title: "Home Office Renovations",
              image: "/images/services/bedroom-renovations.png",
              src: "Cozy renovated bedroom with lighting",
              description:
                "Refresh your bedroom with custom storage, modern finishes, and a layout designed for comfort and style.",
              link: "services/home-office-renovations",
              linktitle: "Refresh your office space",
            },
          ].map((item, key) => (
            <div
              className="card bg-white/5 shadow-xl ring-1 ring-white/10 rounded-2xl backdrop-blur-sm animate-fade-in hover:scale-105 transition-all duration-300 pt-5 group"
              key={key}
            >
              <figure>
                <img
                  src={item.image}
                  alt={item.src}
                  className="w-100 h-80 object-cover rounded-t-2xl"
                />
              </figure>
              <div className="card-body">
                <h3 className="card-title text-2xl text-white/90 group-hover:text-red-500 transition duration-200">
                  {item.title}
                </h3>
                <p className="pb-2 text-lg text-white/70">{item.description}</p>
                <Link
                  href={item.link}
                  className="btn bg-white/90 text-black group-hover:bg-red-500 text-lg group-hover:text-white transition duration-200 rounded-lg"
                >
                  {item.linktitle}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Services;
