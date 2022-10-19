import Header from "../components/Header";
import Footer from "../components/Footer";

// styles
import "./layout-styles.css";
import "../style/app.css";
import ThemeProvider from "../theme/ThemeProvider";

const Layout = ({ children }) => {
  return (
    <ThemeProvider>
      <main className="container">
        <Header />
        {children}
        <Footer />
      </main>
    </ThemeProvider>
  );
};

export default Layout;
