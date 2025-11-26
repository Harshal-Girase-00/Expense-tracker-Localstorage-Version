const About = () => {
  return (
    <div className="bg-gradient-to-r  from-sky-100 to-emerald-100 h-auto">
      <div className="flex flex-col items-center h-[27rem] lg:pb-14 w-full">
        <h1 className="sm:text-5xl text-3xl text-slate-700  font-bold w-full text-center mt-8">
          About us
        </h1>
        <div className="flex justify-center items-center lg:gap-14">
          <img
            src="/images/hero.png"
            className="w-[42%] px-6 "
            alt="hero image"
          />
          <div className="flex  flex-col w-[38%] px-6 items-center">
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

      <div className="flex items-center justify-center px-16 h-56 py-8 rounded-[16px] bg-white/50 lg:gap-8 gap-4">
        <div className="flex w-1/3 gap-4 lg:[350px] h-32 py-6 px-8 rounded-2xl bg-white  shadow-gray-500 shadow-md">
          <img src="./images/ourmission.png" alt="our mission" />
          <div>
            <h1 className="text-xl font-bold text-slate-950 ">Our Mission</h1>
            <p className="text-md font-medium">To make financial tracking accesssiable to everyone</p>
          </div>
        </div>

        <div className="flex w-1/3 gap-4 h-32 py-6 px-8 rounded-2xl bg-white  shadow-gray-500 shadow-lg ">
          <img src="./images/vision.png" alt="our mission" />
          <div>
            <h1 className="text-xl font-bold text-slate-950 ">Our Vision</h1>
            <p className="text-md font-medium">A world where everyone is financially secure</p>
          </div>
        </div>

        <div className="flex w-1/3 gap-4 h-32 py-6 px-8 rounded-2xl bg-white shadow-gray-500 shadow-lg">
          <img src="./images/story.png" alt="our mission" />
          <div>
            <h1 className="text-xl font-bold text-slate-950 ">Our Story</h1>
            <p className="text-md font-medium">Founded in 2025 by finance experts</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;
