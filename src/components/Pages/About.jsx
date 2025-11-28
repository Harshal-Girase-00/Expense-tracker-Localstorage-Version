const About = () => {
  return (
    <div className="bg-gradient-to-r  from-sky-100 to-emerald-100 h-auto">
      <div className="flex flex-col items-center h-[27rem] lg:pb-14 w-full">
        <h1 className="sm:text-5xl text-3xl text-slate-700  font-bold w-full text-center mt-8">
          About us
        </h1>
        <div className="sm:flex justify-center items-center lg:gap-14">
          <img
            src="/images/hero.webp"
            className="sm:w-[42%] px-6 "
            alt="hero image"
          />
          <div className="flex flex-col sm:w-[38%] px-6 items-center sm:mt-0 mt-6">
            <p className="text-[#334155] font-bold text-xl  mb-2 w-full">
              We are dedicated to simplifying personal finance.
            </p>
            <p className="text-slate-700 text-lg w-full ">
              Our mission is to empower individuals to take control of their
              expenses and achieve financial freedom through intuitive tools and
              actionable insights.
            </p>
          </div>
        </div>
      </div>

      <div className="sm:flex  sm:mt-0 mt-12 items-center justify-center px-6 sm:px-16 h-56 py-8 rounded-[16px] bg-white/50 lg:gap-8 gap-4 mb-96 sm:mb-0">
        <div className="flex sm:mt-0 mt-4 sm:w-1/3 gap-4 lg:[350px] h-44 sm:h-32 py-6 px-8 rounded-2xl bg-white  shadow-gray-500 shadow-md">
          <img
            src="./images/ourmission.webp"
            className="w-24 h-24 sm:w-auto sm:h-auto"
            alt="our mission"
          />
          <div>
            <h1 className="text-xl font-bold text-slate-950 ">Our Mission</h1>
            <p className="text-md font-medium">
              To make financial tracking accesssiable to everyone
            </p>
          </div>
        </div>

        <div className="flex sm:mt-0 mt-4 sm:w-1/3 gap-4 h-32 py-6 px-8 rounded-2xl bg-white  shadow-gray-500 shadow-lg ">
          <img src="./images/vision.webp" alt="our mission" />
          <div>
            <h1 className="text-xl font-bold text-slate-950 ">Our Vision</h1>
            <p className="text-md font-medium">
              A world where everyone is financially secure
            </p>
          </div>
        </div>

        <div className="flex  sm:mt-0 mt-4 sm:w-1/3 gap-4 h-32 py-6 px-8 rounded-2xl bg-white shadow-gray-500 shadow-lg">
          <img src="./images/story.webp" alt="our mission" />
          <div>
            <h1 className="text-xl font-bold text-slate-950 ">Our Story</h1>
            <p className="text-md font-medium">
              Founded in 2025 by finance experts
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
