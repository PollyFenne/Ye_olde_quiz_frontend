// LOGIN and REGISTER webpage

import React from "react";
import { useState } from "react";

import "./styles.css";
import Login from "../../components/Login/index.js";
import Register from "../../components/Register";

const LoginRegister = () => {

    const [showRegister, setShowRegister] = useState(false);

    const handleRedirect = () => {
        console.log(showRegister)
        setShowRegister(!showRegister)
    }

    return (
        <div className="login-content">
            {showRegister? <Register handleRedirect={handleRedirect}/> : <Login handleRedirect={handleRedirect} /> }
        </div>
    )
};

export default LoginRegister;