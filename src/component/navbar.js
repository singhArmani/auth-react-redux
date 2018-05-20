import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { Navbar, NavItem, Nav } from 'react-bootstrap';
import { map } from 'lodash';

import * as AuthActions from '../actions/auth';
import config from '../config';

class Navigationbar extends React.PureComponent {
  static propTypes = {
    unauthenticate: PropTypes.func.isRequired,
    location: PropTypes.object.isRequired
  };
  handleLogOut = () => {
    this.props.unauthenticate();
  };

  getNavItems = (isPrivate = true) => {
    const navItems = isPrivate
      ? config.NavbarItems.private
      : config.NavbarItems.public;
    return map(Object.entries(navItems), ([key, value]) => {
      return (
        <NavItem
          key={key}
          componentClass={Link}
          href={value}
          to={value}
          active={this.props.location.pathname === value}
        >
          {key}
        </NavItem>
      );
    });
  };
  render() {
    if (this.props.authenticated) {
      return (
        <Navbar>
          <Nav>{this.getNavItems()}</Nav>
          <Nav pullRight>
            <NavItem onClick={this.handleLogOut}>Log Out</NavItem>
          </Nav>
        </Navbar>
      );
    } else {
      return (
        <Navbar>
          <Nav>{this.getNavItems(false)}</Nav>
        </Navbar>
      );
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
