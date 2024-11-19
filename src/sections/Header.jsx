import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

// Import Components
import NavBar from "../components/NavBar";

// Import Styles
import "../styles/css/header.css";

function Header() {
  const location = useLocation(); // Get current location
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 1);
    });
  }, []);

  return (
    <div className={`header ${scroll && "scroll"}`}>
      <div className="header--inner">
        <NavLink className="header--inner--name" to="/">
          Malte Lindemann
        </NavLink>
        <NavBar />
      </div>
    </div>
  );
}

export default Header;
