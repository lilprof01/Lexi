import React, { useState, useEffect } from "react";
import { auth } from "../Authentication/Login/Firebase";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Header from "../Components/DashboardComponents/Header";
import Sidebar from "../Components/DashboardComponents/Sidebar";
import Levels from "../Components/DashboardComponents/Levels";

const Dashboard = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
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
        <main className={`sm:grid ${isCollapsed ? 'grid-cols-[80px_1fr]' : 'grid-cols-[200px_1fr]'} grid-rows-[80px_1fr] h-screen transition-all duration-300 dark:bg-[#121212] dark:text-white`}>
          <Sidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
          <Header />
          <Levels user={user} />
        </main>
      ) : (
        <h1>Verifying email...</h1>
      )}
    </div>
  );
};

export default Dashboard;
