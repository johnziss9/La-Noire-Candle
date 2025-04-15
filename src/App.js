import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import CandleCare from "./pages/CandleCare/CandleCare";
import Products from "./pages/Products/Products";
import About from "./pages/About/About";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

function App() {
  return (
    <ScrollToTop>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/candle-care" element={<CandleCare />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:category" element={<Products />} />
      </Routes>
    </ScrollToTop>
  );
}

export default App;
