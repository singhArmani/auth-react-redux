import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import App from "./app";
import Contact from "./pages/contact";
import Dashboard from "./pages/dashboard";
import Login from "./pages/login";
import Navbar from "./component/navbar";

export default (
  <Router>
    <div>
      <Route path="/" component={App} />
    </div>
  </Router>
);
