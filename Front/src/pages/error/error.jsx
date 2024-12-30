import { Link } from "react-router-dom";
import "./error.scss";

/**
 * Error component that displays an error message.
 *
 * @returns {JSX.Element} The rendered error page.
 */
function Error() {
  return (
    <div className="error-page">
      <h1>Page introuvable</h1>
      <p>Oops! La page que vous recherchez n&apos;existe pas</p>
      <Link to="/">Retour à l&apos;accueil</Link>
    </div>
  );
}

export default Error;
