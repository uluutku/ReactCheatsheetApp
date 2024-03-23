import React from "react";
import "./CodeHintCard.css";

function CodeHintCard(props) {
  return (
    <div className="code-hint-card-main">
      <div className="code-hint-card">
        <h2 className="code-hint-title">{props.title}</h2>
        <p className="code-hint-title">{props.exp}</p>
        <hr />
        <h3>Kod:</h3>
        <pre className="code-hint-code">{props.code}</pre>
      </div>
    </div>
  );
}

export default CodeHintCard;
