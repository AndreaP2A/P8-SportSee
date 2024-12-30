import "./navbar.scss";
import { NavLink } from "react-router-dom";

/**
 * Navbar component renders the navigation bar with links to different sections of the application.
 *
 * @component
 * @returns {JSX.Element} The rendered navigation bar component.
 */
function Navbar() {
  const userId = 12;

  return (
    <nav className="header_navbar">
      <ul className="header_navbar_container">
        <li>
          <NavLink to="/home">Accueil</NavLink>
        </li>
        <li>
          <NavLink to={`/user/${userId}`}>Profil</NavLink>
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
