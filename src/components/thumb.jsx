import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Thumb({ label, id }) {
  return (
    <li>
      <Link to={`/accommodation/${id}`}>
        Thumb : {label} et id : {id}
      </Link>
    </li>
  );
}

Thumb.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Thumb;
