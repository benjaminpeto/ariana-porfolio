import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import PageLoadingAnimation from "../PageLoadingAnimation/PageLoadingAnimation.components";

import './WelcomeSection.styles.scss';

const WelcomeSection = (props) => {

  const [willAnimate, setWillAnimate] = useState(true);

  // PageLoadingAnimation loads only on first visit, again on new session
  useEffect(() => {
    if(window.sessionStorage.getItem("firstLoadDone") === null) {
      setWillAnimate(true);
      window.sessionStorage.setItem("firstLoadDone", 1);
    }
    else {
      setWillAnimate(false);
    }
  }, []);
  

  const headerVariants = {
    hidden: {
      scale: 0,
      opacity: 0
    },
    visible: {
      scale: 1,
      opacity:1,
      transition: {
        duration: 2,
        delay: 3
      }
    },
  }

  return (
    <>
      {
        willAnimate && <PageLoadingAnimation />
      }
      <div className='main-wrapper'>
        <motion.h1 
          variants={headerVariants}
          initial="hidden"
          animate="visible">Ariana Scalzo
        </motion.h1>
      </div>
    </>
  );
}

export default WelcomeSection;