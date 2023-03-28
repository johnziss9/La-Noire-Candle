import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import CandleCare from "./pages/CandleCare/CandleCare";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/CandleCare" element={<CandleCare />} />
    </Routes>
  );
}

export default App;
