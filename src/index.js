import React from "react";
import ReactDom from "react-dom";
import { BrowserRouter } from "react-router-dom";
import Practice from "./Practice";
import ProjectApp1 from "./Project-1";
// import App from "./keepApp";
import "./index.css";

ReactDom.render(
  <BrowserRouter>
    <Practice />
  </BrowserRouter>,
  document.getElementById("root")
);
