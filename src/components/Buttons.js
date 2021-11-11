import React from "react";
import PropTypes from "prop-types";

const Buttons = ({ color, text, onAdd }) => {
  return (
    <div className="button-container">
      <button
        className="btn"
        onClick={onAdd}
        style={{ backgroundColor: color }}
      >
        {" "}
        {text}{" "}
      </button>
    </div>
  );
};

Buttons.defaultProps = {
  text: "Add",
  color: "green",
};

Buttons.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string,
};

export default Buttons;
