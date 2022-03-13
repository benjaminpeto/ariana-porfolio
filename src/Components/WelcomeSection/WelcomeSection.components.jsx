import React from "react";
import { motion } from "framer-motion";
import { isIOS } from 'react-device-detect';

import useWillAnimate from "../../Hooks/useWillAnimate";

import PageLoadingAnimation from "../PageLoadingAnimation/PageLoadingAnimation.components";

import './WelcomeSection.styles.scss';

const WelcomeSection = (props) => {
  const shouldAnimate = useWillAnimate();

  const  headerVariants = {
    hidden: {
      scale: 0,
      opacity: 0
    },
    visible: {
      scale: 1,
      opacity:1,
      transition: {
      duration: 2,
      delay: 3.3
      }
    }
  };

  return (
    <>
      {
        shouldAnimate && <PageLoadingAnimation />
      }
      <div className={ isIOS ? 'main-wrapper-forIOS' : 'main-wrapper'}>
        <motion.h1 
          variants={headerVariants}
          initial="hidden"
          animate="visible">
          Ariana Scalzo
        </motion.h1>
      </div>
    </>
  );
}

export default WelcomeSection;