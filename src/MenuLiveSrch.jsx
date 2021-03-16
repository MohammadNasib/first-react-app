import React from "react";
import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <NavLink
            className="nav-link active"
            aria-current="page"
            exact
            to="/"
            activeClassName="activeClass"
            style={{ fontSize: "35px" }}
          >
            Home
          </NavLink>

          <NavLink
            className="nav-link active"
            aria-current="page"
            exact
            to="/search"
            activeClassName="activeClass"
            style={{ fontSize: "35px" }}
          >
            Live Search
          </NavLink>
        </div>
      </nav>
    </>
  );
};

export default Menu;
