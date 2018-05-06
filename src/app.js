import React from "react";
import { Router, Route } from "react-router-dom";
import { connect } from "react-redux";
import NavBar from "./component/navbar";
import Dashboard from "./pages/dashboard";
import Contact from "./pages/contact";
import Home from "./pages/home";
import Login from "./pages/login";
import * as AuthActions from "./actions/auth";
import history from "./history";

class App extends React.PureComponent {
  render() {
    return (
      <Router history={history}>
        <div>
          <NavBar
            isAuthenticated={this.props.authenticated}
            logOut={this.props.unauthenticate}
          />

          <div className="container">
            <Route exact path="/" component={Home} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/contact" component={Contact} />
            <Route path="/login" component={Login} />
          </div>
        </div>
      </Router>
    );
  }
}

export default connect(
  state => ({
    authenticated: state.auth.authenticated
  }),
  dispatch => ({
    unauthenticate: () => {
      dispatch(AuthActions.unauthenticate());
    }
  })
)(App);
