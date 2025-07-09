import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const page = () => {
  return (
    <div>
      <Navbar />
      <main className="pt-25 animate-fade-in">
        <h1 className="text-4xl font-bold text-center mb-10 text-primary">
          Contact Us
        </h1>
        <form
          className="max-w-xl mx-auto card bg-base-100 shadow-xl p-8 space-y-6"
          action="https://formsubmit.co/b0e8d33fa4e2bf4ebb0b9a3dc925e60f"
          method="POST"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="input input-bordered w-full"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="input input-bordered w-full"
            required
          />
          <textarea
            placeholder="How can we help you?"
            name="text"
            className="textarea textarea-bordered w-full"
            rows={4}
            required
          />
          <button type="submit" className="btn btn-primary w-full">
            Send Message
          </button>
        </form>
      </main>
      <Footer />
    </div>
  );
};
export default page;
