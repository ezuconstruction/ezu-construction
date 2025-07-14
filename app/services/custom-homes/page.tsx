import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import GetContact from "@/app/components/GetContact";
import Link from "next/link";

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

const faqs = [
  {
    question: "How long does a custom home build take?",
    answer:
      "On average, a custom home build takes between 8 to 14 months. The timeline can vary based on factors like the complexity of the design, weather conditions, permitting and inspection delays, and changes made during construction. Early planning and consistent communication help us stay on schedule.",
  },
  {
    question: "Can I bring my own design or architect?",
    answer:
      "Absolutely! We're happy to collaborate with your chosen architect or review pre-existing plans. Alternatively, our in-house design team can work with you from scratch to create a home that meets your vision, lifestyle, and budget. Our process is flexible and designed to suit your needs.",
  },
  {
    question: "Do you help with land acquisition?",
    answer:
      "Yes, we can assist in locating and evaluating land suitable for your build. We also work with a network of trusted local real estate agents who specialize in finding lots that align with zoning, topography, and utility access requirements, saving you time and potential legal headaches.",
  },
  {
    question: "Can I make changes during the build process?",
    answer:
      "Yes, we allow for certain changes after construction begins. However, change orders may affect the budget and timeline, depending on the complexity of the request and how far along we are in the build. Our team will guide you through the implications of any modifications to help you make informed decisions.",
  },
  {
    question: "Do you handle all permitting and inspections?",
    answer:
      "Yes, we manage the entire permitting process and coordinate all required inspections with local authorities. Our team ensures that your project is compliant with zoning laws, building codes, and environmental regulations to avoid delays or costly corrections down the line.",
  },
];


const page = () => {
  return (
    <div>
      <Navbar />
      <div className="hero bg-base-100 h-[80vh] bg-[url(/images/page-bg-1.png)] bg-cover flex items-end">
        <div className="flex flex-col m-4 md:m-10 animate-fade-in">
          <h1 className="text-7xl font-bold">Custom Homes</h1>
          <p className="text-lg font-light pt-2 pl-1">
            Build your dream home from the ground up with expert design and
            craftsmanship.
          </p>
        </div>
      </div>
      <div className="bg-base-300 bg-[url(/images/page-bg-2.jpg)] bg-cover p-6 md:p-10">
        {/* Intro Paragraph */}
        <p className="pb-10 text-lg max-w-3xl mx-auto text-center animate-fade-in">
          Looking for reliable custom home builders to bring your vision to
          life? We design and construct homes that reflect your lifestyle,
          budget, and aesthetic - without cutting corners.
        </p>
        <div className="bg-black/30 shadow-lg ring-1 ring-black/5 rounded-xl backdrop-blur-lg animate-fade-in py-10 mb-10 mx-0 px-5 flex flex-col md:flex-row justify-center items-center gap-10">
          {/* Image (will appear on top on small screens) */}
          <div>
            <img
              src="/images/custom-home-builders.jpg"
              alt="Why Choose Us"
              className="max-w-sm w-full rounded-lg shadow-md"
            />
          </div>

          {/* Text content */}
          <div>
            <h2 className="text-4xl font-bold mb-4 text-info animate-fade-in">
              Why Choose Us?
            </h2>
            <ul className="grid gap-3 text-left max-w-xl mx-auto text-lg animate-fade-in font-semibold">
              <li>- Full-service design &amp; build process</li>
              <li>- Licensed, insured, and experienced contractors</li>
              <li>- Transparent budgets and timelines</li>
              <li>
                - Custom finishes, energy efficiency, and smart layout planning
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-black/30 shadow-lg ring-1 ring-black/5 rounded-xl backdrop-blur-lg animate-fade-in py-10 px-2 lg:px-50 pb-5 mx-0">
          <h2 className="text-4xl font-bold mb-4 text-secondary text-center pb-2">
            Our Custom Home Process
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
                  Consultation & Vision Planning
                </div>
                Every custom home begins with a deep-dive consultation. We
                clarify your goals, style preferences, must-haves, and budget.
                Whether you already own land or need help sourcing a lot, we
                guide the process from day one.
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
                  Design and Permit Handling
                </div>
                Our experienced design-build team drafts custom floor plans and
                ensures full compliance with local building codes. We manage all
                zoning checks, city approvals, and permit applications, so you
                don't have to.
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
                  Construction & Project Management
                </div>
                Licensed general contractors oversee the build from foundation
                to final trim. We keep construction timelines tight, costs
                transparent, and quality at the highest standard—using trusted
                trades and top-tier materials.
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
                  Final Walkthrough
                </div>
                Before handoff, we walk you through every detail to ensure your
                new home exceeds expectations. All work is backed by a
                comprehensive builder's warranty for peace of mind.
              </div>
              <hr className="bg-success" />
            </li>
          </ul>
        </div>
        <div className="py-5 md:pb-10 md:pt-20 animate-fade-in">
          <div className="bg-black/30 shadow-lg ring-1 ring-black/5 rounded-xl backdrop-blur-xs animate-fade-in p-5 md:p-10">
            <h2 className="text-4xl font-bold text-center mb-10 text-white">
              Recent <span className="text-secondary text-6xl">Projects</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {portfolioImages.map((item, key) => (
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

        {/* FAQ Section */}
        <div className="py-5 md:pb-20 animate-fade-in">
          <div className="bg-black/30 shadow-lg ring-1 ring-black/5 rounded-xl backdrop-blur-xs animate-fade-in p-5 md:p-10">
            <h2 className="text-4xl font-bold text-center mb-10 text-white">
              <span className="text-secondary text-6xl">FAQ</span>
            </h2>
            <div className="mb-10 border-gray-400" id="qna">
              {faqs.map((item, key) => (
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
export default page;
