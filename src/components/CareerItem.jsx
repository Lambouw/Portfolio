// Import Styles
import "../styles/css/careeritem.css";

function CareerItem({ careerItem }) {
  return <div className="career-item">{careerItem.company}</div>;
}

export default CareerItem;
