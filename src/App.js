import React from "react";
/* import { Routes, Route, Link } from "react-router-dom"; */

import Navigation from "./Components/Navigation/Navigation.components";
import WelcomeSection from "./Components/WelcomeSection/WelcomeSection.components";
import AboutSection from "./Components/AboutSection/AboutSection.components";

import './App.scss';

function App() {
  return (
    <div className="App">
      <Navigation />
      <WelcomeSection />
      <AboutSection />
    </div>
  );
}

export default App;