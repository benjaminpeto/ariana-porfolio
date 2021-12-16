import React from "react";

import { Link } from "react-router-dom";

import SlideShow from "../../Components/SlideShow/SlideShow.components";

import './Portfolio.styles.scss';

function PortfolioPage() {
  return (
    <div className="portfolio-page">
      <div className="link-wrapper">
        <div className="links">
          <p>01</p>
          <Link to="/portfolio/ux-ui">
            UX | UI
          </Link>
        </div>
        <div className="links">
          <p>02</p>
          <Link to="/portfolio/branding">
            BRANDING
          </Link>
        </div>
        <div className="links">
          <p>03</p>
          <Link to="/portfolio/illustrations">
            ILLUSTRATIONS
          </Link>
        </div>
      </div>

      <div className="carousel">
        <SlideShow />
      </div>
    </div>
  );
}

export default PortfolioPage;