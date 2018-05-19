import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import { Navbar, NavItem, Nav } from "react-bootstrap";

import * as AuthActions from "../actions/auth";
class Navigationbar extends React.PureComponent {
  static propTypes = {
    unauthenticate: PropTypes.func.isRequired,
    location: PropTypes.object.isRequired
  };
  handleLogOut = event => {
    this.props.unauthenticate();
  };
  render() {
    if (this.props.authenticated) {
      return (
        <Navbar>
          <Nav>
            <NavItem
              componentClass={Link}
              href="/"
              to="/"
              active={this.props.location.pathname === "/"}
            >
              Home
            </NavItem>
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
      return null;
    }
  }
}
const ConnectedNavBar = connect(
  state => ({ authenticated: state.auth.authenticated }),
  dispatch => ({
    unauthenticate: () => {
      dispatch(AuthActions.unauthenticate());
    }
  })
)(Navigationbar);
export default withRouter(ConnectedNavBar);
