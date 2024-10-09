import React, { useEffect, useRef } from "react";

// Import Components
import ProjectCard from "../components/ProjectCard";

// Import Styles
import "../styles/css/projects.css";

// Import Data
import projects from "../assets/data/projects.json";

function Projects() {
  const cardRefs = useRef([]);

  useEffect(() => {
    // Set up the Intersection Observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add the slide-in class when the element is in view
            entry.target.classList.add("slide-in");
          } else {
            // Remove the slide-in class when the element is out of view
            entry.target.classList.remove("slide-in");
          }
        });
      },
      { threshold: 0.5 } // 50% of the card must be visible to trigger
    );

    // Observe each card
    cardRefs.current.forEach((card) => {
      if (card) {
        observer.observe(card);
      }
    });

    // Cleanup on component unmount
    return () => {
      cardRefs.current.forEach((card) => {
        if (card) {
          observer.unobserve(card);
        }
      });
    };
  }, []);

  return (
    <div className="projects">
      <h1 className="projects--heading">Projects</h1>
      <div className="height-s"></div>
      <div className="projects--container">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            ref={(el) => (cardRefs.current[index] = el)}
            project={project}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;
