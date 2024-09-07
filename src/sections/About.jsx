// Import Styles
import "../styles/css/about.css";

// Import Images
import React from "../assets/images/react.svg";
import React2 from "../assets/images/react2.svg";

function About() {
  // Generate items array
  const items = [...Array(15)].map((_, index) => (
    <div key={index} className="about--tech-items--item">
      <img
        src={index % 2 === 0 ? React : React2}
        className="about--tech-items--item--image"
        alt="Tech Logo"
      />
    </div>
  ));

  return (
    <div id="about" className="about">
      <h1 className="about--heading">About</h1>
      <div className="height-sm"></div>
      <div className="about--text">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore fugit
          accusantium in vel ullam! Aperiam, animi qui? Repellendus dolore vitae
          voluptatibus a ducimus? Saepe nisi quod autem officiis repellendus
          quos!
        </p>
        <div className="height-sm"></div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore fugit
          accusantium in vel ullam! Aperiam, animi qui? Repellendus dolore vitae
          voluptatibus a ducimus? Saepe nisi quod autem officiis repellendus
          quos!
        </p>
        <div className="height-sm"></div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore fugit
          accusantium in vel ullam! Aperiam, animi qui? Repellendus dolore vitae
          voluptatibus a ducimus? Saepe nisi quod autem officiis repellendus
          quos!
        </p>
        <div className="height-sm"></div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore fugit
          accusantium in vel ullam! Aperiam, animi qui? Repellendus dolore vitae
          voluptatibus a ducimus? Saepe nisi quod autem officiis repellendus
          quos!
        </p>
      </div>
      <div className="height-sm"></div>
      <h2 className="about--tech-heading">Tech Stack</h2>
      <div className="height-sm"></div>
      <div className="about--tech-items">
        <div className="about--tech-items--wrapper">
          {/* Duplicate items for seamless scrolling */}
          {items}
          {items}
        </div>
      </div>
    </div>
  );
}

export default About;
