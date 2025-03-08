import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext("light");

export const ThemeProvider = ({ children }) => {
  const [darkmode, setDarkmode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (darkmode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkmode]);
  return (
    <ThemeContext.Provider value={{ darkmode, setDarkmode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useDarkmode = () => useContext(ThemeContext);