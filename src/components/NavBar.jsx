import { useNavigate, useLocation } from "react-router-dom";
import { scroller } from "react-scroll";

// Import Contexts
import { useTheme } from "../contexts/ThemeContext";
import { useLayout } from "../contexts/LayoutContext";

// Import Styles
import "../styles/css/navbar.css";

function NavBar() {
  const { theme, toggleTheme } = useTheme("light");
  const { aboutRef, projectsRef, experienceRef, contactRef } = useLayout();
  const navigate = useNavigate();
  const location = useLocation();

  // Handle Theme Toggle
  const handleToggleTheme = () => {
    const toggler = document.querySelector(".navbar--theme-toggler");
    toggler.classList.add("clicked");

    setTimeout(() => {
      toggler.classList.remove("clicked");
      toggleTheme();
    }, 100);
  };

  // Generalized Scroll Handler
  const handleNavClick = (section, ref) => {
    if (location.pathname === "/") {
      const offset = ref?.current?.classList.contains("is-visible")
        ? -150
        : -247;
      scrollToSection(section, offset);
    } else {
      navigate("/");

      setTimeout(() => {
        const offset = ref?.current?.classList.contains("is-visible")
          ? -150
          : -247;
        scrollToSection(section, offset);
      }, 100);
    }
  };

  // Scroll To Section
  const scrollToSection = (sectionId, offset) => {
    scroller.scrollTo(sectionId, {
      duration: 250,
      smooth: true,
      spy: true,
      offset,
    });
  };

  // Section Links Data
  const links = [
    { label: "About", section: "about", ref: aboutRef },
    { label: "Projects", section: "projects", ref: projectsRef },
    { label: "Experience", section: "experience", ref: experienceRef },
    { label: "Contact", section: "contact", ref: contactRef },
  ];

  return (
    <div className="navbar">
      {links.map((link, index) => (
        <div className="navbar--links" key={index}>
          <span
            className="link"
            onClick={() => handleNavClick(link.section, link.ref)}
          >
            {link.label}
          </span>
          <div className="width-m"></div>
        </div>
      ))}
      <div className="navbar--theme-toggler" onClick={handleToggleTheme}>
        {theme === "light" ? <LightThemeIcon /> : <DarkThemeIcon />}
      </div>
    </div>
  );
}

// Light Theme Icon
const LightThemeIcon = () => (
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
);

// Dark Theme Icon
const DarkThemeIcon = () => (
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
);

export default NavBar;
