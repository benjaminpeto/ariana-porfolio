import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import isEmail from "validator/lib/isEmail";
import { motion } from 'framer-motion';

import Modal from '../../Components/Modal/Modal.components';

import './Contact.styles.scss';

    const headerText = "Let's work together!";

    const sentence = {
      hidden: {
        opacity: 1
      },
      visible: {
        opacity: 1,
        transition: {
          when: "beforeChildren",
          delay: 1.5,
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

    const formVariants = {
      hidden: {
        opacity: 0,
        scaleY: 0
      },
      visible: {
        opacity: 1,
        scaleY: 1,
        transition: {
          duration: 1.5,
          ease: "easeInOut",
          delayChildren: 1,
        }
      },
    };

    const inputVariants = {
      hidden: {
        opacity: 0
      },
      visible: {
        opacity: 1,
        transition: {
          duration: 0.5,
          delay: 1.5
        }
      }
    }

const Contact = (props) => {
  const form = useRef();

  const [modalOpen, setModalOpen] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [validated, setValidated] = useState(true);

  // ENVIRONMENTAL VARIABLES FOR EMAILJS

  const userId = process.env.REACT_APP_USER_ID;
  const serviceId = process.env.REACT_APP_SERVICE_ID;
  const templateId = process.env.REACT_APP_TEMPLATE_ID;


  const onNameChange = (event) => {
    setName(event.target.value);
  };

  const onEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const onMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const resetInputField = () => {
    setName('');
    setEmail('');
    setMessage('');
  };

  const sendEmail = (e) => {
    e.preventDefault();
    
    if (!name || !email || !message) {
      setValidated(false);
    }
    else if (!isEmail(email)) {
      setValidated(false);
    }
    else {
      emailjs.sendForm(serviceId, templateId, form.current, userId)
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
      resetInputField();
      setValidated(true);
      setModalOpen(true);
      }
    };

  return (
    <section className="contact-wrapper">

    <motion.div
      className='container-bg'
      variants={formVariants}
      initial="hidden"
      animate="visible">
    
      <motion.h1
        variants={sentence}
        initial="hidden"
        animate="visible">
        {
          headerText.split("").map((char, index) => {
            return (
              <motion.span
                key={char + "-" + index}
                variants={letter}>
                {char}
              </motion.span>
            )
          })
        }
      </motion.h1>

        <motion.form
          ref={form}
          onSubmit={(e) => {
            sendEmail(e);
          }}
          noValidate //removing default validation of HTML
          variants={inputVariants}
          initial='hidden'
          animate='visible'
        >

          <div className='name-email'>
            <label>Name</label>
            <input type="text" name="user_name" placeholder="Name" value={name} onChange={onNameChange} className={validated ? '' : 'red-border'} />
            <label>Email</label>
            <input type="email" name="user_email" placeholder="Email" value={email} onChange={onEmailChange} className={validated ? '' : 'red-border'} />
          </div>

          <div className='message-div'>
            <label>Message</label>
            <textarea name="message" placeholder="Write your message..." value={message} onChange={onMessageChange} className={validated ? '' : 'red-border'} />
            {
              !validated &&
              <div className='warning-msg'>
                <svg xmlns="http://www.w3.org/2000/svg" className="warning-svg" fill="none" viewBox="0 0 24 24" stroke="#b30000">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                <p className='warning-paragraph'>Please fill out all the fields and enter a valid email address.</p>
              </div>
            }
            <input type="submit" value="SUBMIT" />
          </div>

        </motion.form>

        <motion.div className='contact-info' variants={formVariants} initial="hidden" animate="visible">
          <a href="mailto:arianascalzodees@gmail.com">arianascalzodees@gmail.com</a>
          <span>|</span>
          <p>Las Palmas, Canary Islands, Spain</p>
        </motion.div>

        {modalOpen && <Modal setOpenModal={setModalOpen} />}
    </motion.div>


    </section>
  );
};

export default Contact;