import React from "react";
import flag1 from "/flag1.svg";
import flag2 from "/flag2.svg";
import flag3 from "/flag3.svg";
import flag4 from "/flag4.svg";

const Hero = () => {
  return (
    <section
      role="hero"
      className="hero-section flex justify-center items-center gap-10 p-16"
    >
      <div className="h-[80vh] w-full bg-[#121212] dark:bg-[#f6f4ef]"></div>
      <div className="h-[80vh] w-full flex flex-col justify-center gap-16 p-16">
        <h1 className="text-6xl">
          What <span className="text-[#6C3BAA] font-semibold">language</span> do
          you want to learn?
        </h1>
        <div className="h-full grid grid-cols-2 gap-8">
          <div className="px-3 py-1 bg-white dark:bg-black rounded-xl flex justify-center align-middle items-center gap-2 hover:cursor-pointer hover:scale-105">
            <img src={flag1} /> Spanish
          </div>
          <div className="px-3 py-1 bg-white dark:bg-black rounded-xl flex justify-center align-middle items-center gap-2 hover:cursor-pointer hover:scale-105">
            <img src={flag3} /> German
          </div>
          <div className="px-3 py-1 bg-white dark:bg-black rounded-xl flex justify-center align-middle items-center gap-2 hover:cursor-pointer hover:scale-105">
            <img src={flag2} />
            French
          </div>
          <div className="px-3 py-1 bg-white dark:bg-black rounded-xl flex justify-center align-middle items-center gap-2 hover:cursor-pointer hover:scale-105">
            <img src={flag4} />
            Italian
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
