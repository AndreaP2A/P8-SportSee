import "./profile.scss";
import { useEffect, useState } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import HeroBanner from "../../components/heroBanner/heroBanner";
import FoodKPI from "../../components/foodKPI/foodKPI";
import Performance from "../../components/graphs/performance/performance";
import { fetchUserMainData } from "../../services/api";
import calorieIcon from "../../assets/icon_calories.png";
import proteinIcon from "../../assets/icon_proteines.png";
import carbohydrateIcon from "../../assets/icon_glucides.png";
import lipidIcon from "../../assets/icon_lipides.png";

function Profile() {
  const { userId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [keyData, setKeyData] = useState({});

  useEffect(() => {
    if (userId && location.pathname.includes("/profile")) {
      localStorage.setItem("lastUserId", userId);
    }
    const getUserData = async () => {
      try {
        const data = await fetchUserMainData(Number(userId), navigate);
        setFirstName(data.userInfos.firstName);
        setKeyData(data.keyData);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    getUserData();
  }, [userId, location, navigate]);

  if (
    !keyData.calorieCount ||
    !keyData.proteinCount ||
    !keyData.carbohydrateCount ||
    !keyData.lipidCount
  ) {
    return <div>Veuillez patienter...</div>;
  }

  return (
    <div className="profile">
      <HeroBanner firstName={firstName} />
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
