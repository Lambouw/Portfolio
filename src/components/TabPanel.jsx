// Import Material UI Components
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

// Import Styles
import "../styles/css/tabpanel.css";

function TabPanel({ experienceItem, value, index, ...other }) {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box className="tabpanel">
          <Typography>
            <div className="tabpanel--header">
              <div className="tabpanel--header--title">
                {experienceItem.title}
              </div>
              <div className="tabpanel--header">&nbsp;@&nbsp;</div>
              <a
                className="tabpanel--header--company"
                href={experienceItem.src}
                target="blank"
              >
                {experienceItem.company}
              </a>
            </div>
            <div className="height-s"></div>
            <div className="tabpanel--time">{experienceItem.date}</div>
            <div className="height-s"></div>
            <ul className="tabpanel--tasks">
              {experienceItem.work.map((item, index) => (
                <li className="tabpanel--tasks--task">{item}</li>
              ))}
            </ul>
          </Typography>
        </Box>
      )}
    </div>
  );
}

export default TabPanel;
