import Footer from "components/Footer";
import Header from "components/Header";
import "./style.css";

const Layout = ({ children }) => (
  <div className="app">
    <Header />
    <main className="app__main">{children}</main>
    <Footer />
  </div>
);

export default Layout;
