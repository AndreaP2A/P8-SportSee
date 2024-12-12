import "./navbar.scss";

function Navbar() {
  return (
    <nav className="header_navbar">
      <ul className="header_navbar_container">
        <li>
          <a href="/home">Accueil</a>
        </li>
        <li>
          <a href="/profile">Profil</a>
        </li>
        <li>
          <a href="/settings">Réglages</a>
        </li>
        <li>
          <a href="/community">Communauté</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
