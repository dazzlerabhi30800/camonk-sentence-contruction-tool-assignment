import "./App.css";
import Home from "./pages/Home/Home";

import { Routes, Route } from "react-router-dom";
import Questions from "./pages/Questions/Questions";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/questions" element={<Questions />} />
      </Routes>
    </>
  );
}

export default App;
