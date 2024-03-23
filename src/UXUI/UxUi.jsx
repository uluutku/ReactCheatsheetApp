import React from "react";
import "./UxUi.css";
import UXUiCard from "./UXUiCard";

function UxUi() {
  return (
    <div className="uxui-main">
      <div className="uxui-element-container">
        <div className="uxui-element">
          <UXUiCard />
          <div className="uxui-codebox"></div>
        </div>
      </div>
    </div>
  );
}

export default UxUi;
