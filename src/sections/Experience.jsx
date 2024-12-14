import React from "react";

// Import Components
import TabContainer from "../components/TabContainer";

// Import Custom Hooks
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

// Import Styles
import "../styles/css/experience.css";
import "../styles/css/animations.css";

function Experience() {
  const [isVisible, sectionRef] = useIntersectionObserver();

  return (
    <div
      id="experience"
      className={`experience fade-in-bottom ${isVisible ? "is-visible" : ""}`}
      ref={sectionRef}
    >
      <div className="experience--heading">
        <h1 className="experience--heading--icon">&#8811;</h1>
        {/* <h1 className="experience--heading--icon">&#8827;</h1> */}
        <div className="width-s"></div>
        {/* <h1 className="experience--heading--text">experience</h1> */}
        <h1 className="experience--heading--text">Experience</h1>
        <div className="width-m"></div>
        <div className="experience--heading--line"></div>
      </div>
      <div className="height-l"></div>
      <TabContainer />
    </div>
  );
}

export default Experience;
