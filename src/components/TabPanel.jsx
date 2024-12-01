// Import Styles
import "../styles/css/tabpanel.css";

// Import Data
import experienceData from "../assets/data/experience.json";

function TabPanel({ tabKey, selectedKey, hidden }) {
  return (
    <div className={`tab-panel${hidden ? "--hidden" : tabKey !== selectedKey ? '--unselected' : ''}`}>
      <div className="tab-panel--header">
        <div className="tab-panel--header--title">
          {experienceData[tabKey].title}&nbsp;@&nbsp;
        </div>
        <a
          className="tab-panel--header--company"
          href={experienceData[tabKey].src}
          target="blank"
        >
          {experienceData[tabKey].company}
        </a>
      </div>
      <div className="height-s"></div>
      <div className="tab-panel--time">{experienceData[tabKey].date}</div>
      <div className="height-s"></div>
      <ul className="tab-panel--tasks">
        {experienceData[tabKey].work.map((item, index) => (
          <li className="tab-panel--tasks--task">{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default TabPanel;
