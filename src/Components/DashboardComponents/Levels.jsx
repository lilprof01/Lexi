import React from "react";
import { useNavigate } from "react-router-dom";

const Levels = ({ user }) => {
  const navigate = useNavigate();
  
  const handleLevelSelect = (level) => {
    if (!user?.language) {
      alert("User language not found!");
      return;
    }
    
    navigate(`/lexigame?language=${user.language}&level=${level}`);
  };

  return (
    <div className="col-start-2 p-16 transition-all duration-300 flex flex-col justify-start items-center text-center align-middle gap-8">
      <div>
         <h1 className="text-3xl">Welcome {user.username}</h1>
        <h3 className="text-xl">Please select your level</h3>
      </div>
      <div className="w-full flex flex-col justify-center items-center align-middle gap-8">
        {["Beginner", "Intermediate", "Advanced"].map((level) => (
          <div
            key={level}
            onClick={() => handleLevelSelect(level.toLowerCase())}
            className="py-4 w-[50%] border-2 border-black active:scale-95 shadow-md shadow-[grey] select-none dark:shadow-purple-500 hover:cursor-pointer rounded-full text-2xl flex justify-center items-center align-middle"
          >
            {level}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Levels;
