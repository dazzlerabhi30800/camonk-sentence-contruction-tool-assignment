import "./App.css";
import Home from "./pages/Home/Home";

import { Routes, Route } from "react-router-dom";
import Questions from "./pages/Questions/Questions";
import Navbar from "./components/Navbar";
import Result from "./pages/Result/Result";
import { useEffect } from "react";
import { useStoreContext } from "./lib/Store";

function App() {
  const api_url = import.meta.env.VITE_API_URL || "/api";
  const { setQuestions, setCurrQuestion, index, setLoading } =
    useStoreContext();

  const handleFetchQuesions = () => {
    setLoading(true);
    fetch(api_url)
      .then((data) => data.json())
      .then((res) => {
        setQuestions(res.questions);
        setCurrQuestion(res.questions[index]);
        setLoading(false);
      });
  };

  useEffect(() => {
    handleFetchQuesions();
  }, []);

  useEffect(() => {
    const url = window.origin + "/api/db.json";
    fetch(url)
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);
  return (
    <>
      <main className="flex flex-col">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/questions" element={<Questions />} />
          <Route path="/results" element={<Result />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
