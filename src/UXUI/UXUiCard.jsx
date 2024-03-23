import React from "react";
import "./UxUiCard.css";

function UXUiCard() {
  return (
    <div className="uxui-card">
      <img
        className="card-img"
        src="https://img.freepik.com/premium-photo/close-up-cute-gecko-branch-grey-background-created-using-generative-ai-technology_772924-9147.jpg"
      />
      <h2 className="card-title">Placeholder Title</h2>
      <p className="card-text">Placeholder Text</p>
      <h3 className="card-price">Price TL</h3>
    </div>
  );
}

export default UXUiCard;
