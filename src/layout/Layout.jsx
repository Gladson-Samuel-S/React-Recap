import Header from "../components/Header";
import Footer from "../components/Footer";

// styles
import "./layout-styles.css";
import "../style/app.css";
import ThemeProvider from "../theme/ThemeProvider";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <ThemeProvider>
      <main className="container">
        <Header />
        <Outlet />
        <Footer />
      </main>
    </ThemeProvider>
  );
};

export default Layout;
