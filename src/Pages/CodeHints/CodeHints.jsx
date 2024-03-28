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

  // Arrow function ➡️
const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = numbers.map(num => num * num);
console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]

// forEach 🔄
const colors = ['red', 'green', 'blue'];
colors.forEach(color => console.log(color));

// map 🗺️
const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = numbers.map(num => num * 2);
console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]

// filter 🕵️‍♂️
const numbers = [1, 2, 3, 4, 5];
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // Output: [2, 4]

// concat ➕
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combinedArray = arr1.concat(arr2);
console.log(combinedArray); // Output: [1, 2, 3, 4, 5, 6]

// find 🔍
const numbers = [1, 2, 3, 4, 5];
const foundNumber = numbers.find(num => num > 3);
console.log(foundNumber); // Output: 4

// findIndex 🔍
const numbers = [1, 2, 3, 4, 5];
const foundIndex = numbers.findIndex(num => num > 3);
console.log(foundIndex); // Output: 3

// indexOf 🔄
const numbers = [1, 2, 3, 4, 5];
const index = numbers.indexOf(3);
console.log(index); // Output: 2

// lastIndexOf 🔄
const numbers = [1, 2, 3, 4, 3, 5];
const lastIndex = numbers.lastIndexOf(3);
console.log(lastIndex); // Output: 4

// some 🔍
const numbers = [1, 2, 3, 4, 5];
const hasEven = numbers.some(num => num % 2 === 0);
console.log(hasEven); // Output: true

// every ✔️
const numbers = [2, 4, 6, 8, 10];
const allEven = numbers.every(num => num % 2 === 0);
console.log(allEven); // Output: true

// includes 🔍
const numbers = [1, 2, 3, 4, 5];
const includesThree = numbers.includes(3);
console.log(includesThree); // Output: true

// push ➡️
const fruits = ['apple', 'banana'];
fruits.push('orange');
console.log(fruits); // Output: ['apple', 'banana', 'orange']

// unshift ⬅️
const fruits = ['apple', 'banana'];
fruits.unshift('orange');
console.log(fruits); // Output: ['orange', 'apple', 'banana']

// pop ⬅️
const fruits = ['apple', 'banana', 'orange'];
const poppedFruit = fruits.pop();
console.log(poppedFruit); // Output: 'orange'

// shift ➡️
const fruits = ['apple', 'banana', 'orange'];
const shiftedFruit = fruits.shift();
console.log(shiftedFruit); // Output: 'apple'

// toString 🔄
const numbers = [1, 2, 3];
const string = numbers.toString();
console.log(string); // Output: '1,2,3'

// join 🔄
const elements = ['Fire', 'Air', 'Water'];
console.log(elements.join('-')); // Output: 'Fire-Air-Water'

// fill 🎨
const array = [1, 2, 3, 4, 5];
array.fill(0, 2, 4);
console.log(array); // Output: [1, 2, 0, 0, 5]

// copyWithin 📝
const array = [1, 2, 3, 4, 5];
array.copyWithin(0, 3, 4);
console.log(array); // Output: [4, 2, 3, 4, 5]

// slice 🍰
const fruits = ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango'];
const citrus = fruits.slice(1, 3);
console.log(citrus); // Output: ['Orange', 'Lemon']

// splice 🎣
const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
console.log(months); // Output: ['Jan', 'Feb', 'March', 'April', 'June']

// sort 🔢
const months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
console.log(months); // Output: ['Dec', 'Feb', 'Jan', 'March']

// reverse ↩️
const array = [1, 2, 3, 4, 5];
array.reverse();
console.log(array); // Output: [5, 4, 3, 2, 1]

// from 🔄
const str = 'hello';
const chars = Array.from(str);
console.log(chars); // Output: ['h', 'e', 'l', 'l', 'o']

// isArray 🔄
console.log(Array.isArray([])); // Output: true
console.log(Array.isArray({})); // Output: false

// valueOf 🔄
const array = [1, 2, 3];
console.log(array.valueOf()); // Output: [1, 2, 3]

// entries 🚪
const array = ['a', 'b', 'c'];
const iterator = array.entries();
console.log(iterator.next().value); // Output: [0, 'a']

// keys 🔑
const array = ['a', 'b', 'c'];
const iterator = array.keys();
console.log(iterator.next().value); // Output: 0

// values 🎱
const array = ['a', 'b', 'c'];
const iterator = array.values();
console.log(iterator.next().value); // Output: 'a'

// reduce ➗
const array = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;
console.log(array.reduce(reducer)); // Output: 10

// reduceRight ➗
const array = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;
console.log(array.reduceRight(reducer)); // Output: 10

// flat ⬇️
const nestedArray = [1, [2, 3], [4, 5]];
console.log(nestedArray.flat()); // Output: [1, 2, 3, 4, 5]

// flatMap ⬇️🗺️
const arr = [1, 2, 3];
console.log(arr.flatMap(x => [x * 2])); // Output: [2, 4, 6]

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

  const componentWithMap = `
  
  savedNotes = [], --> Verileri tutan array.

  {savedNotes.map((note) => (
    <FlashCard ----> Her biri için çağırılacak component
      key={note.id}
      title={note.title}
      context={note.context}
    />
  ))}
  `;

  const basicAddToArray = `
  //Gönderen

  const handleSubmit = () => {
    const newNote = {
      id: Math.random() * 1000,
      title: title,
      context: context,
    };

    props.onSave(newNote);
  };

  // Alan
  <Form onSave={handleSave} />
  //

  const [savedNotes, setSavedNotes] = useState([]);

  const handleSave = (yeniNot) => {
    setSavedNotes([...savedNotes, yeniNot]);
  };

  //Filter (delete) function:
  
  const deleteNote = (id) => {
    const updatedNotes = savedNotes.filter((note) => note.id !== id);
    setSavedNotes(updatedNotes);
  };

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
      <CodeHintCard
        title="Array Map ile Render"
        exp="Bir arrayın tüm elemanlarını gezip her elemanın bilgilierini props olarak gönderen kod."
        code={componentWithMap}
      />
    </div>
  );
}

export default CodeHints;
