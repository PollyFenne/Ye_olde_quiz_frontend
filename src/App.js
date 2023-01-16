// App.js

import React from "react";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import { Home, CreatePage } from "./pages";
import Login from "./components/Login.js";
import Register from "./components/Register";
import useToken from "./components/useToken";

const App = () => {
  const { token, setToken } = useToken();

  if (!token) {
    return <Login setToken={setToken} />;
  }

  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/create" element={<CreatePage />} />
      </Routes>
    </>
  );
};

export default App;
