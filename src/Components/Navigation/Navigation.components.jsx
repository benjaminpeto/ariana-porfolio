import React from "react";

import MenuButton from "../MenuButton/MenuButton.components";

import "./Navigation.styles.scss";

import logo from '../../assets/AS LOGO.webp';

function Navigation() {

	return (
		<nav>
			<MenuButton />

			<img src={logo} alt="Ariana Scalzo's logo" height='39px' />
			
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

		</nav>
	);
}

export default Navigation;
