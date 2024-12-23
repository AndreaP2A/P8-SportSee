import useMockData from "./config"; // toggle Mock/Backend
import MockDataFormatter from "./mockService";
import BackendDataFormatter from "./backEndService";

const mockDataUrl = "/src/data/mockData.JSON"; // Mock Data
const backendUrl = "http://localhost:8000"; // Backend

const mockFormatter = new MockDataFormatter();
const backendFormatter = new BackendDataFormatter();

/**
 * Fetches the main data for a specific user by their ID.
 *
 * @param {number} userId - The ID of the user whose data is to be fetched.
 * @returns {Promise<Object>} A promise that resolves to the user's main data object.
 */
async function fetchUserMainData(userId) {
  try {
    const response = await fetch(
      useMockData ? mockDataUrl : `${backendUrl}/user/${userId}`
    );
    const data = await response.json();
    return useMockData
      ? mockFormatter.formatUserMainData(data, userId)
      : backendFormatter.formatUserMainData(data);
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw error;
  }
}

/**
 * Fetches the activity data for a specific user.
 *
 * @param {number} userId - The ID of the user whose activity data is to be fetched.
 * @returns {Promise<Object>} A promise that resolves to the user's activity data.
 */
async function fetchUserActivity(userId) {
  const response = await fetch(
    useMockData ? mockDataUrl : `${backendUrl}/user/${userId}/activity`
  );
  const data = await response.json();
  return useMockData
    ? mockFormatter.formatUserActivity(data, userId)
    : backendFormatter.formatUserActivity(data);
}

/**
 * Fetches the average sessions for a specific user.
 *
 * @param {number} userId - The ID of the user.
 * @returns {Promise<Object>} A promise that resolves to the user's average sessions data.
 */
async function fetchUserAverageSessions(userId) {
  const response = await fetch(
    useMockData ? mockDataUrl : `${backendUrl}/user/${userId}/average-sessions`
  );
  const data = await response.json();
  return useMockData
    ? mockFormatter.formatUserAverageSessions(data, userId)
    : backendFormatter.formatUserAverageSessions(data);
}

/**
 * Fetches the performance data for a specific user.
 *
 * @param {number} userId - The ID of the user whose performance data is to be fetched.
 * @returns {Promise<Object>} A promise that resolves to the user's performance data.
 */
async function fetchUserPerformance(userId) {
  const response = await fetch(
    useMockData ? mockDataUrl : `${backendUrl}/user/${userId}/performance`
  );
  const data = await response.json();
  return useMockData
    ? mockFormatter.formatUserPerformance(data, userId)
    : backendFormatter.formatUserPerformance(data);
}

export {
  fetchUserMainData,
  fetchUserActivity,
  fetchUserAverageSessions,
  fetchUserPerformance,
};
