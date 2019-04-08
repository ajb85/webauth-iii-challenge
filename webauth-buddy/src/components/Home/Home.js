import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";

function Home(props) {
  console.log("Home: ", props);
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const endpoint = "http://localhost:5000/api/users";
    const token = localStorage.getItem("token");
    const reqOptions = {
      headers: { authorization: token }
    };
    axios
      .get(endpoint, reqOptions)
      .then(res => setUsers(res.data))
      .catch(err => console.log(err));
  }, []);
  const logout = () => {
    localStorage.removeItem("token");
    props.history.push("/");
  };
  const userlist = users.map(user => (
    <div>
      <p>
        {user.username}, {user.department}
      </p>
    </div>
  ));
  return (
    <div>
      <button type="button" onClick={() => logout()}>
        Logout
      </button>
      {userlist}
    </div>
  );
}

export default withRouter(Home);
