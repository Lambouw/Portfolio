import React, { useState } from "react";

// Import Components
import CustomDialog from "./CustomDialog";

// Import Styles
import "../styles/css/projectcard.css";

// Import Images
import ilhomepage from "../assets/images/projects/ilhomepage.png";
import portfoliov1 from "../assets/images/projects/portfoliov1.png";
import fmmg from "../assets/images/projects/fmmg.png";
import hmi from "../assets/images/projects/hmi.png";
import twinstore from "../assets/images/projects/twinstore.png";

// Image mapping
const imageMap = {
  ilhomepage: ilhomepage,
  portfoliov1: portfoliov1,
  fmmg: fmmg,
  hmi: hmi,
  twinstore: twinstore,
};

const ProjectCard = React.forwardRef(({ project }, ref) => {
  const [open, setOpen] = useState(false);

  // Toggle dialog open state
  const toggleDialog = () => {
    setOpen(!open);
  };

  return (
    <>
      <div className="project-card" ref={ref} onClick={toggleDialog}>
        <div className="project-card--upper">
          <img
            className="project-card--upper--image"
            aria-label={project.name}
            alt={project.name}
            src={imageMap[project.image]} // Get image from imageMap
          />
          <div className="height-s"></div>
          <h3 className="project-card--upper--name">{project.name}</h3>
        </div>
        <div className="height-s"></div>
        <div className="project-card--description">{project.description}</div>
      </div>

      {/* Dialog to show details */}
      <CustomDialog
        open={open}
        onClose={toggleDialog}
        type="project"
        data={project}
      />
    </>
  );
});

export default ProjectCard;
