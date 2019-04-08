import React from "react";
import Login from "./components/Login";
import Home from "./components/Home";
import loginAuth from "./auth/loginAuth.js";
import { Route, withRouter } from "react-router-dom";

function App(props) {
  const Auth = loginAuth(Login)(Home);
  return (
    <div className="App">
      <Route path="/" render={props => <Auth {...props} />} />
    </div>
  );
}

export default withRouter(App);
