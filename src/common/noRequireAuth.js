import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { redirect } from "../services/redirect";
import * as session from "../services/session";
import appConfig from "../config";

export default function(ComposedComponent) {
  class NoAuthentication extends React.PureComponent {
    UNSAFE_componentWillMount() {
      // checking redux state, otherwise look for token in localStorage
      if (this.props.authenticated || session.isAuthenticated()) {
        redirect(appConfig.routes.DASHBOARD);
      }
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
      if (nextProps.authenticated) {
        redirect(appConfig.routes.DASHBOARD);
      }
    }

    render() {
      return <ComposedComponent {...this.props} />;
    }
  }
  const mapStateToProps = state => ({
    authenticated: state.auth.authenticated
  });

  NoAuthentication.propTypes = {
    authenticated: PropTypes.bool.isRequired
  };
  return connect(mapStateToProps)(NoAuthentication);
}
