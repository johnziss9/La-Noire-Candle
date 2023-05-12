import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import CandleCare from "./pages/CandleCare/CandleCare";
import Products from "./pages/Products/Products";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/CandleCare" element={<CandleCare />} />
      <Route path="/Candles" element={<Products productsTitle="Our Candles" productsText="For our candles we have chosen to use natural soy wax as the main ingredient. This sustainable alternative to traditional paraffin wax is a renewable resource that burns cleaner and longer, producing less soot and providing a more environmentally friendly option for our customers. We have a great selection of scents to pick from including Vanilla, Rose & Patchouli, Jasmine, Cashmere, Black Vanilla, Black Orchid, Black Coconut and Baby Powder." /> } />
      <Route path="/Defusers" element={<Products productsText={'HELLO, THIS IS WHERE THE DIFFUSERS ARE'} />} />
      <Route path="/AirFresheners" element={<Products productsText={'HELLO, THIS IS WHERE THE AIR FRESHENERS ARE'} />} />
    </Routes>
  );
}

export default App;
