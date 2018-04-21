import React from "react";

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
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            className="form-control"
            name="username"
            value={this.state.username}
            onChange={this.handleChange}
            placeholder="Enter username"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control"
            name="password"
            placeholder="Password"
            onChange={this.handleChange}
            value={this.state.password}
          />
        </div>
        <button
          type="button"
          className="btn btn-primary btn-lg btn-block"
          onClick={this.handleSignIn}
        >
          Sign In
        </button>
      </form>
    );
  }
}

export default LoginForm;
