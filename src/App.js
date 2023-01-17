// App.js

import React, { createContext, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import Banner from "./components/Banner";
import { Home, CreatePage, JoinPage } from "./pages";
import LoginRegister from "./pages/LoginRegister";
import useToken from "./components/useToken";
import { SocketContext, socket } from "./socket";

const App = () => {
  const { token, setToken } = useToken();

  //   if (!token) {
  //     return <Login setToken={setToken} />;
  //   }

  useEffect(() => {
    socket.emit("connection");
  }, []);

  return (
    <>
      <SocketContext.Provider value={socket}>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/create" element={<CreatePage />} />
          <Route exact path="/login" element={<LoginRegister />} />
          <Route exact path="/join" element={<JoinPage />} />
        </Routes>
      </SocketContext.Provider>
    </>
  );
};

export default App;
