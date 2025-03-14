import React, { useState, useEffect } from "react";
import { auth, app, db } from "../Login/Firebase";
import { getDoc, doc } from "firebase/firestore";
import { Link } from "react-router-dom";
import { setDoc } from "firebase/firestore";
// import { toast } from "react-toastify";

const Greetings_4 = () => {
  const [userDetails, setUserDetails] = useState(null);
  const [selectedReferral, setSelectedReferral] = useState(null);
  const referrals = ["Social Media (Facebook, IG, X)", "Online Search", "Friends or family"];

  const fetchUserData = async () => {
    auth.onAuthStateChanged(async (user) => {
      console.log(user);
      const docRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setUserDetails(docSnap.data());
        console.log(docSnap.data());
      } else {
        // toast.success("User is not signed in", {position: "top-center"});
        // toast.error("User data not found", { position: "top-center" });
        console.log("user not signed in");
      }
    });
  };
  useEffect(() => {
    fetchUserData();
  }, []);

  const handleSelect = async (referral) => {
    setSelectedReferral(referral);
    const user = auth.currentUser;

    if (user) {
      const userRef = doc(db, "UserResponses", user.uid);
      await setDoc(userRef, { userReferral: referral }, { merge: true });
      console.log("Response saved:", referral);
    } else {
      console.log("User not signed in");
    }
  };

  return (
    <div className="p-3 dark:bg-[#121212] h-screen flex flex-col justify-center items-center align-middle">
      {userDetails ? (
        <div>
          <div className="flex justify-center items-center mt-4 flex-col w-full">
            <h1 className="mt-10 text-center text-[40px] font-bold tracking-tight text-[#6C3BAA]">
              Welcome {userDetails.username}
            </h1>
            <h3 className="w-[300px] md:w-full text-center text-[15px] font-bold tracking-tight text-black dark:text-white">
              Please answer the following questions to help us serve you better
            </h3>
          </div>
          <div className="flex justify-center items-center mt-4 flex-col w-full">
            {/* replace language withe fetch from DB */}
            <p className="mt-8 w-[350px] md:w-full text-left text-[15px] md:text-[25px] font-bold tracking-tight text-black dark:text-white">
              How did you hear about Lexi?
            </p>
            {referrals.map((referral) => (
              <button
                key={referral}
                onClick={() => handleSelect(referral)}
                className="mt-4 flex w-[300px] md:w-[500px] justify-left rounded-md px-3 py-4 text-lg/6 md:text-xl/6 font-semibold text-white shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                style={{
                  backgroundColor: selectedReferral === referral ? "black" : "white",
                  color: selectedReferral === referral ? "white" : "black",
                  border: selectedReferral === referral ? "none" : "2px solid black",
                }}
              >
                {referral}
              </button>
            ))}
          </div>
          <Link to="/dashboard" className="mt-10 ml-[180px] md:ml-[380px] flex w-[150px] justify-center rounded-md bg-[#6C3BAA] px-3 py-2.5 text-sm/6 font-semibold text-white shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            Next
          </Link>
        </div>
      ) : (
        <h1>Loading user data...</h1>
      )}
    </div>
  );
};

export default Greetings_4;
