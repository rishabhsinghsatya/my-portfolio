import React from "react";
import "./Contact.css";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  PhoneIcon,
  SquareM,
} from "lucide-react";

const Contact = () => {
  return (
    <div className="card-container">
      <div className="card">
        <div className="card-content">
          <h1>Rishabh Singh Satya</h1>
          <h2>Frontend Developer</h2>
          <div className="contact-info">
            <p>
              <span className="icon">
                <PhoneIcon />
              </span>{" "}
              +91-7037659803
            </p>
            <p>
              <span className="icon">
                <Mail />
              </span>
              vineetsatya36@gmail.com
            </p>
            <div className="icons-list">
              <a href="https://github.com/rishabhsinghsatya" target="_blank">
                <Github />
              </a>
              <a
                href="https://www.linkedin.com/in/rishabh-singh-satya-675899202/"
                target="_blank"
              >
                <Linkedin />
              </a>
              <a href="https://medium.com/@vineetsatya36" target="_blank">
                <SquareM />
              </a>
            </div>
          </div>
        </div>
        <div className="shape green"></div>
        <div className="shape orange"></div>
        <div className="shape purple"></div>
      </div>
    </div>
  );
};

export default Contact;
