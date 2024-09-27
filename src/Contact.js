import React from 'react';

const Contact = () => {
  return (
    <section id="contact">
      <h1>Lets Connect</h1>
      <p>Get in touch with me through the form below or via email.</p>
      <div className="contact-container">
        <div className="contact-form">
          <form>
            <input type="text" placeholder="Name" className="input-field" />
            <input type="email" placeholder="Email" className="input-field" />
            <textarea placeholder="Message" className="textarea-field"></textarea>
            <button type="submit" className="submit-button">Send</button>
          </form>
        </div>
        <div className="contact-info">
          <h2>Get in touch</h2>
          <p>Email: prabhjeetsingh054@gmail.com</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;