import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import uxui from "../../assets/uxui.webp";
import responsive from '../../assets/responsiveness.webp';
import webdesign from '../../assets/webdesign.webp';

const headerVariants = {
  hidden: {
    opacity: 0,
    scale: 1.2
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1,
      delay: 0.2,
    }
  }
};
const subHeaderVariants = {
  hidden: {
    opacity: 0,
    scale: 1.2
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1,
      delay: 0.5,
    }
  }
};
const paragraphVariants = {
  hidden: {
    opacity: 0,
    scale: 1.2
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.9,
      delay: 0.65,
    }
  }
};

const WebDesign = (props) => {
	const history = useNavigate();

	let imgVariants = {};
  const isMobile = window.innerWidth < 900; // disable animation on viewport less than 900, regarding to a bug
  if (!isMobile) {
    imgVariants = {
      hiddenLeft: {
        opacity: 0,
        x: '-100vh'
      },
      hiddenRight: {
        opacity: 0,
        x: '100vh'
      },
      visible: {
        opacity: 1,
        x: 0,
        transition: {
          delay: 0.8,
          duration: 1
        }
      }
    };
  };

  function goBackToPortfolio(e) {
    e.preventDefault();
    history('/portfolio');
  };

	return (
		<div className="topic-page-container">
			<div>
				<motion.h1
					variants={headerVariants}
					initial='hidden'
					animate='visible'>
						My Portfolio
				</motion.h1>
				<motion.h3
					variants={subHeaderVariants}
					initial='hidden'
					animate='visible'>
						UX|UI
				</motion.h3>
				<motion.p
					variants={paragraphVariants}
					initial='hidden'
					animate='visible'>
						My first UX/UI project is my portfolio, where I've taken the opportunity to showcase my individual skills and personality as a creative, besides a list of my work. 
				I enjoy following and incorporating current trends such as the person split screen — one screen divided into two —  into my homepage design. 
				My aim was to present a piece of who I am and where I am from by framing images into arches and using an earthy colour palette to represent the aesthtic feel of my homeland the Canary islands. My portfolio itself is ultra-minimalistic, with a lot of spacing and simple color schemes. I feel this creates a good visual hierarchy, and makes it possible to understand what's important at a glance.
				</motion.p>
				<motion.img alt="" src={responsive} className="responsive" variants={imgVariants} initial='hiddenLeft' whileInView='visible' />
				<motion.img alt="" src={webdesign} className="responsive" variants={imgVariants} initial='hiddenRight' whileInView='visible' />
				<motion.img alt="" src={uxui} className="responsive" variants={imgVariants} initial='hiddenLeft' whileInView='visible' />
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
