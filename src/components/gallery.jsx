import PropTypes from "prop-types";

function Gallery({ arrayOfImg }) {
  return <div>Gallery : {arrayOfImg.join(" ------------------- ")}</div>;
}

Gallery.propTypes = {
  arrayOfImg: PropTypes.array.isRequired,
};

export default Gallery;
