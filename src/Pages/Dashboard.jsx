import React, { useState, useEffect } from "react";
import { auth } from "../Authentication/Login/Firebase";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [isVerified, setIsVerified] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
        if (user.emailVerified) {
          setIsVerified(true);
        } else {
          toast.error("Please verify your email before proceeding.", {
            position: "top-center",
          });
          navigate("/verifyemail"); // Redirect to a verification page
        }
      } else {
        navigate("/login"); // Redirect if no user is signed in
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  return (
    <div>
      {isVerified ? (
        <>
          <h1>Welcome {user.displayName || "User"}</h1>
          <h3>
            Please answer the following questions to help us serve you better
          </h3>
        </>
      ) : (
        <h1>Verifying email...</h1>
      )}
    </div>
  );
};

export default Dashboard;
