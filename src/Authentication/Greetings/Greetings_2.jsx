import React, { useState, useEffect } from "react";
import { auth, app, db } from "../Login/Firebase";
import { getDoc, doc } from "firebase/firestore";
import { Link } from "react-router-dom";
import { setDoc } from "firebase/firestore";
// import { toast } from "react-toastify";

const Greetings_2 = () => {
  const [userDetails, setUserDetails] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const times = ["10-30 minutes", "30-60 minutes", "1-2 hours"];

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

  const handleSelect = async (time) => {
    setSelectedTime(time);
    const user = auth.currentUser;

    if (user) {
      const userRef = doc(db, "UserResponses", user.uid);
      await setDoc(userRef, { userTime: time }, { merge: true });
      console.log("Response saved:", time);
    } else {
      console.log("User not signed in");
    }
  };

  return (
    <div>
      {userDetails ? (
        <div>
          <div className="flex justify-center items-center mt-4 flex-col">
            <h1 className="mt-10 text-center text-[40px] font-bold tracking-tight text-[#6C3BAA]">
              Welcome {userDetails.username}
            </h1>
            <h3 className="text-center text-[15px] font-bold tracking-tight text-black">
              Please answer the following questions to help use serve you better
            </h3>
          </div>
          <div className="flex justify-center items-left mt-4 ml-[400px] flex-col">
            {/* replace language withe fetch from DB */}
            <p className="mt-8 text-left text-[25px] font-bold tracking-tight text-black">
              How many minutes per day can you dedicate to Lexi lanuage games?
            </p>
            {times.map((time) => (
              <button
                key={time}
                onClick={() => handleSelect(time)}
                className="mt-4 flex w-[500px] justify-left rounded-md px-3 py-4 text-xl/6 font-semibold text-white shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                style={{
                  backgroundColor: selectedTime === time ? "black" : "red",
                }}
              >
                {time}
              </button>
            ))}
          </div>
          <Link to="/greetings-3" className="mt-10 ml-[900px] flex w-[150px] justify-center rounded-md bg-[#6C3BAA] px-3 py-2.5 text-sm/6 font-semibold text-white shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            Next
          </Link>
        </div>
      ) : (
        <h1>Loading user data...</h1>
      )}
    </div>
  );
};

export default Greetings_2;
