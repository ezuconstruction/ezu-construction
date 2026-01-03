import Link from "next/link";

const ConstructionServices = () => {
  const services = [
    {
      title: "Drywall Installation",
      description: "Professional drywall installation, repair, and finishing services for smooth, durable walls and ceilings in any room.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      ),
      features: ["Installation", "Repair", "Texture Finishes", "Taping & Mudding"],
      href: "/construction/drywall"
    },
    {
      title: "Flooring Solutions",
      description: "Complete flooring installation including hardwood, laminate, vinyl, and engineered wood options for every style and budget.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v14a1 1 0 01-1 1H5a1 1 0 01-1-1V5z" />
        </svg>
      ),
      features: ["Hardwood", "Laminate", "Vinyl", "Engineered Wood"],
      href: "/construction/flooring"
    },
    {
      title: "Tile Installation",
      description: "Expert tile installation for bathrooms, kitchens, backsplashes, and floors with precision cutting and professional grouting.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      features: ["Ceramic", "Porcelain", "Natural Stone", "Mosaic"],
      href: "/construction/tile"
    },
    {
      title: "Interlocking Stone",
      description: "Custom interlocking stone installation for driveways, walkways, patios, and retaining walls with proper drainage and base preparation.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      features: ["Driveways", "Patios", "Walkways", "Retaining Walls"],
      href: "/construction/interlocking"
    },
    {
      title: "Painting & Finishing",
      description: "Complete painting and finishing services for interiors and exteriors with premium paints and professional preparation techniques.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
        </svg>
      ),
      features: ["Interior", "Exterior", "Preparation", "Clean-up"],
      href: "/construction/painting"
    }
  ];

  return (
    <section className="relative py-16 px-4 bg-cover bg-center" style={{ backgroundImage: "url(/images/backgrounds/construction-background.jpg)" }}>
      <div className="absolute inset-0 bg-black/55"></div>
      <div className="absolute inset-0 backdrop-blur-[2px]"></div>
      
      <div className="relative max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white/90 tracking-tight mb-4">
            Our{" "}
            <span className="text-white underline underline-offset-8 decoration-white/25 hover:decoration-red-500 transition-all duration-300">
              Construction Services
            </span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            From custom homes to specialized renovations, we deliver exceptional craftsmanship and attention to detail in every project.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <div key={index} className="card bg-white/5 shadow-xl ring-1 ring-white/10 rounded-2xl backdrop-blur-sm hover:scale-105 transition-all duration-300 p-6 group">
              <div className="w-16 h-16 bg-red-500/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-red-500/40 transition-colors duration-300">
                <div className="text-red-400 group-hover:text-white transition-colors duration-300">
                  {service.icon}
                </div>
              </div>
              
              <h3 className="card-title text-xl text-white/90 group-hover:text-red-400 transition-colors duration-300 mb-3">
                {service.title}
              </h3>
              
              <p className="text-white/70 mb-4">
                {service.description}
              </p>
              
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-white/60">
                    <svg className="w-4 h-4 text-red-400 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <Link
                href={service.href}
                className="inline-flex items-center text-red-400 font-semibold hover:text-red-300 transition-colors duration-300"
              >
                Learn More
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          ))}
        </div>

        <div className="bg-red-500/90 rounded-2xl p-8 text-center text-white backdrop-blur-sm">
          <h3 className="text-2xl font-bold mb-4">
            Ready to Start Your Project?
          </h3>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Contact us today for a free consultation and let's bring your vision to life with our expert construction services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="btn bg-white text-red-500 border-0 hover:bg-gray-100 px-6 py-3 text-lg font-semibold rounded-lg"
            >
              Get Free Quote
            </Link>
            <Link
              href="/projects"
              className="btn bg-transparent text-white border-2 border-white hover:bg-white hover:text-red-500 px-6 py-3 text-lg font-semibold rounded-lg"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

/*
{
      title: "Paving Services",
      description: "Professional asphalt and concrete paving for driveways, parking areas, and commercial spaces with durable, long-lasting results.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
        </svg>
      ),
      features: ["Asphalt", "Concrete", "Resurfacing", "Sealcoating"],
      href: "/construction/paving"
    },
*/
export default ConstructionServices;
