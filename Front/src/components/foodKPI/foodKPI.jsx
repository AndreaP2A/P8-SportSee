import "./foodKPI.scss";
import PropTypes from "prop-types";

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
