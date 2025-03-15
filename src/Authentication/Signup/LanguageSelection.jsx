import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { collection, addDoc } from "firebase/firestore";
import { v4 as uuidv4 } from "uuid";
import { auth, app, db } from "../Login/Firebase";
import { getDoc, doc } from "firebase/firestore";

const LanguageSelection = () => {
  const [selectedLanguage, setSelectedLanguage] = useState(null);
  const languages = ["Spanish", "German", "French", "Italian"];
  const navigate = useNavigate("");

  const handleLanguageSelect = async (language) => {
    const sessionId = uuidv4(); // Generate a temporary unique session ID

    localStorage.setItem("sessionId", sessionId); // Store session ID in localStorage
    localStorage.setItem("selectedLanguage", language);

    await addDoc(collection(db, "LanguageSelections"), {
      sessionId,
      language,
      timestamp: new Date(),
    });

    navigate("/signup");
  };

  const handleSelect = async (language) => {
    const selectedLanguage = localStorage.getItem("selectedLanguage");
    setSelectedLanguage(language);
    const user = auth.currentUser;

    if (user) {
      const userRef = doc(db, "users", user.uid);
      await setDoc(
        userRef,
        { userLanguage: selectedLanguage },
        { merge: true }
      );
      console.log("Response saved:", language);
    } else {
      console.log("User not signed in");
    }
  };

  return (
    <div className="p-3 dark:bg-[#121212] h-screen flex flex-col justify-center items-center align-middle">
      <div>
        <div className="flex justify-center items-center mt-4 flex-col w-full">
          <h1 className="mt-10 text-center text-[40px] font-bold tracking-tight text-[#6C3BAA]">
            Welcome To Lexi
          </h1>
        </div>
        <div className="flex justify-center items-center mt-4 flex-col w-full">
          {/* replace language withe fetch from DB */}
          <p className="mt-8 w-[350px] md:w-full text-center text-[15px] md:text-[25px] font-bold tracking-tight text-black dark:text-white">
            What Language do you want to practice?
          </p>
          {languages.map((language) => (
            <button
              key={language}
              onClick={() => handleLanguageSelect(language)}
              className="mt-4 flex w-[300px] md:w-[500px] justify-left rounded-md px-3 py-4 text-lg/6 md:text-xl/6 font-semibold text-white shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              style={{
                backgroundColor:
                  selectedLanguage === language ? "black" : "white",
                color: selectedLanguage === language ? "white" : "black",
                border:
                  selectedLanguage === language ? "none" : "2px solid black",
              }}
            >
              {language}
            </button>
          ))}
        </div>
        {/* <Link
          to={selectedLanguage ? "/signup" : "#"}
          className={`mt-10 ml-[180px] md:ml-[380px] flex w-[150px] justify-center rounded-md px-3 py-2.5 text-sm/6 font-semibold shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2 ${
            selectedLanguage
              ? "bg-[#6C3BAA] text-white"
              : "bg-gray-400 text-gray-200 cursor-not-allowed"
          }`}
          onClick={(e) => {
            if (!selectedLanguage) e.preventDefault(); // Prevent navigation if no language is selected
          }}
        >
          Next
        </Link> */}
      </div>
    </div>
  );
};

export default LanguageSelection;
