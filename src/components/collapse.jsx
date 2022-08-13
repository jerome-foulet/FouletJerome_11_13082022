import PropTypes from "prop-types";

function Collapse({ title, content }) {
  return (
    <div>
      Collapse : {title} and content : {content}
    </div>
  );
}

Collapse.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.isRequired,
};

export default Collapse;
