import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

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
		y: "-39vh",
		scale: 0.2,
		opacity: 0.7,
		transition: {
			duration: 1,
		},
	},
};

const pathVariants = {
	hidden: {
		opacity: 0,
		pathLength: 0,
	},
	visible: {
		opacity: 1,
		pathLength: 1,
		transition: {
			duration: 1.5,
			ease: "easeInOut",
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

						<div className="mask-wrapper"></div>

						<motion.svg
							key="svg-img"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 252.27 221.58"
							width="252.27"
							height="221.58"
							className="svg-img"
							variants={svgVariants}
							initial="hidden"
							animate="visible"
							exit="goUp">
							<g id="Layer_4" dataname="Layer 4">
								<motion.path className="cls-1" d="M178.93,221.17,107.19,92.9l-.72,1.21L127,59.71,163.68,121l16-27.45L127,1.13,75,92.84,131.29,193H63.85l15.43,28.18Z" transform="translate(0.03 -0.12)" variants={pathVariants} />
								<motion.path className="cls-2" d="M179.78,221.67H79L63,192.49h67.43l-56-99.66L127,.12l53.22,93.42L163.68,122,127,60.68,107.77,92.91Zm-100.21-1h98.51L107.18,93.9l-.28.47-.86-.51,0,0,21-35.09L163.67,120,179.1,93.54,127,2.14,75.56,92.84,132.14,193.5H64.69Z" transform="translate(0.03 -0.12)" variants={pathVariants} />
							</g>
							<g id="Layer_2" dataname="Layer 2">
								<motion.polygon className="cls-3" points="73.82 147.1 58.12 120.2 0.86 221.08 31.79 221.08 73.82 147.1" variants={pathVariants} />
								<motion.path d="M32.05,221.69H0L58.08,119.32l16.28,27.89-.14.25Zm-30.37-1H31.47l41.74-73.47-15.12-25.9Z" transform="translate(0.03 -0.12)" variants={pathVariants} />
							</g>
							<g id="Layer_3" dataname="Layer 3">
								<motion.polygon className="cls-3" points="178.88 148.17 220.21 221.06 251.41 221.06 194.29 120.49 178.88 148.17" variants={pathVariants} />
								<motion.path  className="cls-4" d="M252.24,221.68H219.89l-41.62-73.39,16-28.7.43.77Zm-31.77-1h30.05l-56.26-99.05-14.84,26.66Z" transform="translate(0.03 -0.12)" variants={pathVariants} />
							</g>
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
