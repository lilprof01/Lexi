import React, { useState, useEffect } from "react";
import { auth, db } from "../Authentication/Login/Firebase";
import { collection, getDocs, getDoc, addDoc, doc } from "firebase/firestore";
import { useNavigate, useLocation } from "react-router-dom";
import { MdHome, MdReplay } from "react-icons/md";

export default function PlayGames() {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(10);
  const [gameOver, setGameOver] = useState(false);
  const [username, setUsername] = useState("Anonymous");
  const navigate = useNavigate("");
  const location = useLocation();
  const { selectedLanguage, selectedDifficulty } = location.state || {};

  useEffect(() => {
    const fetchUserData = async (userId) => {
      try {
        const userDoc = await getDoc(doc(db, "users", userId));
        if (userDoc.exists()) {
          const data = userDoc.data();
          console.log("Fetched user document:", data);
          return {
            username: data.username || "Anonymous",
            selectedLanguage: data.language || "German", // Default to German
          };
        } else {
          console.warn(`No user document found for userId: ${userId}`);
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
      return {
        username: "Anonymous",
        selectedLanguage: "German", // Default in case of error
      };
    };

    if (auth.currentUser) {
      fetchUserData(auth.currentUser.uid).then((userData) => {
        setUsername(userData.username);
        // setSelectedLanguage(userData.selectedLanguage);
        console.log("Selected Language:", userData.selectedLanguage);
      });
    }
  }, []);

  // Fetch questions after selectedLanguage is set
  useEffect(() => {
    const fetchQuestions = async () => {
      if (!selectedLanguage) return; // Wait until language is set

      try {
        console.log(
          `Fetching from path: lexi/${selectedLanguage}/${selectedDifficulty}`
        );

        const querySnapshot = await getDocs(
          collection(
            db,
            `lexi/${selectedLanguage.toLowerCase()}/${selectedDifficulty}`
          )
        );

        if (querySnapshot.empty) {
          console.warn("No questions found in Firestore!");
        }

        let words = [];
        querySnapshot.forEach((doc) => {
          const data = doc.data();
          words.push({
            word: data.word,
            correctTranslation: data.correctTranslation,
            options: shuffleOptions([
              data.correctTranslation,
              ...data.incorrectOptions,
            ]),
          });
        });

        setQuestions(shuffleArray(words));
      } catch (error) {
        console.error("Error fetching questions:", error);
      }
    };

    fetchQuestions();
  }, [selectedLanguage, selectedDifficulty]);

  const fetchUsername = async (userId) => {
    try {
      const userDoc = await getDoc(doc(db, "users", userId));
      if (userDoc.exists()) {
        console.log("Fetched user document:", userDoc.data()); // Log the data
        return userDoc.data().username || "Anonymous";
      } else {
        console.warn(`No user document found for userId: ${userId}`);
      }
    } catch (error) {
      console.error("Error fetching username:", error);
    }
    return "Anonymous";
  };

  useEffect(() => {
    if (timeLeft === 0) {
      setGameOver(true);
    }
    if (!gameOver) {
      const timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [timeLeft, gameOver]);

  const handleAnswerClick = (option) => {
    if (option === questions[currentQuestionIndex].correctTranslation) {
      setScore((prev) => prev + 10);
      if (currentQuestionIndex + 1 < questions.length) {
        setCurrentQuestionIndex((prev) => prev + 1);
        setTimeLeft(10);
      } else {
        handleGameOver(); // ✅ Call game over handler properly
      }
    } else {
      handleGameOver(); // ✅ Call game over handler properly
    }
  };

  const handleReplay = () => {
    setQuestions(shuffleArray(questions)); // Reset questions order
    setCurrentQuestionIndex(0);
    setScore(0);
    setTimeLeft(10);
    setGameOver(false);
  };

  const handleBackToHome = () => {
    navigate("/dashboard");
  };

  const settingsPopup = () => {
    return (
      <main className="flex justify-center items-center align-middle h-screen dark:bg-[#121212] dark:text-white">
        <div className="shadow-2xl shadow-purple-600 p-6 h-[60%] sm:w-[60%] flex flex-col justify-center items-center align-middle gap-4 rounded-3xl">
          <div className="flex justify-center items-center align-middle gap-4">
            <button onClick={handleReplay} className="hover:cursor-pointer">
              Replay
            </button>
            <button onClick={handleBackToHome} className="hover:cursor-pointer">
              Quit
            </button>
          </div>
        </div>
      </main>
    );
  };
  if (gameOver) {
    return (
      <main className="flex justify-center items-center align-middle h-screen dark:bg-[#121212] dark:text-white">
        <div className="shadow-2xl shadow-purple-600 p-6 h-[60%] sm:w-[60%] flex flex-col justify-center items-center align-middle gap-4 rounded-3xl">
          <h2 className="text-2xl">Game Over! Your Final Score: {score}</h2>
          <h2>{score < 200 ? 'Is that the best you can do? Replay!!!' : 'Nice try, but you can do better. Try again!'}</h2>
          <div className="flex justify-center items-center align-middle gap-4">
            <button onClick={handleReplay} className="hover:cursor-pointer">
              <MdReplay className="h-10 w-10 text-green-500" />
            </button>
            <button onClick={handleBackToHome} className="hover:cursor-pointer">
              <MdHome className="h-10 w-10 text-purple-500" />
            </button>
          </div>
        </div>
      </main>
    );
  }

  if (questions.length === 0) {
    return (
      <main className="dark:bg-[#121212] dark:text-white h-screen">
        <h2>Loading questions...</h2>
      </main>
    );
  }

  const handleGameOver = async () => {
    setGameOver(true); //

    if (!auth.currentUser) {
      console.error("No authenticated user!");
      return;
    }

    try {
      const userId = auth.currentUser.uid;
      const username = await fetchUsername(userId);

      const scoreData = {
        userId,
        username,
        score,
        selectedLanguage,
        selectedDifficulty,
        timestamp: new Date(),
      };

      await addDoc(collection(db, "userScores"), scoreData);
      console.log("Score saved successfully:", scoreData);
    } catch (error) {
      console.error("Error saving score:", error);
    }
  };

  return (
    <main className="h-screen flex flex-col items-center align-middle justify-start gap-10 dark:bg-[#121212] dark:text-white">
      <div className="top flex justify-between items-center align-middle p-4 w-full">
        <p>
          Time Left:{" "}
          <span className={`${timeLeft <= 5 ? "text-red-500" : ""}`}>
            {timeLeft}s
          </span>
        </p>
        <p>Score: {score}</p>
      </div>

      <div className="body sm:w-[60%] h-full p-10 flex flex-col justify-start items-center align-middle gap-12">
        <h2 className="text-2xl lg:text-6xl text-center">
          What is the meaning of "{questions[currentQuestionIndex].word}"?
        </h2>

        <div className="options grid sm:grid-cols-2 gap-4 w-full">
          {questions[currentQuestionIndex].options.map((option, index) => (
            <div className="">
              <button
                key={index}
                onClick={() => handleAnswerClick(option)}
                className={`py-2 px-4 flex justify-center items-center align-middle border border-[grey] rounded-full w-full h-20 active:scale-95 hover:cursor-pointer ${
                  option === questions[currentQuestionIndex].correctTranslation
                    ? "active:bg-green-500 active:text-white"
                    : "active:bg-red-500 active:text-white"
                }`}
              >
                {option}
              </button>
            </div>
          ))}
        </div>
      </div>
      <button
        onClick={() => settingsPopup}
        className="p-4 bg-[#121212] dark:bg-[#f6f4ef] text-white dark:text-black hover:cursor-pointer hover:scale-105 fixed bottom-1.5 right-1.5 rounded-full shadow-md shadow-black dark:shadow-cyan-50 z-50"
      >
        🌑
      </button>
    </main>
  );
}

const shuffleArray = (array) => array.sort(() => Math.random() - 0.5);
const shuffleOptions = (options) => shuffleArray([...options]);
