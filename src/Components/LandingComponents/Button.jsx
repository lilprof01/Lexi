import React from "react";
import { Link } from "react-router-dom";

const Button = () => {
  return (
    <Link
      to="/languageselection"
      className="px-6 py-3 bg-[#121212] dark:bg-[#f6f4ef] dark:text-black rounded-full w-[40%] hover:cursor-pointer flex justify-center items-center align-middle get-started"
    >
      Play now
    </Link>
  );
};

export default Button;
