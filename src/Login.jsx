import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const login = () => {
    localStorage.setItem("login", true);

    navigate("/");
  };
  const navigate = useNavigate();
  useEffect(() => {
    let login = localStorage.getItem("login");

    if (!login) {
      navigate("/");
    }
  });
  return (
    <>
      <h2>Login</h2>
      <input type="text" /> <br></br>
      <input type="text" /> <br></br>
      <button onClick={login}>Login</button>
    </>
  );
};

export default Login;
