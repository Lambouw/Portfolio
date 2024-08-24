import { Link } from "react-scroll";

// Import Styles
import "../styles/css/navbar.css";

function NavBar() {
  return (
    <div className="navbar--wrapper">
      <Link to="about" spy={true} smooth={true} duration={250}>
        About
      </Link>
      <Link to="projects" spy={true} smooth={true} duration={250}>
        Projects
      </Link>
      <Link to="career" spy={true} smooth={true} duration={250}>
        Career
      </Link>
      <Link to="contact" spy={true} smooth={true} duration={250}>
        Contact
      </Link>
    </div>
  );
}

export default NavBar;
