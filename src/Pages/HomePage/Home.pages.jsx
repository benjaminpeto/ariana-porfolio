import React from "react";

import WelcomeSection from "../../Components/WelcomeSection/WelcomeSection.components";
import AboutSection from "../../Components/AboutSection/AboutSection.components";
import Footer from "../../Components/Footer/Footer.components";

import './HomePage.styles.scss';

function HomePage() {
  return (
    <div className="homepage-wrapper">
      <WelcomeSection />
      <AboutSection />
      <Footer />
    </div>
  );
}

export default HomePage;