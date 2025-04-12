import React, { useState, useEffect } from "react";
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "../Authentication/Login/Firebase";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Header from "../Components/DashboardComponents/Header";
import Sidebar from "../Components/DashboardComponents/Sidebar";
import Levels from "../Components/DashboardComponents/pages/Levels";
import MobileNav from "../Components/DashboardComponents/MobileNav";
import Leaderboard from "./Leaderboard";
import Display from "../Components/DashboardComponents/pages/Display";
import Language from "../Components/DashboardComponents/pages/Language";
import Logout from "../Components/DashboardComponents/pages/Logout";
import Profile from "../Components/DashboardComponents/pages/Profile";

const Dashboard = () => {
  const [selectedMenu, setSelectedMenu] = useState("home");
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [openNav, setOpenNav] = useState(false);
  const [user, setUser] = useState(null);
  const [isVerified, setIsVerified] = useState(false);
  const navigate = useNavigate();

  const handleSelectedMenu = (menu) => {
    setSelectedMenu(menu);
    setOpenNav(false);
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
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
        try {
          // 🔍 Debugging: Log the auth user before fetching Firestore data
          console.log("Auth user:", user);

          // Fetch additional user data from Firestore
          const userDocRef = doc(db, "users", user.uid);
          const userDocSnap = await getDoc(userDocRef);

          if (userDocSnap.exists()) {
            const userData = userDocSnap.data();
            console.log("Firestore user data:", userData);

            setUser({ uid: user.uid, email: user.email, ...userData });
            setIsVerified(true);
          } else {
            console.warn("User data not found in Firestore!");
            toast.error("User data not found in Firestore.");
            setUser({ uid: user.uid, email: user.email }); // Fallback
          }
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      } else {
        navigate("/login"); // Redirect if no user is signed in
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  return (
    // User dashboard page
    <div>
      {isVerified ? (
        <main
          className={`flex flex-col sm:grid ${
            isCollapsed ? "grid-cols-[80px_1fr]" : "grid-cols-[200px_1fr]"
          } grid-rows-[80px_1fr] h-screen transition-all duration-300 dark:bg-[#121212] dark:text-white`}
        >
          <Sidebar
            isCollapsed={isCollapsed}
            setIsCollapsed={setIsCollapsed}
            handleSelectedMenu={handleSelectedMenu}
            selectedMenu={selectedMenu}
          />
          <Header openNav={openNav} setOpenNav={setOpenNav} />
          {selectedMenu === "home" && <Levels user={user} />}
          {selectedMenu === "leaderboard" && <Leaderboard user={user} />}
          {selectedMenu === "display" && <Display user={user} />}
          {selectedMenu === "language" && <Language user={user} />}
          {selectedMenu === "profile" && <Profile user={user} />}
          {selectedMenu === "logout" && <Logout user={user} />}
          {openNav && (
            <MobileNav
              openNav={openNav}
              handleSelectedMenu={handleSelectedMenu}
              selectedMenu={selectedMenu}
            />
          )}
        </main>
      ) : (
        <main className="h-screen dark:text-white dark:bg-[#121212]">
          <h1>Fetching Dashboard...</h1>
        </main>
      )}
    </div>
  );
};

export default Dashboard;
