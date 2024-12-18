import "./cardScore.scss";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { fetchUserMainData } from "../../../../services/api";

function CardScore({ userId }) {
  const [todayScore, setTodayScore] = useState(0);

  useEffect(() => {
    const getUserData = async () => {
      const data = await fetchUserMainData(userId);
      setTodayScore(data.todayScore || data.score); // pour gérer le user où todayScore = score
    };

    getUserData();
  }, [userId]);

  const percentage = todayScore * 100;
  const radius = 50;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="performance_cards_score">
      <h2 className="score_title">Score</h2>
      <svg
        className="score_graph"
        width="120"
        height="120"
        viewBox="0 0 120 120"
      >
        <circle
          cx="60"
          cy="60"
          r={radius}
          stroke="#e6e6e6"
          strokeWidth="10"
          fill="none"
        />
        <circle
          cx="60"
          cy="60"
          r={radius}
          stroke="#ff0000"
          strokeWidth="10"
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          transform="rotate(-90 60 60)"
        />
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dy="-10"
          fontSize="16"
          fill="#000"
          fontWeight={500}
        >
          {`${percentage}%`}
        </text>
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dy="10"
          fontSize="10"
          fill="#74798C"
        >
          de votre
        </text>
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dy="25"
          fontSize="10"
          fill="#74798C"
        >
          objectif
        </text>
      </svg>
    </div>
  );
}

CardScore.propTypes = {
  userId: PropTypes.number.isRequired,
};

export default CardScore;
