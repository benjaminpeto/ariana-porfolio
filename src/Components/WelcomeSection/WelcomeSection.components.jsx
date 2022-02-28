import React, { useState, useEffect } from "react";

import PageLoadingAnimation from "../PageLoadingAnimation/PageLoadingAnimation.components";

import './WelcomeSection.styles.scss';

const WelcomeSection = (props) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setVisible(false);
    }, 4000);
  }, [props]);

  return (
    <>
      <div className='main-wrapper'>
      {
        visible && <PageLoadingAnimation />
      }
        <h1>Ariana Scalzo</h1>
      </div>
    </>
  );
}

export default WelcomeSection;