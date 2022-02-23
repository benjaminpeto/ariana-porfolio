import React from 'react';
import { motion } from 'framer-motion';

import './PageLoadingAnimation.styles.scss';

const PageLoadingAnimation = () => {

  const svgVariants = {
    hidden: { y: -50 },
    visible: {
      y: 0,
      transition: {
        duration: 1
      }
    }
  }

  const pathVariants = {
    hidden: {
      opacity: 0,
      pathLength: 0
    },
    visible: {
      opacity: 1,
      pathLength: 1,
      transition: {
        duration: 1.5,
        ease: 'easeInOut'
      }
    }
  }

  return (
    <>
      <div className='loading-container'>
        <motion.div
          className='left-frame'
          initial={{ x: 0 }}
          animate={{ x: '-50vw' }}
          transition={{ duration: 2, delay: 2}}>
        </motion.div>

        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          width="398.23"
          height="350"
          viewBox="0 0 1500 1318.34"
          className='svg-img'
          variants={svgVariants}
          initial="hidden"
          animate="visible"
        >
          <g id="Layer_4" dataname="Layer 4">
            <motion.path d="M1060.87,1318.34,631.09,549.84l-4.34,7.25L750,351,969.49,718.13l95.88-164.48L750,0,438.12,549.45l337.31,600.08-404,0,92.43,168.84Z" fill="#ab7d65" stroke="#ab7d65" variants={pathVariants} />
          </g>
          <g id="Layer_2" dataname="Layer 2">
            <motion.path d="M341.65,715.25,0,1318.34Z" fill="#fff" variants={pathVariants}/>
            <motion.polygon points="437.13 875.12 343.07 713.97 0 1318.34 185.32 1318.34 437.13 875.12" stroke='#86614e' fill="#86614e" variants={pathVariants} />
          </g>
          <g id="Layer_3" dataname="Layer 3">
            <motion.polygon points="1065.41 881.64 1313.07 1318.34 1500 1318.34 1157.77 715.78 1065.41 881.64" stroke='#86614e' fill="#86614e" variants={pathVariants} />
          </g>
        </motion.svg>

        <motion.div
          className='right-frame'
          initial={{ x: 0 }}
          animate={{ x: '50vw' }}
          transition={{ duration: 2, delay: 2}}>
        </motion.div>
      </div>
    </>
  )
}

export default PageLoadingAnimation;