import React, { useState } from "react";
import "./Home.css";
import profile from "../../assets/dp.jpg";
import resume from "../../assets/RRishabhSS.pdf";
import Contact from "../Contact/Contact";

const Home = () => {
  const [showContact, setShowContact] = useState(false);

  if (showContact) {
    return <Contact />;
  }

  return (
    <div className="home-page">
      <div className="home-page-left">
        <h3>Hello, I'm</h3>
        <h1>Rishabh Singh Satya</h1>
        <p>
          <span>Frontend Developer</span>
        </p>
        {/* <h2>About Me</h2>
        <p>
          I am a passionate frontend developer with experience in building
          responsive and interactive web applications using React, HTML, CSS,
          and JavaScript.
        </p> */}
        <div className="btn-list">
          <a href={resume} download="Rishabh-1-YOE">
            <button>Download CV</button>
          </a>
          <button onClick={() => setShowContact(true)}>Contact info</button>
        </div>
        <div className="social-links">
          {/* Add your social media links here */}
        </div>
      </div>
      <div className="home-page-right">
        <img src={profile} alt="Rishabh Singh Satya" />
      </div>
    </div>
  );
};

export default Home;
