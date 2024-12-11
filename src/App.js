import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Menu from "./components/Menu";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import { useFeatureFlagEnabled } from "posthog-js/react";
import "./App.css";

const App = () => {
  const flagEnabled = useFeatureFlagEnabled("router-menu");

  return (
    <Router>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        {flagEnabled ? (
          <Route path="/about" element={<About />} />
        ) : (
          <Route path="/contact" element={<Contact />} />
        )}
      </Routes>
    </Router>
  );
};

export default App;
