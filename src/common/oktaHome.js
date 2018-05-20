import React, { Component } from 'react';
import { withAuth } from '@okta/okta-react';
import { Button } from 'react-bootstrap';
import { authSuccess } from '../actions/auth';
import store from '../store';

export default withAuth(
  class Home extends Component {
    constructor(props) {
      super(props);
      this.state = { authenticated: null, idToken: null, accessToken: null };
      this.checkAuthentication = this.checkAuthentication.bind(this);
      this.checkAuthentication();
    }

    async checkAuthentication() {
      const authenticated = await this.props.auth.isAuthenticated();
      if (authenticated !== this.state.authenticated) {
        // getting Idtoken
        const idToken = await this.props.auth.getIdToken();
        const accessToken = await this.props.auth.getAccessToken();
        this.setState({ authenticated, idToken, accessToken });
        store.dispatch(authSuccess(accessToken));
      }
    }

    componentDidUpdate() {
      this.checkAuthentication();
    }

    login = () => {
      this.props.auth.login('/okta');
    };

    logout = () => {
      this.props.auth.logout('/okta');
    };

    render() {
      if (this.state.authenticated === null) return null;
      return this.state.authenticated ? (
        <Button onClick={this.logout}>Log Out</Button>
      ) : (
        <Button bsStyle="primary" onClick={this.login}>
          Okta Login
        </Button>
      );
    }
  }
);
