import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';

import Modal from '../../Components/Modal/Modal.components';

import './Contact.styles.scss';

const Contact = (props) => {
  const form = useRef();

  const [modalOpen, setModalOpen] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ID', 'template_ID', form.current, 'user_ID')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };

  return (
    <section className="contact-wrapper">

      <h1>Let's work together!</h1>

      <form ref={form}
        onSubmit={(e) => {
          sendEmail(e);
          setModalOpen(true);
        }}>

        <div className='name-email'>
          <label>Name</label>
          <input type="text" name="user_name" placeholder="Name" />
          <label>Email</label>
          <input type="email" name="user_email" placeholder="Email" />
        </div>

        <div className='message-div'>
          <label>Message</label>
          <textarea name="message" placeholder="Write your message..." />
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