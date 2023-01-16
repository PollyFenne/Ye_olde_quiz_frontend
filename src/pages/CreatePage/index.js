import React from "react";

import Banner from "../../components/Banner";

import "./styles.css";

const CreatePage = () => {
  return (
    <>
      <Banner />
      <form>
        <div>
          <h2>Select difficulty</h2>
          <div>
            <input type="button" className="difficulty-button" value="Easy" />
            <input type="button" className="difficulty-button" value="Medium" />
            <input type="button" className="difficulty-button" value="Hard" />
          </div>
        </div>
        <div>
          <h2>Select 3 topics</h2>
          <div>
            <input type="button" value="Round 1" />
            <input type="button" value="Round 2" />
            <input type="button" value="Round 3" />
          </div>
        </div>
        <input type="submit" value="Create quiz!" />
      </form>
    </>
  );
};

export default CreatePage;
