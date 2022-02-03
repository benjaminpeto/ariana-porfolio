import React from "react";
import { Link } from "react-router-dom";

import MenuButton from "../../Components/MenuButton/MenuButton.components";
import SlideShow from "../../Components/SlideShow/SlideShow.components";

import logo from '../../assets/AS LOGO.webp';

import './Portfolio.styles.scss';

const PortfolioPage = (props) => {
  return (
    <div className="page-wrapper">
      <nav className="navbar">
        <MenuButton />
        <Link to='/'>
          <img src={logo} alt="Ariana Scalzo's logo" height='39px' />
        </Link>
      </nav>

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

      <footer>
        <Link to="/contact" className="contact-btn">
          Contact
        </Link>

        <ul>
          <li>
            <a href='https://www.linkedin.com/in/ariana-carmen-scalzo-dees/' target='_blank' rel='noreferrer'>
              IN
            </a>
          </li>
				  <li>|</li>
          <li>
            <a href='https://www.instagram.com/arianascalzodesign/' target='_blank' rel='noreferrer'>
              IG
            </a>
          </li>
        </ul>
      </footer>
    
    </div>
  );
}

export default PortfolioPage;