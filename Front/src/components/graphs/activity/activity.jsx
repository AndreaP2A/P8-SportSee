import "./activity.scss";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { fetchUserActivity } from "../../../services/api";

function Activity({ userId }) {
  const [activityData, setActivityData] = useState(null);

  // Hook : Fetch and set user activity data when userId changes
  useEffect(() => {
    const getActivityData = async () => {
      const data = await fetchUserActivity(userId);
      setActivityData(data.sessions);
    };

    getActivityData();
  }, [userId]);

  if (!activityData) {
    return <div>Loading...</div>;
  }

  const formattedData = activityData.map((session) => ({
    day: new Date(session.day).toLocaleDateString("en-US", {
      weekday: "short",
    }),
    kilogram: session.kilogram,
    calories: session.calories,
  }));

  return (
    <section className="performance_activity">
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={formattedData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="kilogram" fill="#8884d8" name="Weight (kg)" />
          <Bar dataKey="calories" fill="#82ca9d" name="Calories (kcal)" />
        </BarChart>
      </ResponsiveContainer>
    </section>
  );
}

Activity.propTypes = {
  userId: PropTypes.number.isRequired,
};

export default Activity;
