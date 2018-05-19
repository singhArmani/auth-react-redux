import * as React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import LoginForm from "../component/loginForm";
import LoginError from "../common/loginError";

import * as AuthActions from "../actions/auth";

class LoginPage extends React.PureComponent {
  static propTypes = {
    authenticated: PropTypes.bool.isRequired,
    isUserSigningIn: PropTypes.bool.isRequired,
    authError: PropTypes.string.isRequired,
    signInUser: PropTypes.func
  };
  render() {
    return (
      <div>
        <h2>Login</h2>
        <LoginForm
          signIn={this.props.signInUser}
          isUserSigningIn={this.props.isUserSigningIn}
        />{" "}
        {this.props.authError && <LoginError error={this.props.authError} />}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  authenticated: state.auth.authenticated,
  isUserSigningIn: state.auth.isUserSigningIn,
  authError: state.auth.error
});

const mapDispatchToProps = dispatch => ({
  signInUser: (username, password) => {
    dispatch(AuthActions.authenticateUser(username, password));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
