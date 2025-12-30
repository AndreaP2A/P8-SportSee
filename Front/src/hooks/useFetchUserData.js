import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchUserMainData } from "../services/api";

/**
 * Hook personnalisé pour récupérer les données utilisateur en fonction de l'ID fourni.
 *
 * @param {number} userId - L'ID de l'utilisateur dont les données doivent être récupérées.
 * @returns {Object} Un objet contenant userData et error.
 * @returns {Object|null} userData - Les données utilisateur récupérées ou null si pas encore récupérées.
 * @returns {Object|null} error - L'objet d'erreur si une erreur survient, sinon null.
 */
const useFetchUserData = (userId) => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchUserMainData(Number(userId), navigate);
        setUserData(data);
      } catch (error) {
        console.error("Error fetching user data:", error);
        if (
          error.response &&
          (error.response.status === 404 || error.response.status === 500)
        ) {
          navigate("/error");
        } else {
          setError(error);
        }
      }
    };

    fetchData();
  }, [userId, navigate]);

  return { userData, error };
};

export default useFetchUserData;
