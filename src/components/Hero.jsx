import Banner from "../assets/img/bank-tree.jpeg";

const Hero = () => {
  return (
    <section className="relative">
      <img
        src={Banner}
        alt="Hero Image"
        className="h-[400px] w-full object-cover object-top"
      />
      <div className="bg-white absolute top-1/2 right-12 transform -translate-y-1/2 p-10 shadow-xl max-w-[400px] text-neutral-600">
        <h2 className="text-2xl font-bold">No fees.</h2>
        <h2 className="text-2xl font-bold">No minimum deposit.</h2>
        <h2 className="text-2xl font-bold">High interest rates.</h2>
        <p className="pt-4 text-lg">
          Open a savings account with Argent Bank today!
        </p>
      </div>
    </section>
  );
};

export default Hero;
