import React from "react";

import { Link } from "react-router-dom";

import './Footer.styles.scss';

function Footer() {
  return (
    <div className='footer-wrapper'>
      <Link to="/contact" className="contact-btn">
        Contact
      </Link>
      <p>Designed by Ariana Scalzo & Coded by <a className="benji-anchor" href='https://www.benjaminpeto.com/' target='_blank' rel='noreferrer'>Benjamin Peto</a> | Copyrights © 2021 All rights reserved</p>
    </div>
  );
}

export default Footer;