import React from "react";
import "./LinkCard.css";

function LinkCard(props) {
  const handleButtonClick = () => {
    window.location.href = props.target || "#";
  };

  return (
    <div className="card-main">
      <div className="card-content">
        <img className="card-image" src={props.imgAdress} alt={props.title} />
        <h1>{props.title}</h1>
        <h6>{props.content}</h6>
        <button className="card-link-button" onClick={handleButtonClick}>
          Go!
        </button>
      </div>
    </div>
  );
}

export default LinkCard;
