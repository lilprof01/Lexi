import React, { useEffect, useRef } from "react";
import { useDarkmode } from "../../../Context/Themecontext";
import darkss from "/darkss.png";
import lightss from "/lightss.png";

const Display = () => {
  const { darkmode, setDarkmode } = useDarkmode();
  const lightModeRef = useRef();
  const darkModeRef = useRef();

  useEffect(() => {
    if(darkmode) {
      darkModeRef.current.checked = true; 
    } else {
      lightModeRef.current.checked = true;
    }
  }, [])

  const handleDarkmode = () => {
    setDarkmode(true);
    darkModeRef.current.checked = true;
    lightModeRef.current.checked = false;
  };

  const handleLightmode = () => {
    setDarkmode(false);
    lightModeRef.current.checked = true;
    darkModeRef.current.checked = false;
  };

  return (
    <div className="flex flex-col lg:flex-row justify-start items-center align-middle gap-8 overflow-y-scroll p-6">
      <div className="w-full h-full flex flex-col justify-center items-center align-middle gap-4 p-6">
        <img alt="screenshot" src={lightss} className="h-full" />
        <div
          onClick={handleLightmode}
          className="flex justify-center items-center align-middle gap-3 border border-[grey] px-6 py-2 rounded-full w-full"
        >
          <label>Light Mode</label>
          <input ref={lightModeRef} type="radio" name="mode" className="accent-purple-500" />
        </div>
      </div>
      <div className="w-full h-full flex flex-col justify-center items-center align-middle gap-4 p-6">
        <img alt="screenshot" src={darkss} className="h-full" />
        <div
          onClick={handleDarkmode}
          className="flex justify-center items-center align-middle gap-3 border border-[grey] px-6 py-2 rounded-full w-full"
        >
          <label>Dark Mode</label>
          <input ref={darkModeRef} type="radio" name="mode" className="accent-purple-500" />
        </div>
      </div>
    </div>
  );
};

export default Display;