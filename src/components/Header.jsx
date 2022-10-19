import { useTheme } from "../theme/ThemeProvider";
import { Sun, Moon } from "react-feather";

const Header = () => {
  const { theme, themeToggler } = useTheme();

  return (
    <>
      <header>
        <h1>🔦 Flash Notes</h1>
        <button onClick={themeToggler}>
          {theme === "light" ? <Sun /> : <Moon />}
        </button>
      </header>
      <hr />
    </>
  );
};

export default Header;
