// Import Styles
import "../styles/css/tab.css";

function Tab({ length, label, index, selectedIndex, handleClickTab }) {
  return (
    <div
      className={`tab ${label} ${selectedIndex === index && "selected-tab"} ${
        length - 1 === index && "last-tab"
      }`}
      onClick={() => {
        handleClickTab(index, label);
      }}
    >
      {label}
    </div>
  );
}

export default Tab;
