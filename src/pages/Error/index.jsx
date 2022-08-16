import { Link } from "react-router-dom";

function Error() {
  return (
    <div className="page error">
      <p className="code">404</p>
      <p className="message">
        Oups! La page que
        <br className="mobile-break" /> vous demandez n'existe pas.
      </p>
      <Link to="/" className="link">
        Retourner sur la page d’accueil
      </Link>
    </div>
  );
}

export default Error;
