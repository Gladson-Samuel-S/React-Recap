import React, { Component } from "react";

export const ThemeContext = React.createContext();

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

class ThemeProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: "light",
    };
  }

  componentDidMount() {
    const setTheme = (themeName) => {
      document.body.style.setProperty(
        "--background-color",
        themeColours[themeName].backgroundColor
      );
      document.body.style.setProperty("--color", themeColours[themeName].color);
      this.setState({
        theme: themeName,
      });
    };

    const darkOS = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setTheme(darkOS ? "dark" : "light");
  }

  render() {
    const themeToggler = () => {
      const setTheme = (themeName) => {
        document.body.style.setProperty(
          "--background-color",
          themeColours[themeName].backgroundColor
        );
        document.body.style.setProperty(
          "--color",
          themeColours[themeName].color
        );
        this.setState({
          theme: themeName,
        });
      };
      this.state.theme === "light" ? setTheme("dark") : setTheme("light");
    };

    return (
      <ThemeContext.Provider value={{ theme: this.state.theme, themeToggler }}>
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}

export default ThemeProvider;
