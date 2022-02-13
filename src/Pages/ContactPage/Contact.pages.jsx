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

    console.log('email---->', email);
    
    if (!name || !email || !message) {
      alert('You must fill out every field!');
    }
    else if (!isEmail(email)) {
      alert("Email needs to be a valid address.");
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
          <input type="text" name="user_name" placeholder="Name" onChange={onNameChange} />
          <label>Email</label>
          <input type="email" name="user_email" placeholder="Email" onChange={onEmailChange} />
        </div>

        <div className='message-div'>
          <label>Message</label>
          <textarea name="message" placeholder="Write your message..." onChange={onMessageChange} />
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