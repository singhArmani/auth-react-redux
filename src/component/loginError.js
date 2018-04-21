import React from "react";
import PropTypes from "prop-types";

const LoginError = ({ error }) => (
  <div className="alert alert-danger">
    <strong>{error}</strong>
  </div>
);

LoginError.propTypes = {
  error: PropTypes.string.isRequired
};

export default LoginError;
