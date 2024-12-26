import useMockData from "./config"; // toggle Mock/Backend
import MockDataFormatter from "./mockService";
import BackendDataFormatter from "./backEndService";

const mockDataUrl = "/src/data/mockData.JSON"; // Mock Data
const backendUrl = "http://localhost:8000"; // Backend

const mockFormatter = new MockDataFormatter();
const backendFormatter = new BackendDataFormatter();

/**
 * Handles the fetch request and error handling.
 *
 * @param {string} url - The URL to fetch data from.
 * @param {function} formatter - The formatter function to format the data.
 * @param {function} navigate - The navigate function to redirect on error.
 * @returns {Promise<Object>} A promise that resolves to the formatted data.
 */
const handleFetch = async (url, formatter, navigate) => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      if (response.status === 500 || response.status === 404) {
        navigate("/error");
      }
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return formatter(data);
  } catch (error) {
    console.error("Error fetching data:", error);
    navigate("/error");
    throw error;
  }
};

/**
 * Fetches the main data for a specific user by their ID.
 *
 * @param {number} userId - The ID of the user whose data is to be fetched.
 * @param {function} navigate - The navigate function to redirect on error.
 * @returns {Promise<Object>} A promise that resolves to the user's main data object.
 */
async function fetchUserMainData(userId, navigate) {
  const url = useMockData ? mockDataUrl : `${backendUrl}/user/${userId}`;
  return handleFetch(
    url,
    useMockData
      ? mockFormatter.formatUserMainData
      : backendFormatter.formatUserMainData,
    navigate
  );
}

/**
 * Fetches the activity data for a specific user.
 *
 * @param {number} userId - The ID of the user whose activity data is to be fetched.
 * @param {function} navigate - The navigate function to redirect on error.
 * @returns {Promise<Object>} A promise that resolves to the user's activity data.
 */
async function fetchUserActivity(userId, navigate) {
  const url = useMockData
    ? mockDataUrl
    : `${backendUrl}/user/${userId}/activity`;
  return handleFetch(
    url,
    useMockData
      ? mockFormatter.formatUserActivity
      : backendFormatter.formatUserActivity,
    navigate
  );
}

/**
 * Fetches the average sessions for a specific user.
 *
 * @param {number} userId - The ID of the user.
 * @param {function} navigate - The navigate function to redirect on error.
 * @returns {Promise<Object>} A promise that resolves to the user's average sessions data.
 */
async function fetchUserAverageSessions(userId, navigate) {
  const url = useMockData
    ? mockDataUrl
    : `${backendUrl}/user/${userId}/average-sessions`;
  return handleFetch(
    url,
    useMockData
      ? mockFormatter.formatUserAverageSessions
      : backendFormatter.formatUserAverageSessions,
    navigate
  );
}

/**
 * Fetches the performance data for a specific user.
 *
 * @param {number} userId - The ID of the user whose performance data is to be fetched.
 * @param {function} navigate - The navigate function to redirect on error.
 * @returns {Promise<Object>} A promise that resolves to the user's performance data.
 */
async function fetchUserPerformance(userId, navigate) {
  const url = useMockData
    ? mockDataUrl
    : `${backendUrl}/user/${userId}/performance`;
  return handleFetch(
    url,
    useMockData
      ? mockFormatter.formatUserPerformance
      : backendFormatter.formatUserPerformance,
    navigate
  );
}

export {
  fetchUserMainData,
  fetchUserActivity,
  fetchUserAverageSessions,
  fetchUserPerformance,
};
