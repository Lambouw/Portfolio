import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

// Import Contexts
import { useTheme } from "../contexts/ThemeContext";

// Import Components
import NavBar from "../components/NavBar";

// Import Styles
import "../styles/css/header.css";
import "../styles/css/animations.css";

function Header() {
  const { theme, toggleTheme } = useTheme("light");
  const location = useLocation(); // Get current location
  const navigate = useNavigate(); // React Router's navigate hook
  const [scroll, setScroll] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);

    const handleScroll = () => {
      setScroll(window.scrollY > 1);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLogoClick = () => {
    // If already on '/', just scroll to the section
    if (location.pathname === "/") {
      scrollToTop();
    } else {
      // Navigate to '/' first, then scroll after a short delay
      navigate("/");
      setTimeout(() => {
        scrollToTop();
      }, 100); // Delay for navigation to complete
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Enables smooth scrolling
      duration: 250,
    });
  };

  return (
    <div
      className={`header ${scroll && "scroll"} fade-in-top ${
        isVisible ? "is-visible" : ""
      }`}
    >
      <div className="header--inner">
        <div
          className="header--inner--logo"
          onClick={() => {
            handleLogoClick();
          }}
        >
          {theme === "light" ? (
            <svg
              width="40"
              height="40"
              viewBox="0 0 190 190"
              fill="var(--text-primary)"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M98 179.948C126.747 178.951 151.867 163.678 166.489 141C169.329 136.596 171.773 131.912 173.771 127C177.787 117.123 180 106.32 180 95C180 60.581 159.542 30.9401 130.123 17.5733C127.485 16.3745 124.774 15.3066 122 14.3779V3.89167C161.315 15.5248 190 51.9125 190 95C190 147.467 147.467 190 95 190C91.2795 190 87.609 189.786 84 189.37V179.295C87.6009 179.76 91.2724 180 95 180C96.0042 180 97.0043 179.983 98 179.948ZM160.46 141H117H103V49V15.395C107.804 15.872 112.484 16.7741 117 18.063V37V49V127H168.343C166.182 131.948 163.534 136.634 160.46 141ZM117 12.8746V2.56028C109.939 0.886104 102.573 0 95 0C42.5329 0 0 42.5329 0 95C0 142.014 34.1516 181.052 79 188.658V178.496C64.3092 175.698 50.9589 169.119 40 159.81C34.7447 155.345 30.0394 150.253 26 144.65C15.9316 130.682 10 113.534 10 95C10 48.0558 48.0558 10 95 10C97.6979 10 100.366 10.1257 103 10.3715C107.793 10.819 112.471 11.6645 117 12.8746ZM26 135.51C29.8287 142.017 34.5517 147.935 40 153.095V77L54 89L62 96L76 84L84 77V141V156V174.25C87.596 174.744 91.2681 175 95 175C96.0044 175 97.0045 174.981 98 174.945V141V61V49L84 61L76 68L62 80L54 73L40 61L28.233 50.914C27.4583 52.0849 26.7136 53.2773 26 54.4902V61V135.51Z"
              />
            </svg>
          ) : (
            <svg
              width="40"
              height="40"
              viewBox="0 0 190 190"
              fill="var(--text-primary)"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M98 179.948C126.747 178.951 151.867 163.678 166.489 141C169.329 136.596 171.773 131.912 173.771 127C177.787 117.123 180 106.32 180 95C180 60.581 159.542 30.9401 130.123 17.5733C127.485 16.3745 124.774 15.3066 122 14.3779V3.89167C161.315 15.5248 190 51.9125 190 95C190 147.467 147.467 190 95 190C91.2795 190 87.609 189.786 84 189.37V179.295C87.6009 179.76 91.2724 180 95 180C96.0042 180 97.0043 179.983 98 179.948ZM160.46 141H117H103V49V15.395C107.804 15.872 112.484 16.7741 117 18.063V37V49V127H168.343C166.182 131.948 163.534 136.634 160.46 141ZM117 12.8746V2.56028C109.939 0.886104 102.573 0 95 0C42.5329 0 0 42.5329 0 95C0 142.014 34.1516 181.052 79 188.658V178.496C64.3092 175.698 50.9589 169.119 40 159.81C34.7447 155.345 30.0394 150.253 26 144.65C15.9316 130.682 10 113.534 10 95C10 48.0558 48.0558 10 95 10C97.6979 10 100.366 10.1257 103 10.3715C107.793 10.819 112.471 11.6645 117 12.8746ZM26 135.51C29.8287 142.017 34.5517 147.935 40 153.095V77L54 89L62 96L76 84L84 77V141V156V174.25C87.596 174.744 91.2681 175 95 175C96.0044 175 97.0045 174.981 98 174.945V141V61V49L84 61L76 68L62 80L54 73L40 61L28.233 50.914C27.4583 52.0849 26.7136 53.2773 26 54.4902V61V135.51Z"
              />
            </svg>
          )}
        </div>
        <NavBar />
      </div>
    </div>
  );
}

export default Header;
