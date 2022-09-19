import Logo from "assets/Logo";
import userImg from "assets/Frame-46.png";
import "./style.css";

const Header = () => (
  <header className="header">
    <Logo className="header__logo" />
    <div className="header__user-box">
      <img src={userImg} alt="user" className="header__user-img" />
    </div>
  </header>
);

export default Header;
