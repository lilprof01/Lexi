import React from "react";

const Levels = ({ user }) => {
  return (
    <div className="col-start-2 p-16 transition-all duration-300 flex flex-col justify-start items-center text-center align-middle gap-8">
      <div>
        <h1 className="text-3xl">Welcome {user.displayName || "User"}</h1>
        <h3 className="text-xl">Please select your level</h3>
      </div>
      <div className="w-full flex flex-col justify-center items-center align-middle gap-8">
        <div className="py-4 w-[50%] border-2 border-black active:scale-95 shadow-md shadow-[grey] select-none dark:shadow-purple-500 hover:cursor-pointer rounded-full text-2xl flex justify-center items-center align-middle">Beginner</div>
        <div className="py-4 w-[50%] border-2 border-black active:scale-95 shadow-md shadow-[grey] select-none dark:shadow-purple-500 hover:cursor-pointer rounded-full text-2xl flex justify-center items-center align-middle">Intermediate</div>
        <div className="py-4 w-[50%] border-2 border-black active:scale-95 shadow-md shadow-[grey] select-none dark:shadow-purple-500 hover:cursor-pointer rounded-full text-2xl flex justify-center items-center align-middle">Advanced</div>
      </div>
    </div>
  );
};

export default Levels;
