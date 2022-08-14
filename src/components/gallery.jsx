import PropTypes from "prop-types";
import arrow_left from "../assets/arrow_left.png";
import arrow_right from "../assets/arrow_right.png";
import { useState } from "react";

function Gallery({ arrayOfImg }) {
  const [currentIndex, updateCurrentIndex] = useState(0);
  let currentImage = arrayOfImg[currentIndex];
  return (
    <div className="component gallery">
      <img
        className="image"
        src={currentImage}
        alt={`Image ` + (currentIndex + 1)}
      />
      {arrayOfImg.length > 1 && (
        <div className="arrows">
          <img
            className="arrow_left"
            src={arrow_left}
            alt=""
            onClick={() =>
              updateCurrentIndex(
                currentIndex === 0 ? arrayOfImg.length - 1 : currentIndex - 1
              )
            }
          />
          <img
            className="arrow_right"
            src={arrow_right}
            alt=""
            onClick={() =>
              updateCurrentIndex(
                currentIndex === arrayOfImg.length - 1 ? 0 : currentIndex + 1
              )
            }
          />
        </div>
      )}
    </div>
  );
}

Gallery.propTypes = {
  arrayOfImg: PropTypes.array.isRequired,
};

export default Gallery;
