// Import Styles
import "../styles/css/careeritem.css";

function CareerItem({ careerItem }) {
  return (
    <div className="career-item">
        <div className="career-item--title">
          {careerItem.title}
        </div>
        <div className="career-item--company">
          {careerItem.company}
        </div>
        <div className="career-item--date">{careerItem.date}</div>
        <div className="career-item--work">
          <ul>
            {careerItem.work.map((work) => (
              <li>{work}</li>
            ))}
          </ul>
        </div>
    </div>
  );
}

export default CareerItem;
