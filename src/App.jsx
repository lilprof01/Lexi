import { useState } from "react";
import "./App.css";
import Landing from "./Pages/Landing";
import Darkmodetoggler from "./Components/Darkmodetoggler";
import { ThemeProvider } from "./Context/Themecontext";

function App() {
  return (
    <>
      <ThemeProvider>
        <Landing />

        <Darkmodetoggler />
      </ThemeProvider>
    </>
  );
}

export default App;
