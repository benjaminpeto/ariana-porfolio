import React from "react";
import { Routes, Route } from "react-router-dom";

import { FullLayout, PortfolioLayout } from "./Components/OutletWrapper/OutletWrapper.components";

import HomePage from "./Pages/HomePage/Home.pages";
import Portfolio from "./Pages/PortfolioPage/Portfolio.pages";
import Contact from "./Pages/ContactPage/Contact.pages";
import CategoryPage from "./Pages/CategoryPage/CategoryPage.pages";

import './App.scss';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/*" element={<FullLayout />}>
          <Route index element={<HomePage />} />
          <Route path="contact" element={<Contact />} />
        </Route>
        <Route path="/portfolio" element={<PortfolioLayout />}>
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/portfolio" element={<FullLayout />}>
            <Route path="/portfolio/ux-ui" element={<CategoryPage />} />
            <Route path="/portfolio/branding" element={<CategoryPage />} />
            <Route path="/portfolio/illustrations" element={<CategoryPage />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;