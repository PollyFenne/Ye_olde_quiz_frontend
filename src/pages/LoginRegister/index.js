// LOGIN and REGISTER webpage

import React from "react";
import { useState } from "react";

import Login from "../../components/Login.js";
import Register from "../../components/Register";

const LoginRegister = () => {

    const [showRegister, setShowRegister] = useState(false);

    const handleRedirect = () => {
        console.log(showRegister)
        setShowRegister(!showRegister)
    }

    return (
        <>
            {showRegister? <Register handleRedirect={handleRedirect}/> : <Login handleRedirect={handleRedirect} /> }
        </>
    )
};

export default LoginRegister;