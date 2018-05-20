import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import NavBar from './component/navbar';
import Dashboard from './pages/dashboard';
import Contact from './pages/contact';
import Home from './pages/home';
import Login from './pages/login';
import PropViewer from './pages/propViewer';
import requireAuth from './common/requireAuth';
import noRequireAuth from './common/noRequireAuth';

import history from './history';
import config from './config';
import ColorSwatch from './component/colorSwatch';
import SmartColorSwatch from './component/smartColorSwatch';

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
              <Route path={config.routes.PROPS} component={PropViewer} />
              <Route
                exact
                path={config.routes.COLOR}
                render={() => <ColorSwatch text="Red" color="#ff0000" />}
              />
              <Route path="/:text/:color" component={SmartColorSwatch} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}
export default App;
