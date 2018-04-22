import React from "react";
import { connect } from "react-redux";
import { bool, func } from "prop-types";

import * as session from "../services/session";
import { redirect } from "../services/redirect";

import * as AuthActions from "../actions/auth";
import appConfig from "../config";

export default function(ComposedComponent) {
  class Authentication extends React.Component {
    componentWillMount() {
      // First check if we are authenticated in redux
      if (this.props.authenticated) {
        return;
      }

      // If we are not authenticated in redux (page refresh), check storage.
      // If token exists, update application state.
      if (session.isAuthenticated()) {
        const token = session.getToken();

        // update the redux state
        this.props.authSuccess(token);
      } else {
        this.props.unauthenticate();

        // redirecting the user to login page
        redirect(appConfig.routes.LOGIN);
      }
    }

    componentWillUpdate(nextProps) {
      // If the user is not authenticated, there is no token or the token is invalid, sign out the user and redirect
      // to the sign in page
      if (!nextProps.authenticated || !session.isAuthenticated()) {
        this.props.unauthenticate();
        redirect(appConfig.routes.LOGIN);
        return;
      }

      // If user if authenticated
      //Here we can also have the opportunity to call the refreshToken call by comparing if route has changed
      //TODO: implement RefreshToken call here
    }

    render() {
      return this.props.authenticated ? (
        <ComposedComponent {...this.props} />
      ) : null;
    }
  }

  const mapStateToProps = state => ({
    authenticated: state.auth.authenticated
  });

  const mapDispatchToProps = dispatch => ({
    unauthenticate: () => {
      dispatch(AuthActions.unauthenticate());
    },
    authSuccess: token => {
      dispatch(AuthActions.authSuccess(token));
    }
  });

  Authentication.propTypes = {
    authenticated: bool.isRequired,
    unauthenticate: func.isRequired,
    authSuccess: func.isRequired
  };

  return connect(mapStateToProps, mapDispatchToProps)(Authentication);
}
