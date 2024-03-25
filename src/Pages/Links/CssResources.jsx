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
          content="Renk paletleri."
          target="https://colorhunt.co/palettes/popular"
        />
        <LinkCard
          imgAdress="https://inceleme.co/wp-content/uploads/2020/09/Yandex.jpg"
          title="Yandex Search"
          content="Pre selected PNG tag."
          target="https://yandex.com/images/search?text=logo&itype=png"
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
          imgAdress="https://su.ultrasite.com/170_a_6096_23a29920.png"
          title="Google Fonts"
          content="Google fonts."
          target="https://fonts.google.com/"
        />
        <LinkCard
          imgAdress="https://www.lavanguardia.com/andro4all/hero/2023/03/chatgpt.jpg"
          title="ChatGPT"
          content="GPT 3.5 & 4"
          target="https://chat.openai.com/"
        />
        <LinkCard
          imgAdress="https://www.spryng.nl/app/uploads/sites/2/2022/05/image.png"
          title="GetEmoji"
          content="Copy paste emojis"
          target="https://getemoji.com/"
        />
        <LinkCard
          imgAdress="https://unsplash.com/blog/content/images/max/2560/1-vQ5EsgnJkANWb5fktHPwnw.jpeg"
          title="Unsplash"
          content="Free image resource."
          target="https://unsplash.com/"
        />
        <LinkCard
          imgAdress="https://mediablog.cdnpk.net/sites/5/2021/12/Flaticon-Rediseno-Logo-Presentacion_Mesa-de-trabajo-1-copia-20.jpg"
          title="FlatIcon"
          content="Free icon resource."
          target="https://www.flaticon.com/"
        />
        <LinkCard
          imgAdress="https://freefrontend.com/assets/img/css-box-shadow-examples/saturated-vs-desaturated-box-shadow.png"
          title="BoxShadow"
          content="Free css box shadow generator."
          target="https://www.cssmatic.com/box-shadow"
        />
        <LinkCard
          imgAdress="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_8ot8XOwPNzaK4yA2Z_7nszRBVJW-Ca35zzcAYP3OFw&s"
          title="CssGradient.io"
          content="Free css gradient generator."
          target="https://cssgradient.io/"
        />
        <LinkCard
          imgAdress="https://i2.wp.com/designshack.net/wp-content/uploads/Briberra-%E2%80%93-Rough-Bold-Script-Font.jpg"
          title="DesignShack Fonts"
          content="Free fonts."
          target="https://designshack.net/resources/fonts/?cost=free"
        />
      </div>
    </div>
  );
}

export default CssResources;
