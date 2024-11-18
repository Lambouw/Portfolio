import React from "react";

// Import Styles
import "../styles/css/experienceitem.css";

const ExperienceItem = React.forwardRef(({ experienceItem }, ref) => (
  <a className="experience-item" ref={ref} href={experienceItem.src} target="blank">
    <div className="experience-item--title">{experienceItem.title}</div>
    <div className="experience-item--company">{experienceItem.company}</div>
    <div className="experience-item--date">{experienceItem.date}</div>
    <div className="experience-item--work">
      <ul>
        {experienceItem.work.map((work) => (
          <li>{work}</li>
        ))}
      </ul>
    </div>
  </a>
));

export default ExperienceItem;
