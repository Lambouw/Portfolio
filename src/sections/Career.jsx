// Import Components
import CareerItem from "../components/CareerItem";

// Import Styles
import "../styles/css/career.css";

// Import Data
import career from "../assets/data/career.json";

function Career() {
  return (
    <div className="career">
      <h1 className="career--heading">Career</h1>
      <div className="height-s"></div>
      <div className="career--container">
        {career.map((careerItem) => (
          <CareerItem careerItem={careerItem} />
        ))}
      </div>
    </div>
  );
}

export default Career;
