// App.js

import React from "react";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import Banner from "./components/Banner";
import { Home, CreatePage } from "./pages";
import LoginRegister from "./pages/LoginRegister";
import useToken from "./components/useToken";

const App = () => {
  const { token, setToken } = useToken();

  //   if (!token) {
  //     return <Login setToken={setToken} />;
  //   }

  return (
    <>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <>
              <Banner isHome={true} />
              <Home />
            </>
          }
        />
        <Route
          exact
          path="/create"
          element={
            <>
              <Banner isCreate={true} />
              <CreatePage />
            </>
          }
        />
        <Route exact path="/login" element={<LoginRegister />} />
      </Routes>
    </>
  );
};

export default App;
