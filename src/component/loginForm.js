import React from "react";
import { bool } from "prop-types";
import { ControlLabel, Button, FormGroup, FormControl } from "react-bootstrap";
class LoginForm extends React.PureComponent {
  state = {
    username: "",
    password: ""
  };

  static propTypes = {
    isUserSigningIn: bool.isRequired
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleSignIn = () => {
    // sending history object along so that we can redirect upon auth success
    this.props.signIn(
      this.state.username,
      this.state.password,
      this.props.history
    );
  };
  render() {
    return (
      <form>
        <FormGroup controlId="formHorizontalEmail">
          <ControlLabel>Username</ControlLabel>
          <FormControl
            type="text"
            name="username"
            value={this.state.username}
            onChange={this.handleChange}
            placeholder="Your username"
          />
        </FormGroup>

        <FormGroup controlId="formHorizontalPassword">
          <ControlLabel>Password</ControlLabel>
          <FormControl
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
            placeholder="Your password"
          />
        </FormGroup>
        <Button
          bsStyle="primary"
          disabled={this.props.isUserSigningIn}
          onClick={this.handleSignIn}
        >
          Sign In
        </Button>
      </form>
    );
  }
}

export default LoginForm;
