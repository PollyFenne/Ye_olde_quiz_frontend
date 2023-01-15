// Header/banner component

import React from "react";

const Banner = () => {
    return (
        <div className="banner">
            <div className="logo">
                <img src="../../assets/images/favicon1.png" alt="Logo" />
            </div>
            <div className="username">
                <h1>Hello, Polly</h1>
                <h4>Create a new game or join an existing game!</h4>
            </div>
        </div>
    )
};

export default Banner;