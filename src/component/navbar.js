import React from "react";

import { Link, withRouter } from "react-router-dom";
import { Navbar, NavItem, Nav } from "react-bootstrap";

const Navigationbar = ({ location, isAuthenticated }) => {
  if (isAuthenticated) {
    return (
      <Navbar>
        <Nav>
          <NavItem
            componentClass={Link}
            href="/dashboard"
            to="/dashboard"
            active={location.pathname === "/dashboard"}
          >
            Dashboard
          </NavItem>
          <NavItem
            componentClass={Link}
            href="/contact"
            to="/contact"
            active={location.pathname === "/contact"}
          >
            Contact
          </NavItem>
        </Nav>
      </Navbar>
    );
  } else {
    return (
      <Navbar>
        <Nav pullRight>
          <NavItem
            componentClass={Link}
            href="/login"
            to="/login"
            active={location.pathname === "/login"}
          >
            Login
          </NavItem>
        </Nav>
      </Navbar>
    );
  }
};

export default withRouter(Navigationbar);
