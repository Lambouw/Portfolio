import { NavLink } from "react-router-dom";

// Import Styles
import "../styles/css/components/navbar.css";

function NavBar() {
  return (
    <div className="navbar--wrapper">
      <NavLink className="navbar--wrapper--navitem" to="/about">
        About
      </NavLink>
      <div className="width-md"></div>
      <NavLink className="navbar--wrapper--navitem" to="/projects">
        Projects
      </NavLink>
      <div className="width-md"></div>
      <NavLink className="navbar--wrapper--navitem" to="/contact">
        Contact
      </NavLink>
    </div>
  );
}

export default NavBar;
