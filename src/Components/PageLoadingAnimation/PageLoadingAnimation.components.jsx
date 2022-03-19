import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

import maskImg from '../../assets/ari-loading-img.png';

import "./PageLoadingAnimation.styles.scss";

const svgVariants = {
	hidden: {
		y: "-50vh",
	},
	visible: {
		y: 0,
		transition: {
			duration: 1,
		},
	},
	goUp: {
		y: "-43.5vh",
		scale: 0.2,
		opacity: 0.7,
		transition: {
			duration: 1,
		},
	},
};

const PageLoadingAnimation = (props) => {
	const [isShown, setIsShown] = useState(true);

  useEffect(() => {
		setTimeout(() => {
			setIsShown(false);
		}, 3000);
		return () => {
			setIsShown(false);
		}
  }, []);


	return (
		<>
			<AnimatePresence>
				{isShown && (
					<div className="loading-container">
						<motion.div
							className="left-frame"
							initial={{ x: 0 }}
							animate={{ x: "-50vw" }}
							transition={{ duration: 1.5, delay: 2 }}
						></motion.div>

						<div className="mask-wrapper">
							<img className="image-mask" src={maskImg} alt='' />
						</div>

						<motion.svg
							id="Layer_1"
							key="svg-img"
							dataname="Layer 1"
							xmlns="http://www.w3.org/2000/svg"
							width="252.11"
							height="221.58"
							viewBox="0 0 252.11 221.58"
							className="svg-img"
							variants={svgVariants}
							initial="hidden"
							animate="visible"
							exit="goUp">
							<path className="cls-1" d="M178.38,221.58,106.15,92.41l-.73,1.22L126.14,59,163,120.7l16.11-27.64L126.14,0,73.72,92.35l56.69,100.86H62.5L78,221.58Z" transform="translate(-0.08 0)"/>
							<polygon className="cls-2" points="73.47 147.09 57.66 120 0 221.58 31.15 221.58 73.47 147.09"/>
							<polygon className="cls-2" points="179.07 148.18 220.69 221.58 252.11 221.58 194.59 120.3 179.07 148.18"/>
						</motion.svg>

						<motion.div
							className="right-frame"
							initial={{ x: 0 }}
							animate={{ x: "50vw" }}
							transition={{ duration: 1.5, delay: 2 }}
						></motion.div>
					</div>
				)}
			</AnimatePresence>
		</>
	);
};

export default PageLoadingAnimation;
