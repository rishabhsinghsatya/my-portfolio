// src/Contact.js
import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-page">
      <h1>Contact Me</h1>
      <p>I'd love to hear from you! Here's how you can reach me:</p>

      <div className="contact-info">
        <div className="contact-item">
          <h2>Email</h2>
          <p><a href="mailto:your-email@example.com">your-email@example.com</a></p>
        </div>

        <div className="contact-item">
          <h2>Phone</h2>
          <p><a href="tel:+1234567890">+1234567890</a></p>
        </div>

        <div className="contact-item">
          <h2>LinkedIn</h2>
          <p><a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">linkedin.com/in/yourprofile</a></p>
        </div>

        <div className="contact-item">
          <h2>GitHub</h2>
          <p><a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">github.com/yourusername</a></p>
        </div>

        <div className="contact-item">
          <h2>Twitter</h2>
          <p><a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">@yourusername</a></p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
