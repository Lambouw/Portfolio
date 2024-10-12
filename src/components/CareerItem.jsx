import React from "react";

// Import Styles
import "../styles/css/careeritem.css";

const CareerItem = React.forwardRef(({ careerItem }, ref) => (
  <div className="career-item" ref={ref}>
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
  </div>
));

export default CareerItem;
