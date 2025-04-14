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

  const handleFetchQuestions = () => {
    setLoading(true);
    fetch(api_url)
      .then((data) => data.json())
      .then((res) => {
        setQuestions(res.questions);
        setCurrQuestion(res.questions[index]);
        setLoading(false);
      });
  };

  const handleFetchQuestionsProd = () => {
    setLoading(true);
    fetch(api_url)
      .then((data) => data.json())
      .then((res) => {
        const questionsArr = res?.data?.questions;
        setQuestions(questionsArr);
        setCurrQuestion(questionsArr[index]);
        setLoading(false);
      });
  };

  useEffect(() => {
    if (import.meta.env.VITE_PROCESS === "development") {
      handleFetchQuestions();
    } else {
      handleFetchQuestionsProd();
    }
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
