import "./style.css";

const Footer = () => (
  <footer className="footer">
    <nav className="footer__nav">
      <a href="/#">Terms of service</a>
      &#8226;
      <a href="/#">Privacy policy</a>
      &#8226;
      <a href="/#">Copyright</a>
    </nav>
    <div className="footer__info">
      <span>nerds.family Version 1.2</span>
      &#8226;
      <span>Last update 10/09/2022</span>
    </div>
  </footer>
);

export default Footer;
