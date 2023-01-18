import React from "react";
import "@testing-library/jest-dom";
import axios from "axios";
import { render } from "@testing-library/user-event";

global.React = React;
global.render = render;
global.UserEvent = userEvent;
