import { useState, useEffect } from "react";
import { collection, query, orderBy, limit, getDocs } from "firebase/firestore";
import { db } from "../Authentication/Login/Firebase";


const Leaderboard = () => {
  const [leaderboard, setLeaderboard] = useState([]);

  useEffect(() => {
    const fetchLeaderboard = async () => {
      try {
        const scoresRef = collection(db, "userScores");

        // Query top 10 highest scores across all users
        const q = query(scoresRef, orderBy("score", "desc"), limit(20));

        const querySnapshot = await getDocs(q);
        let leaderboardData = [];

        querySnapshot.forEach((doc) => {
          const data = doc.data();
          leaderboardData.push({
            username: data.username || "Anonymous",
            score: data.score,
            language: data.selectedLanguage,
            difficulty: data.selectedDifficulty,
          });
        });

        setLeaderboard(leaderboardData);
      } catch (error) {
        console.error("Error fetching leaderboard data:", error);
      }
    };

    fetchLeaderboard();
  }, []);

  return (
    <div className="sm:px-10 px-5 py-5 flex flex-col justify-start align-middle gap-8 overflow-y-scroll">
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