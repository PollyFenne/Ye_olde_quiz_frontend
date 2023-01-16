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
        <ButtonControl buttonText={"NEW QUIZ"} />
        <ButtonControl buttonText={"JOIN QUIZ"} />
      </div>
    </>
  );
};

export default Home;
