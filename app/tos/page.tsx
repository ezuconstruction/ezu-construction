import Footer from "../components/Footer";
const page = () => {
  return (
    <>
      
      <div className="pt-15 mx-14 min-h-screen">
        <h1 className="text-lg md:text-3xl text-left pt-6" id="tos">
          Terms of{" "}
          <span className="text-secondary font-extrabold text-4xl md:text-6xl">
            Service
          </span>
        </h1>
        <p className="pt-10">
          Please check back later
        </p>
      </div>
      <Footer />
    </>
  );
};
export default page;
