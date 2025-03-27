import React from "react";
import { FaUser } from "react-icons/fa";
import { FaGear } from "react-icons/fa6";
import {
  MdLeaderboard,
  MdHome,
  MdDisplaySettings,
  MdLogout,
  MdLanguage,
} from "react-icons/md";

const MobileNav = ({ openNav, selectedMenu, handleSelectedMenu }) => {
  return (
    <nav className="sm:hidden fixed top-16 left-0 py-16 px-8 h-screen flex flex-col justify-between items-center align-middle gap-10 bg-[#6c3baa]">
      <div className="flex flex-col justify-between align-middle gap-10">
        <div
          onClick={() => handleSelectedMenu("home")}
          className="flex items-center align-middle gap-4 text-xl hover:cursor-pointer"
        >
          <MdHome />
          <p>Home</p>
        </div>
        <div
          onClick={() => handleSelectedMenu("leaderboard")}
          className="flex items-center align-middle gap-4 text-xl hover:cursor-pointer"
        >
          <MdLeaderboard />
          <p>Leaderboard</p>
        </div>
        <div
          onClick={() => handleSelectedMenu("display")}
          className="flex items-center align-middle gap-4 text-xl hover:cursor-pointer"
        >
          <MdDisplaySettings />
          <p>Display</p>
        </div>
        <div
          onClick={() => handleSelectedMenu("language")}
          className="flex items-center align-middle gap-4 text-xl hover:cursor-pointer"
        >
          <MdLanguage />
          <p>Languages</p>
        </div>
          <div className="flex items-center align-middle gap-4 text-xl hover:cursor-pointer" onClick={() => handleSelectedMenu("logout")}>
          <MdLogout />
          <p>Logout</p>
        </div>
      </div>

      <div
        onClick={() => handleSelectedMenu("profile")}
        className="w-full flex items-center align-middle gap-4 text-xl py-6 hover:cursor-pointer"
      >
        <FaUser />
        <p>Profile</p>
      </div>
    </nav>
  );
};

export default MobileNav;
