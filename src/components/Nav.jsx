import React from "react";
import { IAirbnbLogo } from "../utils/icons";
import "./Nav.css";

const Nav = () => {
  return (
    <nav>
      <img src={IAirbnbLogo} alt="Logo" className="nav-logo" />
    </nav>
  );
};

export default Nav;
