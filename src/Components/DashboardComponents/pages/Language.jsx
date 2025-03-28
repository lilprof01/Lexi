import React, { useState } from "react";
import { doc, updateDoc, getDoc } from "firebase/firestore";
import { auth, db } from "../../../Authentication/Login/Firebase";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify"; // Import Toastify
import "react-toastify/dist/ReactToastify.css"; // Toastify CSS

// toast.configure();

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
    toast.success(`Updating language to ${language}...`, {
      autoClose: false, // Keep it open until process completes
      toastId: "loadingToast",
      position: "top-center"
    });

    try {
      const userRef = doc(db, "users", user.uid);
      
      // Update language and fetch questions at the same time
      await Promise.all([
        updateDoc(userRef, { language: language }), // Update language in DB
        fetchQuestions(language), // Fetch updated questions
      ]);

      console.log(`✅ Language updated to ${language}`);
      toast.update("loadingToast", {
        render: `Updating Language to ${language}!`,
        type: "success",
        autoClose: 7000,
      });

      // Fetch updated user data
      const updatedUserDoc = await getDoc(userRef);
      if (updatedUserDoc.exists()) {
        console.log("✅ Updated User Data:", updatedUserDoc.data());
      } else {
        console.warn("⚠️ No such user document found.");
      }

      window.location.reload(); // Redirect after success

    } catch (error) {
      console.error("❌ Error updating language:", error);
      toast.update("loadingToast", {
        render: "❌ Failed to update language. Please try again.",
        type: "error",
        autoClose: 3000,
      });
    } finally {
      setLoading(false);
    }
  };

  // Mock function to simulate fetching questions
  const fetchQuestions = async (language) => {
    console.log(`📥 Fetching ${language} questions...`);
    return new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate delay
  };

  return (
    <div className="col-start-2 px-16 transition-all duration-300 flex flex-col justify-start items-center text-center align-middle gap-8 dark:bg-[#121212] overflow-y-scroll mt-20 sm:mt-0">
      <ToastContainer />
      <div>
        <h1 className="text-3xl">Change Your Language</h1>
      </div>
      <div className="w-full flex flex-col justify-center items-center align-middle gap-8">
        {["German", "Spanish", "Italian", "French"].map((language) => (
          <div
            key={language}
            onClick={() => handleLanguageSelect(language.toLowerCase())}
            className={`py-4 w-full sm:w-[50%] border-2 border-black active:scale-95 shadow-md shadow-[grey] select-none dark:shadow-purple-500 hover:cursor-pointer rounded-full text-2xl flex justify-center items-center align-middle ${
              loading && "opacity-50 pointer-events-none"
            }`}
          >
            {language}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Language;
