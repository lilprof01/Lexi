import React from "react";

const Menu = ({ icon, text, isCollapsed }) => {
  return (
    <div
      className={` rounded-2xl h-[10%] flex ${
        isCollapsed ? "justify-center" : "gap-4"
      } p-3 items-center align-middle hover:bg-[#6c3baa6d] hover:cursor-pointer`}
    >
      {icon}
      <p
        className={`text-lg ${
          isCollapsed ? "hidden" : "block transition-all duration-1000"
        }`}
      >
        {text}
      </p>
    </div>
  );
};

export default Menu;
