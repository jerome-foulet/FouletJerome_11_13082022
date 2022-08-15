import PropTypes from "prop-types";
import { useState } from "react";

function Collapse({ title, children }) {
  const [show, setShow] = useState(false);
  const [arrowClass, setArrowClass] = useState("arrow_down");

  function switchContent() {
    setShow(!show);
    setArrowClass(show ? "arrow_down" : "arrow_up");
  }

  return (
    <div className="component collapse">
      <div className={`collapse__title ` + arrowClass} onClick={switchContent}>
        {title}
      </div>
      <div
        className="collapse__content"
        style={{ display: show ? "block" : "none" }}
      >
        {children}
      </div>
    </div>
  );
}

Collapse.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Collapse;
