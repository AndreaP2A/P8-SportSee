import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Home from "../pages/home/home.jsx";
import Profile from "../pages/profile/profile.jsx";
import Error404 from "../pages/error404/error404.jsx";
import Layout from "../layouts/layout.jsx";

function getStoredUserId() {
  return localStorage.getItem("lastUserId") || "12"; // Default to user 12
}

function RedirectToProfile() {
  const storedUserId = getStoredUserId();
  return <Navigate replace to={`/user/${storedUserId}`} />;
}

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
          <Route path="/user/:userId" element={<Profile />} />
          <Route path="/settings" element={<RedirectToProfile />} />
          <Route path="/community" element={<RedirectToProfile />} />
          <Route path="*" element={<Error404 />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default AppRouter;
