const Projects = () => {
  return (
    <section id="projects" className="px-8 py-16 animate-fade-in">
      <h2 className="text-4xl font-bold text-center mb-10 text-primary">
        Featured Projects
      </h2>
      <div className="carousel w-full rounded-box shadow-xl">
        <div className="carousel-item w-1/3">
          <img
            src="images/get-contact-background.jpg"
            className="h-80 w-250 bg-cover"
            alt="Project 1"
          />
        </div>
        <div className="carousel-item w-1/3">
          <img
            src="images/get-contact-background.jpg"
            className="h-80 w-250 bg-cover"
            alt="Project 1"
          />
        </div>
        <div className="carousel-item w-1/3">
          <img
            src="images/get-contact-background.jpg"
            className="h-80 w-250 bg-cover"
            alt="Project 1"
          />
        </div>
      </div>
    </section>
  );
}
export default Projects