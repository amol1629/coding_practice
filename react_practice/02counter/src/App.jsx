import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Home from "./components/Home";
import ReusableCard from "./components/ReusableCard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainNavigation from "./components/MainNavigation";
import Counter from "./components/Counter";

function App() {
  return (
    <>
      <div>
        <Router>
          <MainNavigation />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/card" element={<ReusableCard />} />
            <Route path="/counter" element={<Counter />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
