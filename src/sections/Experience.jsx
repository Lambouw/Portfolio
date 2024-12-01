import React, { useEffect, useRef } from "react";

// Import FadeInContainer
import FadeInContainer from "../components/FadeInContainer";

// Import Components
import TabContainer from "../components/TabContainer";

// Import Styles
import "../styles/css/experience.css";

function Experience() {
  return (
    <div id="experience" className="experience">
      <FadeInContainer type={"right"} threshold={0.4}>
        <div className="experience--heading">
          <h1 className="experience--heading--icon">&#8811;</h1>
          {/* <h1 className="experience--heading--icon">&#8827;</h1> */}
          <div className="width-s"></div>
          <h1 className="experience--heading--text">experience</h1>
          <div className="width-m"></div>
          <div className="experience--heading--line"></div>
        </div>
        <div className="height-l"></div>
        <TabContainer />
      </FadeInContainer>
    </div>
  );
}

export default Experience;
