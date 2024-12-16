import "./header.scss";
import Navbar from "../../components/navbar/navbar.jsx";
import logo from "../../assets/logo.png";

function Header() {
  return (
    <header className="header">
      <img src={logo} className="header_logo" alt="SportSee Logo" />
      <Navbar />
    </header>
  );
}

export default Header;
