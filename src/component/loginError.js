import React from "react";
import PropTypes from "prop-types";
import { Alert } from "react-bootstrap";

const LoginError = ({ error }) => <Alert bsStyle="danger">{error}</Alert>;

LoginError.propTypes = {
  error: PropTypes.string.isRequired
};

export default LoginError;
