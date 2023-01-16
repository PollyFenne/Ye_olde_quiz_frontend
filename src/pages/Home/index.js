// HOMEPAGE

import React from "react";

import Banner from "../../components/Banner";

import ButtonControl from "../../components/ButtonControl";

import "./Home.css";

const Home = () => {
  return (
    <>
      <Banner />
      <div className="home-content">
        <h1>Homepage</h1>
        <div className="buttons-container">
          <ButtonControl buttonText={"Create a quiz!"} />
          <ButtonControl buttonText={"Join a quiz!"} />
        </div>
      </div>
    </>
  );
};

export default Home;
