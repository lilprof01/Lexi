import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Authentication/Login/Login";
import Signup from "./Authentication/Signup/Signup";
import "./App.css";
import Landing from "./Pages/Landing";
import Darkmodetoggler from "./Components/Darkmodetoggler";
import { ThemeProvider } from "./Context/Themecontext";
import Dashboard from "./Authentication/Login/Dashboard";

function App() {
  return (
    <>
      <Router>
        <ThemeProvider>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
          <Darkmodetoggler />
        </ThemeProvider>
      </Router>
    </>
  );
}

export default App;
