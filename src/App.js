// App.js

import React from "react";
import { Routes, Route } from 'react-router-dom';
import { useState } from "react";

import { Home } from "./pages";
import Login from "./components/Login.js";
import useToken from "./components/useToken";


const App = () => {

    const { token, setToken } = useToken();

    if(!token) {
        return <Login setToken={setToken} />
    }

    return (
        <>
            <Routes>
                <Route exact path='/' element={ <Home /> } />
            </Routes>
        </>
    )
};

export default App;