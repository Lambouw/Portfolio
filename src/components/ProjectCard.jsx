import React, { useRef } from "react";

// Import Styles
import "../styles/css/projectcard.css";

// Import Images
import ilhomepage5 from "../assets/images/ilhomepage5.png";
import portfoliov1 from "../assets/images/portfoliov1.png";
import fmmg from "../assets/images/fmmg.png";

const imageMap = {
  ilhomepage5: ilhomepage5,
  portfoliov1: portfoliov1,
  fmmg: fmmg,
};

function ProjectCard({ className, project }) {
  return (
    <div
      className={`project-card ${className}`}
      onClick={() => {
        openDialog();
      }}
    >
      <div className="project-card--upper">
        <img
          className="project-card--upper--image"
          aria-label={project.name}
          alt={project.name}
          src={imageMap[project.image]}
        />
        <div className="height-sm"></div>
        <h3 className="project-card--upper--name">{project.name}</h3>
      </div>
      <div className="height-sm"></div>
      <div className="project-card--description">{project.description}</div>
    </div>
  );
}

export default ProjectCard;
