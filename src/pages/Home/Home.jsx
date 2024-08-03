import React from "react";
import "./Home.css";
import profile from "../../assets/dp.jpg";

const Home = () => {
  return (
    <div className="home-page">
      <div className="home-page-left">
        <h3>Hello i'm</h3>
        <h1>Rishabh Singh Satya</h1>
        <p>
          <span>Frontend Developer</span>
        </p>
        {/* <h2>About Me</h2> */}
        {/* <p>
          I am a passionate frontend developer with experience in building
          responsive and interactive web applications using React, HTML, CSS,
          and JavaScript.
        </p> */}
        <div className="btn-list">
          <button>Download CV</button>
          <button>Contact info</button>
        </div>
      </div>
      <div className="home-page-right">
        <img src={profile} alt="" />
      </div>
    </div>
  );
};

export default Home;
