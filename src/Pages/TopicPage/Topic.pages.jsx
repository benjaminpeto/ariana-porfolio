import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

import './TopicPage.styles.scss';

const headerVariants = {
  hidden: {
    opacity: 0,
    scale: 1.2
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1,
      delay: 0.2,
    }
  }
};
const subHeaderVariants = {
  hidden: {
    opacity: 0,
    scale: 1.2
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1,
      delay: 0.5,
    }
  }
};
const paragraphVariants = {
  hidden: {
    opacity: 0,
    scale: 1.2
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.9,
      delay: 0.65,
    }
  }
};

const TopicPage = ({ topicData }, props) => {
  const location = useLocation();
  const history = useNavigate();

  function goBackToPortfolio(e) {
    e.preventDefault();
    history('/portfolio');
  };

  let imgVariants = {};
  const isMobile = window.innerWidth < 900; // disable animation on viewport less than 900, regarding to a bug
  if (!isMobile) {
    imgVariants = {
      hiddenLeft: {
        opacity: 0,
        x: '-100vh'
      },
      hiddenRight: {
        opacity: 0,
        x: '100vh'
      },
      visible: {
        opacity: 1,
        x: 0,
        transition: {
          delay: 0.8,
          duration: 1
        }
      }
    };
  };

  return (
    <div className='topic-page-container'>
      {
        topicData.filter(match => location.pathname === match.path).map(topic => 
          <div key={topic.id}>
            <motion.h1 variants={headerVariants} initial='hidden' animate='visible'>{topic.title}</motion.h1>
            <motion.h3 variants={subHeaderVariants} initial='hidden' animate='visible'>{topic.subtitle}</motion.h3>
            <motion.p variants={paragraphVariants} initial='hidden' animate='visible'>{topic.description}</motion.p>
            {
              topic.images.map((img, idx) => (
                <motion.img
                  key={idx}
                  alt=''
                  src={img}
                  className='responsive'
                  variants={imgVariants}
                  initial={ (idx % 2 === 0) ? 'hiddenLeft' : 'hiddenRight' }
                  whileInView='visible'
                  loading='lazy' />
              ))
            }
          </div>
      )}
      <button
        className='goBack-btn'
        onClick={goBackToPortfolio}
      >
        Back to Portfolio
      </button>
    </div>
  );
}

export default TopicPage;

//* INDIVIDUAL PAGES FOR THE DESIGNS */