import React from "react";
import PropTypes from "prop-types";

const PropViewer = ({ match }) => {
  return <h2> {match.path} </h2>;
};

PropViewer.propTypes = {
  match: PropTypes.shape({
    path: PropTypes.string
  })
};

export default PropViewer;
