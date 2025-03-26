import React from "react";
import bg from '/background-technology-desktop.jpg';

const Newhero = () => {
  return (
    <section style={{
      // backgroundImage: `url(${bg})`,
    }} className={`bg-[url(/background-technology-desktop.jpg)] bg-cover bg-center h-[90vh] sm:mt-20 flex justify-center items-center align-middle text-center text-white`}>
      <div className="flex flex-col items-center align-middle gap-10 w-[60%]">
        <h1 className="text-6xl">Lexi</h1>
        <p className="text-xl">
          Designed to help users learn new languages in a fun and interactive way.
        </p>
      </div>
    </section>
  );
};

export default Newhero;
