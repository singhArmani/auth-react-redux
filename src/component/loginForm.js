import React from "react";
import { ControlLabel, Button, FormGroup, FormControl } from "react-bootstrap";
class LoginForm extends React.PureComponent {
  state = {
    username: "",
    password: ""
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };
  handleSignIn = () => {
    this.props.signIn(this.state.username, this.state.password);
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
        <Button bsStyle="primary" onClick={this.handleSignIn}>
          Sign in
        </Button>
      </form>
    );
  }
}

export default LoginForm;
