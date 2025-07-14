import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import GetContact from "@/app/components/GetContact";
import Link from "next/link";

const portfolioImages = [
  {
    title: "Addition 1",
    image: "/images/kitchen-renovations.jpg",
    src: "Fully upgraded kitchen with modern finishes",
    description:
      "Get a functional, stylish kitchen upgrade with better storage, smarter layouts, and high-end finishes.",
    link: "/projects",
    linktitle: "Learn More",
  },
  {
    title: "Addition 2",
    image: "/images/placeholder-image.jpg",
    src: "Remodeled bathroom with walk-in shower",
    description:
      "Upgrade your bathroom with custom tiling, better lighting, and spa-inspired features - efficient and elegant.",
    link: "/projects",
    linktitle: "Learn More",
  },
  {
    title: "Addition 3",
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
    question: "How long does a home addition take in the GTA?",
    answer:
      "Most home additions in the Greater Toronto Area take between 3 to 6 months, depending on the complexity and permit timelines. Factors like weather, size of the addition, and municipal approvals can impact the schedule. We provide a clear timeline before construction begins.",
  },
  {
    question: "Do I need a permit for a home addition in Toronto?",
    answer:
      "Yes. Home additions require building permits, and in many cases, zoning reviews or Committee of Adjustment approvals. Our team manages all permit applications and works directly with the City of Toronto or your local GTA municipality to ensure compliance.",
  },
  {
    question: "Will a home addition increase my property value?",
    answer:
      "Absolutely! A well-designed home addition can significantly boost your home's market value and functionality. Adding square footage, extra bedrooms, or bathrooms increases resale appeal, especially in high-demand GTA neighborhoods like North York, Richmond Hill, or Oakville.",
  },
  {
    question: "Can I stay in my home during the addition process?",
    answer:
      "In most cases, yes. We do our best to isolate work areas and minimize disruption. For large-scale additions or structural changes, we'll discuss temporary relocation options and safety considerations during your planning phase.",
  },
  {
    question: "What types of home additions do you offer?",
    answer:
      "We build second-story additions, rear extensions, sunrooms, garage conversions, and full multi-room expansions. Whether you're upgrading a semi-detached in Scarborough or expanding a detached home in Mississauga, we tailor every addition to your specific needs and property type.",
  },
  {
    question: "How much does a home addition cost in the GTA?",
    answer:
      "Costs vary depending on size, scope, and finishes, but home additions in the GTA typically start at $250-$350 per square foot. We provide a detailed, transparent quote before any work begins so you can plan with confidence.",
  },
];


const page = () => {
  return (
    <div>
      <Navbar />
      <div className="hero bg-base-100 h-[80vh] bg-[url(/images/page-bg-1.png)] bg-cover flex items-end">
        <div className="flex flex-col m-4 md:m-10 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold">Home Additions</h1>
          <p className="text-lg font-light pt-2 pl-1">
            High-quality home additions in the Greater Toronto Area designed for
            growing families, smart investments, and better living.
          </p>
        </div>
      </div>
      <div className="bg-base-300 bg-[url(/images/page-bg-2.jpg)] bg-cover p-6 md:p-10">
        {/* Intro Paragraph */}
        <p className="pb-10 text-lg max-w-4xl mx-auto text-center animate-fade-in">
          Need more space but don't want to move? We specialize in custom home
          additions throughout the GTA, helping homeowners expand their living
          space without sacrificing location. We design and build with
          precision, transparency, and care, bringing expert craftsmanship and
          functional design to every project.
        </p>
        <div className="bg-black/30 shadow-lg ring-1 ring-black/5 rounded-xl backdrop-blur-lg animate-fade-in py-10 mb-10 mx-0 px-5 flex flex-col md:flex-row justify-center items-center gap-10">
          {/* Image (will appear on top on small screens) */}
          <div>
            <img
              src="/images/home-additions.jpg"
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
                - Full-service design + build firm specializing in home
                additions
              </li>
              <li>
                - Experienced, licensed, and insured contractors serving the GTA
              </li>
              <li>
                - Smart layouts, seamless transitions, and custom finishes that
                enhance your home's value and livability
              </li>
            </ul>
          </div>
        </div>

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
                <time className="font-mono italic">Step 1</time>
                <div className="text-lg font-black hover:text-info transition duration:300">
                  Consultation & Feasibility Planning
                </div>
                We begin with an on-site consultation to understand your goals,
                space constraints, and budget. Whether you're adding a second
                story in Richmond Hill or expanding a bungalow in Markham, we
                assess your property and zoning requirements to determine the
                most practical solutions.
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
                Our design team works with you to create detailed plans that
                blend function, flow, and aesthetics. We'll help you visualize
                your home addition with renderings, and we handle all zoning
                reviews and variance submissions if required.
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
                  Quoting, Timelines, and Permits
                </div>
                We provide a transparent, line-item estimate and a realistic
                construction timeline. You'll know exactly what's included—from
                demolition to final finishes—before the build begins. We take
                care of all building permits, architectural drawings, and
                engineering reports. Our team is experienced with GTA
                municipality requirements to keep your project compliant and on
                track.
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
                Our licensed trades begin work with minimal disruption to your
                daily life. We maintain a clean, organized job site and provide
                weekly progress updates to ensure full transparency.
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
                  Final Walkthrough
                </div>
                After completion, we conduct a full walkthrough with you and
                address any punch list items. All our work is backed by a clear
                warranty, so you can enjoy your new space with peace of mind.
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
