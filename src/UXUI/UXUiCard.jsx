import React from "react";
import "./UxUiCard.css";

function UXUiCard(props) {
  return (
    <div className="uxui-card">
      <img className="card-img" src={props.imgAdress} alt={props.title} />
      <h2 className="card-title">{props.title}</h2>
      <p className="card-text">{props.context}</p>
      <h3 className="card-price">{props.price} $</h3>
    </div>
  );
}

export default UXUiCard;
