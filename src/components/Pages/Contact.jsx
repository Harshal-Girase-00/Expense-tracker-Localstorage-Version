const Contact = () => {
  return (
    <div className="bg-gradient-to-r from-sky-100 to-emerald-100 h-auto pb-11">
      <div className="flex flex-col items-center w-full max-w-7xl mx-auto px-6">
        <h1 className="sm:text-5xl text-3xl text-slate-700  font-bold w-full text-center mt-8">
          Contact Us
        </h1>
        <div className="flex flex-col lg:flex-row justify-between w-full  mt-12 gap-10">
          <div className="bg-white/40 border shadow-xl p-10 rounded-xl w-full lg:w-1/2  sm:h-96 ">
            <h1 className="text-3xl font-bold text-slate-900 mb-4 text-center">
              Services
            </h1>
            <p className="text-base sm:text-lg font-medium text-slate-600 leading-relaxed ">
              Let’s Build Your Website Together If you need a modern, fully
              responsive, and secure website for your personal or business use,
              feel free to reach out. <br /> We design and develop high-quality
              MERN Stack websites with clean UI, strong backend security, and
              smooth performance. <br /> Whether you need a portfolio, business
              website, dashboard, or a complete web application—We are here to
              help.
            </p>
          </div>

          <div className="flex flex-col w-full lg:w-[40%] ">
            <div className="flex sm:items-center mb-4">
              <img
                src="/images/location.png"
                className="sm:w-8 w-8 h-8 mr-2"
                alt="lacation"
              />{" "}
              <span className="text-slate-950 font-bold text-lg mr-1">
                Address:
              </span>
              <span className="sm:text-lg">C.B.Patel Computer College, Vesu</span>
            </div>

            <div className="flex items-center mb-4">
              <img src="/images/call.png" className="w-8 mr-2" alt="phone" />{" "}
              <span className="text-slate-950 font-bold text-lg mr-1">
                Phone:
              </span>
              <span className="text-lg ">+91 98254-51048</span>
            </div>

            <div className="flex items-center mb-4">
              <img src="/images/mail.png" className="w-8 mr-2" alt="Email" />{" "}
              <span className="text-slate-950 font-bold text-lg mr-1">
                Email:
              </span>
              <span className="text-lg ">giraseharshal302@gmail.com</span>
            </div>

            <img
              src="/images/location2.png"
              alt="map"
              className="rounded-xl w-64 sm:w-64 mb-2.5 pb-12"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
