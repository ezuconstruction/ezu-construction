import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import GetContact from "@/app/components/GetContact";
import Link from "next/link";

// Data for the "Types of Home Additions" section
const homeAdditionTypes = [
  {
    title: "Second-Story Additions",
    image: "/images/second-story-addition.jpg",
    description:
      "Adding a new floor or expanding an existing one upwards, ideal for maximizing space on smaller lots.",
  },
  {
    title: "Rear & Side Extensions",
    image: "/images/side-extention.jpg",
    description:
      "Expanding your home outwards to create larger kitchens, family rooms, or new bedrooms.",
  },
  {
    title: "Sunrooms & Conservatories",
    image: "/images/house-sunroom.jpg",
    description:
      "Adding bright, airy spaces that connect seamlessly with the outdoors, perfect for relaxation.",
  },
];

// Portfolio images for "Recent Projects" (using the specified placeholder)
const homeAdditionPortfolioImages = [
  {
    title: "Second-Story Extension",
    image: "/images/kitchen-renovations.jpg",
    src: "Adding an entire new floor to an existing bungalow.",
    description:
      "Expand upwards to gain significant living space without sacrificing yard area.",
    link: "/projects/second-story-addition",
    linktitle: "View Project",
  },
  {
    title: "Rear Family Room Addition",
    image: "/images/kitchen-renovations.jpg",
    src: "Seamlessly integrated new family room at the back of the house.",
    description:
      "Create spacious new living areas, perfect for entertaining or growing families.",
    link: "/projects/family-room-addition",
    linktitle: "View Project",
  },
  {
    title: "Garage Conversion & Loft",
    image: "/images/kitchen-renovations.jpg",
    src: "Transforming a garage into living space with an overhead loft.",
    description:
      "Repurpose underutilized spaces into functional, stylish new rooms.",
    link: "/projects/garage-conversion",
    linktitle: "View Project",
  },
];

// Data for the "Key Considerations for Home Additions" section
const homeAdditionConsiderations = [
  {
    title: "Zoning & Bylaw Compliance",
    icon: "/globe.svg",
    description:
      "Navigating local zoning laws, setbacks, and building codes is crucial. We handle all necessary permits and approvals.",
  },
  {
    title: "Structural Integrity",
    icon: "/globe.svg",
    description:
      "Ensuring the new addition seamlessly integrates with your existing home's foundation and structure for long-term stability.",
  },
  {
    title: "Blending New with Old",
    icon: "/globe.svg",
    description:
      "Matching exterior finishes, roofing, and interior styles to create a cohesive look that appears as if it was always part of the home.",
  },
  {
    title: "Budgeting & ROI",
    icon: "/globe.svg",
    description:
      "Understanding the costs involved and the potential return on investment for your specific type of home addition.",
  },
];

// FAQs tailored for home additions
const homeAdditionFaqs = [
  {
    question: "How long does a typical home addition take?",
    answer:
      "The duration of a home addition project varies greatly depending on its size and complexity. A smaller single-room addition might take 3-6 months, while a multi-story or whole-house expansion could take 8-18 months, including design and permitting. We provide a detailed timeline upfront.",
  },
  {
    question: "Do I need permits for a home addition?",
    answer:
      "Yes, all home additions require extensive permits, including building permits, zoning approvals, and potentially conservation authority permits in some areas of the GTA. We manage the entire permitting process for you, ensuring compliance with all local regulations.",
  },
  {
    question: "What's the average cost of a home addition in the GTA?",
    answer:
      "Costs for home additions in the GTA can range from $200-$500+ per square foot, depending on the type of addition, materials, finishes, and site conditions. This excludes design and permit fees. We provide a comprehensive, transparent estimate tailored to your project.",
  },
  {
    question: "Can I live in my home during the construction?",
    answer:
      "In many cases, yes, you can remain in your home during an addition. We take measures to minimize disruption, dust, and noise, and will create temporary barriers to separate the construction zone. For extensive additions, temporary relocation might be recommended for safety and comfort.",
  },
  {
    question: "How do you ensure the new addition matches my existing home?",
    answer:
      "Our design team pays meticulous attention to detail, matching exterior materials (brick, siding, roofing), window styles, and interior finishes to create a seamless transition between the old and new sections of your home. The goal is for the addition to look like it was always part of the original design.",
  },
  {
    question: "What are the benefits of a home addition versus moving?",
    answer:
      "Home additions allow you to gain needed space without the significant costs and hassles of moving (real estate fees, land transfer taxes, moving expenses). They also allow you to customize your living space precisely to your needs and preferences, often increasing property value.",
  },
];

const HomeAdditionsPage = () => {
  return (
    <div>
      <Navbar />
      {/* Hero Section - Home Additions Specific */}
      <div className="hero bg-base-100 h-[80vh] bg-[url(/images/home-addition-title.jpg)] bg-cover bg-center flex items-end">
        <div className="flex flex-col m-4 md:m-10 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-white drop-shadow-lg">
            Home Additions
          </h1>
          <p className="text-lg font-light pt-2 pl-1 text-white drop-shadow">
            Expand your living space and enhance your home's value with seamless
            additions.
          </p>
        </div>
      </div>

      <div className="bg-base-300 bg-[url(/images/bg-4.jpg)] bg-cover p-6 md:p-10">
        {/* Intro Paragraph - Home Additions Specific */}
        <p className="pb-10 text-lg max-w-4xl mx-auto text-center animate-fade-in my-3">
          Need more space but love your current neighbourhood? A custom home
          addition is the perfect solution to expand your living area, add
          functionality, and increase your property's value without the hassle
          of moving.
        </p>

        {/* Why Choose Us - Home Additions Specific */}
        <div className="bg-black/30 shadow-lg ring-1 ring-black/5 rounded-xl backdrop-blur-lg animate-fade-in py-10 mb-10 mx-0 px-5 flex flex-col md:flex-row justify-center items-center gap-10">
          <div>
            <img
              src="/images/home-additions.jpg"
              alt="Why Choose Us for Home Additions"
              className="max-w-sm w-full rounded-lg shadow-md"
            />
          </div>
          <div>
            <h2 className="text-4xl font-bold mb-4 text-info animate-fade-in">
              Why Choose Us for Your Home Addition?
            </h2>
            <ul className="grid gap-3 text-left text-lg animate-fade-in font-semibold">
              <li>- Expertise in complex structural and design integration</li>
              <li>- Meticulous planning to ensure seamless transitions</li>
              <li>- Comprehensive permit and zoning navigation</li>
              <li>- Quality craftsmanship that extends your home's lifespan</li>
              <li>- Dedicated project management for a smooth build</li>
            </ul>
          </div>
        </div>

        {/* New Section: Types of Home Additions (Dynamic) */}
        <div className="py-5 md:pb-10 md:pt-10 animate-fade-in">
          <div className="bg-black/30 shadow-lg ring-1 ring-black/5 rounded-xl backdrop-blur-xs animate-fade-in p-5 md:p-10">
            <h2 className="text-4xl font-bold text-center mb-10 text-white">
              Explore{" "}
              <span className="text-secondary text-6xl">
                Types of Home Additions
              </span>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {homeAdditionTypes.map((item, key) => (
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

        {/* New Section: Key Considerations for Home Additions (Dynamic) */}
        <div className="py-5 md:pb-10 md:pt-10 animate-fade-in mb-10">
          <div className="bg-black/30 shadow-lg ring-1 ring-black/5 rounded-xl backdrop-blur-xs animate-fade-in p-5 md:p-10">
            <h2 className="text-4xl font-bold text-center mb-10 text-white">
              Home Addition{" "}
              <span className="text-secondary text-4xl md:text-6xl">
                Considerations
              </span>
            </h2>
            <div className="grid md:grid-cols-2 gap-8 text-lg font-semibold">
              {homeAdditionConsiderations.map((item, key) => (
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

        {/* Our Renovation Process - Home Additions Specific Timeline */}
        <div className="bg-black/30 shadow-lg ring-1 ring-black/5 rounded-xl backdrop-blur-lg animate-fade-in py-10 px-2 lg:px-50 pb-5 mx-0">
          <h2 className="text-4xl font-bold mb-4 text-secondary text-center pb-2">
            Our Home Addition Process
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
                  Initial Consultation & Feasibility
                </div>
                We discuss your space needs, design ideas, and assess your
                property for the best addition possibilities, considering
                structural and zoning factors.
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
                  Design, Engineering & Permitting
                </div>
                Our team develops detailed architectural plans and engineering
                drawings. We handle all necessary building permits and zoning
                applications, ensuring your addition meets all regulations.
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
                  Pre-Construction & Site Preparation
                </div>
                Once permits are secured, we finalize material selections,
                establish a comprehensive construction schedule, and prepare
                your site for the build, including foundation work.
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
                  Construction & Integration
                </div>
                Our skilled crews build your addition, focusing on structural
                integrity, seamless integration with your existing home's
                systems (HVAC, plumbing, electrical), and matching
                exterior/interior finishes.
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
                The final stage involves interior finishes, landscaping, and a
                thorough quality inspection. We then present your completed
                addition, ensuring every detail meets your expectations and our
                high standards.
              </div>
              <hr className="bg-success" />
            </li>
          </ul>
        </div>

        {/* Recent Projects - Home Additions Specific */}
        <div className="py-5 md:pb-10 md:pt-20 animate-fade-in mb-5">
          <div className="bg-black/30 shadow-lg ring-1 ring-black/5 rounded-xl backdrop-blur-xs animate-fade-in p-5 md:p-10">
            <h2 className="text-4xl font-bold text-center mb-10 text-white">
              Our Recent{" "}
              <span className="text-secondary text-6xl">
                Home Addition Projects
              </span>
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {homeAdditionPortfolioImages.map((item, key) => (
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

        {/* FAQ Section - Home Additions Specific */}
        <div className="py-5 md:pb-20 animate-fade-in">
          <div className="bg-black/30 shadow-lg ring-1 ring-black/5 rounded-xl backdrop-blur-xs animate-fade-in p-5 md:p-10">
            <h2 className="text-4xl font-bold text-center mb-10 text-white">
              Home Addition <span className="text-secondary text-6xl">FAQ</span>
            </h2>
            <div className="mb-10 border-gray-400" id="qna">
              {homeAdditionFaqs.map((item, key) => (
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
export default HomeAdditionsPage;
