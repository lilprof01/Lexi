import React from "react";

const Copyright = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    // Footer component
    <div className="bg-[#6c3baa] p-4">
      <p className="text-white text-lg">Copyright {year}. All rights reserved.</p>
    </div>
  );
};

export default Copyright;
