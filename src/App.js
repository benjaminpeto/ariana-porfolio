import React from "react";
import { Routes, Route } from "react-router-dom";

import Navigation from "./Components/Navigation/Navigation.components";
import Footer from "./Components/Footer/Footer.components";

import HomePage from "./Pages/HomePage/Home.pages";
import Portfolio from "./Pages/PortfolioPage/Portfolio.pages";
import Contact from "./Pages/ContactPage/Contact.pages";

import './App.scss';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;