// Import Components
import ProjectCard from "../components/ProjectCard";

// Import Styles
import "../styles/css/projects.css";

// Import Data
import projects from "../assets/data/projects.json";

function Projects() {
  return (
    <div className="projects">
      <h1 className="projects--heading">Projects</h1>
      <div className="height-s"></div>
      <div className="projects--container">
        {projects.map((project, index) => (
          <ProjectCard className={index === projects.length - 1 ? '' : 'not-last'} project={project} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
