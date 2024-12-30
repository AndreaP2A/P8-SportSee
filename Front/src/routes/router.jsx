import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Home from "../pages/home/home.jsx";
import Profile from "../pages/profile/profile.jsx";
import Error from "../pages/error/error.jsx";
import Layout from "../layouts/layout.jsx";

/**
 * Retrieves the last stored user ID from local storage.
 * If no user ID is found, defaults to "12".
 *
 * @returns {string} The stored user ID or the default value "12".
 */
function getStoredUserId() {
  return localStorage.getItem("lastUserId") || "12"; // Default to user 12
}

/**
 * Redirects the user to their profile page based on the stored user ID.
 *
 * @returns {JSX.Element} A <Navigate> component that redirects to the user's profile.
 */
function RedirectToProfile() {
  const storedUserId = getStoredUserId();
  return <Navigate replace to={`/user/${storedUserId}`} />;
}

/**
 * AppRouter component sets up the routing for the application using React Router.
 * It includes routes for home, user profile, user activity, average sessions, performance,
 * settings, community, and a catch-all route for 404 errors.
 *
 * @component
 */
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
          <Route path="/user/:userId/activity" element={<Profile />} />
          <Route path="/user/:userId/average-sessions" element={<Profile />} />
          <Route path="/user/:userId/performance" element={<Profile />} />
          <Route path="/settings" element={<RedirectToProfile />} />
          <Route path="/community" element={<RedirectToProfile />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default AppRouter;
