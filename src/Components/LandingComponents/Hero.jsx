import React from "react";
import flag1 from "/flag1.svg";
import flag2 from "/flag2.svg";
import flag3 from "/flag3.svg";
import flag4 from "/flag4.svg";
import heroimg from "/heroimg.webp";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section
      role="hero"
      className="hero-section flex flex-col-reverse lg:flex-row justify-center items-center lg:gap-10 p-16 lg:p-16"
    >
      <div style={{
        backgroundImage: `url(${heroimg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }} className="h-[80vh] w-full bg-[#121212] dark:bg-[#f6f4ef] hidden sm:block rounded-2xl"></div>
      <div className="lg:w-full flex flex-col justify-center items-center lg:items-baseline gap-4 lg:gap-16 p-8 lg:p-16">
        <h1 className="text-4xl lg:text-6xl text-center lg:text-left">
          What <span className="text-[#6C3BAA] font-semibold">language</span> do
          you want to learn?
        </h1>
        <div className="w-full grid sm:grid-cols-2 gap-8">
          <Link to="/signup" className="px-3 py-2 bg-white dark:bg-black rounded-xl flex justify-center align-middle items-center gap-2 hover:cursor-pointer hover:scale-105">
            <img src={flag1} /> Spanish
          </Link>
          <Link to="/signup" className="px-3 py-2 bg-white dark:bg-black rounded-xl flex justify-center align-middle items-center gap-2 hover:cursor-pointer hover:scale-105">
            <img src={flag3} /> German
          </Link>
          <Link to="/signup" className="px-3 py-2 bg-white dark:bg-black rounded-xl flex justify-center align-middle items-center gap-2 hover:cursor-pointer hover:scale-105">
            <img src={flag2} />
            French
          </Link>
          <Link to="/signup" className="px-3 py-2 bg-white dark:bg-black rounded-xl flex justify-center align-middle items-center gap-2 hover:cursor-pointer hover:scale-105">
            <img src={flag4} />
            Italian
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;