import React, { createContext, useState, useEffect, useContext } from "react";

// Import Material UI Components
import {
  createTheme,
  ThemeProvider as MuiThemeProvider,
} from "@mui/material/styles";

const muiTheme = createTheme({
  components: {
    MuiTabs: {
      styleOverrides: {
        indicator: {
          backgroundColor: "var(--highlight)",
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          // Default text color
          color: "var(--text-primary)",
          // Hover color
          "&:hover": {
            color: "var(--highlight)",
          },
          // Clicked (active) color
          "&.Mui-selected": {
            color: "var(--highlight)",
            fontWeight: "bold", // Optional: Make selected tab bold
          },
        },
      },
    },
  },
});

// Create a context with a default value of "light"
const ThemeContext = createContext();

// ThemeProvider component to wrap the app
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  // Toggle between light and dark themes
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  // Set the initial theme based on the user's system preference
  useEffect(() => {
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
      .matches
      ? "dark"
      : "light";
    setTheme(systemTheme);
  }, []);

  // Apply the theme to the body or root element whenever it changes
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme); // Apply theme to HTML element
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <MuiThemeProvider theme={muiTheme}>{children}</MuiThemeProvider>
    </ThemeContext.Provider>
  );
};

// Custom hook to use the ThemeContext
export const useTheme = () => useContext(ThemeContext);
