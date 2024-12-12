import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Home from "../pages/home/home.jsx";
import Profile from "../pages/profile/profile.jsx";
import Settings from "../pages/settings/settings.jsx";
import Community from "../pages/community/community.jsx";
import Error404 from "../pages/error404/error404.jsx";
import Layout from "../layouts/layout.jsx";

function AppRouter() {
  return (
    <Router
      future={{
        // Future proofing (otherwise : warning flags)
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
    >
      <Routes>
        <Route path="/" element={<Navigate replace to="/home" />} />
        <Route path="/" element={<Layout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/community" element={<Community />} />
          <Route path="*" element={<Error404 />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default AppRouter;
