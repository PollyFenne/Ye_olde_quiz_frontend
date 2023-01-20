// LOGIN user component

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./styles.css";

const url = "https://yeoldequiz.onrender.com";

// Fetching user data from API
async function loginUser(username, password) {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: username,
      password: password,
    }),
  };

  const response = await fetch(`${url}/users/login`, options);
  if (response.status == 200) {
    const data = await response.json();
    localStorage.setItem("session", data.session);
  }

  return response.status;
}

const Login = ({ handleRedirect }) => {
  const navigate = useNavigate();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const status = await loginUser(username, password);
    if (status == 200) {
      navigate("/", { replace: true });
    } else {
      document.getElementsByClassName("credentialsWarning")[0].style.display =
        "inherit";
    }
  };

  return (
    <>
      <h1 className="login-header">Login</h1>
      <div className="login">
        <form className="register-form" onSubmit={handleSubmit}>
          <div className="form-username">
            <label htmlFor="login-username" className="label"></label>
            <input
              type="text"
              className="form-input"
              id="login-username"
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
            />
          </div>
          <div className="form-password">
            <label htmlFor="login-password" className="label"></label>
            <input
              type="password"
              className="form-input"
              id="login-password"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
          </div>
          <button type="submit" className="login-btn">
            Login
          </button>
        </form>
      </div>
      <div className="redirect">
        <p className="login-link-text">
          Don't have an account?{" "}
          <span className="login-link" onClick={handleRedirect}>
            Register
          </span>
        </p>
      </div>
      <div className="credentialsWarning">
        <h2>Invalid Credentials</h2>
      </div>
    </>
  );
};

export default Login;
