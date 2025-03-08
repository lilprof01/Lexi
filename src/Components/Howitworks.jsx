import React from "react";
import Button from "./Button";

const Howitworks = () => {
  return (
    <section
      role="howitworks"
      className="howitworks-section flex flex-col justify-center items-center gap-10 p-28"
    >
      <h2 className="text-[#ffd966] font-bold text-3xl">How it works</h2>
      <div className="h-[70vh] w-full flex justify-center items-center gap-10">
        <div className="h-[70vh] w-full flex flex-col justify-center align-middle gap-8">
          <h3 className="text-2xl font-semibold">Heading</h3>
          <p className="text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id eum
            veniam explicabo dignissimos est tenetur modi. Consequatur incidunt
            voluptatem rerum cumque fugit nesciunt cum magni eum! Quo corporis
            eaque vero!
          </p>
          <div className="flex justify-end">
            <Button />
          </div>
        </div>
        <div className="h-[70vh] w-full dark:bg-[#f6f4ef] bg-[#121212]"></div>
      </div>
      <div className="h-[70vh] w-full flex justify-center items-center gap-10">
        <div className="h-[70vh] w-full dark:bg-[#f6f4ef] bg-[#121212]"></div>
        <div className="h-[70vh] w-full flex flex-col justify-center align-middle gap-8">
        <h3 className="text-2xl font-semibold">Heading</h3>
          <p className="text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id eum
            veniam explicabo dignissimos est tenetur modi. Consequatur incidunt
            voluptatem rerum cumque fugit nesciunt cum magni eum! Quo corporis
            eaque vero!
          </p>
          <div className="flex justify-end">
            <Button />
          </div>
        </div>
      </div>
      <div className="h-[70vh] w-full flex justify-center items-center gap-10">
        <div className="h-[70vh] w-full flex flex-col justify-center align-middle gap-8">
        <h3 className="text-2xl font-semibold">Heading</h3>
          <p className="text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id eum
            veniam explicabo dignissimos est tenetur modi. Consequatur incidunt
            voluptatem rerum cumque fugit nesciunt cum magni eum! Quo corporis
            eaque vero!
          </p>
          <div className="flex justify-end">
            <Button />
          </div>
        </div>
        <div className="h-[70vh] w-full dark:bg-[#f6f4ef] bg-[#121212]"></div>
      </div>
    </section>
  );
};

export default Howitworks;
