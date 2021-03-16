import React from "react";
import { NavLink } from "react-router-dom";

function Error(params) {
  return (
    <>
      <h1>404 Error Page</h1>
      <NavLink
        to="/"
        style={{ textDecoration: "none", fontSize: "25px", color: "green" }}
      >
        go back
      </NavLink>
    </>
  );
}

export default Error;
