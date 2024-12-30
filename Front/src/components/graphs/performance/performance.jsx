import "./performance.scss";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import CardDuration from "./cardDuration/cardDuration";
import CardDetails from "./cardDetails/cardDetails";
import CardScore from "./cardScore/cardScore";
import Activity from "../activity/activity";
import { fetchUserMainData } from "../../../services/api";

/**
 * Performance component fetches and displays the performance data for a user.
 *
 * @param {Object} props - The component props.
 * @param {number} props.userId - The ID of the user whose performance data is to be fetched.
 * @returns {JSX.Element} The rendered component.
 */
function Performance({ userId }) {
  const [actualUserId, setActualUserId] = useState(null);

  // Fetches the main data for a user with a specific ID and updates the state with the user's actual ID
  useEffect(() => {
    const getUserData = async () => {
      const userData = await fetchUserMainData(Number(userId));
      setActualUserId(userData.id);
    };

    getUserData();
  }, [userId]);

  if (!actualUserId) {
    return <div>Veuillez patienter...</div>;
  }

  return (
    <section className="performance">
      <Activity userId={Number(actualUserId)} />
      <div className="performance_cards">
        <CardDuration userId={Number(actualUserId)} />
        <CardDetails userId={Number(actualUserId)} />
        <CardScore userId={Number(actualUserId)} />
      </div>
    </section>
  );
}

Performance.propTypes = {
  userId: PropTypes.number.isRequired,
};

export default Performance;
