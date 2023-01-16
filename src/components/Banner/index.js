// Header/banner component

import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./styles.css";

const Banner = ({ isHome, isCreate }) => {
  const navigate = useNavigate();

  const handleLogin = () =>{
      navigate("/login")
  }

  const handleRegister = () =>{
    navigate("/login")
}

  return (
    <div className="banner">
      <div className="logo">
        <img src="../../assets/images/Logo1.png" alt="Logo" height={"100px"} />
      </div>
      <div className="username">
        <h1>Hello, username...</h1>
        {isHome ? (
          <div className="home-banner">
            <h4>Create a new game or join an existing game!</h4>
            <h4>Logout</h4>
          </div>
        ) : (
          <p></p>
        )}
        {isCreate ? (
          <NavLink className="back-button" to="/">
            Back to Homepage
          </NavLink>
        ) : (
          <p></p>
        )}
      </div>
      <div className="loginButtons">
          <button type="button" onClick={handleLogin}>Login</button>
          <button type="button" onClick={handleRegister}>Register</button>
      </div>
    </div>
  );
};

export default Banner;
