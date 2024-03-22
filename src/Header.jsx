import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header-main">
      <div className="logo-container">React Cheatsheet</div>
      <div className="nav-container">
        <Link className="nav-link" to={"/cssResources"}>
          Bookmarks
        </Link>
        <Link className="nav-link" to={"/codeHints"}>
          Code Hints
        </Link>
      </div>
    </div>
  );
}

export default Header;
