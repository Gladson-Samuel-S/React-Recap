import { useTheme } from "../theme/ThemeProvider";
import { Link } from "react-router-dom";
import { Sun, Moon } from "react-feather";

const Header = () => {
  const { theme, themeToggler } = useTheme();

  return (
    <>
      <header>
        <Link to="/">
          <h1>🔦 Flash Notes</h1>
        </Link>
        <button className="btn" onClick={themeToggler}>
          {theme === "light" ? <Sun /> : <Moon />}
        </button>
      </header>
      <hr />
    </>
  );
};

export default Header;
