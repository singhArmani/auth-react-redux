import React from "react";
import { Router, Route } from "react-router-dom";
import history from "./history";

//Ref: https://stackoverflow.com/questions/42672842/how-to-get-history-on-react-router-v4

import App from "./app";
export default (
  <Router history={history}>
    <div>
      <Route path="/" component={App} />
    </div>
  </Router>
);
