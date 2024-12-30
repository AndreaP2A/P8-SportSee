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
 * Profile component fetches and displays user data based on the userId from the URL.
 * It shows a loading message while fetching data and handles errors.
 * If the URL matches specific paths, it displays the raw user data.
 * Otherwise, it displays the user's profile information including performance and food KPIs.
 *
 * @returns {JSX.Element} The rendered profile component.
 */
function Profile() {
  const { userId } = useParams();
  const { userData, error } = useFetchUserData(userId);

  if (error) return <div>Error fetching user data</div>;
  if (!userData) return <div>Veuillez patienter...</div>;

  if (
    location.pathname.includes(`/user/${userId}/activity`) ||
    location.pathname.includes(`/user/${userId}/average-sessions`) ||
    location.pathname.includes(`/user/${userId}/performance`)
  ) {
    return (
      <div>
        <pre>{JSON.stringify(userData, null, 2)}</pre>
      </div>
    );
  }

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
