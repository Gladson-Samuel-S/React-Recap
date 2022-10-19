import React, { useContext, useEffect, useState } from "react";

const ThemeContext = React.createContext();

export const useTheme = () => useContext(ThemeContext);

const themeColours = {
  light: {
    color: "#262626",
    backgroundColor: "#f5f5f5",
  },
  dark: {
    color: "#f5f5f5",
    backgroundColor: "#262626",
  },
};

const ThemeProvider = ({ children }) => {
  const [theme, setThemeName] = useState("light");

  useEffect(() => {
    const darkOS = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setTheme(darkOS ? "dark" : "light");
  }, []);

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  const setTheme = (themeName) => {
    document.body.style.setProperty(
      "--background-color",
      themeColours[themeName].backgroundColor
    );
    document.body.style.setProperty("--color", themeColours[themeName].color);
    setThemeName(themeName);
  };

  return (
    <ThemeContext.Provider value={{ theme, themeToggler }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
