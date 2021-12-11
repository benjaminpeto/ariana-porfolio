import React from "react";
/* import { Routes, Route, Link } from "react-router-dom"; */

import Navigation from "./Components/Navigation/Navigation.components";

import HomePage from "./Pages/HomePage/Home.pages";

import './App.scss';

function App() {
  return (
    <div className="App">
      <Navigation />
      <HomePage />
    </div>
  );
}

export default App;