import React from "react";

const loginAuth = Login => Home => () => {
  const token = localStorage.getItem("token");
  return token ? <Home /> : <Login />;
};

export default loginAuth;
