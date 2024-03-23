import React from "react";
import CodeHintCard from "./CodeHintCard";
import "./CodeHints.css";

function CodeHints() {
  const installCommands = `
  Vite Proje:
  npm create vite@latest

  React-Router-Dom:
  npm install react-router-dom 

  Axios:
  npm install axios

  Material UI:
  npm install @mui/material @emotion/react @emotion/styled

  Material UI Icons:
  npm install @mui/icons-material @mui/material @emotion/styled @emotion/react

  Roboto Font:
  npm install @fontsource/roboto

  React Icons:
  npm install react-icons --save

  JSON Server: (Ayrı bir konsolda)
  npm install json-server

  //db.json:

  {
    "posts": [
      { "id": "1", "title": "a title", "views": 100 },
      { "id": "2", "title": "another title", "views": 200 }
    ],
    "comments": [
      { "id": "1", "text": "a comment about post 1", "postId": "1" },
      { "id": "2", "text": "another comment about post 1", "postId": "1" }
    ],
    "profile": {
      "name": "typicode"
    }
  }

  npx json-server db.json // json-server --watch db.json

  `;

  const routerSettingCode = `
  import { BrowserRouter } from "react-router-dom";

  <BrowserRouter>
      <App />
  </BrowserRouter>;
  `;

  const routerAppSettings = `
  import { Route, Routes } from "react-router-dom";


  function App() {
    return (
      <>
        <Header />  ---------> İçerikten bağımsız her sayfada header var.
        <Routes>
          <Route path="/" element={<Home />} />   --------> Ana Dizin
          <Route path="*" element={<Page404 />} />  ---------> Tüm Sayfalara Gider (404)
          <Route path="/contact" element={<Contact />} />
          <Route path="/cssResources" element={<CssResources />} /> ------> Sayfa Örneği
          <Route path="/codeHints" element={<CodeHints />} />
        </Routes>
      </>
    );
  }
  `;

  const routerLinkExample = `
  import { Link } from "react-router-dom";

  <Link className="nav-link" to={"/"}>Ana Sayfa</Link>

  <Link className="nav-link" to={"/"}>
      Ana Sayfa
  </Link>
  `;

  const arrayMethodsCode = `
  // JavaScript Array Metodları

  // 1. push(): Dizinin sonuna bir veya daha fazla öğe ekler ve dizinin yeni uzunluğunu döndürür.
  const array = [1, 2, 3];
  array.push(4); // [1, 2, 3, 4]

  // 2. pop(): Dizinin sonundaki öğeyi kaldırır ve kaldırılan öğeyi döndürür.
  const lastElement = array.pop(); // 4, array: [1, 2, 3]

  // 3. shift(): Dizinin başındaki öğeyi kaldırır ve kaldırılan öğeyi döndürür.
  const firstElement = array.shift(); // 1, array: [2, 3]

  // 4. unshift(): Dizinin başına bir veya daha fazla öğe ekler ve dizinin yeni uzunluğunu döndürür.
  array.unshift(0); // array: [0, 2, 3]

  // 5. splice(): Dizi içindeki bir veya daha fazla öğeyi kaldırır, değiştirir veya ekler.
  array.splice(1, 0, 1.5); // array: [0, 1.5, 2, 3]

  // 6. slice(): Belirtilen bir başlangıç ve bitiş dizinleri arasındaki öğeleri kopyalar.
  const slicedArray = array.slice(1, 3); // slicedArray: [1.5, 2]

  // 7. forEach(): Dizi öğeleri üzerinde bir döngü çalıştırır.
  array.forEach(item => console.log(item)); // 0, 1.5, 2, 3

  // 8. map(): Dizi öğeleri üzerinde bir dönüşüm uygular ve yeni bir dizi döndürür.
  const mappedArray = array.map(item => item * 2); // mappedArray: [0, 3, 4, 6]

  // 9. filter(): Belirli bir koşulu karşılayan öğelerden oluşan bir dizi döndürür.
  const filteredArray = array.filter(item => item > 1); // filteredArray: [1.5, 2, 3]

  // 10. reduce(): Dizi öğeleri üzerinde bir işlem uygular ve bir değer döndürür.
  const reducedValue = array.reduce((acc, curr) => acc + curr, 0); // reducedValue: 6
  `;

  const axiosFetchCode = `
  import React, { useState, useEffect } from "react";
  import axios from "axios";

  function DataFetching() {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get("https://random-data-api.com/api/v2/users?size=50");
          setData(response.data);
        } catch (error) {
          setError(error);
        }
      };

      fetchData();
    }, []);

    if (error) {
      return <div>Error: {error.message}</div>;
    }

    return (
      <div>
        {data ? (
          <ul>
            {data.map((user, index) => (
              <li key={index}>{user.first_name} {user.last_name}</li>
            ))}
          </ul>
        ) : (
          <div>Loading...</div>
        )}
      </div>
    );
  }

  export default DataFetching;
  `;

  const jsForwardExample = `
  
  function LinkCard(props) {
    const handleButtonClick = () => {
      window.location.href = props.target || "#";   -----> Şuanki sayfa yönlendirme
      ///window.open(props.target || "#", "_blank");/// -----> Yeni sekmede açma
    };
  
    return (
      <div>
        <button className="card-link-button" onClick={handleButtonClick}>Go!</button>
      </div>
    );
  }
  
  export default LinkCard;
  `;

  return (
    <div className="hint-card-container">
      <CodeHintCard
        title="React Kütüphane Install Komutları"
        exp="npm ile yüklenecek sık kullanılan komutlar"
        code={installCommands}
      />
      <CodeHintCard
        title="Router için Main.jsx"
        exp="Routerin kapsayıcısın en dışta olması gerekli. Main.jsx teki app in dışına vererek tüm projeyi kapsaması sağlanabilir."
        code={routerSettingCode}
      />
      <CodeHintCard
        title="Router için App.jsx"
        exp="Route adresleri."
        code={routerAppSettings}
      />
      <CodeHintCard
        title="Router için Link Örneği"
        exp="Herhangi bir componentte router ile gidilecek link verme."
        code={routerLinkExample}
      />
      <CodeHintCard
        title="JavaScript Array Metodları"
        exp="JavaScript'te sık kullanılan dizi metodları."
        code={arrayMethodsCode}
      />
      <CodeHintCard
        title="Axios ile Veri Çekme Örneği"
        exp="Axios kütüphanesi kullanarak veri çekme örneği."
        code={axiosFetchCode}
      />
      <CodeHintCard
        title="Javascript ile yönlendirme"
        exp="Js te onclick eventiyle tetiklenecek fonksiyon, props olarak adresi dışarıdan da alabilir."
        code={jsForwardExample}
      />
    </div>
  );
}

export default CodeHints;
