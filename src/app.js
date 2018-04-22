import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Contact from "./pages/contact";
import Dashboard from "./pages/dashboard";
import Login from "./pages/login";

const App = () => (
  <Router>
    <div className="container">
      <ul>
        <li>
          <Link to="/">Dashboard</Link>
        </li>
        <li>
          <Link to="/Contact">Contact</Link>
        </li>
      </ul>

      <hr />
      <Route exact path="/" component={Dashboard} />
      <Route path="/contact" component={Contact} />
      <Route path="/login" component={Login} />
    </div>
  </Router>
);

export default App;
