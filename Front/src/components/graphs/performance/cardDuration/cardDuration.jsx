import "./cardDuration.scss";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { fetchUserAverageSessions } from "../../../../services/api";
import CustomCursor from "./customCursor.jsx";

const dayMap = {
  1: "L",
  2: "M",
  3: "M",
  4: "J",
  5: "V",
  6: "S",
  7: "D",
};

/**
 * CardDuration component displays a line chart representing the average session duration of a user.
 *
 * @component
 * @param {Object} props - Component props
 * @param {number} props.userId - The ID of the user to fetch session data for
 * @returns {JSX.Element} A line chart displaying the average session duration
 */
function CardDuration({ userId }) {
  const [sessionData, setSessionData] = useState([]);

  useEffect(() => {
    const getSessionData = async () => {
      const data = await fetchUserAverageSessions(userId);
      setSessionData(data.sessions);
    };

    getSessionData();
  }, [userId]);

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div
          className="custom-tooltip"
          style={{
            backgroundColor: "white",
            color: "black",
            padding: "10px",
            fontFamily: "Roboto",
            fontSize: "12px",
            fontWeight: "500",
          }}
        >
          <p>{`${payload[0].value} min`}</p>
        </div>
      );
    }

    return null;
  };

  CustomTooltip.propTypes = {
    active: PropTypes.bool,
    payload: PropTypes.arrayOf(PropTypes.object),
  };

  return (
    <div className="performance_cards_duration">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={sessionData}
          margin={{ top: 20, right: 20, left: -40, bottom: 20 }}
        >
          <defs>
            <linearGradient
              id="paint0_linear_2_122"
              x1="309.906"
              y1="-1.97779"
              x2="-47.7754"
              y2="-1.97779"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="white" />
              <stop
                offset="0.810441"
                stopColor="white"
                stopOpacity="0.403191"
              />
            </linearGradient>
          </defs>
          <text
            className="recharts-text"
            x={120}
            y={25}
            fill="pink"
            textAnchor="middle"
            dominantBaseline="central"
          >
            Durée moyenne des sessions
          </text>
          <XAxis
            dataKey="day"
            tickFormatter={(tick) => dayMap[tick]}
            tickLine={false}
            axisLine={false}
            stroke="#d3d3d3"
          />
          <YAxis tick={false} axisLine={false} />
          <Tooltip content={<CustomTooltip />} cursor={<CustomCursor />} />
          <Line
            type="monotone"
            dataKey="sessionLength"
            stroke="url(#paint0_linear_2_122)"
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

CardDuration.propTypes = {
  userId: PropTypes.number.isRequired,
};

export default CardDuration;
