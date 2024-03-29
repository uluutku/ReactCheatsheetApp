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

  const downToTopProps = `
  // ParentComponent.jsx
import React, { useState } from 'react';
import ChildComponent from './ChildComponent';

function ParentComponent() {
  const [message, setMessage] = useState("");

  const handleMessageFromChild = (newMessage) => {
    setMessage(newMessage);
  };

  return (
    <div>
      <ChildComponent onMessage={handleMessageFromChild} />
      <p>{message}</p>
    </div>
  );
}

// ChildComponent.jsx
import React from 'react';

function ChildComponent(props) {
  const sendMessageToParent = () => {
    props.onMessage("Merhaba, Parent!");
  };

  return <button onClick={sendMessageToParent}>Parent'e Mesaj Gönder</button>;
}

export default ChildComponent;
  `;

  const arrayMethodsCode = `
  // JavaScript Array Metodları

  // Arrow function
const addOne = (x) => x + 1;
console.log(addOne(5)); // Output: 6

// forEach
const fruits = ["🍎", "🍌", "🍊"];
fruits.forEach(fruit => console.log(fruit)); // Output: 🍎 🍌 🍊

// map
const doubledNumbers = [1, 2, 3].map(num => num * 2);
console.log(doubledNumbers); // Output: [2, 4, 6]

// filter
const evenNumbers = [1, 2, 3, 4, 5].filter(num => num % 2 === 0);
console.log(evenNumbers); // Output: [2, 4]

// concat
const vegetables = ["🥦", "🥕"];
const food = fruits.concat(vegetables);
console.log(food); // Output: ["🍎", "🍌", "🍊", "🥦", "🥕"]

// find
const foundFruit = fruits.find(fruit => fruit === "🍌");
console.log(foundFruit); // Output: 🍌

// findIndex
const indexOfBanana = fruits.findIndex(fruit => fruit === "🍌");
console.log(indexOfBanana); // Output: 1

// indexOf
const indexOfOrange = fruits.indexOf("🍊");
console.log(indexOfOrange); // Output: 2

// lastIndexOf
const lastIndexOfApple = fruits.lastIndexOf("🍎");
console.log(lastIndexOfApple); // Output: 0

// some
const hasBanana = fruits.some(fruit => fruit === "🍌");
console.log(hasBanana); // Output: true

// every
const allAreFruits = fruits.every(fruit => typeof fruit === 'string');
console.log(allAreFruits); // Output: true

// includes
const includesApple = fruits.includes("🍎");
console.log(includesApple); // Output: true

// push
fruits.push("🍇");
console.log(fruits); // Output: ["🍎", "🍌", "🍊", "🍇"]

// unshift
fruits.unshift("🍉");
console.log(fruits); // Output: ["🍉", "🍎", "🍌", "🍊", "🍇"]

// pop
const poppedFruit = fruits.pop();
console.log(poppedFruit); // Output: 🍇

// shift
const shiftedFruit = fruits.shift();
console.log(shiftedFruit); // Output: 🍉

// toString
const fruitsString = fruits.toString();
console.log(fruitsString); // Output: 🍎,🍌,🍊

// join
const joinedFruits = fruits.join(' - ');
console.log(joinedFruits); // Output: 🍎 - 🍌 - 🍊

// fill
const filledArray = new Array(3).fill("🍋");
console.log(filledArray); // Output: ["🍋", "🍋", "🍋"]

// copyWithin
const copiedFruits = fruits.copyWithin(1, 0);
console.log(copiedFruits); // Output: ["🍎", "🍎", "🍌", "🍊"]

// slice
const slicedFruits = fruits.slice(1, 3);
console.log(slicedFruits); // Output: ["🍎", "🍌"]

// splice
const removedFruits = fruits.splice(1, 2);
console.log(removedFruits); // Output: ["🍎", "🍌"]

// sort
fruits.sort();
console.log(fruits); // Output: ["🍊", "🍎"]

// reverse
fruits.reverse();
console.log(fruits); // Output: ["🍎", "🍊"]

// from
const arrayFromFruits = Array.from(fruits);
console.log(arrayFromFruits); // Output: ["🍎", "🍊"]

// isArray
const isArrayFruits = Array.isArray(fruits);
console.log(isArrayFruits); // Output: true

// valueOf
const fruitsValue = fruits.valueOf();
console.log(fruitsValue); // Output: ["🍎", "🍊"]

// entries
const fruitEntries = fruits.entries();
console.log(Array.from(fruitEntries)); // Output: [[0, "🍎"], [1, "🍊"]]

// keys
const fruitKeys = fruits.keys();
console.log(Array.from(fruitKeys)); // Output: [0, 1]

// values
const fruitValues = fruits.values();
console.log(Array.from(fruitValues)); // Output: ["🍎", "🍊"]

// reduce
const sum = [1, 2, 3, 4].reduce((acc, curr) => acc + curr, 0);
console.log(sum); // Output: 10

// reduceRight
const reversedSum = [1, 2, 3, 4].reduceRight((acc, curr) => acc + curr, 0);
console.log(reversedSum); // Output: 10

// flat
const nestedArray = [[1, 2], [3, 4]];
const flattenedArray = nestedArray.flat();
console.log(flattenedArray); // Output: [1, 2, 3, 4]

// flatMap
const flattenedMappedArray = [1, 2, 3].flatMap(x => [x, x]);
console.log(flattenedMappedArray); // Output: [1, 1, 2, 2, 3, 3]

console.log(fruits); // Output: ["🍎", "🍊"]


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

  const reactHooks = `
  import React, { useState, useEffect, useContext, useReducer, useCallback, useMemo, useRef } from 'react';
import { useParams } from 'react-router-dom';

// useState: Component'in state'ini tanımlamak için kullanılır.
const Counter = () => {
  const [count, setCount] = useState(0); // Başlangıç değeri 0 olan bir state tanımla

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
};

// useEffect: Component'in mount, update veya unmount zamanlarında side effect'ler çalıştırmak için kullanılır.
const DataFetcher = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Burada API'den veri alınıp, setState fonksiyonuyla state güncellenir
    fetchData().then((result) => setData(result));
  }, []); // Boş bağımlılık dizisi: Component mount olduğunda sadece bir kere çalışır

  return <div>{data ? <p>Data: {data}</p> : <p>Loading...</p>}</div>;
};

// useContext: Context içerisindeki değerlere erişmek için kullanılır.
const ThemeContext = React.createContext('light');

const ThemedComponent = () => {
  const theme = useContext(ThemeContext);

  return <div>Current Theme: {theme}</div>;
};

// useReducer: useState'in daha karmaşık versiyonudur ve state management için kullanılır.
const initialState = { count: 0 };

const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
};

const CounterWithReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      Count: {state.count}
      <button onClick={() => dispatch({ type: 'increment' })}>Increase</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>Decrease</button>
    </div>
  );
};

// useCallback: Callback fonksiyonlarını optimize etmek için kullanılır.
const MemoizedComponent = () => {
  const memoizedCallback = useCallback(() => {
    // Buraya callback fonksiyonunun işlemleri gelebilir
  }, []); // Boş bağımlılık dizisi: Fonksiyon sadece bir kere oluşturulur ve sonraki render'larında tekrar oluşturulmaz

  return <button onClick={memoizedCallback}>Memoized Button</button>;
};

// useMemo: Değerlerin tekrar hesaplanmasını önlemek için kullanılır.
const MemoizedValueComponent = () => {
  const expensiveValue = useMemo(() => {
    // Burada maliyetli bir işlem yapılır, örneğin hesaplama vs.
    return calculateExpensiveValue();
  }, []); // Boş bağımlılık dizisi: Değer sadece bir kere hesaplanır ve sonraki render'larında tekrar hesaplanmaz

  return <div>Expensive Value: {expensiveValue}</div>;
};

// useRef: Component'in render sırasında oluşturulan bir değeri hatırlaması için kullanılır.
const RefComponent = () => {
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
};

// useParams: React Router tarafından verilen dinamik URL parametrelerine erişmek için kullanılır.
const Profile = () => {
  const { username } = useParams();

  return <div>User Profile: {username}</div>;
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
      <CodeHintCard
        title="React Hooks"
        exp="Temel react hooklarının syntaxleri."
        code={reactHooks}
      />
      <CodeHintCard
        title="Aşağıdan yukarı props geçme"
        exp="Aşağıdan yukarı function yardımıyla props geçme."
        code={downToTopProps}
      />
    </div>
  );
}

export default CodeHints;
