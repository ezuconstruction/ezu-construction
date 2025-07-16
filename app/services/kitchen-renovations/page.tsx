import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import GetContact from "@/app/components/GetContact";
import Link from "next/link";

// Data for the "Types of Kitchen Renovations" section
const kitchenRenovationTypes = [
  {
    title: "Full Kitchen Remodel",
    image: "/images/kitchen-remodel.png",
    description:
      "Complete transformation including layout changes, new cabinetry, countertops, and appliances.",
  },
  {
    title: "Kitchen Refresh & Update",
    image: "/images/kitchen-refresh.jpg",
    description:
      "Cosmetic updates like new paint, backsplash, countertop replacement, or cabinet refacing for a fresh look.",
  },
  {
    title: "Open Concept Kitchen Conversion",
    image: "/images/open-concept-kitchen.jpg",
    description:
      "Removing walls to create a spacious, integrated kitchen, dining, and living area.",
  },
];

// Portfolio images specific to kitchen renovations (using the specified placeholder)
const kitchenPortfolioImages = [
  {
    title: "Modern Minimalist Kitchen",
    image: "/images/kitchen-renovations.jpg",
    src: "Sleek, handle-less cabinets with integrated appliances.",
    description:
      "Achieve a contemporary look with clean lines, minimalist design, and smart storage solutions for a clutter-free space.",
    link: "/projects/modern-kitchen", // Example link
    linktitle: "View Project",
  },
  {
    title: "Compact Urban Kitchen",
    image: "/images/kitchen-renovations.jpg",
    src: "Optimized small space with multi-functional features.",
    description:
      "Maximize every inch of your urban kitchen with clever layouts, space-saving appliances, and efficient storage.",
    link: "/projects/urban-kitchen", // Example link
    linktitle: "View Project",
  },
  {
    title: "Luxury Chef's Kitchen",
    image: "/images/kitchen-renovations.jpg",
    src: "High-end appliances, custom cabinetry, and premium finishes.",
    description:
      "Designed for the culinary enthusiast, blending professional-grade functionality with exquisite style and comfort.",
    link: "/projects/chef-kitchen", // Example link
    linktitle: "View Project",
  },
];

// Data for the "Key Considerations for Kitchen Renovations" section
const kitchenConsiderations = [
  {
    title: "Layout & Workflow",
    icon: "/globe.svg",
    description:
      "Designing an efficient 'work triangle' (sink, stove, refrigerator) and ensuring smooth flow for cooking and entertaining.",
  },
  {
    title: "Storage Solutions",
    icon: "/globe.svg",
    description:
      "Maximizing cabinet space with smart organizers, pantry systems, and hidden storage to keep your kitchen clutter-free.",
  },
  {
    title: "Appliance Integration",
    icon: "/globe.svg",
    description:
      "Selecting and seamlessly integrating appliances that fit your cooking style, energy efficiency needs, and design aesthetic.",
  },
  {
    title: "Material Durability & Maintenance",
    icon: "/globe.svg",
    description:
      "Choosing countertops, flooring, and finishes that withstand daily use, are easy to clean, and maintain their beauty.",
  },
];

// FAQs tailored for kitchen renovations, including some general ones
const kitchenFaqs = [
  {
    question: "How long does a typical kitchen renovation take?",
    answer:
      "A standard kitchen renovation can take anywhere from 6 to 10 weeks, depending on the scope, custom elements, and material availability. Larger projects with structural changes or custom cabinetry might extend beyond this. We provide a detailed timeline upfront.",
  },
  {
    question: "What's the average cost of a kitchen renovation in the GTA?",
    answer:
      "Kitchen renovation costs in the GTA vary widely based on size, materials, appliances, and labor. A minor refresh might start from $15,000, while a mid-range renovation could be $30,000 - $70,000, and high-end custom kitchens can exceed $100,000. We offer transparent, itemized quotes.",
  },
  {
    question: "Do I need permits for my kitchen renovation?",
    answer:
      "If your kitchen renovation involves structural changes, significant plumbing or electrical work, or altering load-bearing walls, permits are typically required by local municipalities in the GTA. We handle the entire permitting process for you, ensuring compliance with all building codes.",
  },
  {
    question: "Can I choose my own appliances and finishes?",
    answer:
      "Absolutely! We encourage you to be involved in every selection. Our design team will guide you through options for cabinetry, countertops, flooring, backsplashes, and appliances, ensuring they fit your style, budget, and functional needs. You're also welcome to source your own materials.",
  },
  {
    question: "How can I make my small kitchen feel larger?",
    answer:
      "For smaller kitchens, we focus on smart design solutions like lighter color palettes, reflective surfaces (glossy cabinets, glass backsplashes), open shelving, vertical storage, and compact or integrated appliances. Strategic lighting can also significantly enhance the sense of space.",
  },
  {
    question: "Will renovations increase my home's value?",
    answer:
      "Kitchen renovations consistently offer one of the highest returns on investment for homeowners. A well-designed and functional kitchen is a major selling point and can significantly boost your property's market value, especially in the GTA.",
  },
];

const KitchenRenovationsPage = () => {
  return (
    <div>
      <Navbar />
      {/* Hero Section - Kitchen Specific */}
      <div className="hero bg-base-100 h-[80vh] bg-[url(/images/kitchen-renovation-title.jpg)] bg-cover bg-center flex items-end">
        <div className="flex flex-col m-4 md:m-10 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-white drop-shadow-lg">
            Kitchen Renovations
          </h1>
          <p className="text-lg font-light pt-2 pl-1 text-white drop-shadow">
            Crafting functional, beautiful, and inspiring kitchens for your
            home.
          </p>
        </div>
      </div>

      <div className="bg-base-300 bg-[url(/images/bg-5.jpg)] bg-cover p-6 md:p-10">
        {/* Intro Paragraph - Kitchen Specific */}
        <p className="pb-10 text-lg max-w-6xl mx-auto text-center animate-fade-in">
          The kitchen is the heart of your home, a place for cooking, gathering,
          and making memories. Our team specializes in transforming outdated or
          inefficient kitchens into modern, highly functional, and aesthetically
          stunning spaces that truly reflect your lifestyle and culinary needs.
        </p>

        {/* Why Choose Us - Kitchen Specific */}
        <div className="bg-black/30 shadow-lg ring-1 ring-black/5 rounded-xl backdrop-blur-lg animate-fade-in py-10 mb-10 mx-0 px-5 flex flex-col md:flex-row justify-center items-center gap-10">
          <div>
            <img
              src={"/images/kitchen-renovations.jpg"}
              alt="Why Choose Us for Kitchens"
              className="max-w-sm w-full rounded-lg shadow-md"
            />
          </div>
          <div>
            <h2 className="text-4xl font-bold mb-4 text-info animate-fade-in">
              Why Trust Us with Your Kitchen?
            </h2>
            <ul className="grid gap-3 text-left max-w-xl mx-auto text-lg animate-fade-in font-semibold">
              <li>- Specialized expertise in modern kitchen design & build</li>
              <li>- Seamless integration of smart appliances and tech</li>
              <li>- Innovative storage solutions for every kitchen size</li>
              <li>- Premium material selection for durability and style</li>
              <li>- Dedicated project management from concept to completion</li>
            </ul>
          </div>
        </div>

        {/* New Section: Types of Kitchen Renovations (Dynamic) */}
        <div className="py-5 md:pb-10 md:pt-10 animate-fade-in">
          <div className="bg-black/30 shadow-lg ring-1 ring-black/5 rounded-xl backdrop-blur-xs animate-fade-in p-5 md:p-10">
            <h2 className="text-4xl font-bold text-center mb-10 text-white">
              Kitchen Renovation{" "}
              <span className="text-secondary text-6xl">
                Options
              </span>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {kitchenRenovationTypes.map((item, key) => (
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

        {/* New Section: Key Considerations for Kitchen Renovations (Dynamic) */}
        <div className="py-5 md:pb-10 md:pt-10 animate-fade-in mb-10">
          <div className="bg-black/30 shadow-lg ring-1 ring-black/5 rounded-xl backdrop-blur-xs animate-fade-in p-5 md:p-10">
            <h2 className="text-4xl font-bold text-center mb-10 text-white">
              Essential{" "}
              <span className="text-secondary text-4xl md:text-6xl">
                Kitchen Considerations
              </span>
            </h2>
            <div className="grid md:grid-cols-2 gap-8 text-lg font-semibold">
              {kitchenConsiderations.map((item, key) => (
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

        {/* Our Renovation Process - Kitchen Specific Timeline */}
        <div className="bg-black/30 shadow-lg ring-1 ring-black/5 rounded-xl backdrop-blur-lg animate-fade-in py-10 px-2 lg:px-50 pb-5 mx-0">
          <h2 className="text-4xl font-bold mb-4 text-secondary text-center pb-2">
            Our Kitchen Renovation Process
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
                  Initial Consultation & Kitchen Vision
                </div>
                We begin by discussing your culinary habits, design preferences,
                and functional needs for your dream kitchen. We'll explore
                layout possibilities, material inspirations, and budget
                considerations.
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
                  Kitchen Design & Material Selection
                </div>
                Our designers create detailed 3D renderings of your new kitchen,
                allowing you to visualize the space. We assist with selecting
                cabinetry, countertops, backsplash, flooring, lighting, and
                appliances that fit your aesthetic and budget.
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
                  Transparent Proposal & Permitting
                </div>
                You'll receive a comprehensive, itemized proposal detailing all
                costs, materials, and the project timeline. We also manage all
                necessary permits and inspections to ensure a smooth, compliant
                renovation.
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
                  Construction & Quality Installation
                </div>
                Our skilled craftsmen meticulously execute the design, from
                demolition and structural work to precise cabinet installation,
                plumbing, electrical, and finishing touches. We maintain a clean
                and safe work environment, providing regular updates.
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
                Once complete, we walk through the finished project with you to
                ensure every detail meets expectations. We address punch list
                items quickly and stand behind our work.
              </div>
              <hr className="bg-success" />
            </li>
          </ul>
        </div>

        {/* Recent Projects - Kitchen Specific */}
        <div className="py-5 md:pb-10 md:pt-20 animate-fade-in mb-5">
          <div className="bg-black/30 shadow-lg ring-1 ring-black/5 rounded-xl backdrop-blur-xs animate-fade-in p-5 md:p-10">
            <h2 className="text-4xl font-bold text-center mb-10 text-white">
              Our Recent{" "}
              <span className="text-secondary text-6xl">Kitchen Projects</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {kitchenPortfolioImages.map((item, key) => (
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

        {/* FAQ Section - Kitchen Specific */}
        <div className="py-5 md:pb-20 animate-fade-in">
          <div className="bg-black/30 shadow-lg ring-1 ring-black/5 rounded-xl backdrop-blur-xs animate-fade-in p-5 md:p-10">
            <h2 className="text-4xl font-bold text-center mb-10 text-white">
              Kitchen Renovation{" "}
              <span className="text-secondary text-6xl">FAQ</span>
            </h2>
            <div className="mb-10 border-gray-400" id="qna">
              {kitchenFaqs.map((item, key) => (
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
export default KitchenRenovationsPage;
