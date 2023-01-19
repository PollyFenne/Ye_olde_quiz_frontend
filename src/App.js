// App.js

import React, { createContext, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import {
  Home,
  CreatePage,
  JoinPage,
  NotFound,
  WaitingLobby,
  GamePage,
  ResultsPage,
} from "./pages";
import LoginRegister from "./pages/LoginRegister";
import useToken from "./components/useToken";
import { SocketContext, socket } from "./socket";

const App = () => {
  const { token, setToken } = useToken();

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
          <Route exact path="/waiting-lobby" element={<WaitingLobby />} />
          <Route exact path="/game" element={<GamePage />} />
          <Route exact path="/results" element={<ResultsPage />} />
          <Route exact path="*" element={<NotFound />} />
        </Routes>
      </SocketContext.Provider>
    </>
  );
};

export default App;
