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
    question: "How long does a typical home renovation take?",
    answer:
      "The timeline depends on the scope of your renovation. Small projects like bathroom remodels may take 2-4 weeks, while full kitchen renovations can take 6-10 weeks. Whole-home renovations or structural changes may take several months. We provide a clear timeline before work begins and keep you updated at every stage.",
  },
  {
    question: "Can I live in my home during the renovation?",
    answer:
      "In some cases, yes, but it depends on the size and nature of the project. For smaller renovations, we take measures to minimize dust and disruption. For major renovations or when kitchens and bathrooms are fully out of service, we'll help you plan temporary accommodations if needed.",
  },
  {
    question: "Do I need permits for my renovation?",
    answer:
      "Most significant renovations - especially those involving structural work, plumbing, or electrical updates - do require permits. We handle the entire permitting process for you, ensuring everything complies with local building codes and regulations.",
  },
  {
    question: "Can I choose my own materials and finishes?",
    answer:
      "Absolutely. We'll guide you through selecting materials that align with your style and budget, and you're welcome to bring your own ideas or suppliers. Our design team can also offer recommendations based on your goals and layout.",
  },
  {
    question: "Will renovations increase my home's value?",
    answer:
      "In many cases, yes! This is especially true in kitchens, bathrooms, and energy-efficient upgrades. We help you focus on smart improvements that not only enhance your daily life but also add long-term value to your property.",
  },
  {
    question: "What if something unexpected is found during renovation?",
    answer:
      "Unexpected issues, like hidden water damage or outdated wiring can sometimes occur during renovation. If that happens, we'll pause and walk you through the problem, proposed solutions, and costs before moving forward. Our goal is to be transparent and resolve issues efficiently.",
  },
];


const page = () => {
  return (
    <div>
      <Navbar />
      <div className="hero bg-base-100 h-[80vh] bg-[url(/images/page-bg-1.png)] bg-cover flex items-end">
        <div className="flex flex-col m-4 md:m-10 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold">Home Renovations</h1>
          <p className="text-lg font-light pt-2 pl-1">
            Transform your existing space with timeless design, quality
            craftsmanship, and a process built around your needs.
          </p>
        </div>
      </div>
      <div className="bg-base-300 bg-[url(/images/page-bg-2.jpg)] bg-cover p-6 md:p-10">
        {/* Intro Paragraph */}
        <p className="pb-10 text-lg max-w-4xl mx-auto text-center animate-fade-in">
          Looking to update your home with thoughtful renovations that add both
          comfort and value? Our team specializes in custom home renovations
          that match your style, maximize functionality, and respect your
          budget.
        </p>
        <div className="bg-black/30 shadow-lg ring-1 ring-black/5 rounded-xl backdrop-blur-lg animate-fade-in py-10 mb-10 mx-0 px-5 flex flex-col md:flex-row justify-center items-center gap-10">
          {/* Image (will appear on top on small screens) */}
          <div>
            <img
              src="/images/whole-home-renovation.jpg"
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
              <li>- Comprehensive design-build renovation services</li>
              <li>
                - Licensed, insured, and experienced remodeling specialists
              </li>
              <li>
                - Honest pricing, detailed planning, and clear communication
              </li>
              <li>
                - Expertise in modern finishes, energy upgrades, and smart space
                optimization
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-black/30 shadow-lg ring-1 ring-black/5 rounded-xl backdrop-blur-lg animate-fade-in py-10 px-2 lg:px-50 pb-5 mx-0">
          <h2 className="text-4xl font-bold mb-4 text-secondary text-center pb-2">
            Our Renovation Process
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
                We start with a personalized consultation to understand your
                renovation goals, style preferences, and budget. Whether it's a
                kitchen refresh or a full-home remodel, we help align your
                vision with a realistic plan.
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
                Our design team collaborates with you to create functional
                layouts and select finishes that match your taste. We help you
                visualize the end result with detailed renderings and samples,
                and handle all necessary permits, inspections, and prep work.
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
                  Transparent Proposal & Timeline
                </div>
                We provide a clear, itemized proposal outlining scope, pricing,
                and project phases. You'll know exactly what to expect - no
                hidden costs or surprises.
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
                  Construction & Ongoing Communication
                </div>
                During the build phase, our crews work efficiently and
                respectfully, keeping you informed at every milestone. Clean
                workspaces and safety are always priorities.
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
                  Wrap-up and Final Walkthrough
                </div>
                Once complete, we walk through the finished project with you to
                ensure every detail meets expectations. We address punch list
                items quickly and stand behind our work.
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
