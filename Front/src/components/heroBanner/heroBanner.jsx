import "./heroBanner.scss";
import PropTypes from "prop-types";

function HeroBanner({ firstName = "Utilisateur" }) {
  return (
    <div className="heroBanner">
      <h1 className="heroBanner_title">Bonjour {firstName}</h1>
      <p className="heroBanner_text">
        Félicitation ! Vous avez explosé vos objectifs hier 👏
      </p>
    </div>
  );
}

HeroBanner.propTypes = {
  firstName: PropTypes.string.isRequired,
};

export default HeroBanner;
