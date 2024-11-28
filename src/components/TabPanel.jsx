// Import Styles
import "../styles/css/tabpanel.css";

function TabPanel({ content }) {
  return (
    <div className="tab-panel">
      <div className="tab-panel--header">
        <div className="tab-panel--header--title">
          {content.title}&nbsp;@&nbsp;
        </div>
        <a
          className="tab-panel--header--company"
          href={content.src}
          target="blank"
        >
          {content.company}
        </a>
      </div>
      <div className="height-s"></div>
      <div className="tab-panel--time">{content.date}</div>
      <div className="height-s"></div>
      <ul className="tab-panel--tasks">
        {content.work.map((item, index) => (
          <li className="tab-panel--tasks--task">{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default TabPanel;
