import { Link } from "react-scroll";

// Import Styles
import "../styles/css/navbar.css";

function NavBar() {
  return (
    <div className="navbar">
      <Link className="link" to="about" spy={true} smooth={true} duration={250}>
        About
      </Link>
      <div className="width-md"></div>
      <Link
        className="link"
        to="projects"
        spy={true}
        smooth={true}
        duration={250}
      >
        Projects
      </Link>
      <div className="width-md"></div>
      <Link
        className="link"
        to="career"
        spy={true}
        smooth={true}
        duration={250}
      >
        Career
      </Link>
      <div className="width-md"></div>
      <Link
        className="link"
        to="contact"
        spy={true}
        smooth={true}
        duration={250}
      >
        Contact
      </Link>
      <div className="width-md"></div>
      <div className="theme-toggler">Theme</div>
    </div>
  );
}

export default NavBar;
