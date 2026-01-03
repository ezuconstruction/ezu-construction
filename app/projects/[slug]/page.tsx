import Link from "next/link";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import GetContact from "@/app/components/GetContact";
import { projectsData } from "../projects";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);
  
  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} | EZU Construction`,
    description: project.shortDescription,
  };
}

const ProjectPage = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div>
      <Navbar />
      {/* Hero Section */}
      <div 
        className="relative hero bg-base-100 h-[70vh] bg-cover bg-center flex items-end"
        style={{ backgroundImage: `url(${project.image})` }}
      >
        <div className="absolute inset-0 bg-black/55"></div>
        <div className="absolute inset-0 backdrop-blur-[2px]"></div>
        
        <div className="relative flex flex-col m-4 md:m-10 animate-fade-in w-full max-w-6xl">
          <div className="badge bg-red-500/20 text-white/90 border border-red-500/30 badge-lg mb-4 w-fit">
            {project.category}
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white/90 drop-shadow-lg tracking-tight">
            {project.title}
          </h1>
          {project.location && project.year && (
            <p className="text-lg font-light pt-2 text-white/90 drop-shadow">
              {project.location} • {project.year}
            </p>
          )}
        </div>
      </div>

      <div 
        className="relative bg-base-300 bg-cover p-6 md:p-10"
        style={{ backgroundImage: "url(/images/backgrounds/bg-3.jpg)" }}
      >
        <div className="absolute inset-0 bg-black/55"></div>
        <div className="absolute inset-0 backdrop-blur-[2px]"></div>
        
        <div className="relative max-w-6xl mx-auto">
          {/* Description */}
          <div className="py-10">
            <div className="bg-black/45 shadow-2xl ring-1 ring-white/10 rounded-2xl backdrop-blur-sm p-8">
              <h2 className="text-3xl font-bold mb-4 text-white/90 tracking-tight">Project Overview</h2>
              <p className="text-lg text-white/90 leading-relaxed">
                {project.description}
              </p>
            </div>
          </div>

          {/* Project Details */}
          {project.details && project.details.length > 0 && (
            <div className="py-5">
              <div className="bg-black/45 shadow-2xl ring-1 ring-white/10 rounded-2xl backdrop-blur-sm p-8">
                <h2 className="text-3xl font-bold mb-6 text-white/90 tracking-tight">Project Details</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {project.details.map((detail, key) => (
                    <div key={key} className="flex justify-between items-center py-3 border-b border-white/20">
                      <span className="text-white/70 font-semibold">{detail.label}:</span>
                      <span className="text-white/90">{detail.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Features */}
          {project.features && project.features.length > 0 && (
            <div className="py-5">
              <div className="bg-black/45 shadow-2xl ring-1 ring-white/10 rounded-2xl backdrop-blur-sm p-8">
                <h2 className="text-3xl font-bold mb-6 text-white/90 tracking-tight">
                  Key{" "}
                  <span className="text-white underline underline-offset-8 decoration-white/25">
                    Features
                  </span>
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {project.features.map((feature, key) => (
                    <div key={key} className="flex items-start gap-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-red-500 flex-shrink-0 mt-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-white/90 text-lg">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Gallery */}
          {project.gallery && project.gallery.length > 0 && (
            <div className="py-5">
              <div className="bg-black/45 shadow-2xl ring-1 ring-white/10 rounded-2xl backdrop-blur-sm p-8">
                <h2 className="text-3xl font-bold mb-6 text-white/90 tracking-tight">
                  Project{" "}
                  <span className="text-white underline underline-offset-8 decoration-white/25">
                    Gallery
                  </span>
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {project.gallery.map((image, key) => (
                    <div
                      key={key}
                      className="card bg-white/5 shadow-xl ring-1 ring-white/10 rounded-2xl overflow-hidden hover:scale-105 transition-all duration-300"
                    >
                      <figure>
                        <img
                          src={image}
                          alt={`${project.title} - Image ${key + 1}`}
                          className="w-full h-64 object-cover"
                        />
                      </figure>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Navigation */}
          <div className="py-10 flex justify-center gap-4">
            <Link href="/projects" className="btn bg-white/10 text-white/90 border border-white/20 hover:bg-white/20 btn-lg">
              ← Back to Projects
            </Link>
            <Link href="/contact" className="btn bg-white/90 text-black hover:bg-white btn-lg">
              Start Your Project
            </Link>
          </div>
        </div>
      </div>
      <GetContact />
      <Footer />
    </div>
  );
};

export default ProjectPage;
