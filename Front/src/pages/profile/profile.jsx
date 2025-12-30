import { useNavigate } from "react-router-dom";
import "./profile.scss";
import { useParams } from "react-router-dom";
import useFetchUserData from "../../hooks/useFetchUserData";
import HeroBanner from "../../components/heroBanner/heroBanner";
import FoodKPI from "../../components/foodKPI/foodKPI";
import Performance from "../../components/graphs/performance/performance";
import calorieIcon from "../../assets/icon_calories.png";
import proteinIcon from "../../assets/icon_proteines.png";
import carbohydrateIcon from "../../assets/icon_glucides.png";
import lipidIcon from "../../assets/icon_lipides.png";

/**
 * Le composant Profile récupère et affiche les données de l'utilisateur basées sur l'userId de l'URL.
 * Il affiche un message de chargement pendant la récupération des données et gère les erreurs.
 * Il affiche les informations du profil de l'utilisateur, y compris les performances et les indicateurs nutritionnels (KPI).
 *
 * @returns {JSX.Element} Le composant de profil rendu.
 */
function Profile() {
  const { userId } = useParams();
  const navigate = useNavigate();
  const { userData, error } = useFetchUserData(userId);

  if (error) {
    const errorType = error.status === 404 ? "404" : "500";
    return navigate("/error", { state: { errorType } });
  }
  if (!userData) return <div>Veuillez patienter...</div>;

  const { userInfos, keyData } = userData;

  if (!userInfos || !keyData) return <div>Invalid user data</div>;

  return (
    <div className="profile">
      <HeroBanner firstName={userInfos.firstName} />
      <div className="profile_stats">
        <Performance userId={Number(userId)} />
        <div className="profile_foodKPI">
          <FoodKPI
            label="Calories"
            value={keyData.calorieCount}
            unit="kCal"
            iconSrc={calorieIcon}
            bgColor="#FBEAEA"
          />
          <FoodKPI
            label="Protéines"
            value={keyData.proteinCount}
            unit="g"
            iconSrc={proteinIcon}
            bgColor="#E9F4FB"
          />
          <FoodKPI
            label="Glucides"
            value={keyData.carbohydrateCount}
            unit="g"
            iconSrc={carbohydrateIcon}
            bgColor="#FAF6E5"
          />
          <FoodKPI
            label="Lipides"
            value={keyData.lipidCount}
            unit="g"
            iconSrc={lipidIcon}
            bgColor="#FBEAEF"
          />
        </div>
      </div>
    </div>
  );
}

export default Profile;
