import Link from "next/link";
import Footer from "../components/Footer";
import CallToAction from "../components/CallToAction";
import OptimizedImage from "../components/OptimizedImage";
import { projectsData } from "./projects";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Projects - Custom Homes & Renovations Portfolio",
  description:
    "Explore EZU Construction's portfolio of completed custom homes, renovations, and remodeling projects across Toronto and the Greater Toronto Area.",
  alternates: {
    canonical: "/projects",
  },
  openGraph: {
    title: "Our Projects - EZU Construction Portfolio",
    description:
      "View our completed custom homes, kitchen renovations, bathroom remodels, and home additions in Toronto.",
    url: "https://ezuconstruction.com/projects",
    images: [
      {
        url: "/images/backgrounds/our-projects-title.jpg",
        width: 1200,
        height: 630,
        alt: "EZU Construction projects",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Projects - EZU Construction Portfolio",
    description:
      "View our completed custom homes, kitchen renovations, bathroom remodels, and home additions in Toronto.",
    images: ["/images/backgrounds/our-projects-title.jpg"],
  },
};

const ProjectsPage = () => {
  return (
    <>
      <div
        className="relative hero bg-base-100 h-[70vh] bg-cover bg-center flex items-end"
        style={{
          backgroundImage: "url(/images/backgrounds/our-projects-title.jpg)",
        }}
      >
        <div className="absolute inset-0 bg-black/55"></div>
        <div className="absolute inset-0 backdrop-blur-[2px]"></div>

        <div className="relative flex flex-col m-4 md:m-10 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-white/90 drop-shadow-lg tracking-tight">
            Our Projects
          </h1>
          <p className="text-lg font-light pt-2 pl-1 text-white/90 drop-shadow">
            Showcasing our finest work across the Greater Toronto Area.
          </p>
        </div>
      </div>

      <div
        className="relative bg-base-300 bg-cover p-6 md:p-10"
        style={{ backgroundImage: "url(/images/backgrounds/bg-3.jpg)" }}
      >
        <div className="absolute inset-0 bg-black/55"></div>
        <div className="absolute inset-0 backdrop-blur-[2px]"></div>

        <div className="relative">
          <div className="py-10">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-10 text-white/90 tracking-tight group">
                Featured{" "}
                <span className="text-white underline underline-offset-8 decoration-white/25 group-hover:decoration-red-500 transition duration-300">
                  Projects
                </span>
              </h2>
              <p className="text-center text-white/80 mb-6">
                Our projects are currently being cataloged and will be available
                soon. Check back regularly for updates.
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projectsData.map((project) => (
                  <Link
                    key={project.slug}
                    href={`/projects/${project.slug}`}
                    className="card bg-white/5 shadow-xl ring-1 ring-white/10 rounded-2xl backdrop-blur-sm hover:scale-105 transition-all duration-300 overflow-hidden group"
                  >
                    <figure className="relative overflow-hidden h-64">
                      <OptimizedImage
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover group-hover:scale-110 transition-transform duration-300 rounded-t-2xl"
                      />
                      <div className="absolute top-4 left-4">
                        <div className="badge bg-black/60 text-white/90 badge-lg rounded-lg">
                          {project.category}
                        </div>
                      </div>
                    </figure>
                    <div className="card-body">
                      <h3 className="card-title text-2xl text-white/90 group-hover:text-red-500 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-base text-white/70">
                        {project.shortDescription}
                      </p>
                      <div className="card-actions justify-end mt-4">
                        <button className="btn bg-white/90 text-black group-hover:bg-red-500 group-hover:text-white transition duration-300 btn-sm">
                          View Project -&gt;
                        </button>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="py-10 mt-10">
            <div className="bg-black/45 shadow-2xl ring-1 ring-white/10 rounded-2xl backdrop-blur-sm p-8">
              <h2 className="text-4xl font-bold text-center mb-5 text-white/90 tracking-tight">
                EZU Construction
              </h2>
              <div className="stats stats-vertical lg:stats-horizontal shadow w-full bg-white/5">
                <div className="stat">
                  <div className="stat-title text-white/70">
                    Projects Completed
                  </div>
                  <div className="stat-value text-red-500">10+</div>
                  <div className="stat-desc text-white/55">Across the GTA</div>
                </div>
                <div className="stat">
                  <div className="stat-title text-white/70">
                    Years of Experience
                  </div>
                  <div className="stat-value text-red-500">7+</div>
                  <div className="stat-desc text-white/55">In construction</div>
                </div>
                <div className="stat">
                  <div className="stat-title text-white/70">
                    Satisfied Clients
                  </div>
                  <div className="stat-value text-red-500">60+</div>
                  <div className="stat-desc text-white/55">
                    Happy homeowners
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CallToAction />
      <Footer />
    </>
  );
};

export default ProjectsPage;
