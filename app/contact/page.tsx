import Footer from "../components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact EZU Construction - Get a Free Quote",
  description: "Contact EZU Construction for your custom home building or renovation project in Toronto. Call (647) 766-9999 or email info@ezuconstruction.com for a free consultation.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact EZU Construction",
    description: "Get in touch with Toronto's expert custom home builders and renovation specialists. Free consultations available.",
    url: "https://ezuconstruction.com/contact",
    images: [
      {
        url: "/images/backgrounds/nice-bg.avif",
        width: 1200,
        height: 630,
        alt: "Contact EZU Construction",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact EZU Construction",
    description: "Get in touch with Toronto's expert custom home builders and renovation specialists. Free consultations available.",
    images: ["/images/backgrounds/nice-bg.avif"],
  },
};

const page = () => {
  return (
    <div>
      
      <main className="relative min-h-screen flex items-center justify-center pt-20 pb-20 animate-fade-in bg-[url(/images/backgrounds/nice-bg.avif)] bg-cover bg-center">
        {/* Background scrim to tame the photo */}
        <div className="absolute inset-0 bg-black/55"></div>
        <div className="absolute inset-0 backdrop-blur-[2px]"></div>

        <div className="relative w-full max-w-200 mx-5 md:mx-0 mt-15 rounded-4xl bg-black/45 ring-1 ring-white/10 shadow-2xl">
          <div className="py-10">
            <h1 className="text-5xl text-white/90 font-bold text-center mb-7 tracking-tight">
              Let's get{" "}
              <span className="text-white underline underline-offset-8 decoration-white/25 hover:decoration-white/50 transition">
                started
              </span>
              .
            </h1>

            {/* Contact Methods */}
            <div className="max-w-xl mx-auto px-8">
              <div className="rounded-2xl p-6 mb-6 bg-white/5 ring-1 ring-white/10">
                <div className="space-y-4 text-center">
                  <div>
                    <p className="text-white/70 text-lg mb-2">Call</p>
                    <a
                      href="tel:+6477669999"
                      className="text-white/90 text-xl font-semibold hover:text-white underline underline-offset-4 decoration-white/20 hover:decoration-white/50 transition"
                    >
                      (647) 766-9999
                    </a>
                  </div>
                  <div>
                    <p className="text-white/70 text-lg mb-2">Email</p>
                    <a
                      href="mailto:info@ezuconstruction.com"
                      className="text-white/90 text-xl font-semibold hover:text-white underline underline-offset-4 decoration-white/20 hover:decoration-white/50 transition"
                    >
                      info@ezuconstruction.com
                    </a>
                  </div>
                  <p className="text-white/55 text-sm mt-4">
                    Or, fill out the form below and we'll get back to you within
                    24 hours.
                  </p>
                </div>
              </div>
            </div>

            <form
              className="max-w-xl mx-auto p-8 space-y-6"
              action="https://formsubmit.co/b0e8d33fa4e2bf4ebb0b9a3dc925e60f"
              method="POST"
            >
              <input
                type="text"
                name="name"
                placeholder="Your name"
                className="input w-full bg-white/5 ring-1 ring-white/10 focus:ring-2 focus:ring-white/20 focus:outline-none placeholder:text-white/40 text-white/90 text-lg py-5 px-4"
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Your email"
                className="input w-full bg-white/5 ring-1 ring-white/10 focus:ring-2 focus:ring-white/20 focus:outline-none placeholder:text-white/40 text-white/90 text-lg py-5 px-4"
                required
              />

              <textarea
                placeholder="How can we help?"
                name="text"
                className="textarea w-full bg-white/5 ring-1 ring-white/10 focus:ring-2 focus:ring-white/20 focus:outline-none placeholder:text-white/40 text-white/90 text-lg"
                rows={4}
                required
              />

              <button
                type="submit"
                className="btn w-full bg-white/90 text-black hover:bg-white"
              >
                Send message
              </button>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};
export default page;
