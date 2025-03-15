import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Authentication/Login/Login";
import Signup from "./Authentication/Signup/Signup";
import "./App.css";
import Landing from "./Pages/Landing";
import Darkmodetoggler from "./Components/Darkmodetoggler";
import { ThemeProvider } from "./Context/Themecontext";
import Greetings from "./Authentication/Greetings/Greetings";
import ResetPassword from "./Authentication/Login/ResetPassword";
import Greetings_2 from "./Authentication/Greetings/Greetings_2";
import Greetings_3 from "./Authentication/Greetings/Greetings_3";
import Greetings_4 from "./Authentication/Greetings/Greetings_4";
import Dashboard from "./Pages/Dashboard";
import LanguageSelection from "./Authentication/Signup/LanguageSelection";
import VerifyEmail from "./Authentication/Greetings/VerifyEmail";

function App() {
  return (
    <>
      <Router>
        <ThemeProvider>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/greetings" element={<Greetings />} />
            <Route path="/greetings-2" element={<Greetings_2 />} />
            <Route path="/greetings-3" element={<Greetings_3 />} />
            <Route path="/greetings-4" element={<Greetings_4 />} />
            <Route path="/forgotpassword" element={<ResetPassword />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/languageselection" element={<LanguageSelection />} />
            <Route path="/verifyemail" element={<VerifyEmail />} />
          </Routes>
          <Darkmodetoggler />
        </ThemeProvider>
      </Router>
    </>
  );
}

export default App;
