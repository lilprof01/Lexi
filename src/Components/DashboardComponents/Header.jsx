import React, { useState, useEffect } from 'react'
import { collection, query, where, orderBy, limit, getDocs } from "firebase/firestore";
import { auth, db } from "../../Authentication/Login/Firebase";


const Header = ({ openNav, setOpenNav}) => {
  const [highestScore, setHighestScore] = useState(null);

  useEffect(() => {
    const fetchHighestScore = async () => {
      if (!auth.currentUser) {
        console.error("No authenticated user!");
        return;
      }

      try {
        const userId = auth.currentUser.uid;
        const scoresRef = collection(db, "userScores");

        // Query the highest score for the current user
        const q = query(
          scoresRef,
          where("userId", "==", userId),    // Filter by current user's ID
          orderBy("score", "desc"),        // Sort by score in descending order
          limit(1)                          // Get the top score
        );

        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
          const topScoreDoc = querySnapshot.docs[0].data();
          setHighestScore(topScoreDoc.score);
        } else {
          setHighestScore(0); // Default if no scores found
        }
      } catch (error) {
        console.error("Error fetching highest score:", error);
      }
    };

    fetchHighestScore();
  }, []);

  const handleOpenNav = () => {
    setOpenNav(!openNav);
  };

  return (
    <header className='p-6 bg-[#6c3baa] col-start-2 transition-all duration-300 flex justify-between sm:justify-end items-center align-middle'>
      <div
        onClick={handleOpenNav}
        className={`hamburger h-10 w-10 flex flex-col justify-center items-end align-middle z-[100] hover:cursor-pointer sm:hidden`}
      >
        <div
          className={`h-1 w-12 bg-[#121212] dark:bg-[#f6f4ef] burger-1`}
        ></div>
        <div
          className={`h-1 w-8 bg-[#121212] dark:bg-[#f6f4ef]`}
        ></div>
        <div
          className={`h-1 w-6 bg-[#121212] dark:bg-[#f6f4ef] burger-2`}
        ></div>
      </div>

      <p className='text-lg text-white'>Highest Score: {highestScore !== null ? highestScore : "Loading..."}</p>
    </header>
  )
}

export default Header