// Import Styles
import "../styles/css/careeritem.css";

// Import Images
import isg from "../assets/images/isg.svg";
import jpaule from "../assets/images/jpaule.png";
import iff from "../assets/images/iff.png";

const imageMap = {
  isg: isg,
  jpaule: jpaule,
  iff: iff,
};

function CareerItem({ careerItem }) {
  return (
    <div className="career-item">
      <div className="career-item--image">
        <img
          src={imageMap[careerItem.image]}
          aria-label={careerItem.company}
          alt={careerItem.company}
        ></img>
      </div>
      <div className="career-item--description">
        <div className="career-item--description--title">
          {careerItem.title}
        </div>
        <div className="career-item--description--company">
          {careerItem.company}
        </div>
        <div className="career-item--description--date">{careerItem.date}</div>
        <div className="career-item--description--work">
          <ul>
            {careerItem.work.map((work) => (
              <li>{work}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CareerItem;
