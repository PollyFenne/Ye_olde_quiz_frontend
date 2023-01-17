// REGISTER user component

import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./styles.css";

const url = "http://localhost:3000";

const Register = ({ handleRedirect }) => {
  const navigate = useNavigate();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  // Sends data to API on form submit

  async function registerUser(username, password) {
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

    const response = await fetch(`${url}/users/register`, options);

    return response.status;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const status = await registerUser(username, password);
    // console.log(status)
    if (status == 201) {
      handleRedirect();
      navigate("/login", { replace: true });
    } else {
      document.getElementsByClassName("credentialsWarning")[0].style.display =
        "inherit";
    }
  };

  return (
    <>
      <h1 className="login-header">Register</h1>
      <div className="register">
        <form className="register-form" onSubmit={handleSubmit}>
          <div className="form-username">
            <label htmlFor="register-username" className="label"></label>
            <input
              type="text"
              className="form-input"
              id="register-username"
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
            />
          </div>
          <div className="form-password">
            <label htmlFor="register-password" className="label"></label>
            <input
              type="password"
              className="form-input"
              id="register-password"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
          </div>
          <button type="submit" className="register-btn">
            Register
          </button>
        </form>
      </div>
      <div className="redirect">
        <p className="login-link-text">
          Already have an account?{" "}
          <span className="login-link" onClick={handleRedirect}>
            Login
          </span>
        </p>
      </div>
      <div className="credentialsWarning">
        <h2>Invalid Credentials</h2>
      </div>
    </>
  );
};

export default Register;
