import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Home from "./components/Home";
import ReusableCard from "./components/ReusableCard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainNavigation from "./components/MainNavigation";

function App() {
  return (
    <>
      <Router>
        {/* Home is placed outside Routes to render on every page */}
        <MainNavigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/card" element={<ReusableCard />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
