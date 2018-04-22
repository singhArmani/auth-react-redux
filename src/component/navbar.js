import React from "react";
import PropTypes from "prop-types";
import { Link, withRouter } from "react-router-dom";
import { Navbar, NavItem, Nav } from "react-bootstrap";

class Navigationbar extends React.PureComponent {
  static propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    location: PropTypes.object.isRequired
  };
  handleLogOut = event => {
    this.props.logOut();
  };
  render() {
    if (this.props.isAuthenticated) {
      return (
        <Navbar>
          <Nav>
            <NavItem
              componentClass={Link}
              href="/dashboard"
              to="/dashboard"
              active={this.props.location.pathname === "/dashboard"}
            >
              Dashboard
            </NavItem>
            <NavItem
              componentClass={Link}
              href="/contact"
              to="/contact"
              active={this.props.location.pathname === "/contact"}
            >
              Contact
            </NavItem>
          </Nav>
          <Nav pullRight>
            <NavItem onClick={this.handleLogOut}>Log Out</NavItem>
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
              active={this.props.location.pathname === "/login"}
            >
              Login
            </NavItem>
          </Nav>
        </Navbar>
      );
    }
  }
}

export default withRouter(Navigationbar);
