import { useState, useEffect } from "react";
import { auth, db } from "../Authentication/Login/Firebase";
import { collection, getDocs, getDoc, addDoc, doc } from "firebase/firestore";

export default function PlayGames({ selectedLanguage, selectedDifficulty }) {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(10);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        console.log(
          `Fetching from path: lexi/${selectedLanguage}/${selectedDifficulty}`
        );

        const querySnapshot = await getDocs(
          collection(db, `lexi/${selectedLanguage}/${selectedDifficulty}`)
        );

        if (querySnapshot.empty) {
          console.warn("No questions found in Firestore!");
        }

        let words = [];
        querySnapshot.forEach((doc) => {
          const data = doc.data();
          console.log("Fetched document:", data); // Log each document

          words.push({
            word: data.word,
            correctTranslation: data.correctTranslation,
            options: shuffleOptions([
              data.correctTranslation,
              ...data.incorrectOptions,
            ]),
          });
        });

        console.log("Final questions array:", words);
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
    window.location.href = "/dashboard"; // Replace with your actual dashboard route
  };

  if (gameOver) {
    return (
      <main className="flex justify-center items-center align-middle h-screen">
        <div className="shadow-2xl shadow-purple-600 p-6 h-[60%] sm:w-[60%] flex flex-col justify-center items-center align-middle gap-4 rounded-3xl">
          <h2 className="text-2xl">Game Over! Your Final Score: {score}</h2>
          <div className="flex justify-center items-center align-middle gap-4">
            <button onClick={handleReplay}>Replay</button>
            <button onClick={handleBackToHome}>Home</button>
          </div>
        </div>
      </main>
    );
  }

  if (questions.length === 0) {
    return <h2>Loading questions...</h2>;
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
    <main className="h-screen flex flex-col items-center align-middle justify-start gap-10">
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
                className={`py-2 px-4 flex justify-center items-center align-middle border border-black rounded-full w-full h-20 active:scale-95 hover:cursor-pointer ${
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
    </main>
  );
}

const shuffleArray = (array) => array.sort(() => Math.random() - 0.5);
const shuffleOptions = (options) => shuffleArray([...options]);
