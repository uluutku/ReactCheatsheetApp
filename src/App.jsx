import "./App.css";
import Header from "./Header";
import { Route, Routes } from "react-router-dom";
import CssResources from "./CssResources";
import CodeHints from "./CodeHints";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<CssResources />} />
        <Route path="/cssResources" element={<CssResources />} />
        <Route path="/codeHints" element={<CodeHints />} />
      </Routes>
    </>
  );
}

export default App;
