// LOGIN user component

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const url = "http://localhost:3000";

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
    }
    else{
      document.getElementsByClassName("credentialsWarning")[0].style.display = "inherit"
    }
  };

  return (
    <>
      <div className="login">
        <h1>Please Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-username">
            <label htmlFor="login-username" className="label">
              Username
            </label>
            <input
              type="text"
              className="form-input"
              id="login-username"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="form-password">
            <label htmlFor="login-password" className="label">
              Password
            </label>
            <input
              type="password"
              className="form-input"
              id="login-password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="submit-btn">
            <button type="submit" className="btn">
              Submit
            </button>
          </div>
        </form>
      </div>
      <div className="redirect">
        <h2>
          Don't have an account? Register{" "}
          <span onClick={handleRedirect}>here</span>
        </h2>
      </div>
      <div className="credentialsWarning">
        <h2>
          Invalid Credentials
        </h2>
      </div>
    </>
  );
};

export default Login;
