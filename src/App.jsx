import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "./components/About";
import Contacts from "./components/Contact";
import Projects from "./components/Projects";
import HomePage from "./components/HomePage";
import Nav from "./components/Nav";
import Service from "./components/service";
import { useState } from "react";
import "./App.css";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = (e, targetId) => {
    e.preventDefault();
    const element = document.querySelector(targetId);
    if (element) {
      element.scrollIntoView({ behavoir: "smooth" });
    }
    setMenuOpen(false);
  };

  return (
    <div className="main-background">
      <Nav
        handleScroll={handleScroll}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
      />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <HomePage handleScroll={handleScroll} />
              <About />
              <Service />
              <Projects />
              <Contacts />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
