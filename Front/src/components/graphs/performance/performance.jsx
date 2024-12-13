import "./performance.scss";
import { useEffect, useState } from "react";
import CardDuration from "./cardDuration/cardDuration";
import CardDetails from "./cardDetails/cardDetails";
import CardScore from "./cardScore/cardScore";
import Activity from "../activity/activity";
import { fetchUserMainData } from "../../../services/api";

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
        <CardDuration />
        <CardDetails />
        <CardScore />
      </div>
    </section>
  );
}

export default Performance;
