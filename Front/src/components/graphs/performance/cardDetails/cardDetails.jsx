import "./cardDetails.scss";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  Radar,
  ResponsiveContainer,
} from "recharts";
import { fetchUserPerformance } from "../../../../services/api";

const kindMapFr = {
  1: "Cardio",
  2: "Energie",
  3: "Endurance",
  4: "Force",
  5: "Vitesse",
  6: "Intensité",
};

const desiredOrder = [
  "Intensité",
  "Vitesse",
  "Force",
  "Endurance",
  "Energie",
  "Cardio",
];

function CardDetails({ userId }) {
  const [performanceData, setPerformanceData] = useState([]);

  useEffect(() => {
    const getPerformanceData = async () => {
      const data = await fetchUserPerformance(userId);
      const formattedData = data.data.map((item) => ({
        ...item,
        kind: kindMapFr[item.kind],
      }));
      formattedData.sort(
        (a, b) => desiredOrder.indexOf(a.kind) - desiredOrder.indexOf(b.kind)
      );
      setPerformanceData(formattedData);
    };

    getPerformanceData();
  }, [userId]);

  return (
    <div className="performance_cards_details">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart
          data={performanceData}
          margin={{ top: 10, right: 30, bottom: 10, left: 30 }}
        >
          <PolarGrid stroke="white" />
          <PolarAngleAxis dataKey="kind" stroke="white" />

          <Radar
            name="Performance"
            dataKey="value"
            stroke="red"
            fill="#ff0101"
            fillOpacity={0.7}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}

CardDetails.propTypes = {
  userId: PropTypes.number.isRequired,
};

export default CardDetails;
