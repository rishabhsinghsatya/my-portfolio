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
          description={
            "An e-commerce platform showcasing Paithani silk sarees with mock backend, login and signup management functionality."
          }
          link={"https://teecraft-rishabh.netlify.app/"}
          code={"https://teecraft-rishabh.netlify.app/"}
        />
        <ProjectCards
          className={"profile-card"}
          title={"teecraft"}
          technology={"react | css | js"}
          description={
            "An e-commerce platform showcasing Paithani silk sarees with mock backend, login and signup management functionality."
          }
          link={"https://teecraft-rishabh.netlify.app/"}
          code={"https://teecraft-rishabh.netlify.app/"}
        />
        <ProjectCards
          className={"profile-card"}
          title={"teecraft"}
          technology={"react | css | js"}
          description={
            "An e-commerce platform showcasing Paithani silk sarees with mock backend, login and signup management functionality."
          }
          link={"https://teecraft-rishabh.netlify.app/"}
          code={"https://teecraft-rishabh.netlify.app/"}
        />
        <ProjectCards
          className={"profile-card"}
          title={"teecraft"}
          technology={"react | css | js"}
          description={
            "An e-commerce platform showcasing Paithani silk sarees with mock backend, login and signup management functionality."
          }
          link={"https://teecraft-rishabh.netlify.app/"}
          code={"https://teecraft-rishabh.netlify.app/"}
        />
        <ProjectCards
          className={"profile-card"}
          title={"teecraft"}
          technology={"react | css | js"}
          description={
            "An e-commerce platform showcasing Paithani silk sarees with mock backend, login and signup management functionality."
          }
          link={"https://teecraft-rishabh.netlify.app/"}
          code={"https://teecraft-rishabh.netlify.app/"}
        />
        <ProjectCards
          className={"profile-card"}
          title={"teecraft"}
          technology={"react | css | js"}
          description={
            "An e-commerce platform showcasing Paithani silk sarees with mock backend, login and signup management functionality."
          }
          link={"https://teecraft-rishabh.netlify.app/"}
          code={"https://teecraft-rishabh.netlify.app/"}
        />
      </div>
    </div>
  );
};

export default Projects;

export const ProjectCards = ({
  className,
  title,
  technology,
  description,
  link,
  code,
}) => {
  return (
    <div className={className}>
      <h2>{title}</h2>
      <h3>{technology}</h3>
      <p>{description}</p>
      <div className="link-list">
        <a href={link} target="_blank">
          View
        </a>
        <a href={code} target="_blank">
          Source code
        </a>
      </div>
    </div>
  );
};
