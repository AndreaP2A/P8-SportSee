import "./sidebar.scss";
import SidebarButton from "../../components/sidebarButton/sidebarButton.jsx";
import icon1 from "../../assets/icon_sidebar_1.png";
import icon2 from "../../assets/icon_sidebar_2.png";
import icon3 from "../../assets/icon_sidebar_3.png";
import icon4 from "../../assets/icon_sidebar_4.png";

function Sidebar() {
  return (
    <aside className="sidebar">
      <ul className="sidebar_nav">
        <SidebarButton src={icon1} alt="Fonction 1 à venir" />
        <SidebarButton src={icon2} alt="Fonction 2 à venir" />
        <SidebarButton src={icon3} alt="Fonction 3 à venir" />
        <SidebarButton src={icon4} alt="Fonction 4 à venir" />
      </ul>
      <p className="sidebar_copyright">Copyright, SportSee 2020</p>
    </aside>
  );
}

export default Sidebar;
