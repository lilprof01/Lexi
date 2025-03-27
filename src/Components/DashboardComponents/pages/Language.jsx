import React, { useState } from "react";
import { doc, updateDoc, getDoc } from "firebase/firestore";
import { auth, db } from "../../../Authentication/Login/Firebase";
import { useNavigate } from "react-router-dom";

const Language = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLanguageSelect = async (language) => {
    const user = auth.currentUser;

    if (!user) {
      console.error("No authenticated user.");
      return alert("User not authenticated.");
    }
    setLoading(true);
    try {
      const userRef = doc(db, "users", user.uid);
      await updateDoc(userRef, { language: language });
      console.log(`✅ Language updated to ${language}`);
      const updatedUserDoc = await getDoc(userRef);
      if (updatedUserDoc.exists()) {
        console.log("✅ Updated User Data:", updatedUserDoc.data());
      } else {
        console.warn("⚠️ No such user document found.");
      }
      navigate("/dashboard"); 
      
    } catch (error) {
      console.error("❌ Error updating language:", error);
      alert("Failed to update language. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="col-start-2 p-16 transition-all duration-300 flex flex-col justify-start items-center text-center align-middle gap-8 dark:bg-[#121212]">
      <div>
        <h1 className="text-3xl">Change Your Language</h1>
      </div>
      <div className="w-full flex flex-col justify-center items-center align-middle gap-8">
        {["German", "Spanish", "Italian", "French"].map((language) => (
          <div
            key={language}
            onClick={() => handleLanguageSelect(language.toLowerCase())}
            className="py-4 w-full sm:w-[50%] border-2 border-black active:scale-95 shadow-md shadow-[grey] select-none dark:shadow-purple-500 hover:cursor-pointer rounded-full text-2xl flex justify-center items-center align-middle"
          >
            {loading ? "Loading..." : language}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Language;
