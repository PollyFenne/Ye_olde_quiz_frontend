// App.js

import React from "react";

import { Route, Routes } from "react-router-dom";
import { Home, CreatePage } from "./pages";

const App = () => {
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
