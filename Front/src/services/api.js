import useMockData from "./config"; // Basculer entre Mock et Backend
import MockDataFormatter from "./mockService";
import BackendDataFormatter from "./backEndService";

const mockDataUrl = "/src/data/mockData.JSON"; // Données Mock
const backendUrl = "http://localhost:8000"; // Backend

const mockFormatter = new MockDataFormatter();
const backendFormatter = new BackendDataFormatter();

/**
 * Gère la requête fetch et la gestion des erreurs.
 *
 * @param {string} url - L'URL pour récupérer les données.
 * @param {function} formatter - La fonction de formatage pour formater les données.
 * @param {function} navigate - La fonction de navigation pour rediriger en cas d'erreur.
 * @returns {Promise<Object>} Une promesse qui se résout avec les données formatées.
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
 * Récupère les données principales pour un utilisateur spécifique par son ID.
 *
 * @param {number} userId - L'ID de l'utilisateur dont les données doivent être récupérées.
 * @param {function} navigate - La fonction de navigation pour rediriger en cas d'erreur.
 * @returns {Promise<Object>} Une promesse qui se résout avec l'objet des données principales de l'utilisateur.
 */
async function fetchUserMainData(userId, navigate) {
  const url = useMockData ? mockDataUrl : `${backendUrl}/user/${userId}`;
  const formatter = useMockData
    ? mockFormatter.formatUserMainData
    : backendFormatter.formatUserMainData;
  return handleFetch(url, formatter, navigate, userId);
}

/**
 * Récupère les données d'activité pour un utilisateur spécifique.
 *
 * @param {number} userId - L'ID de l'utilisateur dont les données d'activité doivent être récupérées.
 * @param {function} navigate - La fonction de navigation pour rediriger en cas d'erreur.
 * @returns {Promise<Object>} Une promesse qui se résout avec les données d'activité de l'utilisateur.
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
 * Récupère les sessions moyennes pour un utilisateur spécifique.
 *
 * @param {number} userId - L'ID de l'utilisateur.
 * @param {function} navigate - La fonction de navigation pour rediriger en cas d'erreur.
 * @returns {Promise<Object>} Une promesse qui se résout avec les données des sessions moyennes de l'utilisateur.
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
 * Récupère les données de performance pour un utilisateur spécifique.
 *
 * @param {number} userId - L'ID de l'utilisateur dont les données de performance doivent être récupérées.
 * @param {function} navigate - La fonction de navigation pour rediriger en cas d'erreur.
 * @returns {Promise<Object>} Une promesse qui se résout avec les données de performance de l'utilisateur.
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
