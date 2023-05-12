import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import CandleCare from "./pages/CandleCare/CandleCare";
import Products from "./pages/Products/Products";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/CandleCare" element={<CandleCare />} />
      <Route path="/Candles" element={<Products productsText={'HELLO, THIS IS WHERE THE CANDLES ARE'} />} />
      <Route path="/Diffusers" element={<Products productsText={'HELLO, THIS IS WHERE THE DIFFUSERS ARE'} />} />
      <Route path="/AirFresheners" element={<Products productsText={'HELLO, THIS IS WHERE THE AIR FRESHENERS ARE'} />} />
    </Routes>
  );
}

export default App;
