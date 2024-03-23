import React from "react";
import "./UxUi.css";
import UXUiCard from "./UXUiCard";
import UxUiCodeBox from "./UxUiCodeBox";
import UxUiHeader from "./UxUiHeader";

function UxUi() {
  const UxUiCardCode = `
// UxUiCard.jsx
import React from "react";
import "./UxUiCard.css";

function UXUiCard(props) {
  return (
    <div className="uxui-card">
      <img className="card-img" src={props.imgAdress} alt={props.title} />
      <h2 className="card-title">{props.title}</h2>
      <p className="card-text">{props.context}</p>
      <h3 className="card-price">{props.price} TL</h3>
    </div>
  );
}

export default UXUiCard;


----------------------------------------------------------------------

//UxUiCard.css
.uxui-card {
  margin: 20px;
  border: 1px solid black;
  border-radius: 12px;
  height: 400px;
  width: 300px;
  background-color: aliceblue;
  transition: all 0.3s ease;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  text-align: center;
}

.card-img {
  border-radius: 12px;
  width: 100%;
  height: 200px;
}

.card-title {
  margin: 20px;
  font-size: 1.3rem;
}

.card-text {
  font-size: 1.1rem;
}

.card-price {
  margin-bottom: 10px;
  margin-top: 50px;
  color: green;
}

  `;

  const UxUiHeaderCode = `

//UxUiHeader.jsx

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

--------------------------------------------

//UxUiHeader.css

.header-main {
  width: 100%;
  box-shadow: 10px 26px 30px -26px rgba(0, 0, 0, 0.5);
}

.header-cont {
  width: 100%;
  height: 80px;
  background-color: #2a2c31;
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.logo-cont {
  margin-left: 60px;
}

.nav-cont {
  display: flex;
  margin-right: 60px;
  margin-left: auto;
}

.link-item {
  text-decoration: none;
  margin-right: 30px;
  color: #a3a3a3;
}

`;

  return (
    <div className="uxui-main">
      <div className="uxui-element-container">
        <div className="uxui-element">
          <UXUiCard
            imgAdress="https://img.freepik.com/premium-photo/close-up-cute-gecko-branch-grey-background-created-using-generative-ai-technology_772924-9147.jpg"
            title="Title Text"
            context="Context text"
            price="1000"
          />
          <UxUiCodeBox code={UxUiCardCode} />
        </div>
        <div className="uxui-element">
          <UxUiHeader />
          <UxUiCodeBox code={UxUiHeaderCode} />
        </div>
      </div>
    </div>
  );
}

export default UxUi;
