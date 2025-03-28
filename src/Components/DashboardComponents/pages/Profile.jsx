import React, { useEffect, useState } from "react";
import { auth, db } from "../../../Authentication/Login/Firebase";
import { doc, getDoc } from "firebase/firestore";

const Profile = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const user = auth.currentUser; // Get the currently logged-in user
        if (user) {
          const userDocRef = doc(db, "users", user.uid); // Reference to the user's document
          const userDoc = await getDoc(userDocRef); // Fetch the document
          if (userDoc.exists()) {
            setUserData(userDoc.data());
          } else {
            console.error("No such user document!");
          }
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  if (loading) {
    return <div className="flex justify-center items-center h-screen text-2xl">Loading...</div>;
  }

  return (
    <main className="flex justify-center items-center overflow-y-scroll py-10 mt-20 sm:mt-10">
      <div className="shadow-lg dark:shadow-purple-600 rounded-lg p-8 w-full max-w-3xl">
        <div className="flex flex-col items-center">
          <div
            className={`${
              userData?.gender === "male"
                ? "bg-[url('/maleavatar.webp')]"
                : "bg-[url('/femaleavatar.webp')]"
            } h-32 w-32 bg-center bg-cover rounded-full mt-10 sm:mt-0 mb-6`}
          ></div>

          {/* User Name */}
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
            {userData?.firstName || "N/A"} {userData?.lastName || "N/A"}
          </h1>
          <p className="text-gray-500 text-lg">{userData?.email || "N/A"}</p>
        </div>

        {/* User Details */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 sm:max-w-[60%] m-auto gap-6 text-center">
          <div className="">
            <p className="text-gray-600 text-sm">Username</p>
            <p className="text-lg font-semibold text-gray-800 dark:text-white">{userData?.username || "N/A"}</p>
          </div>
          <div className="">
            <p className="text-gray-600 text-sm">Phone Number</p>
            <p className="text-lg font-semibold text-gray-800 dark:text-white">{userData?.phone || "N/A"}</p>
          </div>
          <div className="">
            <p className="text-gray-600 text-sm">Age</p>
            <p className="text-lg font-semibold text-gray-800 dark:text-white">{userData?.age || "N/A"}</p>
          </div>
          <div className="">
            <p className="text-gray-600 text-sm">Gender</p>
            <p className="text-lg font-semibold text-gray-800 dark:text-white">{userData?.gender || "N/A"}</p>
          </div>
          <div className="">
            <p className="text-gray-600 text-sm">Language</p>
            <p className="text-lg font-semibold text-gray-800 dark:text-white">{userData?.language || "N/A"}</p>
          </div>
          <div className="">
            <p className="text-gray-600 text-sm">Joined</p>
            <p className="text-lg font-semibold text-gray-800 dark:text-white">{userData?.joined || "N/A"}</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Profile;