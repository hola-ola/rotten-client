import axios from "axios";
import React, { Component } from "react";

class Login extends Component {
  state = {
    username: "",
    password: "",
  };

  componentDidMount = () => {
    console.log(this);
  };

  onChange = (event) => {
    //   setState({...state, [event.target.name]:event.target.value})
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (e) => {
    //   systemOverrideThing()
    e.preventDefault();

    axios
      .post("http://localhost:5000/api/auth/login", this.state)
      .then((response) => {
        console.log("response:", response);
        //   response.data.accessToken // sessionId

        localStorage.setItem("accessToken", response.data.accessToken);
        this.props.authenticate(response.data.user);
        this.props.history.push("/");
      })
      .catch((err) => {
        console.error(err.response);
      });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Username</label>
            <input
              type="text"
              name="username"
              value={this.state.username}
              onChange={this.onChange}
            />
          </div>
          <div>
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.onChange}
            />
          </div>
          <button>LOGIN</button>
        </form>
      </div>
    );
  }
}

export default Login;
