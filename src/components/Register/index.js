// REGISTER user component

import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

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
      document.getElementsByClassName("credentialsWarning")[0].style.display = "inherit"
    }
  };

  return (
    <>
      <div className="register">
        <h1>Please Register</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-username">
            <label htmlFor="register-username" className="label">
              Username
            </label>
            <input
              type="text"
              className="form-input"
              id="register-username"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="form-password">
            <label htmlFor="register-password" className="label">
              Password
            </label>
            <input
              type="password"
              className="form-input"
              id="register-password"
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
          Already have an account? Login{" "}
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

export default Register;
