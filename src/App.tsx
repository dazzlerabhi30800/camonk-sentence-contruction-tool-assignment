import "./App.css";
import Home from "./pages/Home/Home";

import { Routes, Route } from "react-router-dom";
import Questions from "./pages/Questions/Questions";

function App() {
  // const api_url = import.meta.env.VITE_API_URL || "/api";
  // useEffect(() => {
  //   fetch(api_url + "/data")
  //     .then((data) => data.json())
  //     .then((res) => console.log(res));
  // }, []);
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
