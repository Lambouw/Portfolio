import React from "react";

// Import Styles
import "../styles/css/careeritem.css";

const CareerItem = React.forwardRef(({ careerItem }, ref) => (
  <a className="career-item" ref={ref} href={careerItem.src} target="blank">
    <div className="career-item--title">{careerItem.title}</div>
    <div className="career-item--company">{careerItem.company}</div>
    <div className="career-item--date">{careerItem.date}</div>
    <div className="career-item--work">
      <ul>
        {careerItem.work.map((work) => (
          <li>{work}</li>
        ))}
      </ul>
    </div>
  </a>
));

export default CareerItem;
