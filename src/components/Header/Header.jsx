import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
function Header() {
  return (
    <div id="header">
      <Link to="/">
        <p id="header-title">Movie World</p>
      </Link>
    </div>
  );
}

export default Header;
