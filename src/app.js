import React from "react";
import { Router, Route, Switch } from "react-router-dom";

import NavBar from "./component/navbar";
import Dashboard from "./pages/dashboard";
import Contact from "./pages/contact";
import Home from "./pages/home";
import Login from "./pages/login";
import PropViewer from "./pages/propViewer";
import requireAuth from "./common/requireAuth";
import noRequireAuth from "./common/noRequireAuth";

import history from "./history";
import config from "./config";

class App extends React.PureComponent {
  render() {
    return (
      <Router history={history}>
        <div>
          <NavBar />

          <div className="container">
            <Switch>
              <Route exact path="/" component={requireAuth(Home)} />
              <Route
                path={config.routes.DASHBOARD}
                component={requireAuth(Dashboard)}
              />
              <Route
                path={config.routes.CONTACT}
                component={requireAuth(Contact)}
              />
              <Route
                path={config.routes.LOGIN}
                component={noRequireAuth(Login)}
              />
              <Route
                path={config.routes.PROPS}
                component={requireAuth(PropViewer)}
              />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}
export default App;
