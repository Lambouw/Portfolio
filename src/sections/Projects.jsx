import React, { useState } from "react";

// Import Contexts
import { useLayout } from "../contexts/LayoutContext";

// Import Components
import ProjectCard from "../components/ProjectCard";

// Import Styles
import "../styles/css/projects.css";
import "../styles/css/animations.css";

// Import Data
import projects from "../assets/data/projects.json";

function Projects() {
  const { projectsVisible, projectsRef } = useLayout();

  const [showAllProjects, setShowAllProjects] = useState(false); // Track whether to show all projects

  const handleToggleProjects = () => {
    setShowAllProjects((prev) => !prev);
  };

  return (
    <div
      id="projects"
      className={`projects fade-in-bottom ${
        projectsVisible ? "is-visible" : ""
      }`}
      ref={projectsRef}
    >
      <div className="projects--heading">
        <h1 className="projects--heading--icon">&#8811;</h1>
        {/* <h1 className="tech--heading--icon">&#8827;</h1> */}
        <div className="width-s"></div>
        {/* <h1 className="projects--heading--text">projects</h1> */}
        <h1 className="projects--heading--text">Projects</h1>
        <div className="width-m"></div>
        <div className="projects--heading--line"></div>
      </div>
      <div className="height-l"></div>
      <div className="projects--container">
        {projects
          .slice(0, showAllProjects ? projects.length : 3)
          .map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
      </div>
      {projects.length > 3 && (
        <div className="projects--toggle">
          <button
            className="projects--toggle--button"
            onClick={handleToggleProjects}
          >
            {showAllProjects ? "Show less" : "Show all"}
          </button>
        </div>
      )}
    </div>
  );
}

export default Projects;
