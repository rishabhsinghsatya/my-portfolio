import React from "react";
import "./Projects.css";

const Projects = () => {
  return (
    <div className="project-page">
      {/* <h1>Projects</h1> */}
      <div className="projects-list">
        <ProjectCards
          className={"profile-card"}
          title={"teecraft"}
          technology={"react | css | js"}
          link={"https://teecraft-rishabh.netlify.app/"}
          code={"https://teecraft-rishabh.netlify.app/"}
        />
        <ProjectCards
          className={"profile-card"}
          title={"teecraft"}
          technology={"react | css | js"}
          link={"https://teecraft-rishabh.netlify.app/"}
          code={"https://teecraft-rishabh.netlify.app/"}
        />
        <ProjectCards
          className={"profile-card"}
          title={"teecraft"}
          technology={"react | css | js"}
          link={"https://teecraft-rishabh.netlify.app/"}
          code={"https://teecraft-rishabh.netlify.app/"}
        />
        <ProjectCards
          className={"profile-card"}
          title={"teecraft"}
          technology={"react | css | js"}
          link={"https://teecraft-rishabh.netlify.app/"}
          code={"https://teecraft-rishabh.netlify.app/"}
        />
        <ProjectCards
          className={"profile-card"}
          title={"teecraft"}
          technology={"react | css | js"}
          link={"https://teecraft-rishabh.netlify.app/"}
          code={"https://teecraft-rishabh.netlify.app/"}
        />
        <ProjectCards
          className={"profile-card"}
          title={"teecraft"}
          technology={"react | css | js"}
          link={"https://teecraft-rishabh.netlify.app/"}
          code={"https://teecraft-rishabh.netlify.app/"}
        />
      </div>
    </div>
  );
};

export default Projects;

export const ProjectCards = ({ className, title, technology, link, code }) => {
  return (
    <div className={className}>
      <h2>{title}</h2>
      <h3>{technology}</h3>
      <div className="link-list">
        <a
          href={link}
          target="_blank"
          style={{
            textDecoration: "none",
            cursor: "pointer",
            color: "black",
            marginRight: "5px",
          }}
        >
          View
        </a>
        <a href={code} target="_blank">
          Source code
        </a>
      </div>
    </div>
  );
};
