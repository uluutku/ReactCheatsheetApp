import "./UxUiCodeBox.css";
import React from "react";

function UxUiCodeBox(props) {
  return (
    <div className="codebox-container">
      <div className="codebox">
        <p className="codebox-text">{props.code}</p>
      </div>
    </div>
  );
}

export default UxUiCodeBox;
