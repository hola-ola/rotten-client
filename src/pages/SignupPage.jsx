import React from "react";
import axios from "axios";

function SignupPage(props) {
  const [form, setForm] = React.useState({
    username: "",
    email: "",
    password: "",
  });

  function onSubmit(event) {
    event.preventDefault();
    axios
      .post("http://localhost:5000/api/auth/signup", form)
      .then((response) => {
        props.authenticate(response.data.user);
        props.history.push("/");
      })
      .catch((err) => {
        console.log("err:", err.response); // this is in axios errors
      });
  }

  function handleChange(event) {
    setForm({ ...form, [event.target.name]: event.target.value });
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
            onChange={handleChange}
            value={form.username}
          />
        </div>
        <div>
          <label>Email</label>
          <input name="email" onChange={handleChange} value={form.email} />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            name="password"
            onChange={handleChange}
            value={form.password}
          />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default SignupPage;
