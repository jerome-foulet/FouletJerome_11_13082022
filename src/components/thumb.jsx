import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Thumb({ label, id, cover }) {
  return (
    <li className="component thumb">
      <article>
        <Link to={`/accommodation/${id}`}>
          <img src={cover} alt={`cover for` + id} />
          <h2>{label}</h2>
        </Link>
      </article>
    </li>
  );
}

Thumb.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Thumb;
