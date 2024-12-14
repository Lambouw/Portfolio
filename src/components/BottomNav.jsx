import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { scroller } from "react-scroll";

// Import Contexts
import { useTheme } from "../contexts/ThemeContext";

// Import Compontents
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faLaptopCode,
  faBuilding,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

// Import Custom Hooks
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

// Import Styles
import "../styles/css/bottomnav.css";

const BottomNav = () => {
  const { theme, toggleTheme } = useTheme("light");
  const navigate = useNavigate(); // React Router's navigate hook
  const location = useLocation(); // Get current location

  // Animation Refs
  const [bottomNavIsVisible, bottomNavRef] = useIntersectionObserver(0.2);

  const handleToggleTheme = () => {
    const toggler = document.querySelector(".bottomnav--item--theme-toggler");
    console.log(toggler);
    toggler.classList.add("clicked");

    setTimeout(() => {
      toggler.classList.remove("clicked");
      toggleTheme();
    }, 100);
  };

  const handleNavClick = (section) => {
    // If already on '/', just scroll to the section
    if (location.pathname === "/") {
      scrollToSection(section);
    } else {
      // Navigate to '/' first, then scroll after a short delay
      navigate("/");
      setTimeout(() => {
        scrollToSection(section);
      }, 100); // Delay for navigation to complete
    }
  };

  const scrollToSection = (sectionId) => {
    scroller.scrollTo(sectionId, {
      duration: 250,
      smooth: true,
      spy: true,
      offset: -30, // Add offset for fixed navbar
    });
  };

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
      className={`bottomnav fade-in-opacity ${
        bottomNavIsVisible ? "is-visible" : ""
      }`}
      ref={bottomNavRef}
    >
      <div className="bottomnav--item">
        <div
          className="bottomnav--item--icon"
          onClick={() => {
            handleLogoClick();
          }}
        >
          {theme === "light" ? (
            <svg
              width="20"
              height="20"
              viewBox="0 0 190 190"
              fill="var(--text-primary)"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M98 179.948C126.747 178.951 151.867 163.678 166.489 141C169.329 136.596 171.773 131.912 173.771 127C177.787 117.123 180 106.32 180 95C180 60.581 159.542 30.9401 130.123 17.5733C127.485 16.3745 124.774 15.3066 122 14.3779V3.89167C161.315 15.5248 190 51.9125 190 95C190 147.467 147.467 190 95 190C91.2795 190 87.609 189.786 84 189.37V179.295C87.6009 179.76 91.2724 180 95 180C96.0042 180 97.0043 179.983 98 179.948ZM160.46 141H117H103V49V15.395C107.804 15.872 112.484 16.7741 117 18.063V37V49V127H168.343C166.182 131.948 163.534 136.634 160.46 141ZM117 12.8746V2.56028C109.939 0.886104 102.573 0 95 0C42.5329 0 0 42.5329 0 95C0 142.014 34.1516 181.052 79 188.658V178.496C64.3092 175.698 50.9589 169.119 40 159.81C34.7447 155.345 30.0394 150.253 26 144.65C15.9316 130.682 10 113.534 10 95C10 48.0558 48.0558 10 95 10C97.6979 10 100.366 10.1257 103 10.3715C107.793 10.819 112.471 11.6645 117 12.8746ZM26 135.51C29.8287 142.017 34.5517 147.935 40 153.095V77L54 89L62 96L76 84L84 77V141V156V174.25C87.596 174.744 91.2681 175 95 175C96.0044 175 97.0045 174.981 98 174.945V141V61V49L84 61L76 68L62 80L54 73L40 61L28.233 50.914C27.4583 52.0849 26.7136 53.2773 26 54.4902V61V135.51Z"
              />
            </svg>
          ) : (
            <svg
              width="20"
              height="20"
              viewBox="0 0 190 190"
              fill="var(--text-primary)"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M98 179.948C126.747 178.951 151.867 163.678 166.489 141C169.329 136.596 171.773 131.912 173.771 127C177.787 117.123 180 106.32 180 95C180 60.581 159.542 30.9401 130.123 17.5733C127.485 16.3745 124.774 15.3066 122 14.3779V3.89167C161.315 15.5248 190 51.9125 190 95C190 147.467 147.467 190 95 190C91.2795 190 87.609 189.786 84 189.37V179.295C87.6009 179.76 91.2724 180 95 180C96.0042 180 97.0043 179.983 98 179.948ZM160.46 141H117H103V49V15.395C107.804 15.872 112.484 16.7741 117 18.063V37V49V127H168.343C166.182 131.948 163.534 136.634 160.46 141ZM117 12.8746V2.56028C109.939 0.886104 102.573 0 95 0C42.5329 0 0 42.5329 0 95C0 142.014 34.1516 181.052 79 188.658V178.496C64.3092 175.698 50.9589 169.119 40 159.81C34.7447 155.345 30.0394 150.253 26 144.65C15.9316 130.682 10 113.534 10 95C10 48.0558 48.0558 10 95 10C97.6979 10 100.366 10.1257 103 10.3715C107.793 10.819 112.471 11.6645 117 12.8746ZM26 135.51C29.8287 142.017 34.5517 147.935 40 153.095V77L54 89L62 96L76 84L84 77V141V156V174.25C87.596 174.744 91.2681 175 95 175C96.0044 175 97.0045 174.981 98 174.945V141V61V49L84 61L76 68L62 80L54 73L40 61L28.233 50.914C27.4583 52.0849 26.7136 53.2773 26 54.4902V61V135.51Z"
              />
            </svg>
          )}
        </div>
      </div>
      <div className="bottomnav--item">
        <FontAwesomeIcon
          className="bottomnav--item--icon"
          onClick={() => handleNavClick("about")}
          icon={faUser}
          size="lg"
        />
      </div>
      <div className="bottomnav--item">
        <FontAwesomeIcon
          className="bottomnav--item--icon"
          onClick={() => handleNavClick("projects")}
          icon={faLaptopCode}
          size="lg"
        />
      </div>
      <div className="bottomnav--item">
        <FontAwesomeIcon
          className="bottomnav--item--icon"
          onClick={() => handleNavClick("experience")}
          icon={faBuilding}
          size="lg"
        />
      </div>
      <div className="bottomnav--item">
        <FontAwesomeIcon
          className="bottomnav--item--icon"
          onClick={() => handleNavClick("contact")}
          icon={faEnvelope}
          size="lg"
        />
      </div>
      <div className="bottomnav--item">
        {theme === "light" ? (
          <div
            className="bottomnav--item--theme-toggler"
            onClick={handleToggleTheme}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="var(--text-primary)"
              viewBox="0 0 15 15"
            >
              <path
                fillRule="evenodd"
                d="M2.9.5a.4.4 0 0 0-.8 0v.6h-.6a.4.4 0 1 0 0 .8h.6v.6a.4.4 0 1 0 .8 0v-.6h.6a.4.4 0 0 0 0-.8h-.6V.5Zm3 3a.4.4 0 1 0-.8 0v.6h-.6a.4.4 0 1 0 0 .8h.6v.6a.4.4 0 1 0 .8 0v-.6h.6a.4.4 0 0 0 0-.8h-.6v-.6Zm-4 3a.4.4 0 1 0-.8 0v.6H.5a.4.4 0 1 0 0 .8h.6v.6a.4.4 0 0 0 .8 0v-.6h.6a.4.4 0 0 0 0-.8h-.6v-.6ZM8.544.982l-.298-.04c-.213-.024-.34.224-.217.4A6.57 6.57 0 0 1 9.203 5.1a6.602 6.602 0 0 1-6.243 6.59c-.214.012-.333.264-.183.417.069.07.138.139.21.206l.072.066.26.226.188.148.121.09.187.131.176.115c.12.076.244.149.37.217l.264.135.26.12.303.122.244.086a6.568 6.568 0 0 0 1.103.26l.317.04.267.02a6.6 6.6 0 0 0 6.943-7.328l-.037-.277a6.557 6.557 0 0 0-.384-1.415l-.113-.268-.077-.166-.074-.148a6.602 6.602 0 0 0-.546-.883l-.153-.2-.199-.24-.163-.18-.12-.124-.16-.158-.223-.2-.32-.26-.245-.177-.292-.19-.321-.186-.328-.165-.113-.052-.24-.101-.276-.104-.252-.082-.325-.09-.265-.06-.292-.053Zm1.86 4.318a7.578 7.578 0 0 0-.572-2.894 5.601 5.601 0 1 1-4.748 10.146 7.61 7.61 0 0 0 3.66-2.51.749.749 0 0 0 1.355-.442.75.75 0 0 0-.584-.732c.062-.116.122-.235.178-.355A1.25 1.25 0 1 0 10.35 6.2c.034-.295.052-.595.052-.9Z"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>
        ) : (
          <div
            className="bottomnav--item--theme-toggler"
            onClick={handleToggleTheme}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="var(--text-primary)"
              viewBox="0 0 15 15"
            >
              <path
                fillRule="evenodd"
                d="M7.5 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2a.5.5 0 0 1 .5-.5ZM2.197 2.197a.5.5 0 0 1 .707 0L4.318 3.61a.5.5 0 0 1-.707.707L2.197 2.904a.5.5 0 0 1 0-.707ZM.5 7a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2Zm1.697 5.803a.5.5 0 0 1 0-.707l1.414-1.414a.5.5 0 1 1 .707.707l-1.414 1.414a.5.5 0 0 1-.707 0ZM12.5 7a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2Zm-1.818-2.682a.5.5 0 0 1 0-.707l1.414-1.414a.5.5 0 1 1 .707.707L11.39 4.318a.5.5 0 0 1-.707 0ZM8 12.5a.5.5 0 0 0-1 0v2a.5.5 0 0 0 1 0v-2Zm2.682-1.818a.5.5 0 0 1 .707 0l1.414 1.414a.5.5 0 1 1-.707.707l-1.414-1.414a.5.5 0 0 1 0-.707ZM5.5 7.5a2 2 0 1 1 4 0 2 2 0 0 1-4 0Zm2-3a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>
        )}
      </div>
    </div>
  );
};

export default BottomNav;
