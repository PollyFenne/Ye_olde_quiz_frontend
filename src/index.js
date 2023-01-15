// index.js

import React from "react";
import { BrowserRouter } from "react-router-dom";
import {createRoot} from "react-dom/client";
import Favicon from "react-favicon";

import App from "./App";

const container = document.getElementById('root')
const root = createRoot(container)

root.render(
    <BrowserRouter>
        <Favicon url="../assets/images/favicon1.png" />
        <App />
    </BrowserRouter>
);