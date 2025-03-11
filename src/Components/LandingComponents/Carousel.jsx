import React from "react";

const Carousel = () => {
  return (
    <section
      role="carousel"
      className="carousel-section h-screen flex flex-col justify-center items-center gap-10 p-8"
    >
      <h2 className="font-bold text-3xl">Screenshots</h2>
      <div className="carousel h-full w-[90vw] flex justify-center items-center gap-8 sm:gap-2 py-8 overflow-x-scroll">
        <div className="h-full carousel-card min-w-[90vw] lg:min-w-[30vw] bg-[#121212] dark:bg-[#f6f4ef]"></div>
        <div className="h-full carousel-card min-w-[90vw] lg:min-w-[30vw] bg-[#121212] dark:bg-[#f6f4ef]"></div>
        <div className="h-full carousel-card min-w-[90vw] lg:min-w-[30vw] bg-[#121212] dark:bg-[#f6f4ef]"></div>
        <div className="h-full carousel-card min-w-[90vw] lg:min-w-[30vw] bg-[#121212] dark:bg-[#f6f4ef]"></div>
        <div className="h-full carousel-card min-w-[90vw] lg:min-w-[30vw] bg-[#121212] dark:bg-[#f6f4ef]"></div>
        <div className="h-full carousel-card min-w-[90vw] lg:min-w-[30vw] bg-[#121212] dark:bg-[#f6f4ef]"></div>
        <div className="h-full carousel-card min-w-[90vw] lg:min-w-[30vw] bg-[#121212] dark:bg-[#f6f4ef]"></div>
      </div>
    </section>
  );
};

export default Carousel;
