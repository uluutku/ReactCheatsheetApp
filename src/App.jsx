import "./App.css";
import Header from "./Header";
import { Route, Routes } from "react-router-dom";
import CssResources from "./Pages/Links/CssResources";
import CodeHints from "./Pages/CodeHints/CodeHints";
import UxUi from "./UXUI/UxUi";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<CssResources />} />
        <Route path="/cssResources" element={<CssResources />} />
        <Route path="/codeHints" element={<CodeHints />} />
        <Route path="/uxui" element={<UxUi />} />
      </Routes>
    </>
  );
}

export default App;
