import React from "react";
/* import { Routes, Route, Link } from "react-router-dom"; */

import Navigation from "./Components/Navigation/Navigation.components";
import AboutPage from "./Components/AboutPage/AboutPage.components";

import './App.scss';

function App() {
  return (
    <div className="App">
      <Navigation />
      <AboutPage />
    </div>
  );
}

export default App;