import PropTypes from "prop-types";
import { useState } from "react";

function Collapse({ title, content }) {
  const [show, setShow] = useState(false);
  return (
    <div className="component collapse">
      <div
        className="collapse__title"
        onClick={() => {
          setShow(!show);
        }}
      >
        {title}
      </div>
      <p
        className="collapse__content"
        style={{ display: show ? "block" : "none" }}
      >
        {content}
      </p>
    </div>
  );
}

Collapse.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default Collapse;
