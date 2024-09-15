import React, { createContext, useState, useEffect, useContext } from "react";

// Create a context with a default value of "light"
const ThemeContext = createContext();

// ThemeProvider component to wrap the app
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  // Toggle between light and dark themes
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  // Apply the theme to the body or root element whenever it changes
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme); // Apply theme to HTML element
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook to use the ThemeContext
export const useTheme = () => useContext(ThemeContext);
