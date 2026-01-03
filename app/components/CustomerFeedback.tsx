const CustomerFeedback = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      location: "Toronto, ON",
      project: "Kitchen Renovation",
      rating: 5,
      testimonial: "EZU Construction transformed our outdated kitchen into a modern masterpiece. Their attention to detail and craftsmanship exceeded our expectations. The project was completed on time and within budget.",
      image: "/images/testimonials/sarah.jpg"
    },
    {
      name: "Michael Chen",
      location: "North York, ON", 
      project: "Home Addition",
      rating: 5,
      testimonial: "We hired EZU for a second-story addition and couldn't be happier with the results. The team was professional, communicative, and handled all of permit requirements seamlessly. Highly recommend!",
      image: "/images/testimonials/michael.jpg"
    },
    {
      name: "Emily Rodriguez",
      location: "Mississauga, ON",
      project: "Bathroom Remodel",
      rating: 5,
      testimonial: "Our bathroom remodel was handled with exceptional care. From design to completion, every aspect was managed perfectly. The quality of work and customer service is outstanding.",
      image: "/images/testimonials/emily.jpg"
    },
    {
      name: "David Thompson",
      location: "Brampton, ON",
      project: "Custom Home",
      rating: 5,
      testimonial: "Building our dream home with EZU Construction was the best decision we made. They brought our vision to life with superior quality and professionalism. True experts in custom home building.",
      image: "/images/testimonials/david.jpg"
    },
    {
      name: "Lisa Park",
      location: "Markham, ON",
      project: "Basement Finishing",
      rating: 5,
      testimonial: "EZU converted our unfinished basement into a beautiful living space. Their team was respectful, clean, and delivered exactly what they promised. We love our new family room!",
      image: "/images/testimonials/lisa.jpg"
    },
    {
      name: "Robert Williams",
      location: "Vaughan, ON",
      project: "Whole Home Renovation",
      rating: 5,
      testimonial: "A complete home renovation can be stressful, but EZU made it seamless. Their project management skills and quality craftsmanship are unmatched. Our home looks brand new!",
      image: "/images/testimonials/robert.jpg"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <svg
        key={i}
        className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-600'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034c-.784-.57-1.838-.197-1.539 1.118l1.07 3.292z" />
      </svg>
    ));
  };

  return (
    <section className="relative py-16 px-4 bg-cover bg-center" style={{ backgroundImage: "url(/images/backgrounds/bg-3.jpg)" }}>
      <div className="absolute inset-0 bg-black/55"></div>
      <div className="absolute inset-0 backdrop-blur-[2px]"></div>
      
      <div className="relative max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white/90 tracking-tight mb-4">
            What Our{" "}
            <span className="text-white underline underline-offset-8 decoration-white/25 hover:decoration-red-500 transition-all duration-300">
              Customers Say
            </span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Don't just take our word for it - hear from homeowners who have experienced the EZU Construction difference
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="card bg-white/5 shadow-xl ring-1 ring-white/10 rounded-2xl backdrop-blur-sm hover:scale-105 transition-all duration-300 p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-red-500/20 rounded-full flex items-center justify-center mr-4">
                  <span className="text-red-400 font-bold text-lg">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-white/90">{testimonial.name}</h4>
                  <p className="text-sm text-white/60">{testimonial.location}</p>
                </div>
              </div>
              
              <div className="flex mb-3">
                {renderStars(testimonial.rating)}
              </div>
              
              <div className="mb-3">
                <span className="inline-block bg-red-500/20 text-red-400 text-xs font-medium px-2 py-1 rounded">
                  {testimonial.project}
                </span>
              </div>
              
              <p className="text-white/80 leading-relaxed">
                "{testimonial.testimonial}"
              </p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-red-500/90 to-red-600/90 rounded-2xl p-8 text-center text-white backdrop-blur-sm">
          <h3 className="text-2xl font-bold mb-4">
            Join Our Satisfied Customers
          </h3>
          <p className="text-lg mb-6 max-w-2xl mx-auto text-white/90">
            With over 150+ completed projects and a 5-star rating, we're Toronto's trusted choice for quality construction services.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            <div className="text-center">
              <div className="text-3xl font-bold mb-1">150+</div>
              <div className="text-sm text-white/70">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-1">5.0</div>
              <div className="text-sm text-white/70">Average Rating</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-1">10+</div>
              <div className="text-sm text-white/70">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-1">100%</div>
              <div className="text-sm text-white/70">Customer Satisfaction</div>
            </div>
          </div>
          <a
            href="/contact"
            className="btn bg-white text-red-500 border-0 hover:bg-gray-100 px-6 py-3 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Start Your Project
          </a>
        </div>
      </div>
    </section>
  );
};

export default CustomerFeedback;
