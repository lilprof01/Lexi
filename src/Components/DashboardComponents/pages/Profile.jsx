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
    return <div>Loading...</div>;
  }

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold">Profile</h1>
      {userData ? (
        <div className="mt-5 text-xl">
          <div className={`${userData.gender === 'male' ? 'bg-[url(/maleavatar.webp)]' : 'bg-[url(/maleavatar.webp)]'} h-16 w-16 bg-center bg-cover rounded-full mb-4`}></div>
          <p><strong>First Name:</strong> {userData.firstName || "N/A"}</p>
          <p><strong>Last Name:</strong> {userData.lastName || "N/A"}</p>
          <p><strong>Email:</strong> {userData.email || "N/A"}</p>
          <p><strong>Username:</strong> {userData.username || "N/A"}</p>
          <p><strong>Phone Number:</strong> {userData.phone || "N/A"}</p>
          <p><strong>Age:</strong> {userData.age || "N/A"}</p>
          <p><strong>Gender:</strong> {userData.gender || "N/A"}</p>
          <p><strong>Language:</strong> {userData.language || "N/A"}</p>
        </div>
      ) : (
        <p>No user data found.</p>
      )}
    </div>
  );
};

export default Profile;