import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import GetContact from "@/app/components/GetContact";
import Link from "next/link";

// Data for the "Types of Home Office Renovations" section
const homeOfficeRenovationTypes = [
  {
    title: "Dedicated Office Build-Out",
    image: "/images/home-office.jpg",
    description:
      "Transforming an unused room or building a new extension specifically for a home office.",
  },
  {
    title: "Spare Room Conversion",
    image: "/images/spare-room.jpg",
    description:
      "Converting a guest bedroom, basement corner, or attic into a functional and inspiring workspace.",
  },
  {
    title: "Integrated Work Nook",
    image: "/images/work-nook.jpg",
    description:
      "Designing compact, efficient workspaces integrated into living areas, hallways, or closets.",
  },
];

// Portfolio images for "Recent Projects" (using the specified placeholder)
const homeOfficePortfolioImages = [
  {
    title: "Modern Minimalist Office",
    image: "/images/kitchen-renovations.jpg",
    src: "Sleek design with integrated storage and ergonomic setup.",
    description:
      "Creating a clean, distraction-free workspace that fosters focus and productivity.",
    link: "/projects/modern-office",
    linktitle: "View Project",
  },
  {
    title: "Dual-Purpose Guest Room Office",
    image: "/images/kitchen-renovations.jpg",
    src: "Cleverly designed space that functions as both office and guest bedroom.",
    description:
      "Maximizing functionality in smaller homes with versatile, multi-functional room designs.",
    link: "/projects/dual-purpose-office",
    linktitle: "View Project",
  },
  {
    title: "Executive Home Study",
    image: "/images/kitchen-renovations.jpg",
    src: "Luxurious home office with custom built-ins and high-end finishes.",
    description:
      "Crafting sophisticated and comfortable executive-level home offices for focused work.",
    link: "/projects/executive-study",
    linktitle: "View Project",
  },
];

// Data for the "Key Considerations for Home Office Renovations" section
const homeOfficeConsiderations = [
  {
    title: "Ergonomics & Comfort",
    icon: "/globe.svg", 
    description:
      "Designing a workspace that supports good posture and reduces strain, including desk height, chair, and monitor placement.",
  },
  {
    title: "Lighting & Ambiance",
    icon: "/globe.svg", 
    description:
      "Optimizing natural light and incorporating layered artificial lighting for productivity and visual comfort.",
  },
  {
    title: "Connectivity & Technology",
    icon: "/globe.svg", 
    description:
      "Ensuring robust internet, ample power outlets, and integrated cable management for a seamless tech experience.",
  },
  {
    title: "Storage & Organization",
    icon: "/globe.svg", 
    description:
      "Custom shelving, built-ins, and smart storage solutions to keep your workspace tidy and efficient.",
  },
];

// FAQs tailored for home office renovations
const homeOfficeFaqs = [
  {
    question: "How long does a home office renovation take?",
    answer:
      "A typical home office renovation can range from 2 to 8 weeks, depending on the scope. A simple cosmetic update might be quicker, while a full room conversion with custom built-ins and new electrical work will take longer. We provide a clear timeline after the design phase.",
  },
  {
    question: "What's the ideal size for a home office?",
    answer:
      "The ideal size depends on your specific needs. For basic tasks, a compact nook might suffice. If you require space for multiple monitors, extensive storage, or client meetings, a larger dedicated room is preferable. We design to maximize the space you have available.",
  },
  {
    question: "Can you help with soundproofing for video calls?",
    answer:
      "Absolutely. We can incorporate various soundproofing solutions, such as insulated walls, solid core doors, acoustic panels, and specialized windows, to minimize external noise and improve the acoustics for clear video calls and focused work.",
  },
  {
    question: "What kind of lighting is best for a home office?",
    answer:
      "A combination of natural light, overhead ambient lighting, and task lighting (like a desk lamp) is ideal. We focus on minimizing glare on screens and ensuring sufficient illumination for all your work activities, often incorporating dimmable options.",
  },
  {
    question: "Do I need permits for a home office renovation?",
    answer:
      "Permits are usually required if your home office renovation involves structural changes, significant electrical or plumbing work, or altering the use of a space (e.g., converting a garage into a habitable office). Minor cosmetic updates typically do not require permits. Don't worry, we handle all necessary applications.",
  },
  {
    question: "How can I make my home office more ergonomic?",
    answer:
      "Ergonomics are key for comfort and health. We can advise on optimal desk and chair heights, monitor placement, keyboard and mouse positioning, and even design custom built-ins that support an ergonomic workflow tailored to your body and work habits.",
  },
];

const HomeOfficeRenovationsPage = () => {
  return (
    <div>
      <Navbar />
      {/* Hero Section - Home Office Renovations Specific */}
      <div className="hero bg-base-100 h-[80vh] bg-[url(/images/home-office-renovation-title.jpg)] bg-cover bg-center flex items-end">
        <div className="flex flex-col m-4 md:m-10 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-white drop-shadow-lg">
            Home Office Renovations
          </h1>
          <p className="text-lg font-light pt-2 pl-1 text-white drop-shadow">
            Designing productive, inspiring, and comfortable workspaces within
            your home.
          </p>
        </div>
      </div>

      <div className="bg-base-300 bg-[url(/images/bg-2.jpg)] bg-cover p-6 md:p-10">
        {/* Intro Paragraph - Home Office Renovations Specific */}
        <p className="pb-10 text-lg max-w-6xl mx-auto text-center animate-fade-in my-3">
          In today's world, a well-designed home office is more than just a desk
          and a chair - it's a hub for productivity, creativity, and focus. Our
          team specializes in transforming any space into an efficient,
          ergonomic, and aesthetically pleasing home office tailored to your
          professional needs.
        </p>

        {/* Why Choose Us - Home Office Renovations Specific */}
        <div className="bg-black/30 shadow-lg ring-1 ring-black/5 rounded-xl backdrop-blur-lg animate-fade-in py-10 mb-10 mx-0 px-5 flex flex-col md:flex-row justify-center items-center gap-10">
          <div>
            <img
              src="/images/kitchen-renovations.jpg"
              alt="Why Choose Us for Home Office Renovations"
              className="max-w-sm w-full rounded-lg shadow-md"
            />
          </div>
          <div>
            <h2 className="text-4xl font-bold mb-4 text-info animate-fade-in">
              Why Choose Us for Your Home Office?
            </h2>
            <ul className="grid gap-3 text-left max-w-xl text-lg animate-fade-in font-semibold">
              <li>- Ergonomic design for comfort and productivity</li>
              <li>- Smart storage solutions to minimize clutter</li>
              <li>- Optimized lighting and sound control</li>
              <li>- Seamless integration of technology and connectivity</li>
              <li>- Custom built-ins and finishes to match your style</li>
            </ul>
          </div>
        </div>

        {/* New Section: Types of Home Office Renovations (Dynamic) */}
        <div className="py-5 md:pb-10 md:pt-10 animate-fade-in">
          <div className="bg-black/30 shadow-lg ring-1 ring-black/5 rounded-xl backdrop-blur-xs animate-fade-in p-5 md:p-10">
            <h2 className="text-4xl font-bold text-center mb-10 text-white">
              Explore{" "}
              <span className="text-secondary text-4xl md:text-6xl">
                Home Office Renovations
              </span>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {homeOfficeRenovationTypes.map((item, key) => (
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

        {/* New Section: Key Considerations for Home Office Renovations (Dynamic) */}
        <div className="py-5 md:pb-10 md:pt-10 animate-fade-in">
          <div className="bg-black/30 shadow-lg ring-1 ring-black/5 rounded-xl backdrop-blur-xs animate-fade-in p-5 md:p-10">
            <h2 className="text-4xl font-bold text-center mb-10 text-white">
              Essential{" "}
              <span className="text-secondary text-4xl md:text-6xl">
                Home Office Considerations
              </span>
            </h2>
            <div className="grid md:grid-cols-2 gap-8 text-lg font-semibold">
              {homeOfficeConsiderations.map((item, key) => (
                <div className="flex items-start gap-3" key={key}>
                  <img
                    src={item.icon} // Using the globe.svg icon
                    alt="icon"
                    className="w-8 h-8 text-info flex-shrink-0 mt-1"
                  />
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

        {/* Our Renovation Process - Home Office Renovations Specific Timeline */}
        <div className="bg-black/30 shadow-lg ring-1 ring-black/5 rounded-xl backdrop-blur-lg animate-fade-in py-10 px-2 lg:px-50 pb-5 mx-0">
          <h2 className="text-4xl font-bold mb-4 text-secondary text-center pb-2">
            Our Home Office Renovation Process
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
                  Needs Assessment & Vision
                </div>
                We begin by understanding your work habits, technology needs,
                and aesthetic preferences to design an office that truly works
                for you.
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
                  Design, Layout & Material Selection
                </div>
                Our designers create ergonomic layouts, suggest smart storage,
                and help select finishes, lighting, and sound solutions. We also
                handle any necessary permits.
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
                  Transparent Proposal & Schedule
                </div>
                We provide a detailed proposal outlining all costs, materials,
                and a clear project timeline. No surprises, just straightforward
                planning.
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
                  Construction & Tech Integration
                </div>
                Our skilled team executes the renovation, focusing on precise
                installation of built-ins, lighting, and seamless integration of
                all your necessary technology.
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
                We conduct a final walkthrough to ensure every detail of your
                new home office meets your expectations, providing you with a
                perfectly functional and inspiring workspace.
              </div>
              <hr className="bg-success" />
            </li>
          </ul>
        </div>

        {/* Recent Projects - Home Office Renovations Specific (Using kitchen placeholder) */}
        <div className="py-5 md:pb-10 md:pt-20 animate-fade-in mb-5">
          <div className="bg-black/30 shadow-lg ring-1 ring-black/5 rounded-xl backdrop-blur-xs animate-fade-in p-5 md:p-10">
            <h2 className="text-4xl font-bold text-center mb-10 text-white">
              Our Recent{" "}
              <span className="text-secondary text-6xl">
                Home Office Projects
              </span>
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {homeOfficePortfolioImages.map((item, key) => (
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

        {/* FAQ Section - Home Office Renovations Specific */}
        <div className="py-5 md:pb-20 animate-fade-in">
          <div className="bg-black/30 shadow-lg ring-1 ring-black/5 rounded-xl backdrop-blur-xs animate-fade-in p-5 md:p-10">
            <h2 className="text-4xl font-bold text-center mb-10 text-white">
              Home Office Renovation{" "}
              <span className="text-secondary text-6xl">FAQ</span>
            </h2>
            <div className="mb-10 border-gray-400" id="qna">
              {homeOfficeFaqs.map((item, key) => (
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
export default HomeOfficeRenovationsPage;
