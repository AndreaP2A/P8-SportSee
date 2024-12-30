import "./foodKPI.scss";
import PropTypes from "prop-types";

/**
 * Component to display a food KPI (Key Performance Indicator) card.
 *
 * @param {Object} props - The component props.
 * @param {string} props.label - The label for the KPI.
 * @param {number|string} props.value - The value of the KPI.
 * @param {string} props.unit - The unit of the KPI value.
 * @param {string} props.iconSrc - The source URL for the icon image.
 * @param {string} props.bgColor - The background color for the icon container.
 * @returns {JSX.Element} The rendered FoodKPI component.
 */
function FoodKPI({ label, value, unit, iconSrc, bgColor }) {
  return (
    <div className="foodKPI_card">
      <div className="foodKPI_icon" style={{ backgroundColor: bgColor }}>
        <img className="foodKPI_icon_img" src={iconSrc} alt="icon" />
      </div>
      <div className="foodKPI_text">
        <p className="foodKPI_text_value">
          {value}
          {unit}
        </p>
        <p className="foodKPI_text_label">{label}</p>
      </div>
    </div>
  );
}

FoodKPI.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  unit: PropTypes.string.isRequired,
  iconSrc: PropTypes.string.isRequired,
  bgColor: PropTypes.string.isRequired,
};

export default FoodKPI;
