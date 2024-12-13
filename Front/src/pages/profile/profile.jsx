import "./profile.scss";
import HeroBanner from "../../components/heroBanner/heroBanner";
import FoodKPI from "../../components/foodKPI/foodKPI";
import Performance from "../../components/graphs/performance/performance";

function Profile() {
  return (
    <div className="profile">
      <HeroBanner />
      <div className="profile_stats">
        <Performance />
        <FoodKPI />
      </div>
    </div>
  );
}

export default Profile;
