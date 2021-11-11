import React from "react";
import PropTypes from "prop-types";
import Buttons from "./Buttons";

const Header = ({ title, onAdd, addTasks }) => {
  return (
    <div className="header-container">
      <h1>{title}</h1>
      <Buttons
        color={addTasks ? "red" : "rebeccapurple"}
        text={addTasks ? "Close" : "Add"}
        onAdd={onAdd}
      />
    </div>
  );
};
// default prop and proptype declarations for easy debugging.

Header.defaultProps = {
  title: "Task Planner",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
