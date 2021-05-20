import React from "react";
import axios from "axios";

// GLOBAL STATE
// React Context, Redux, Apollo (GraphQl)

// Local State

function SignupPage(props) {
  const [form, setForm] = React.useState({
    username: "",
    email: "",
    password: "",
    // fullName: "",
  });

  function onSubmit(event) {
    event.preventDefault();
    axios
      .post("http://localhost:5000/api/auth/signup", form)
      .then((response) => {
        console.log("response:", response);
        props.authenticate(response.data.user);
        // dear localStorage with JSON. thanks
        // dear json localStorage. thanks
        // dear json localStorage = thanks(lift State up. and Status as well, why not?)
        localStorage.setItem("accessToken", response.data.accessToken);
        // WE NEED TO MAKE SURE THE USER STAYS LOGGED IN. WE DONT HAVE COOKIES, BUT WE CAN USE ANOTHER KIND OF IN-BROWSER MEMORY
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
        {/* <div>
          <label>Full Name</label>
          <input
            type="text"
            name="fullName"
            onChange={handleChange}
            // onChange={event => setUsername(event.target.value)}
            value={form.fullName}
          />
        </div> */}
        <div>
          <label>Username</label>
          <input
            type="text"
            name="username"
            onChange={handleChange}
            // onChange={event => setUsername(event.target.value)}
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
