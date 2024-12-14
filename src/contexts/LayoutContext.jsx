import React, { createContext, useContext } from "react";

import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

const LayoutContext = createContext();

// LayoutProvider component to wrap the app
export const LayoutProvider = ({ children }) => {
  // Section states
  const [aboutVisible, aboutRef] = useIntersectionObserver(0.1);
  const [techVisible, techRef] = useIntersectionObserver();
  const [projectsVisible, projectsRef] = useIntersectionObserver();
  const [experienceVisible, experienceRef] = useIntersectionObserver();
  const [contactVisible, contactRef] = useIntersectionObserver();

  return (
    <LayoutContext.Provider
      value={{
        aboutVisible,
        aboutRef,
        techVisible,
        techRef,
        projectsVisible,
        projectsRef,
        experienceVisible,
        experienceRef,
        contactVisible,
        contactRef,
      }}
    >
      {children}
    </LayoutContext.Provider>
  );
};

// Custom hook to use the LayoutContext
export const useLayout = () => useContext(LayoutContext);
