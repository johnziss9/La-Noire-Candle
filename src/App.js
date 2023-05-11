import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import CandleCare from "./pages/CandleCare/CandleCare";
import Products from "./pages/Products/Products";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/CandleCare" element={<CandleCare />} />
      <Route path="/Products" element={<Products />} />
    </Routes>
  );
}

export default App;
