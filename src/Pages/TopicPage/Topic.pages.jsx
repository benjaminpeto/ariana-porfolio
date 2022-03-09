import React from 'react';
import { useLocation } from 'react-router-dom';
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
      delay: 0.7,
    }
  }
};
const imgVariants = {
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
    type: 'tween',
    transition: {
      delay: 1.1,
      duration: 1
    }
  }
};

const TopicPage = ({ topicData }, props) => {
  const location = useLocation();

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
                  initial={ idx % 2 === 0 ? 'hiddenLeft' : 'hiddenRight' }
                  whileInView='visible'/>
              ))
            }
          </div>
      )}
    </div>
  );
}

export default TopicPage;

//* INDIVIDUAL PAGES FOR THE DESIGNS */