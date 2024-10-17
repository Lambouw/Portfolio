import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

// Import Components
import NavBar from "../components/NavBar";
import SecondNavBar from "../components/SecondNavBar";

// Import Styles
import "../styles/css/header.css";

function Header() {
  const location = useLocation(); // Get current location
  const [isHome, setIsHome] = useState(true);

  useEffect(() => {
    if (location.pathname === "/") {
      setIsHome(true);
    } else {
      setIsHome(false);
    }
  }, [location]);

  return (
    <div className="header">
      <NavLink className="header--name" to="/">
        Malte Lindemann
      </NavLink>
      {isHome ? <NavBar /> : <SecondNavBar />}
    </div>
  );
}

export default Header;
