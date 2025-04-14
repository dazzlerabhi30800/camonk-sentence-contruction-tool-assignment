import "./App.css";
import Home from "./pages/Home/Home";

import { Routes, Route } from "react-router-dom";
import Questions from "./pages/Questions/Questions";
import Navbar from "./components/Navbar";
import Result from "./pages/Result/Result";
// import { useEffect } from "react";

function App() {
  // const api_url = import.meta.env.VITE_API_URL || "/api";
  // useEffect(() => {
  //   fetch(api_url + "/data")
  //     .then((data) => data.json())
  //     .then((res) => console.log(res));
  // }, []);
  // const url = window.origin + "/api/db.json";
  // useEffect(() => {
  //   fetch(url)
  //     .then((res) => res.json())
  //     .then((data) => console.log(data));
  // }, []);
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/questions" element={<Questions />} />
        <Route path="/results" element={<Result />} />
      </Routes>
    </>
  );
}

export default App;
