import "./sidebar.scss";

function Sidebar() {
  return (
    <aside className="sidebar">
      <ul className="sidebar_nav">
        <li className="sidebar_nav_button">
          <img src="src/assets/icon_sidebar_1.png" alt="Fonction 1 à venir" />
        </li>
        <li className="sidebar_nav_button">
          <img src="src/assets/icon_sidebar_2.png" alt="Fonction 2 à venir" />
        </li>
        <li className="sidebar_nav_button">
          <img src="src/assets/icon_sidebar_3.png" alt="Fonction 3 à venir" />
        </li>
        <li className="sidebar_nav_button">
          <img src="src/assets/icon_sidebar_4.png" alt="Fonction 4 à venir" />
        </li>
      </ul>
      <p className="sidebar_copyright">Copyright, SportSee 2020</p>
    </aside>
  );
}

export default Sidebar;
