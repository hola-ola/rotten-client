import React from "react";
import axios from "axios";

function SignupPage(props) {
  console.log("props:", props);
  const [username, setUsername] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [form, setForm] = React.useState({
    username: "",
    email: "",
    password: "",
  });
  console.log("form:", form);

  function onSubmit(event) {
    event.preventDefault();
    axios
      .post("http://localhost:5000/api/auth/signup", {
        username,
        email,
        password,
      })
      .then((response) => {
        //   console.log("HURRAY", response.data);
        props.history.push("/");
      })
      .catch((err) => {
        console.log("err:", err.response);
      });
  }

  function handleUsernameChange(e) {
    if (e.target.name === "password") {
      setPassword(e.target.value);
    } else {
      setUsername(e.target.value);
    }
  }

  function handleChange(event) {
    console.log(event.target.value, event.target.name);
    //  const obk = { tom: "tommeeeeh" };
    //  const khrys = "tom";
    //  //  obk[khrys];
    //  const obj = {
    //    [khrys]: "tomeeh",
    //  };
    setForm({ [event.target.name]: event.target.value });
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
