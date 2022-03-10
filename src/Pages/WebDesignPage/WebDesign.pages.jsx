import React from "react";
import { useNavigate } from "react-router-dom";

import uxui from "../../assets/uxui.webp";
import responsive from '../../assets/responsiveness.webp';
import webdesign from '../../assets/webdesign.webp';

const WebDesign = (props) => {
	const history = useNavigate();

  function goBackToPortfolio(e) {
    e.preventDefault();
    history('/portfolio');
  };

	return (
		<div className="topic-page-container">
			<div>
				<h1>My Portfolio</h1>
				<h3>UX|UI</h3>
				<p>My first UX/UI project is my portfolio, where I've taken the opportunity to showcase my individual skills and personality as a creative, besides a list of my work. 
				I enjoy following and incorporating current trends such as the person split screen — one screen divided into two —  into my homepage design. 
				My aim was to present a piece of who I am and where I am from by framing images into arches and using an earthy colour palette to represent the aesthtic feel of my homeland the Canary islands. My portfolio itself is ultra-minimalistic, with a lot of spacing and simple color schemes. I feel this creates a good visual hierarchy, and makes it possible to understand what's important at a glance.</p>
				<img alt="" src={responsive} className="responsive" />
				<img alt="" src={webdesign} className="responsive" />
				<img alt="" src={uxui} className="responsive" />
			</div>
			<button
        className='goBack-btn'
        onClick={goBackToPortfolio}
      >
        Back to Portfolio
      </button>
		</div>
	);
};

export default WebDesign;
