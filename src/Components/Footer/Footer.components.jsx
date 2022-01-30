import React from "react";

import { Link } from "react-router-dom";

import './Footer.styles.scss';

function Footer() {
  return (
    <div className='footer-wrapper'>
      <Link to="/contact" className="contact-btn">
        Contact
      </Link>
      <div className="footer-text">
        <p>Designed by Ariana Scalzo & Coded by <a className="benji-anchor" href='https://www.benjaminpeto.com/' target='_blank' rel='noreferrer'>Benjamin Peto</a></p><span>|</span><p>Copyrights © 2022 All rights reserved</p>
      </div>
    </div>
  );
}

export default Footer;