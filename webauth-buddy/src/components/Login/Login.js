import React, { useState } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";

import styles from "./styles.module.scss";

function Login(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [department, setDepartment] = useState("");

  const handleSubmit = (e, context) => {
    e.preventDefault();
    const endpoint = `http://localhost:5000/api/auth/${context}`;
    let postData = { username, password };
    if (context === "register") {
      postData.department = department;
    }

    axios
      .post(endpoint, postData)
      .then(res => {
        if (res && res.data && res.data.token) {
          localStorage.setItem("token", res.data.token);
          props.history.push("/");
        } else {
          console.log("Login error");
        }
      })
      .catch(err => console.log(err));
  };
  return (
    <form>
      <div>
        <label>Username:</label>
        <input
          type="text"
          name="username"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
      </div>
      <div>
        <label>Department:</label>
        <input
          type="text"
          name="department"
          value={department}
          onChange={e => setDepartment(e.target.value)}
        />
      </div>
      <div>
        <button type="submit" onClick={e => handleSubmit(e, "register")}>
          Create Account
        </button>
        <button type="submit" onClick={e => handleSubmit(e, "login")}>
          Login
        </button>
      </div>
    </form>
  );
}

export default withRouter(Login);
