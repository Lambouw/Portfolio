// Import Styles
import "../styles/css/projectcard.css";

function ProjectCard({ project }) {
  return <div className="project-card">{project.name}</div>;
}

export default ProjectCard;
