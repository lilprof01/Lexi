import { useState, useEffect } from "react";
import { collection, query, orderBy, limit, getDocs } from "firebase/firestore";
import { db } from "../Authentication/Login/Firebase";


const Leaderboard = () => {
  const [leaderboard, setLeaderboard] = useState([]);

  // function fetches leaderboard for current user
  useEffect(() => {
    const fetchLeaderboard = async () => {
      try {
        const scoresRef = collection(db, "userScores");

        // Fetch all scores ordered by highest first
        const q = query(scoresRef, orderBy("score", "desc"));
        const querySnapshot = await getDocs(q);

        let highestScores = {};

        querySnapshot.forEach((doc) => {
          const data = doc.data();
          const rawUsername = data.username || "Anonymous";
          
          // Normalize username (lowercase & trimmed)
          const normalizedUsername = rawUsername.toLowerCase().trim();

          // Check if user already exists or has a lower score
          if (
            !highestScores[normalizedUsername] || 
            data.score > highestScores[normalizedUsername].score
          ) {
            highestScores[normalizedUsername] = {
              username: rawUsername, // Keep original display name
              score: data.score,
              language: data.selectedLanguage,
              difficulty: data.selectedDifficulty,
            };
          }
        });

        // Convert to array and sort by score in descending order
        const leaderboardData = Object.values(highestScores).sort(
          (a, b) => b.score - a.score
        );

        setLeaderboard(leaderboardData);
      } catch (error) {
        console.error("Error fetching leaderboard data:", error);
      }
    };

    fetchLeaderboard();
  }, []);

  
  return (
    // Leaderboard
    <div className="sm:px-10 px-5 py-5 flex flex-col justify-start align-middle gap-8 overflow-y-scroll mt-20 sm:mt-0">
      <h2 className="text-2xl font-bold">🏆 Leaderboard</h2>
      {leaderboard.length === 0 ? (
        <p>Loading leaderboard...</p>
      ) : (
        <table className="text-left leaderboard">
          <thead className="">
            <tr className="p-10">
              <th>#</th>
              <th>Username</th>
              <th>Score</th>
              <th>Language</th>
              <th>Difficulty</th>
            </tr>
          </thead>
          <tbody>
            {leaderboard.map((user, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{user.username}</td>
                <td>{user.score}</td>
                <td>{user.language}</td>
                <td>{user.difficulty}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Leaderboard