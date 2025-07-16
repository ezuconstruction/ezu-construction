import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import GetContact from "@/app/components/GetContact";
import Link from "next/link";

// Data for the "Types of Bathroom Renovations" section (now dynamic)
const bathroomRenovationTypes = [
  {
    title: "Powder Room Refresh",
    image: "/images/powder-room.jpg",
    description:
      "A quick, impactful update for your half-bath, focusing on aesthetics and guest appeal.",
  },
  {
    title: "Guest Bathroom Upgrade",
    image: "/images/guest-bathroom.jpg",
    description:
      "Enhancing functionality and style for family and visitors, often including shower/tub combos.",
  },
  {
    title: "Accessible Bathroom Design",
    image: "/images/accessible-bathroom.jpg",
    description:
      "Designing for universal access with barrier-free showers, grab bars, and thoughtful layouts for all abilities.",
  },
];

// User-provided portfolio images to be used for "Recent Projects"
const portfolioImages = [
  {
    title: "Custom Home 1",
    image: "/images/kitchen-renovations.jpg",
    src: "Fully upgraded kitchen with modern finishes",
    description:
      "Get a functional, stylish kitchen upgrade with better storage, smarter layouts, and high-end finishes.",
    link: "/projects",
    linktitle: "Learn More",
  },
  {
    title: "Custom Home 2",
    image: "/images/placeholder-image.jpg",
    src: "Remodeled bathroom with walk-in shower",
    description:
      "Upgrade your bathroom with custom tiling, better lighting, and spa-inspired features - efficient and elegant.",
    link: "/projects",
    linktitle: "Learn More",
  },
  {
    title: "Custom Home 3",
    image: "/images/bedroom-renovations.png",
    src: "Cozy renovated bedroom with lighting",
    description:
      "Refresh your bedroom with custom storage, modern finishes, and a layout designed for comfort and style.",
    link: "/projects",
    linktitle: "Learn More",
  },
];

// FAQs tailored for bathroom renovations
const bathroomFaqs = [
  {
    question: "How long does a typical bathroom renovation take?",
    answer:
      "Most bathroom renovations, from a simple refresh to a complete overhaul, typically take between 2 to 4 weeks. This timeline can vary based on the complexity of the design, the extent of structural changes, and the availability of custom materials. We provide a clear project schedule at the outset.",
  },
  {
    question: "What's the average cost of a bathroom renovation in the GTA?",
    answer:
      "Bathroom renovation costs in the GTA can range significantly. A basic update might start around $10,000 - $20,000, while a mid-range renovation could be $20,000 - $40,000. High-end, custom master ensuites can easily exceed $50,000. Your budget, material choices, and scope of work are key determinants. We offer detailed, transparent quotes.",
  },
  {
    question: "Are permits required for bathroom renovations?",
    answer:
      "Permits are usually required if your bathroom renovation involves relocating plumbing fixtures, altering electrical wiring, making structural changes, or changing the footprint of the room. Minor cosmetic updates typically do not require permits. Our team handles all necessary permit applications and ensures compliance with local building codes.",
  },
  {
    question: "What are the most important considerations for bathroom design?",
    answer:
      "Key considerations include proper waterproofing and ventilation to prevent moisture issues, optimizing the layout for functionality and flow, selecting durable and easy-to-maintain materials (like tiles and fixtures), and ensuring adequate lighting for both task and ambiance. Accessibility and energy efficiency are also increasingly important.",
  },
  {
    question: "Can I use my bathroom during the renovation?",
    answer:
      "For most bathroom renovations, especially full remodels, the bathroom will be out of commission for the duration of the project. We work efficiently to minimize disruption and will discuss alternative arrangements with you if needed. For minor updates, limited access might be possible.",
  },
  {
    question: "How can I make my small bathroom feel more spacious?",
    answer:
      "To make a small bathroom feel larger, consider using light-colored tiles and paint, large format tiles with minimal grout lines, wall-mounted vanities or toilets, frameless glass shower enclosures, and ample lighting. Strategic use of mirrors can also create an illusion of depth and space.",
  },
];

const BathroomRenovationsPage = () => {
  return (
    <div>
      <Navbar />
      {/* Hero Section - Bathroom Specific */}
      <div className="hero bg-base-100 h-[80vh] bg-[url(/images/bathroom-renovation-title.png)] bg-cover bg-center flex items-end">
        <div className="flex flex-col m-4 md:m-10 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-white drop-shadow-lg">
            Bathroom Renovations
          </h1>
          <p className="text-lg font-light pt-2 pl-1 text-white drop-shadow">
            Crafting serene, functional, and stylish bathrooms for ultimate
            comfort.
          </p>
        </div>
      </div>

      <div className="bg-base-300 bg-[url(/images/bg-5.jpg)] bg-cover p-6 md:p-10">
        {/* Intro Paragraph - Bathroom Specific */}
        <p className="pb-10 text-lg max-w-6xl mx-auto text-center animate-fade-in my-3">
          Your bathroom should be a sanctuary - a place of comfort, relaxation,
          and efficient functionality. We specialize in transforming outdated or
          inefficient bathrooms into stunning, modern spaces that enhance your
          daily routine and add significant value to your home.
        </p>

        {/* Why Choose Us - Bathroom Specific */}
        <div className="bg-black/30 shadow-lg ring-1 ring-black/5 rounded-xl backdrop-blur-lg animate-fade-in py-10 mb-10 mx-0 px-5 flex flex-col md:flex-row justify-center items-center gap-10">
          <div>
            <img
              src="/images/bathroom-renovations.jpg"
              alt="Why Choose Us for Bathrooms"
              className="max-w-sm w-full rounded-lg shadow-md"
            />
          </div>
          <div>
            <h2 className="text-4xl font-bold mb-4 text-info animate-fade-in">
              Why Trust Us with Your Bathroom Renovation?
            </h2>
            <ul className="grid gap-3 text-left max-w-xl text-lg animate-fade-in font-semibold">
              <li>- Expertise in waterproofing and moisture management</li>
              <li>
                - Innovative space-saving solutions for all bathroom sizes
              </li>
              <li>
                - Selection of durable, high-quality fixtures and finishes
              </li>
              <li>- Focus on optimal ventilation and lighting design</li>
              <li>
                - Seamless project management from start to spa-like finish
              </li>
            </ul>
          </div>
        </div>

        {/* New Section: Types of Bathroom Renovations (Now Dynamic) */}
        <div className="py-5 md:pb-10 md:pt-10 animate-fade-in">
          <div className="bg-black/30 shadow-lg ring-1 ring-black/5 rounded-xl backdrop-blur-xs animate-fade-in p-5 md:p-10">
            <h2 className="text-4xl font-bold text-center mb-10 text-white">
              Explore Your{" "}
              <span className="text-secondary text-5xl md:text-6xl">
                Bathroom Renovation Options
              </span>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {bathroomRenovationTypes.map((item, key) => (
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

        {/* New Section: Key Design & Functional Considerations */}
        <div className="py-5 md:pb-10 md:pt-10 animate-fade-in">
          <div className="bg-black/30 shadow-lg ring-1 ring-black/5 rounded-xl backdrop-blur-xs animate-fade-in p-5 md:p-10">
            <h2 className="text-4xl font-bold text-center mb-10 text-white">
              Beyond Aesthetics:{" "}
              <span className="text-secondary text-6xl">What to Consider</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-8 text-lg font-semibold">
              <div className="flex items-start gap-3">
                <img src="/globe.svg" alt="Bathroom Icon" className="w-9" />
                <div>
                  <h3 className="text-xl font-bold text-white">
                    Waterproofing & Ventilation
                  </h3>
                  <p className="font-thin text-base">
                    Crucial for preventing mold, mildew, and structural damage.
                    We ensure proper vapor barriers, waterproofing membranes,
                    and adequate ventilation systems.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <img src="/globe.svg" alt="Bathroom Icon" className="w-9" />
                <div>
                  <h3 className="text-xl font-bold text-white">
                    Layout & Space Optimization
                  </h3>
                  <p className="font-thin text-base">
                    Even in compact bathrooms, clever layouts, floating
                    vanities, and recessed shelving can dramatically improve
                    usability and flow.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <img src="/globe.svg" alt="Bathroom Icon" className="w-9" />
                <div>
                  <h3 className="text-xl font-bold text-white">
                    Material Durability & Maintenance
                  </h3>
                  <p className="font-thin text-base">
                    Selecting tiles, grout, countertops, and fixtures that can
                    withstand moisture and heavy use, while being easy to clean.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <img src="/globe.svg" alt="Bathroom Icon" className="w-9" />
                <div>
                  <h3 className="text-xl font-bold text-white">
                    Lighting Design
                  </h3>
                  <p className="font-thin text-base">
                    Layered lighting (task, ambient, accent) is essential for
                    functionality, safety, and creating the desired mood in your
                    bathroom.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Our Renovation Process - Bathroom Specific Timeline */}
        <div className="bg-black/30 shadow-lg ring-1 ring-black/5 rounded-xl backdrop-blur-lg animate-fade-in py-10 px-2 lg:px-50 pb-5 mx-0 mt-10">
          <h2 className="text-4xl font-bold mb-4 text-secondary text-center pb-2">
            Our Bathroom Renovation Process
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
                  Consultation & Vision Setting
                </div>
                We begin with a detailed discussion of your bathroom renovation
                goals, style preferences, functional needs, and budget. Whether
                it's a spa-like retreat or a highly efficient family bath, we
                capture your vision.
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
                  Design, Material Selection & Permits
                </div>
                Our design team crafts a functional and beautiful layout,
                helping you select tiles, fixtures, vanities, and lighting. We
                provide 3D renderings and manage all necessary permits and
                inspections.
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
                We present a clear, itemized proposal outlining the scope of
                work, detailed costs, and a precise project timeline. No hidden
                fees, just straightforward planning.
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
                  Construction & Quality Craftsmanship
                </div>
                Our skilled tradespeople execute the renovation with precision,
                from demolition and rough-ins to expert tiling, plumbing, and
                fixture installation. We maintain a tidy worksite and provide
                regular progress updates.
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
                Once construction is complete, we conduct a detailed walkthrough
                to ensure every aspect of your new bathroom meets your
                expectations and our rigorous quality standards. Your
                satisfaction is our priority.
              </div>
              <hr className="bg-success" />
            </li>
          </ul>
        </div>

        {/* Recent Projects - Bathroom Specific (Now using user-provided portfolioImages) */}
        <div className="py-5 md:pb-10 md:pt-20 animate-fade-in mb-5">
          <div className="bg-black/30 shadow-lg ring-1 ring-black/5 rounded-xl backdrop-blur-xs animate-fade-in p-5 md:p-10">
            <h2 className="text-4xl font-bold text-center mb-10 text-white">
              Our Recent{" "}
              <span className="text-secondary text-6xl">Bathroom Projects</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {portfolioImages.map(
                (
                  item,
                  key // Using portfolioImages here
                ) => (
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
                      <p className="pb-2 text-lg font-thin">
                        {item.description}
                      </p>
                      <Link
                        href={item.link}
                        className="btn btn-accent text-lg bg-accent/40 text-white hover:bg-accent hover:text-black transition duration-200 p-0"
                      >
                        {item.linktitle}
                      </Link>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </div>

        {/* FAQ Section - Bathroom Specific */}
        <div className="py-5 md:pb-20 animate-fade-in">
          <div className="bg-black/30 shadow-lg ring-1 ring-black/5 rounded-xl backdrop-blur-xs animate-fade-in p-5 md:p-10">
            <h2 className="text-4xl font-bold text-center mb-10 text-white">
              Bathroom Renovation{" "}
              <span className="text-secondary text-6xl">FAQ</span>
            </h2>
            <div className="mb-10 border-gray-400" id="qna">
              {bathroomFaqs.map((item, key) => (
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
export default BathroomRenovationsPage;
