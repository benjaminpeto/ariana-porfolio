import React from "react";

import logo from '../../assets/AS LOGO.webp';

import { RiLinkedinLine } from "react-icons/ri"
import { FaInstagram } from "react-icons/fa";

import "./Modal.styles.scss";

function Modal({ setOpenModal }) {
	return (
		<div className="modal">

			<div className="close-btn">
				<button
					onClick={() => {
						setOpenModal(false);
					}}
				>
					x
				</button>
			</div>

      <div className="body-wrapper">

        <div className="logo">
          <img src={logo} alt="logo of ariana" width="90px" />
        </div>

        <div className="title">
          <h1>Thanks for getting in touch!</h1>
        </div>

        <div className="body">
          <p>
            Your message has been successfully submitted and <br/> I will get back to
            you shortly
          </p>
        </div>

        <div className="social-container">
          <a href='https://www.instagram.com/arianascalzodesign/' target='_blank' rel='noreferrer'>
            <FaInstagram color="#87614E" size={30} />
					</a>
          <a href='https://www.linkedin.com/in/ariana-carmen-scalzo-dees/' target='_blank' rel='noreferrer'>
            <RiLinkedinLine color="#87614E" size={30} />
					</a>
        </div>
      
      </div>

		</div>
	);
}

export default Modal;
