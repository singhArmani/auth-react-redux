import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
// using okta as OpenID Provider (Auth Server) implict flow https://developer.okta.com/quickstart/#/react/nodejs/express
import { Security, ImplicitCallback } from '@okta/okta-react';

import history from './history';
import oktaHome from './common/oktaHome';

const config = {
  issuer: 'https://dev-252245.oktapreview.com/oauth2/default',
  redirect_uri: window.location.origin + '/implicit/callback',
  client_id: '0oaf33dka7KoyNzLX0h7'
};
class App extends React.PureComponent {
  render() {
    return (
      <Router history={history}>
        <div className="container">
          <Switch>
            <Security
              issuer={config.issuer}
              client_id={config.client_id}
              redirect_uri={config.redirect_uri}
            >
              <Route path="/okta" exact={true} component={oktaHome} />
              <Route path="/implicit/callback" component={ImplicitCallback} />
            </Security>
          </Switch>
        </div>
      </Router>
    );
  }
}
export default App;
