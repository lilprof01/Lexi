import React from "react";

const Menu = ({ icon, text, isCollapsed }) => {
  return (
    <div
      className={`w-[80%] rounded-2xl h-[10%] flex ${
        isCollapsed ? "" : "gap-8"
      } p-3 items-center align-middle transition-all duration-300 hover:bg-[#6c3baa6d] hover:cursor-pointer`}
    >
      {icon}
      <p
        className={`text-xl ${
          isCollapsed ? "hidden" : "block"
        } transition-all duration-500`}
      >
        {text}
      </p>
    </div>
  );
};

export default Menu;
