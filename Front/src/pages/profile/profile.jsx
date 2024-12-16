import "./profile.scss";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import HeroBanner from "../../components/heroBanner/heroBanner";
import FoodKPI from "../../components/foodKPI/foodKPI";
import Performance from "../../components/graphs/performance/performance";
import { fetchUserMainData } from "../../services/api";

function Profile() {
  const { userId } = useParams();
  const [firstName, setFirstName] = useState("");

  useEffect(() => {
    const getUserData = async () => {
      const data = await fetchUserMainData(Number(userId));
      setFirstName(data.userInfos.firstName);
    };

    getUserData();
  }, [userId]);

  return (
    <div className="profile">
      <HeroBanner firstName={firstName} />
      <div className="profile_stats">
        <Performance userId={Number(userId)} />
        <FoodKPI />
      </div>
    </div>
  );
}

export default Profile;
