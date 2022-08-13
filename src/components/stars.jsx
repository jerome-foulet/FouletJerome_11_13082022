import PropTypes from "prop-types";

function Stars({ rating }) {
  return <div>{rating}</div>;
}

Stars.propTypes = {
  rating: PropTypes.number.isRequired,
};

export default Stars;
