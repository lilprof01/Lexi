import React from "react";
import { Link } from "react-router-dom";

const Header = ({ openNav, handleOpenNav }) => {
  return (
    <header
      role="banner"
      className="flex justify-between items-center align-middle py-4 px-8 bg-white dark:bg-black w-full z-10 top-0 left-0"
    >
      <h1 className="text-[#6C3BAA] font-bold text-2xl hover:cursor-pointer select-none">
        LEXI
      </h1>
      <div className="sm:flex gap-4 hidden">
        <Link
          to="/login"
          className="px-8 py-3 border border-[#6C3BAA] text-[#6c3baa] font-semibold rounded-full hover:cursor-pointer hover:bg-[#6c3baa] hover:text-white dark:text-white"
        >
          Log In
        </Link>
        <Link
          to="/signup"
          className="px-8 py-3 bg-[#6C3BAA] text-white font-semibold rounded-full hover:cursor-pointer hover:opacity-85"
        >
          Sign Up
        </Link>
      </div>

      {/* hamburger for mobile */}
      <div
        onClick={handleOpenNav}
        className={`hamburger h-10 w-10 flex flex-col justify-center items-end align-middle z-[100] hover:cursor-pointer sm:hidden`}
      >
        <div className={`h-1 w-12 bg-[#121212] dark:bg-[#f6f4ef] ${openNav ? 'burger1' : 'burger-1'}`}></div>
        <div className={`h-1 w-8 bg-[#121212] dark:bg-[#f6f4ef] ${openNav ? 'invisible' : 'show'}`}></div>
        <div className={`h-1 w-6 bg-[#121212] dark:bg-[#f6f4ef] ${openNav ? 'burger2' : 'burger-2'}`}></div>
      </div>
    </header>
  );
};

export default Header;
