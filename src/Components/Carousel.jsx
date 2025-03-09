import React from "react";

const Carousel = () => {
  return (
    <section
      role="carousel"
      className="carousel-section h-screen flex flex-col justify-center items-center gap-10 p-8"
    >
      <h2 className="font-bold text-3xl">Screenshots</h2>
      <div className="h-full w-full flex justify-center items-center gap-10 p-8 overflow-hidden">
        <div className="h-full w-full bg-[#121212] dark:bg-[#f6f4ef]"></div>
        <div className="h-full w-full bg-[#121212] dark:bg-[#f6f4ef]"></div>
        <div className="h-full w-full bg-[#121212] dark:bg-[#f6f4ef]"></div>
        <div className="h-full w-full bg-[#121212] dark:bg-[#f6f4ef]"></div>
      </div>
    </section>
  );
};

export default Carousel;
