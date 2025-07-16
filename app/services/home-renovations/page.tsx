import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import GetContact from "@/app/components/GetContact";
import Link from "next/link";

// Portfolio images for "Recent Projects" (using the specified placeholder)
const homeRenovationPortfolioImages = [
  {
    title: "Whole Home Transformation",
    image: "/images/kitchen-renovations.jpg",
    src: "Complete overhaul of an entire residential property.",
    description:
      "Bringing your entire home up to modern standards with a cohesive design and enhanced functionality.",
    link: "/projects/whole-home-transformation",
    linktitle: "View Project",
  },
  {
    title: "Basement Development",
    image: "/images/kitchen-renovations.jpg",
    src: "Converting an unfinished basement into livable space.",
    description:
      "Unlock hidden potential by transforming your basement into a new apartment, entertainment area, or extra bedrooms.",
    link: "/projects/basement-development",
    linktitle: "View Project",
  },
  {
    title: "Exterior Facelift",
    image: "/images/kitchen-renovations.jpg",
    src: "Modernizing the exterior facade and landscaping.",
    description:
      "Boost curb appeal and property value with updated siding, roofing, windows, and outdoor living spaces.",
    link: "/projects/exterior-facelift",
    linktitle: "View Project",
  },
];

// Data for the "Types of Home Renovations" section
const homeRenovationTypes = [
  {
    title: "Full Home Remodels",
    image: "/images/full-home-remodel.jpeg",
    description:
      "Comprehensive renovations covering multiple rooms or the entire house, ensuring a unified design.",
  },
  {
    title: "Basement Finishing & Development",
    image: "/images/basement-finishing.jpg",
    description:
      "Transforming unfinished basements into functional living areas, rental units, or custom spaces.",
  },
  {
    title: "Structural & Layout Changes",
    image: "/images/structural-changes.jpg",
    description:
      "Modifying floor plans, removing walls, or adding structural elements to optimize space and flow.",
  },
];

// Data for the "Key Considerations for Home Renovations" section
const homeRenovationConsiderations = [
  {
    title: "Comprehensive Planning",
    icon: "/globe.svg",
    description:
      "A detailed plan is the bedrock of any successful renovation, covering design, budget, timeline, and potential challenges.",
  },
  {
    title: "Budget Management",
    icon: "/globe.svg",
    description:
      "Establishing a realistic budget and contingency fund, along with transparent cost tracking, is vital to avoid surprises.",
  },
  {
    title: "Material Selection",
    icon: "/globe.svg",
    description:
      "Choosing durable, aesthetically pleasing, and functional materials that suit your lifestyle and budget is key to longevity.",
  },
  {
    title: "Value Enhancement",
    icon: "/globe.svg",
    description:
      "Focusing on renovations that not only improve your living experience but also offer a strong return on investment.",
  },
];

// FAQs tailored for general home renovations
const homeRenovationFaqs = [
  {
    question: "What's the first step in planning a home renovation?",
    answer:
      "The first step is typically a consultation to define your vision, goals, and budget. This helps us understand your needs and determine the feasibility and scope of your project. Researching inspiration and gathering ideas is also a great starting point.",
  },
  {
    question: "How do I set a realistic budget for my renovation?",
    answer:
      "A realistic budget involves accounting for design fees, materials, labor, permits, and a contingency fund (typically 10-20% for unexpected issues). We provide detailed, itemized quotes to help you plan effectively and avoid surprises.",
  },
  {
    question: "Do I need an architect or designer for my renovation?",
    answer:
      "We provide you with all the people required to complete your renovations. However, For significant renovations involving structural changes, layout reconfigurations, or complex design elements, an architect or professional designer is usually required. For smaller cosmetic updates, it might not be necessary. We can advise based on your project's scope.",
  },
  {
    question: "How do you handle unexpected issues during a renovation?",
    answer:
      "Unexpected issues (e.g., hidden water damage, outdated wiring) can arise. When they do, we immediately communicate the issue, explain the cause, propose solutions, and discuss any cost or timeline implications with you before proceeding. Transparency is key.",
  },
  {
    question: "Will my renovation be covered by insurance?",
    answer:
      "Consult your insurer about this. While some minor cosmetic work might be covered, major structural changes or additions often require adjustments to your policy.",
  },
];

const HomeRenovationsPage = () => {
  return (
    <div>
      <Navbar />
      {/* Hero Section - Home Renovations Specific */}
      <div className="hero bg-base-100 h-[80vh] bg-[url(/images/home-renovation-title.jpg)] bg-cover bg-center flex items-end">
        <div className="flex flex-col m-4 md:m-10 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-white drop-shadow-lg">
            Home Renovations
          </h1>
          <p className="text-lg font-light pt-2 pl-1 text-white drop-shadow">
            Transforming your living space with quality craftsmanship and
            timeless design in the GTA.
          </p>
        </div>
      </div>

      <div className="bg-base-300 bg-[url(/images/bg-3.jpg)] bg-cover p-6 md:p-10">
        {/* Intro Paragraph - Home Renovations Specific */}
        <p className="pb-10 text-lg max-w-5xl mx-auto text-center animate-fade-in my-3">
          Whether you're looking to update a single room, refresh your home's
          exterior, or undertake a complete property transformation, our team
          specializes in delivering high-quality home renovations that enhance
          both aesthetics and functionality.
        </p>

        {/* Why Choose Us - Home Renovations Specific */}
        <div className="bg-black/30 shadow-lg ring-1 ring-black/5 rounded-xl backdrop-blur-lg animate-fade-in py-10 mb-10 mx-0 px-5 flex flex-col md:flex-row justify-center items-center gap-10">
          <div>
            <img
              src="/images/whole-home-renovation.jpg"
              alt="Why Choose Us for Home Renovations"
              className="max-w-sm w-full rounded-lg shadow-md"
            />
          </div>
          <div>
            <h2 className="text-4xl font-bold mb-4 text-info animate-fade-in">
              Why Choose Us for Your Renovation?
            </h2>
            <ul className="grid gap-3 text-left text-lg animate-fade-in font-semibold">
              <li>- Full-service design-build expertise</li>
              <li>- Licensed, insured, and experienced professionals</li>
              <li>- Transparent pricing and detailed project plans</li>
              <li>
                - Commitment to quality craftsmanship and timely completion
              </li>
              <li>- Personalized approach tailored to your unique needs</li>
            </ul>
          </div>
        </div>

        {/* New Section: Types of Home Renovations (Dynamic) */}
        <div className="py-5 md:pb-10 md:pt-10 animate-fade-in">
          <div className="bg-black/30 shadow-lg ring-1 ring-black/5 rounded-xl backdrop-blur-xs animate-fade-in p-5 md:p-10">
            <h2 className="text-4xl font-bold text-center mb-10 text-white">
              Explore{" "}
              <span className="text-secondary text-5xl md:text-6xl">
                Home Renovations
              </span>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {homeRenovationTypes.map((item, key) => (
                <div
                  className="card bg-black/30 shadow-lg ring-1 ring-black/5 rounded-lg backdrop-blur-xs animate-fade-in hover:scale-105 transition-transform pt-5"
                  key={key}
                >
                  <figure>
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-100 h-60 object-cover"
                    />
                  </figure>
                  <div className="card-body">
                    <h3 className="card-title text-2xl">{item.title}</h3>
                    <p className="pb-2 text-lg font-thin">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* New Section: Key Considerations for Home Renovations (Dynamic) */}
        <div className="py-5 md:pb-10 md:pt-10 animate-fade-in mb-10">
          <div className="bg-black/30 shadow-lg ring-1 ring-black/5 rounded-xl backdrop-blur-xs animate-fade-in p-5 md:p-10">
            <h2 className="text-4xl font-bold text-center mb-10 text-white">
              Home Renovation{" "}
              <span className="text-secondary text-4xl md:text-6xl">
                Considerations
              </span>
            </h2>
            <div className="grid md:grid-cols-2 gap-8 text-lg font-semibold">
              {homeRenovationConsiderations.map((item, key) => (
                <div className="flex items-start gap-3" key={key}>
                  <img src={item.icon} alt={item.title} className="w-9" />
                  <div>
                    <h3 className="text-xl font-bold text-white">
                      {item.title}
                    </h3>
                    <p className="font-thin text-base">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Our Renovation Process - Home Renovations Specific Timeline */}
        <div className="bg-black/30 shadow-lg ring-1 ring-black/5 rounded-xl backdrop-blur-lg animate-fade-in py-10 px-2 lg:px-50 pb-5 mx-0">
          <h2 className="text-4xl font-bold mb-4 text-secondary text-center pb-2">
            Our Home Renovation Process
          </h2>
          <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
            <li>
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="timeline-start mb-10 md:text-end hover:scale-105 transition-transform pr-2">
                <time className="font-mono italic">Step 1</time>
                <div className="text-lg font-black hover:text-info transition duration:300">
                  Initial Consultation & Project Scope
                </div>
                We begin by understanding your renovation goals, aesthetic
                preferences, and functional needs for your home. This helps us
                define the project's scope and feasibility.
              </div>
              <hr className="bg-success" />
            </li>
            <li>
              <hr />
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="timeline-end md:mb-10 hover:scale-105 transition-transform pl-0 md:pl-2">
                <time className="font-mono italic">Step 2</time>
                <div className="text-lg font-black hover:text-info transition duration:300">
                  Design, Planning & Permits
                </div>
                Our design team creates detailed plans and helps you select
                materials. We handle all necessary permits and ensure your
                renovation complies with local building codes and regulations.
              </div>
              <hr className="bg-success" />
            </li>
            <li>
              <hr />
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="timeline-start mb-10 md:text-end hover:scale-105 transition-transform pr-2">
                <time className="font-mono italic">Step 3</time>
                <div className="text-lg font-black hover:text-info transition duration:300">
                  Transparent Proposal & Scheduling
                </div>
                You'll receive a clear, itemized proposal detailing all costs,
                materials, and a precise project timeline. We believe in full
                transparency with no hidden fees.
              </div>
              <hr className="bg-success" />
            </li>
            <li>
              <hr />
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="timeline-end md:mb-10 hover:scale-105 transition-transform pl-0 md:pl-2">
                <time className="font-mono italic">Step 4</time>
                <div className="text-lg font-black hover:text-info transition duration:300">
                  Construction & Quality Execution
                </div>
                Our skilled craftsmen execute the renovation with precision and
                efficiency. We maintain a clean and safe worksite, providing
                regular updates on progress.
              </div>
              <hr className="bg-success" />
            </li>
            <li>
              <hr />
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="timeline-start mb-10 md:text-end hover:scale-105 transition-transform pr-2">
                <time className="font-mono italic">Step 5</time>
                <div className="text-lg font-black hover:text-info transition duration:300">
                  Final Walkthrough & Handover
                </div>
                Upon completion, we conduct a thorough walkthrough with you to
                ensure every detail meets your expectations and our high
                standards. We then officially hand over your beautifully
                renovated home.
              </div>
              <hr className="bg-success" />
            </li>
          </ul>
        </div>

        {/* Recent Projects - Home Renovations Specific (Using kitchen placeholder) */}
        <div className="py-5 md:pb-10 md:pt-20 animate-fade-in mb-5">
          <div className="bg-black/30 shadow-lg ring-1 ring-black/5 rounded-xl backdrop-blur-xs animate-fade-in p-5 md:p-10">
            <h2 className="text-4xl font-bold text-center mb-10 text-white">
              Our Recent{" "}
              <span className="text-secondary text-5xl md:text-6xl">
                Home Renovation Projects
              </span>
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {homeRenovationPortfolioImages.map((item, key) => (
                <div
                  className="card bg-black/30 shadow-lg ring-1 ring-black/5 rounded-lg backdrop-blur-xs animate-fade-in hover:scale-105 transition-transform pt-5"
                  key={key}
                >
                  <figure>
                    <img
                      src={item.image} // This will be the kitchen placeholder
                      alt={item.src}
                      className="w-100 h-80 object-cover"
                    />
                  </figure>
                  <div className="card-body">
                    <h3 className="card-title text-2xl">{item.title}</h3>
                    <p className="pb-2 text-lg font-thin">{item.description}</p>
                    <Link
                      href={item.link}
                      className="btn btn-accent text-lg bg-accent/40 text-white hover:bg-accent hover:text-black transition duration-200 p-0"
                    >
                      {item.linktitle}
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* FAQ Section - Home Renovations Specific */}
        <div className="py-5 md:pb-20 animate-fade-in">
          <div className="bg-black/30 shadow-lg ring-1 ring-black/5 rounded-xl backdrop-blur-xs animate-fade-in p-5 md:p-10">
            <h2 className="text-4xl font-bold text-center mb-10 text-white">
              Home Renovation{" "}
              <span className="text-secondary text-6xl">FAQ</span>
            </h2>
            <div className="mb-10 border-gray-400" id="qna">
              {homeRenovationFaqs.map((item, key) => (
                <div
                  className="collapse collapse-arrow bg-black/30 shadow-lg ring-1 ring-black/5 rounded-lg backdrop-blur-xs animate-fade-in mb-2 py-1"
                  key={key}
                >
                  <input type="checkbox" name="my-accordion-2" />
                  <div className="collapse-title font-semibold text-2xl">
                    {item.question}
                  </div>
                  <div className="collapse-content text-lg">{item.answer}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <GetContact />
      <Footer />
    </div>
  );
};
export default HomeRenovationsPage;
