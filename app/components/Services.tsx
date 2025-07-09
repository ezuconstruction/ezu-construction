import Link from "next/link";

const Services = () => {
  return (
    <section className="px-2 md:px-5 py-5 md:pb-50 md:pt-20 bg-base-200 animate-fade-in bg-[url(/images/our-services-background.png)] object-cover">
      <div className="bg-black/30 shadow-lg ring-1 ring-black/5 rounded-4xl backdrop-blur-xs animate-fade-in p-5 md:p-10">
        <h2 className="text-4xl font-bold text-center mb-10 text-white">
          Our <span className="text-secondary text-6xl">Services</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Custom Home Builders",
              image: "images/custom-home-builders.jpg",
              src: "Luxury custom-built home exterior",
              description:
                "We design and build high-quality custom homes tailored to your style, needs, and budget; from blueprint to move-in.",
              link: "services/custom-homes",
              linktitle: "Start your custom home project",
            },
            {
              title: "Whole Home Renovations",
              image: "/images/whole-home-renovation.jpg",
              src: "Modernized full-home renovation",
              description:
                "Transform your entire home with expert renovations that update layout, design, and functionality in one go.",
              link: "services/home-renovations",
              linktitle: "Renovate your home today",
            },
            {
              title: "Home Additions",
              image: "/images/home-additions.jpg",
              src: "Beautiful home addition",
              description:
                "Add valuable living space with seamless home additions that match your home's style and boost its value.",
              link: "services/home-additions",
              linktitle: "Book a home addition consult",
            },
            {
              title: "Kitchen Renovations",
              image: "/images/kitchen-renovations.jpg",
              src: "Fully upgraded kitchen with modern finishes",
              description:
                "Get a functional, stylish kitchen upgrade with better storage, smarter layouts, and high-end finishes.",
              link: "services/kitchen-renovations",
              linktitle: "Start your kitchen remodel",
            },
            {
              title: "Bathroom Renovations",
              image: "/images/placeholder-image.jpg",
              src: "Remodeled bathroom with walk-in shower",
              description:
                "Upgrade your bathroom with custom tiling, better lighting, and spa-inspired features - efficient and elegant.",
              link: "services/bathroom-renovations",
              linktitle: "Upgrade your bathroom",
            },
            {
              title: "Bedroom Renovations",
              image: "/images/bedroom-renovations.png",
              src: "Cozy renovated bedroom with lighting",
              description:
                "Refresh your bedroom with custom storage, modern finishes, and a layout designed for comfort and style.",
              link: "services/bedroom-renovations",
              linktitle: "Refresh your bedroom space",
            },
          ].map((item, key) => (
            <div
              className="card bg-black/30 shadow-lg ring-1 ring-black/5 rounded-lg backdrop-blur-xs animate-fade-in hover:scale-105 transition-transform pt-5"
              key={key}
            >
              <figure>
                <img
                  src={item.image}
                  alt={item.src}
                  className="w-100 h-80 object-cover"
                />
              </figure>
              <div className="card-body">
                <h3 className="card-title text-2xl">{item.title}</h3>
                <p className="pb-2 text-md">{item.description}</p>
                <Link
                  href={item.link}
                  className="btn btn-accent text-lg bg-accent/40 text-white hover:bg-accent hover:text-black transition duration-200 "
                >
                  {item.linktitle}
                </Link>
              </div>
            </div>
          ))}
        </div>
        {/* 
        <div className="grid md:grid-cols-3 gap-8">
          <div className="card bg-base-100 shadow-xl hover:scale-105 transition-transform pt-5">
            <figure>
              <img
                src="https://placehold.co/400x200?text=Custom+Homes"
                alt="Custom Homes"
              />
            </figure>
            <div className="card-body">
              <h3 className="card-title">Custom Home Builds</h3>
              <p>
                From concept to completion, we bring your vision to life with
                expert design and construction.
              </p>
            </div>
          </div>
          <div className="card bg-base-100 shadow-xl hover:scale-105 transition-transform">
            <figure>
              <img
                src="https://placehold.co/400x200?text=Renovations"
                alt="Renovations"
              />
            </figure>
            <div className="card-body">
              <h3 className="card-title">Renovations & Additions</h3>
              <p>
                Transform your existing space with seamless renovations and
                beautiful additions.
              </p>
            </div>
          </div>
          <div className="card bg-base-100 shadow-xl hover:scale-105 transition-transform">
            <figure>
              <img
                src="https://placehold.co/400x200?text=Luxury+Finishes"
                alt="Luxury Finishes"
              />
            </figure>
            <div className="card-body">
              <h3 className="card-title">Luxury Finishes</h3>
              <p>
                Premium materials and finishes for a truly bespoke and elegant
                home.
              </p>
            </div>
          </div>
        </div>
        */}
      </div>
    </section>
  );
};
export default Services;
