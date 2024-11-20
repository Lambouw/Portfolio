import React, { useEffect, useRef, useState } from "react";

// Import Components
import ProjectCard from "../components/ProjectCard";

// Import Styles
import "../styles/css/projects.css";

// Import Data
import projects from "../assets/data/projects.json";

function Projects() {
  const cardRefs = useRef([]); // Ref array for project cards
  const animatedItems = useRef(new Set()); // Track already animated items
  const [showAllProjects, setShowAllProjects] = useState(false); // Track whether to show all projects

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (!animatedItems.current.has(entry.target)) {
              entry.target.classList.add("slide-in");
              animatedItems.current.add(entry.target); // Mark as animated
            }
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% is visible
    );

    // Observe each card
    cardRefs.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => {
      // Cleanup observers
      cardRefs.current.forEach((card) => {
        if (card) observer.unobserve(card);
      });
    };
  }, [showAllProjects]); // Re-run when `showAllProjects` changes

  const handleToggleProjects = () => {
    setShowAllProjects((prev) => !prev);
  };

  return (
    <div id="projects" className="projects">
      <div className="projects--heading">
        <h1 className="projects--heading--icon">&#8811;</h1>
        {/* <h1 className="tech--heading--icon">&#8827;</h1> */}
        <div className="width-s"></div>
        <h1 className="projects--heading--text">projects</h1>
        <div className="width-m"></div>
        <div className="projects--heading--line"></div>
      </div>
      <div className="height-l"></div>
      <div className="projects--container">
        {projects
          .slice(0, showAllProjects ? projects.length : 3)
          .map((project, index) => (
            <ProjectCard
              key={index}
              ref={(el) => {
                cardRefs.current[index] = el;
              }}
              project={project}
            />
          ))}
      </div>
      {projects.length > 3 && (
        <div className="projects--toggle">
          <button
            className="projects--toggle--button"
            onClick={handleToggleProjects}
          >
            {showAllProjects ? "Show less" : "Show more"}
          </button>
        </div>
      )}
    </div>
  );
}

export default Projects;


