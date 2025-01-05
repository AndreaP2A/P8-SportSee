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
const handleFetch = async (url, formatter, navigate, userId) => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      const error = new Error("Network response was not ok");
      error.status = response.status;
      throw error;
    }
    const data = await response.json();
    return formatter(data, userId);
  } catch (error) {
    console.error("Error fetching data:", error);
    navigate("/error", {
      state: { errorType: error.status === 404 ? "404" : "500" },
    });
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
  const formatter = useMockData
    ? mockFormatter.formatUserMainData
    : backendFormatter.formatUserMainData;
  return handleFetch(url, formatter, navigate, userId);
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
  const formatter = useMockData
    ? mockFormatter.formatUserActivity
    : backendFormatter.formatUserActivity;
  return handleFetch(url, formatter, navigate, userId);
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
  const formatter = useMockData
    ? mockFormatter.formatUserAverageSessions
    : backendFormatter.formatUserAverageSessions;
  return handleFetch(url, formatter, navigate, userId);
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
  const formatter = useMockData
    ? mockFormatter.formatUserPerformance
    : backendFormatter.formatUserPerformance;
  return handleFetch(url, formatter, navigate, userId);
}

export {
  fetchUserMainData,
  fetchUserActivity,
  fetchUserAverageSessions,
  fetchUserPerformance,
};
