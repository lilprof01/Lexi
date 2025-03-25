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
      <div>
        <h2>Game Over! Your Final Score: {score}</h2>
        <button onClick={handleReplay}>Replay</button>
        <button onClick={handleBackToHome}>Back to Home</button>
      </div>
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
    <div>
      <h2>What is the meaning of "{questions[currentQuestionIndex].word}"?</h2>
      <p>Time Left: {timeLeft}s</p>
      <p>Score: {score}</p>
      {questions[currentQuestionIndex].options.map((option, index) => (
        <button key={index} onClick={() => handleAnswerClick(option)}>
          {option}
        </button>
      ))}
    </div>
  );
}

const shuffleArray = (array) => array.sort(() => Math.random() - 0.5);
const shuffleOptions = (options) => shuffleArray([...options]);
