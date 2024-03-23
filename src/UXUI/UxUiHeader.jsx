import React from "react";
import "./UxUiHeader.css";
import { Link } from "react-router-dom";

function UxUiHeader() {
  return (
    <div className="header-main">
      <div className="header-cont">
        <div className="logo-cont">Logo & Title Text</div>
        <div className="nav-cont">
          <Link className="link-item" to="/">
            A Link
          </Link>
          <Link className="link-item" to="/">
            B Link
          </Link>
          <Link className="link-item" to="/">
            C Link
          </Link>
        </div>
      </div>
    </div>
  );
}

export default UxUiHeader;
