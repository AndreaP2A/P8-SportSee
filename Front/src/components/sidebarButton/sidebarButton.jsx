import "./sidebarButton.scss";
import PropTypes from "prop-types";

function SidebarButton({ src, alt }) {
  return (
    <li className="sidebar_nav_button">
      <img src={src} alt={alt} />
    </li>
  );
}

SidebarButton.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default SidebarButton;
