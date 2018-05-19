import React from "react";
import { Router, Route, Switch } from "react-router-dom";

import NavBar from "./component/navbar";
import Dashboard from "./pages/dashboard";
import Contact from "./pages/contact";
import Home from "./pages/home";
import Login from "./pages/login";
import requireAuth from "./common/requireAuth";
import noRequireAuth from "./common/noRequireAuth";

import history from "./history";

class App extends React.PureComponent {
  render() {
    return (
      <Router history={history}>
        <div>
          <NavBar />

          <div className="container">
            <Switch>
              <Route exact path="/" component={requireAuth(Home)} />
              <Route path="/dashboard" component={requireAuth(Dashboard)} />
              <Route path="/contact" component={requireAuth(Contact)} />
              <Route path="/login" component={noRequireAuth(Login)} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}
export default App;
