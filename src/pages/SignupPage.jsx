import React from "react";
import axios from "axios";

function SignupPage(props) {
  //   console.log("props:", props);
  const [username, setUsername] = React.useState("");
  console.log("username:", username);
  const [email, setEmail] = React.useState("");
  console.log("email:", email);
  const [password, setPassword] = React.useState("");
  console.log("password:", password);

  function onSubmit(event) {
    event.preventDefault();
    axios
      .post("http://localhost:5000/api/auth/signup", {
        username,
        email,
        password,
      })
      .then((response) => {
        console.log("HURRAY", response.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  function handleUsernameChange(e) {
    if (e.target.name === "password") {
      setPassword(e.target.value);
    } else {
      setUsername(e.target.value);
    }
  }

  return (
    <div>
      <h1>
        S<span style={{ fontSize: ".75rem" }}>I</span>gnup Page
      </h1>
      <form onSubmit={onSubmit}>
        <div>
          <label>Username</label>
          <input
            type="text"
            name="username"
            onChange={handleUsernameChange}
            value={username}
          />
        </div>
        <div>
          <label>Email</label>
          <input
            name="email"
            onChange={(event) => setEmail(event.target.value)}
            value={email}
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            name="password"
            onChange={(event) => setPassword(event.target.value)}
            value={password}
          />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default SignupPage;
