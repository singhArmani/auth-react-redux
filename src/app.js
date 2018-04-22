import React from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import NavBar from "./component/navbar";
import Dashboard from "./pages/dashboard";
import Contact from "./pages/contact";
import Login from "./pages/login";
import requireAuth from "./common/requireAuth";
import noRequireAuth from "./common/noRequireAuth";

class App extends React.PureComponent {
  render() {
    return (
      <div>
        <NavBar isAuthenticated={this.props.authenticated} />

        <div className="container">
          <Route exact path="/dashboard" component={requireAuth(Dashboard)} />
          <Route path="/contact" component={requireAuth(Contact)} />
          <Route path="/login" component={noRequireAuth(Login)} />
        </div>
      </div>
    );
  }
}

export default connect(state => ({
  authenticated: state.auth.authenticated
}))(App);
