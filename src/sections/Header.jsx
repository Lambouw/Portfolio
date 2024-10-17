import { NavLink } from "react-router-dom";

// Import Components
import NavBar from "../components/NavBar";

// Import Styles
import "../styles/css/header.css";

function Header() {
  return (
    <div className="header">
      <NavLink className="header--name" to="/">Malte Lindemann</NavLink>
      <NavBar />
    </div>
  );
}

export default Header;
