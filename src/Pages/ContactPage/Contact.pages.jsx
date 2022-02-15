import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import isEmail from "validator/lib/isEmail";

import Modal from '../../Components/Modal/Modal.components';

import './Contact.styles.scss';

const Contact = (props) => {
  const form = useRef();

  const [modalOpen, setModalOpen] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [validated, setValidated] = useState(true);

  const onNameChange = (event) => {
    setName(event.target.value);
  };

  const onEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const onMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const sendEmail = (e) => {
    e.preventDefault();
    
    if (!name || !email || !message) {
      setValidated(false);
      /* alert('You must fill out every field!'); */
    }
    else if (!isEmail(email)) {
      setValidated(false);
      /* alert("Email needs to be a valid address."); */
    }
    else {
      emailjs.sendForm('service_ID', 'template_ID', form.current, 'user_ID')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
      e.target.reset();
      setModalOpen(true);
      setValidated(true);
      }
    };


  return (
    <section className="contact-wrapper">

      <h1>Let's work together!</h1>

      <form
        ref={form}
        onSubmit={(e) => {
          sendEmail(e);
        }}
        noValidate //removing default validation of HTML
      >

        <div className='name-email'>
          <label>Name</label>
          <input type="text" name="user_name" placeholder="Name" onChange={onNameChange} className={validated ? '' : 'red-border'} />
          <label>Email</label>
          <input type="email" name="user_email" placeholder="Email" onChange={onEmailChange} className={validated ? '' : 'red-border'} />
        </div>

        <div className='message-div'>
          <label>Message</label>
          <textarea name="message" placeholder="Write your message..." onChange={onMessageChange} className={validated ? '' : 'red-border'} />
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

      </form>

      <div className='contact-info'>
        <a href="mailto:arianascalzodees@gmail.com">arianascalzodees@gmail.com</a>
        <span>|</span>
        <p>Las Palmas, Canary Islands, Spain</p>
      </div>

      {modalOpen && <Modal setOpenModal={setModalOpen} />}

    </section>
  );
};

export default Contact;