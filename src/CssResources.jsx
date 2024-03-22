import React from "react";
import LinkCard from "./LinkCard";
import "./CssResources.css";

function CssResources() {
  return (
    <div className="main-css-resources">
      <div className="card-container">
        <LinkCard
          imgAdress="https://userstyles.org/style_screenshots/180577_after.png"
          title="ColorHunt"
          content="Renk seçmek için hazır renk paletleri."
          target="https://colorhunt.co/"
        />
        <LinkCard
          imgAdress="https://react-icons-v2.vercel.app/open-graph.png"
          title="React Icons"
          content="İkonlar."
          target="https://react-icons.github.io/react-icons/"
        />
        <LinkCard
          imgAdress="https://img-b.udemycdn.com/course/480x270/5007918_1de6.jpg"
          title="Material UI"
          content="Material UI All Components."
          target="https://mui.com/material-ui/all-components/"
        />
        <LinkCard
          imgAdress="https://www.copycat.dev/blog/wp-content/uploads/2023/02/mui-icons.png"
          title="Material Icons"
          content="Material Icons."
          target="https://mui.com/material-ui/material-icons/"
        />
        <LinkCard
          imgAdress="https://www.lavanguardia.com/andro4all/hero/2023/03/chatgpt.jpg"
          title="ChatGPT"
          content="GPT 3.5 & 4"
          target="https://chat.openai.com/"
        />
      </div>
    </div>
  );
}

export default CssResources;
