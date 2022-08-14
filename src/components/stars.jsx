import PropTypes from "prop-types";
import star_red from "../assets/star_red.png";
import star_grey from "../assets/star_grey.png";

function Stars({ rating }) {
  let stars = [];
  let star = "";
  for (let i = 0; i < 5; i++) {
    if (rating > i) {
      star = star_red;
    } else {
      star = star_grey;
    }
    stars.push(<img key={"star_index_" + i} src={star} alt="" />);
  }
  return <div className="component stars">{stars}</div>;
}

Stars.propTypes = {
  rating: PropTypes.number.isRequired,
};

export default Stars;
