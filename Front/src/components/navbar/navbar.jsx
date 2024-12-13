import "./navbar.scss";
import { NavLink } from "react-router-dom";

function Navbar() {
  const userId = 12;

  return (
    <nav className="header_navbar">
      <ul className="header_navbar_container">
        <li>
          <NavLink to="/home">Accueil</NavLink>
        </li>
        <li>
          <NavLink to={`/profile/${userId}`}>Profil</NavLink>
        </li>
        <li>
          <NavLink to={`/settings`}>Réglages</NavLink>
        </li>
        <li>
          <NavLink to={`/community`}>Communauté</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
