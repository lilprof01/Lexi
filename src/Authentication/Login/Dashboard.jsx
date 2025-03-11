import React, { useState, useEffect } from 'react'
import { auth, app, db } from "../Login/Firebase";
import { getDoc, doc } from "firebase/firestore";
// import { toast } from "react-toastify";


const Dashboard = () => {

  const [userDetails, setUserDetails] = useState(null);
  const fetchUserData = async () => {
      auth.onAuthStateChanged(async (user) => {
        console.log(user)
        const docRef = doc(db, "users", user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()){
          setUserDetails(docSnap.data());
          console.log(docSnap.data())
        } else {
          // toast.success("User is not signed in", {position: "top-center"});
          // toast.error("User data not found", { position: "top-center" });
          console.log("user not signed in");
        }
      })
    }
    useEffect(() => {
      fetchUserData();
    }, []);

  return (
    <div>
      {userDetails ? 
      (
        <>
        <h1>Welcome {userDetails.username}</h1>
        <h3>Please answer the following questions to help use serve you better</h3>
        </>
      ) : (
      <h1>Loading user data...</h1>
    )}
    </div>
  )
}

export default Dashboard