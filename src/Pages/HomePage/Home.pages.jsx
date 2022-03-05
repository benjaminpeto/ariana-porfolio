import React, { useEffect } from "react";

import disableScroll from 'disable-scroll';

import WelcomeSection from "../../Components/WelcomeSection/WelcomeSection.components";
import AboutSection from "../../Components/AboutSection/AboutSection.components";

const HomePage = (props) => {

  // Stop scrolling until PageLoadAnimation finished
  disableScroll.on();
	useEffect(()  => {
		setTimeout(() => {
      disableScroll.off()
    }, 5000);
	});

  return (
    <>
      <WelcomeSection />
      <AboutSection />
    </>
  );
}

export default HomePage;