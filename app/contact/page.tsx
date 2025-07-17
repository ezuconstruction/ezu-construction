import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const page = () => {
  return (
    <div>
      <Navbar />
      <main className="bg-base-100 min-h-screen flex items-center justify-center pt-20 animate-fade-in bg-[url(/images/nice-bg.avif)] bg-cover">
        <div className="w-full max-w-200 bg-black/50 shadow-lg ring-1 ring-black/5 rounded-4xl backdrop-blur-xs animate-fade-in py-10 mx-5 md:mx-0">
          <h1 className="text-5xl text-white font-bold text-center mb-8">
            Let's get{" "}
            <span className="text-accent hover:text-success transition duration-300">
              Started
            </span>
            .
          </h1>
          <form
            className="max-w-xl mx-auto p-8 space-y-6"
            action="https://formsubmit.co/b0e8d33fa4e2bf4ebb0b9a3dc925e60f"
            method="POST"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="input input-ghost w-full bg-black/40 hover:bg-accent/20 transition duration-500 placeholder:text-gray-400 placeholder:text-lg text-lg py-5 px-4"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="input input-ghost w-full bg-black/40 hover:bg-accent/20 transition duration-500 placeholder:text-gray-400 placeholder:text-lg text-lg py-5 px-4"
              required
            />
            <textarea
              placeholder="How can we help you?"
              name="text"
              className="textarea textarea-ghost w-full bg-black/40 hover:bg-accent/20 transition duration-500 placeholder:text-gray-400 placeholder:text-lg text-lg"
              rows={4}
              required
            />
            <button type="submit" className="btn btn-primary w-full">
              Send Message 📩
            </button>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
};
export default page;
