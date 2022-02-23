import React from "react";

import PageLoadingAnimation from "../PageLoadingAnimation/PageLoadingAnimation.components";

import './WelcomeSection.styles.scss';

function WelcomeSection() {
  return (
    <>
      <div className='main-wrapper'>
        <PageLoadingAnimation />
        <h1>Ariana Scalzo</h1>
      </div>
    </>
  );
}

export default WelcomeSection;