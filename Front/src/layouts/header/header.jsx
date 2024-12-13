import "./header.scss";
import Navbar from "../../components/navbar/navbar.jsx";

function Header() {
  return (
    <header className="header">
      <img className="header_logo" src="src/assets/logo.png" alt="." />
      <Navbar />
    </header>
  );
}

export default Header;
