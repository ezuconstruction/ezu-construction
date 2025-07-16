import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import GetContact from "@/app/components/GetContact";
import Link from "next/link";

// Data for the "Types of Custom Homes" section
const customHomeTypes = [
  {
    title: "Modern & Contemporary",
    image: "/images/modern-home.jpg",
    description:
      "Clean lines, open spaces, large windows, and innovative materials define these cutting-edge homes.",
  },
  {
    title: "Transitional Style",
    image: "/images/traditional-home.jpg",
    description:
      "A harmonious blend of traditional and contemporary elements, offering comfort with a modern edge.",
  },
  {
    title: "Luxury & Estate Homes",
    image: "/images/estate-home.jpg",
    description:
      "Bespoke designs, premium materials, and expansive layouts tailored for ultimate comfort and prestige.",
  },
];

// Portfolio images (using the provided structure, but with the new placeholder)
const customHomePortfolioImages = [
  {
    title: "Modern Oasis",
    image: "/images/kitchen-renovations.jpg",
    src: "Sleek lines and expansive windows for contemporary living.",
    description:
      "Designing and building modern homes that blend innovative architecture with functional elegance.",
    link: "/projects/modern-oasis",
    linktitle: "Explore Modern",
  },
  {
    title: "Traditional Elegance",
    image: "/images/kitchen-renovations.jpg",
    src: "Classic design with timeless appeal and intricate details.",
    description:
      "Crafting homes that embody traditional charm, offering comfort and enduring beauty.",
    link: "/projects/traditional-elegance",
    linktitle: "Discover Classic",
  },
  {
    title: "Luxury Estate",
    image: "/images/kitchen-renovations.jpg",
    src: "Grand scale and bespoke finishes for unparalleled luxury.",
    description:
      "Building high-end estates with custom amenities and exquisite craftsmanship for discerning clients.",
    link: "/projects/luxury-estate",
    linktitle: "View Luxury",
  },
];

// Data for the "Key Custom Home Considerations" section
const customHomeConsiderations = [
  {
    title: "Site Selection & Feasibility",
    icon: "/globe.svg",
    description:
      "Choosing the right plot of land is paramount. We assess zoning, soil, topography, and utility access to ensure your vision is feasible.",
  },
  {
    title: "Budgeting & Financial Planning",
    icon: "/globe.svg",
    description:
      "Transparent cost breakdowns, contingency planning, and value engineering to keep your project on track without surprises.",
  },
  {
    title: "Sustainable & Energy-Efficient Design",
    icon: "/globe.svg",
    description:
      "Integrating green building practices, smart home technologies, and energy-saving solutions for a future-proof home.",
  },
  {
    title: "Material Selection & Sourcing",
    icon: "/globe.svg",
    description:
      "Guiding you through choices for finishes, fixtures, and structural components to ensure quality, durability, and aesthetics.",
  },
];

// FAQs tailored for custom home building
const customHomeFaqs = [
  {
    question: "How long does it take to build a custom home?",
    answer:
      "The timeline for a custom home varies significantly based on complexity, size, and site conditions. Typically, from initial design to move-in, it can take anywhere from 12 to 24 months, sometimes longer for very large or complex projects. We provide a detailed schedule after the design phase.",
  },
  {
    question: "What's the process for designing my custom home?",
    answer:
      "Our process begins with an in-depth consultation to understand your lifestyle, needs, and aesthetic preferences. We then move through conceptual design, architectural drawings, material selections, and 3D renderings, collaborating closely with you at every stage to bring your vision to life.",
  },
  {
    question: "How much does a custom home cost in the GTA?",
    answer:
      "The cost of a custom home in the GTA is highly variable, influenced by land costs, size, architectural complexity, finishes, and features. It can range from $300 to over $600 per square foot, excluding land. We work with you to establish a realistic budget and provide transparent pricing throughout.",
  },
  {
    question: "Do you help with land acquisition and site preparation?",
    answer:
      "Yes, we can assist you with site selection, evaluating potential properties for suitability, zoning, and development potential. Our services include managing all aspects of site preparation, from grading and excavation to utility connections.",
  },
  {
    question:
      "Can I incorporate smart home technology and sustainable features?",
    answer:
      "Absolutely. We specialize in integrating cutting-edge smart home technologies for automation, security, and energy management. We also prioritize sustainable building practices, offering options for energy-efficient systems, renewable materials, and green certifications.",
  },
  {
    question: "What kind of warranty do you offer on custom homes?",
    answer:
      "We stand behind the quality of our work with comprehensive warranties, typically including a one-year warranty on materials and workmanship, and longer structural warranties as per industry standards and local regulations. Your peace of mind is our priority.",
  },
];

const CustomHomesPage = () => {
  return (
    <div>
      <Navbar />
      {/* Hero Section - Custom Homes Specific */}
      <div className="hero bg-base-100 h-[80vh] bg-[url(/images/custom-home-title.jpg)] bg-cover bg-center flex items-end">
        <div className="flex flex-col m-4 md:m-10 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-white drop-shadow-lg">
            Custom Homes
          </h1>
          <p className="text-lg font-light pt-2 pl-1 text-white drop-shadow">
            Building your dream home from the ground up, tailored to your unique
            vision.
          </p>
        </div>
      </div>

      <div className="bg-base-300 bg-[url(/images/bg-2.jpg)] bg-cover p-6 md:p-10">
        {/* Intro Paragraph - Custom Homes Specific */}
        <p className="pb-10 text-lg max-w-5xl mx-auto text-center animate-fade-in my-3 ">
          Imagine a home designed exclusively for you, reflecting your
          lifestyle, tastes, and needs. Our custom home building service brings
          your vision to life, from concept to completion, ensuring every detail
          is perfectly crafted to your specifications.
        </p>

        {/* Why Choose Us - Custom Homes Specific */}
        <div className="bg-black/30 shadow-lg ring-1 ring-black/5 rounded-xl backdrop-blur-lg animate-fade-in py-10 mb-10 mx-0 px-5 flex flex-col md:flex-row justify-center items-center gap-10">
          <div>
            <img
              src={"/images/custom-home-builders.jpg"}
              alt="Why Choose Us for Custom Homes"
              className="max-w-sm w-full rounded-lg shadow-md"
            />
          </div>
          <div>
            <h2 className="text-4xl font-bold mb-4 text-info animate-fade-in">
              Why Build Your Custom Home with Us?
            </h2>
            <ul className="grid gap-3 text-left text-lg animate-fade-in font-semibold">
              <li>- Personalized design-build approach for unique homes</li>
              <li>- Expert guidance from land acquisition to final touches</li>
              <li>- Uncompromising quality and superior craftsmanship</li>
              <li>- Transparent processes and clear communication</li>
              <li>
                - Commitment to delivering your home on time and on budget
              </li>
            </ul>
          </div>
        </div>

        {/* New Section: Types of Custom Homes (Dynamic) */}
        <div className="py-5 md:pb-10 md:pt-10 animate-fade-in">
          <div className="bg-black/30 shadow-lg ring-1 ring-black/5 rounded-xl backdrop-blur-xs animate-fade-in p-5 md:p-10">
            <h2 className="text-4xl font-bold text-center mb-10 text-white">
              Discover Your{" "}
              <span className="text-secondary text-6xl">Custom Home Style</span>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {customHomeTypes.map((item, key) => (
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

        {/* New Section: Key Custom Home Considerations (Dynamic) */}
        <div className="py-5 md:pb-10 md:pt-10 animate-fade-in mb-10">
          <div className="bg-black/30 shadow-lg ring-1 ring-black/5 rounded-xl backdrop-blur-xs animate-fade-in p-5 md:p-10">
            <h2 className="text-4xl font-bold text-center mb-10 text-white">
              What to <span className="text-secondary text-6xl">Consider</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-8 text-lg font-semibold">
              {customHomeConsiderations.map((item, key) => (
                <div className="flex items-start gap-3" key={key}>
                  <img src={item.icon} alt="Icon" className="w-9" />
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

        {/* Our Renovation Process - Custom Homes Specific Timeline */}
        <div className="bg-black/30 shadow-lg ring-1 ring-black/5 rounded-xl backdrop-blur-lg animate-fade-in py-10 px-2 lg:px-50 pb-5 mx-0">
          <h2 className="text-4xl font-bold mb-4 text-primary text-center pb-2">
            Our Custom Home Building Process
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
                <time className="font-mono italic">Phase 1</time>
                <div className="text-lg font-black hover:text-info transition duration:300">
                  Vision & Site Assessment
                </div>
                We begin with an in-depth consultation to understand your dream
                home, lifestyle, and budget. We'll also assess your chosen
                building site for optimal design and feasibility.
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
                <time className="font-mono italic">Phase 2</time>
                <div className="text-lg font-black hover:text-info transition duration:300">
                  Architectural Design & Permitting
                </div>
                Our architects and designers translate your vision into detailed
                blueprints and 3D models. We handle all zoning, building
                permits, and regulatory approvals.
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
                <time className="font-mono italic">Phase 3</time>
                <div className="text-lg font-black hover:text-info transition duration:300">
                  Pre-Construction & Material Sourcing
                </div>
                With plans approved, we finalize material selections, establish
                a detailed construction schedule, and prepare the site, ensuring
                all components are ready for build.
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
                <time className="font-mono italic">Phase 4</time>
                <div className="text-lg font-black hover:text-info transition duration:300">
                  Construction & Quality Assurance
                </div>
                Our skilled trades execute the build, from foundation to
                framing, mechanical, electrical, and plumbing. Rigorous quality
                checks and regular communication keep you informed at every
                milestone.
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
                <time className="font-mono italic">Phase 5</time>
                <div className="text-lg font-black hover:text-info transition duration:300">
                  Finishing Touches & Handover
                </div>
                The final stages involve interior finishes, landscaping, and a
                thorough quality inspection. We then conduct a final walkthrough
                with you, ensuring every detail meets your expectations before
                handing over the keys to your new custom home.
              </div>
              <hr className="bg-success" />
            </li>
          </ul>
        </div>

        {/* Recent Projects - Custom Homes Specific (Using kitchen placeholder) */}
        <div className="py-5 md:pb-10 md:pt-20 animate-fade-in mb-5">
          <div className="bg-black/30 shadow-lg ring-1 ring-black/5 rounded-xl backdrop-blur-xs animate-fade-in p-5 md:p-10">
            <h2 className="text-4xl font-bold text-center mb-10 text-white">
              Our Recent{" "}
              <span className="text-secondary text-6xl">
                Custom Home Projects
              </span>
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {customHomePortfolioImages.map((item, key) => (
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

        {/* FAQ Section - Custom Homes Specific */}
        <div className="py-5 md:pb-20 animate-fade-in">
          <div className="bg-black/30 shadow-lg ring-1 ring-black/5 rounded-xl backdrop-blur-xs animate-fade-in p-5 md:p-10">
            <h2 className="text-4xl font-bold text-center mb-10 text-white">
              Custom Home <span className="text-secondary text-6xl">FAQ</span>
            </h2>
            <div className="mb-10 border-gray-400" id="qna">
              {customHomeFaqs.map((item, key) => (
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
export default CustomHomesPage;
