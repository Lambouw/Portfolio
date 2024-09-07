// Import Styles
import "../styles/css/careeritem.css";

function CareerItem({ careerItem }) {
  return <div className="project-card">{careerItem.company}</div>;
}

export default CareerItem;
