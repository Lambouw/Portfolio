import React, { useState, useEffect, useRef } from "react";

// Import Components
import TabPanel from "./TabPanel";
import Tab from "./Tab";

// Import Custom Hooks
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

// Import Styles
import "../styles/css/tabcontainer.css";

// Import Data
import experienceData from "../assets/data/experience.json";

function TabContainer() {
  const [firstLoad, setFirstLoad] = useState(true);
  const [selectedTab, setSelectedTab] = useState(0);
  const [selectedKey, setSelectedKey] = useState("ISG");
  const [highlightStyle, setHighlightStyle] = useState({
    width: "0px",
    transform: "translateX(0px)",
  });

  const tabBarRef = useRef(null);

  // Animation Refs
  const [tabContainerIsVisible, tabContainerRef] = useIntersectionObserver();

  useEffect(() => {
    setHighlight(selectedKey);
  }, []);

  const handleClickTab = (index, key) => {
    setSelectedTab(index);
    setSelectedKey(key);

    setHighlight(key);
  };

  const setHighlight = (selectedKey) => {
    const tabElements = tabBarRef.current?.children;

    if (tabElements) {
      let selectedTabElement;
      let newWidth;
      let newLeft;

      // Iterate through tabElements to find the one with the 'selected-tab' class
      for (let tab of tabElements) {
        if (tab.classList.contains(selectedKey)) {
          selectedTabElement = tab;
          if (firstLoad) {
            newWidth = tab.offsetWidth - 3;
            newLeft = tab.offsetLeft;
            setFirstLoad(false);
          } else {
            newWidth = tab.offsetWidth;
            newLeft = tab.offsetLeft;
          }
        }
      }

      setHighlightStyle({
        width: `${newWidth}px`,
        transform: `translateX(${newLeft}px)`,
      });
    }
  };

  return (
    <div
      className={`tab-container fade-in-bottom ${
        tabContainerIsVisible ? "is-visible" : ""
      }`}
      ref={tabContainerRef}
    >
      <div className="tab-container--tabbar" ref={tabBarRef}>
        <div className="tab-container--highlight" style={highlightStyle}></div>
        {Object.keys(experienceData).map((key, i) => (
          <Tab
            key={key}
            length={Object.entries(experienceData).length}
            label={key}
            index={i}
            selectedIndex={selectedTab}
            handleClickTab={() => {
              handleClickTab(i, key);
            }}
          />
        ))}
      </div>
      <div className="tab-container--spacer"></div>
      <TabPanel key={"ISG-hidden"} tabKey={"ISG"} selectedKey={"PLACEHOLDER"} hidden={true} />
      {Object.keys(experienceData).map((key) => (
        <TabPanel key={key} tabKey={key} selectedKey={selectedKey} hidden={false} />
      ))}
    </div>
  );
}

export default TabContainer;
