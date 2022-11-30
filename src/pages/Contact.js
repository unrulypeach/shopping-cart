import React from 'react';
import casette from '../styles/images/casette-one.jpg';

function Contact() {
  return (
    <div
      className="contact-pic"
      style={{ backgroundImage: `url(${casette})` }}
    >
      <div
        className="bg-overlay"
      >
        <h1> CONTACT US</h1>
        <form>
          <label htmlFor="contact-name">
            <input
              type="text"
              id="contact-name"
              placeholder="NAME"
            />
          </label>
          <label htmlFor="contact-email">
            <input
              type="text"
              id="contact-email"
              placeholder="EMAIL"
            />
          </label>
          <label htmlFor="contact-content">
            <textarea
              id="contact-content"
              placeholder="Write to us!"
            />
          </label>
          <button
            type="submit"
          >
            SUBMIT
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
