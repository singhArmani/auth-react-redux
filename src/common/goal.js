import React from "react";
import PropTypes from "prop-types";

const Goal = props => {
  return <li>{props.goal}</li>;
};

Goal.propTypes = {
  goal: PropTypes.string.isRequired
};

export default Goal;
