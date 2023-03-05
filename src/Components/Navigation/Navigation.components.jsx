import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import MenuButton from "../MenuButton/MenuButton.components";

import "./Navigation.styles.scss";

import logo from '../../assets/AS LOGO.webp';

function Navigation() {
	const [colorChange, setColorchange] = useState(false);
	
	useEffect(() => {
		let isSubscribed = true; // using a flag to determine when to cancel subscription and avoid memory leak, useEffect clean up function
		const changeNavbarColor = () => {
			if (isSubscribed) {
				if(window.scrollY >= 50) {
					setColorchange(true);
				}
				else {
					setColorchange(false);
				}
			};
		}
		window.addEventListener('scroll', changeNavbarColor);
		return () => {  
			isSubscribed = false;
		}
	},[]);

	return (
		<motion.nav className={colorChange ? "navbar colorChange" : "navbar"}>
			<MenuButton />

			<Link to="/">
				<img src={logo} alt="Ariana Scalzo's logo" height="39px" />
			</Link>

			<ul>
				<li>
					<a
						href="https://www.linkedin.com/in/ariana-carmen-scalzo-dees/"
						target="_blank"
						rel="noreferrer noopener"
					>
						IN
					</a>
				</li>
				<li>|</li>
				<li>
					<a
						href="https://www.instagram.com/arianascalzodesign/"
						target="_blank"
						rel="noreferrer noopener"
					>
						IG
					</a>
				</li>
				<li>|</li>
				<li>
					<a
						href="https://www.behance.net/arianascalzo"
						target="_blank"
						rel="noreferrer noopener"
					>
						BĒ
					</a>
				</li>
			</ul>
		</motion.nav>
	);
}

export default Navigation;
