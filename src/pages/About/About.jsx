import React from "react";
import "./About.css";
import profile from "../../assets/profile.jpg";

const About = () => {
  return (
    <div className="about-page">
      <div className="about-page-left">
        <img src={profile} alt="" />
      </div>
      <div className="about-page-right">
        <div className="about-cards">
          <Cards
            icon={"🎯"}
            heading={"Experience"}
            subHeading={"2-year"}
            profession={"Frontend Developer"}
          />
          <Cards
            icon={"🎓"}
            heading={"Education"}
            subHeading={"B.tech (Cse)"}
            profession={"DSMNRU, Lucknow"}
          />
        </div>
        <p>
          I am a passionate frontend developer with experience in building
          responsive and interactive web applications using React, HTML, CSS,
          and JavaScript.
        </p>
      </div>
    </div>
  );
};

export default About;

export const Cards = ({ icon, heading, subHeading, profession }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        // width: "12rem",
        border: "1px solid #000",
        borderRadius: "12px",
        lineHeight: "1px",
        padding: "4px 44px",
      }}
    >
      <p style={{ fontSize: "22px" }}>{icon}</p>
      <h3 style={{ margin: "5px", fontSize: "1rem" }}>{heading}</h3>
      <h4 style={{ margin: "10px", fontSize: "0.8rem" }}>{subHeading}</h4>
      <p style={{ margin: "10px", fontSize: "1rem" }}>{profession}</p>
    </div>
  );
};
