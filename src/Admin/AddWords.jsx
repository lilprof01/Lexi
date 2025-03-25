import { useState } from "react";
import { db } from "../Authentication/Login/Firebase";
import { collection, addDoc } from "firebase/firestore";
import { toast, ToastContainer } from "react-toastify";

const languageOptions = ["german", "spanish", "italian"];
const difficultyOptions = ["beginner", "intermediate", "advanced"];

export default function AddWords() {
  const [language, setLanguage] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [word, setWord] = useState("");
  const [correctTranslation, setCorrectTranslation] = useState("");
  const [incorrectOptions, setIncorrectOptions] = useState(["", "", ""]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!word || !correctTranslation || incorrectOptions.some((opt) => !opt)) {
      toast.error("Please fill in all fields");
      return;
    }

    try {
      const docRef = await addDoc(
        collection(db, `lexi/${language}/${difficulty}`),
        {
          word,
          correctTranslation,
          incorrectOptions,
          timestamp: new Date(),
        }
      );
      toast.success("Word added successfully!");
      setWord("");
      setCorrectTranslation("");
      setIncorrectOptions(["", "", ""]);
      setDifficulty("");
      setLanguage("");
    //   window.location.href="/addwords"
    } catch (error) {
      console.error("Error adding document: ", error);
      toast.error("Error adding word. Try again.");
    }
  };

  return (
    <div className="p-3 dark:bg-[#121212] h-screen flex flex-col justify-center items-center align-middle">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-[#6C3BAA]">
          Add New Word
        </h2>
      </div>
      <ToastContainer position="top-center" autoClose={3000} />

      <div className="mt-10 sm:mx-auto sm:w-full px-[50px] md:px-0 sm:max-w-sm">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="mt-2 flex justify-center items-center gap-7">
            <select
              id="language"
              required
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="block w-[180px] rounded-md bg-white px-3 py-1.5 mt-2 text-base text-gray-900 outline-1 outline-gray-300 focus:outline-2 focus:outline-indigo-600 sm:text-sm"
            >
              <option value="" disabled>
                Choose language
              </option>
              {languageOptions.map((lang) => (
                <option key={lang} value={lang}>
                  {lang}
                </option>
              ))}
            </select>
            <select
              className="block w-[180px] rounded-md bg-white px-3 py-1.5 mt-2 text-base text-gray-900 outline-1 outline-gray-300 focus:outline-2 focus:outline-indigo-600 sm:text-sm"
              value={difficulty}
              onChange={(e) => setDifficulty(e.target.value)}
            >
              <option value="" disabled>
                Choose Level
              </option>
              {difficultyOptions.map((level) => (
                <option key={level} value={level}>
                  {level}
                </option>
              ))}
            </select>
          </div>
          <input
            type="text"
            id="word"
            value={word}
            onChange={(e) => setWord(e.target.value)}
            required
            placeholder="Enter word/sentence"
            className="block w-full rounded-md bg-white mt-2 px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
          />

          <input
            type="text"
            id="correctword"
            value={correctTranslation}
            onChange={(e) => setCorrectTranslation(e.target.value)}
            required
            placeholder="Enter Correct Translation"
            className="block w-full rounded-md bg-white mt-2 px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
          />

          {incorrectOptions.map((opt, idx) => (
            <input
              type="text"
              value={opt}
              placeholder={`Incorrect Option ${idx + 1}`}
              className="block w-full rounded-md bg-white mt-2 px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              onChange={(e) => {
                const newOptions = [...incorrectOptions];
                newOptions[idx] = e.target.value;
                setIncorrectOptions(newOptions);
              }}
            />
          ))}
          <button
            type="submit"
            className="flex w-full justify-center rounded-md bg-[#6C3BAA] px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:cursor-pointer hover:opacity-85 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Add Word
          </button>
        </form>
      </div>
    </div>
  );
}
