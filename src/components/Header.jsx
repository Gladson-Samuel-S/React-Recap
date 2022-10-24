import React, { Component } from "react";

import { Link } from "react-router-dom";
import { Sun, Moon } from "react-feather";
import { ThemeContext } from "../theme/ThemeProvider";

class Header extends Component {
  static contextType = ThemeContext;

  render() {
    const theme = this.context;

    return (
      <>
        <header>
          <Link to="/">
            <h1>Flash Notes</h1>
          </Link>
          <button className="btn" onClick={theme.themeToggler}>
            {theme.theme === "light" ? <Sun /> : <Moon />}
          </button>
        </header>
        <hr />
      </>
    );
  }
}

export default Header;
