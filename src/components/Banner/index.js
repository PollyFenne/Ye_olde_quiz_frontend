// Header/banner component

import React, { useState, useEffect } from "react";
import { NavLink, useNavigate, createSearchParams } from "react-router-dom";
import "./styles.css";

const url = "https://yeoldequiz.onrender.com";

const Banner = ({ isHome, displayBack }) => {
  const navigate = useNavigate();
  const sessionToken = localStorage.getItem("session");
  const [username, setUsername] = useState(null);

  const getUsername = async () => {
    try {
      const response = await fetch(`${url}/users/${sessionToken}`);
      const data = await response.json();
      setUsername(data.title);
    } catch (err) {
      console.log("no user logged in");
    }
  };

  const logout = async () => {
    try {
      const options = {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          sessionToken: sessionToken,
        }),
      };
      const response = await fetch(`${url}/users/logout`, options);
      localStorage.removeItem("session");
    } catch (err) {
      console.log("Could not log out");
    }
  };

  const handleLogin = () => {
    navigate("/login");
  };

  const handleRegister = () => {
    navigate("/login");
  };

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  useEffect(() => {
    getUsername();
  });


  return (
    <div className="banner">
      <div className="logo">
        <img src="../../../assets/images/Logo1.png" alt="Logo" height={"130px"} />
      </div>
      <div className="username">
        {username ? (
          <h1>Welcome back, {username}</h1>
        ) : (
          <h1>Welcome to Ye Old Quiz</h1>
        )}
        {isHome ? (
          <div className="home-banner">
            <h3>Create a new game or join an existing game!</h3>
          </div>
        ) : (
          <p></p>
        )}
        {displayBack ? (
          <NavLink className="back-button" to="/">
            <h3>Back to Homepage</h3>
          </NavLink>
        ) : (
          <p></p>
        )}
      </div>
      <div className="loginButtons">
        {!sessionToken && (
          <>
            <button type="button" onClick={handleLogin}>
              Login
            </button>
            <button type="button" onClick={handleRegister}>
              Register
            </button>
          </>
        )}
        {username && (
          <button type="button" onClick={handleLogout}>
            Logout
          </button>
        )}
      </div>
    </div>
  );
};

export default Banner;
