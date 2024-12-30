import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  fetchUserMainData,
  fetchUserActivity,
  fetchUserAverageSessions,
  fetchUserPerformance,
} from "../services/api";

/**
 * Custom hook to fetch user data based on the current URL path.
 *
 * @param {number} userId - The ID of the user whose data is to be fetched.
 * @returns {Object} An object containing userData and error.
 * @returns {Object|null} userData - The fetched user data or null if not yet fetched.
 * @returns {Object|null} error - The error object if an error occurred during fetching, otherwise null.
 */
const useFetchUserData = (userId) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let data;
        if (location.pathname.includes(`/user/${userId}/activity`)) {
          data = await fetchUserActivity(Number(userId), navigate);
        } else if (
          location.pathname.includes(`/user/${userId}/average-sessions`)
        ) {
          data = await fetchUserAverageSessions(Number(userId), navigate);
        } else if (location.pathname.includes(`/user/${userId}/performance`)) {
          data = await fetchUserPerformance(Number(userId), navigate);
        } else {
          data = await fetchUserMainData(Number(userId), navigate);
        }
        setUserData(data);
      } catch (error) {
        console.error("Error fetching user data:", error);
        if (
          error.response &&
          (error.response.status === 404 || error.response.status === 500)
        ) {
          if (
            location.pathname.includes(`/user/${userId}/activity`) ||
            location.pathname.includes(`/user/${userId}/average-sessions`) ||
            location.pathname.includes(`/user/${userId}/performance`)
          ) {
            setError(error);
          } else {
            navigate("/error");
          }
        } else {
          setError(error);
        }
      }
    };

    fetchData();
  }, [userId, location, navigate]);

  return { userData, error };
};

export default useFetchUserData;
