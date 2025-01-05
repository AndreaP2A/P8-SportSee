import { useLocation, Link } from "react-router-dom";
import "./error.scss";

/**
 * Error component that displays an error message.
 *
 * @returns {JSX.Element} The rendered error page.
 */
function Error() {
  const location = useLocation();
  const errorType = location.state?.errorType;

  return (
    <div className="error-page">
      {errorType === "404" ? (
        <>
          <h1>Page introuvable</h1>
          <p>Oops! La page que vous recherchez n&apos;existe pas.</p>
        </>
      ) : (
        <>
          <h1>Erreur du serveur</h1>
          <p>
            Oops! Une erreur s&apos;est produite sur le serveur, nous nous
            excusons pour la gêne occasionnée.
          </p>
        </>
      )}
      <Link to="/">Retour à l&apos;accueil</Link>
    </div>
  );
}

export default Error;
