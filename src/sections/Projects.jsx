import React, { useState } from "react";

// Import Components
import ProjectCard from "../components/ProjectCard";

// Import Custom Hooks
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

// Import Styles
import "../styles/css/projects.css";
import "../styles/css/animations.css";

// Import Data
import projects from "../assets/data/projects.json";

function Projects() {
  // Animation Refs
  const [headingIsVisible, headingRef] = useIntersectionObserver();
  const [projectsIsVisible, projectsRef] = useIntersectionObserver();
  const [toggleIsVisible, toggleRef] = useIntersectionObserver();

  const [showAllProjects, setShowAllProjects] = useState(false); // Track whether to show all projects

  const handleToggleProjects = () => {
    setShowAllProjects((prev) => !prev);
  };

  return (
    <div id="projects" className="projects">
      <div
        className={`projects--heading fade-in-left ${
          headingIsVisible ? "is-visible" : ""
        }`}
        ref={headingRef}
      >
        <h1 className="projects--heading--icon">&#8811;</h1>
        {/* <h1 className="tech--heading--icon">&#8827;</h1> */}
        <div className="width-s"></div>
        {/* <h1 className="projects--heading--text">projects</h1> */}
        <h1 className="projects--heading--text">Projects</h1>
        <div className="width-m"></div>
        <div className="projects--heading--line"></div>
      </div>
      <div className="height-l"></div>
      <div
        className={`projects--container fade-in-bottom ${
          projectsIsVisible ? "is-visible" : ""
        }`}
        ref={projectsRef}
      >
        {projects
          .slice(0, showAllProjects ? projects.length : 3)
          .map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
      </div>
      {projects.length > 3 && (
        <div
          className={`projects--toggle fade-in-bottom ${
            toggleIsVisible ? "is-visible" : ""
          }`}
          ref={toggleRef}
        >
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
