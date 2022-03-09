import React, { useEffect } from "react";

import { Link } from "react-router-dom";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import resume from '../../data/ariana_scalzo_cv.pdf';

import { BsDownload } from 'react-icons/bs';

import cocomoon from '../../assets/coco moon facial niht oils.webp';
import notebook from '../../assets/notebook_.webp';
import drowning from '../../assets/drowning.webp';
import perucoffee from '../../assets/Peru coffee.webp';

import './AboutSection.styles.scss';

function AboutSection() {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const holaText = "Hola!";

  const sentence = {
    hidden: {
      opacity: 1
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5,
        staggerChildren: 0.08,
      },
    },
  };

  const letter = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  const paragraphVariants = {
    hidden: {
      opacity: 0,
      scale: 0.3
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.3,
        duration: 1.5,
        ease: "easeInOut"
      }
    },
  };

  const buttonVariants = {
    hidden: {
      opacity: 0,
      scale: 0
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: 1,
      }
    },
  };

  const imageContainer = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        delay: 2,
        delayChildren: 0.7,
        staggerChildren: 0.8
      }
    }
  }

  const containerItems = {
    hidden: {
      y: 400
    },
    visible: {
      y: 0,
      transition: {
        duration: 2
      }
    },
}

  return (
    <section className='about-wrapper'>

      <div className="span-container">
        <span>A</span>
        <span>B</span>
        <span>O</span>
        <span>U</span>
        <span>T</span>
      </div>

        <motion.h1
          variants={sentence}
          initial="hidden"
          animate={controls}>
          {
            holaText.split("").map((char, index) => {
              return (
                <motion.span
                  ref={ref}
                  key={char + "-" + index}
                  variants={letter}>
                  {char}
                </motion.span>
              )
            })
          }
        </motion.h1>
        <motion.div
          className="paragraph-wrapper"
          variants={paragraphVariants}
          initial="hidden"
          animate={controls}>
          <div>
            <p>
              I'm Ariana, a UX/UI | graphic designer who is passionate about providing interactive experiences and identities to forward thinking brands and companies worldwide.
              Having gained an architectural design based degree, my career saw a natural progression from merchandising, spacial design, enterprise management to graphic and UX/UI design.
            </p>
            <p className="odd-paragraph">
              For the past nine years, I've worked on various design projects including, package design, outdoor and print advertisements, branding, illustrations and most recently UX/UI design.
            </p>
          </div>

          <div>
            <p>
              Using mostly Adobe Creative Suite alongside Figma, I have implemented successful design solutions for brands such as Eat at Sicily, Baker & Spice, Philpotts, Patisserie Valerie, R2 Hotels and Rubys of London.
            </p>
            <p>
              I have an end-to-end understanding of project development from concept to solution, and from pitch to discussed implementation. I enjoy challenges and working to targets, planning ahead, problem solving and quick thinking. Creatively, I enjoy brainstorming and innovative ideas that exploit target market opportunities using advertising strategies that impact consumer buying trends. 
            </p>
          </div>
        </motion.div>

        <motion.div
          className="button-wrapper"
          variants={buttonVariants}
          initial="hidden"
          animate={controls}>
          <motion.a
            className='resume-btn'
            href={resume}
            download="ariana_scalzo_cv.pdf"
            whileHover={{scale: 1.15}}
            whileTap={{scale:0.4}}>
            <BsDownload className='download-btn' />
            RESUME
          </motion.a>
        </motion.div>

        <Link to='/portfolio'>
          <motion.div
            variants={imageContainer}
            initial="hidden"
            animate={controls}
            className='image-wrapper'
          >
            <div className="portfolio-text">PORTFOLIO</div>
            <div>
              <motion.img src={cocomoon} alt='cocomoon facial oil' width='500px' variants={containerItems} />
            </div>
            <div>
              <motion.img src={notebook} alt='notebook prints' width='500px' variants={containerItems} />
            </div>
            <div>
              <motion.img src={drowning} alt='illustration of a surfer' width='500px' variants={containerItems} />
            </div>
            <div>
              <motion.img src={perucoffee} alt='coffee bag with illustration' width='500px' variants={containerItems} />
            </div>
          </motion.div>
        </Link>

        {/* IMAGE SLIDER ON MOBILE VIEW */}

        <Link to='/portfolio'>
          <div id="img-cf">
            <div className="portfolio-text">PORTFOLIO</div>
            <img src={cocomoon} alt='cocomoon facial oil' width='360px' />
            <img src={notebook} alt='notebook prints' width='360px' />
            <img src={drowning} alt='illustration of a surfer' width='360px' />
            <img src={perucoffee} alt='coffee bag with illustration' width='360px' />
          </div>
        </Link>

    </section>
  );
}

export default AboutSection;