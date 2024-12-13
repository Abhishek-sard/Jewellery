import React from "react";

const ContactUs = () => {
  return (
    <div className="contact-us">
      <div className="for-fill-up">
        <h1>Get in Touch</h1>
        <h2>
          Please fill up the form details in order to contact us. Our
          Representative will get back to you.
        </h2>
        <div className="form-row">
          <div className="form-group">
            <h3>Your name</h3>
            <input type="text" placeholder="" name="name" />
          </div>
          <div className="form-group">
            <h3>Your email *</h3>
            <input type="text" placeholder="" name="gmail" />
          </div>
          <div className="form-group">
            <h3>Your Contact</h3>
            <input type="number" placeholder="" name="number" />
          </div>
        </div>
        <div className="form-group">
          <h3>Subject</h3>
          <input type="text" placeholder="" name="" />
        </div>
        <div className="form-group">
          <h3>Your message (optional)</h3>
          <textarea placeholder="" name="message" />
        </div>
        <button>Send</button>
      </div>
    </div>
  );
};

export default ContactUs;
