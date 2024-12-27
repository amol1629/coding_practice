import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Home from "./components/Home";
import Navigation from "./components/Navigation";
import Card from "./components/Card";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <header>
        <Navigation />
      </header>
      <main className="flex-grow">
        <Card />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
