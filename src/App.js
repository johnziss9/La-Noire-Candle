import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import CandleCare from "./pages/CandleCare/CandleCare";
import Products from "./pages/Products/Products";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/CandleCare" element={<CandleCare />} />
      <Route path="/Candles" element={<Products productsText="For our candles we have chosen to use natural soy wax as the main ingredient. This sustainable alternative to traditional paraffin wax is a renewable resource that burns cleaner and longer, producing less soot and providing a more environmentally friendly option for our customers. We have a great selection of scents to pick from including Vanilla, Rose & Patchouli, Jasmine, Cashmere, Black Vanilla, Black Orchid, Black Coconut and Baby Powder." /> } />
      <Route path="/Defusers" element={<Products productsText={'A collection of long-lasting, alcohol-free luxury reed diffusers designs to match you candles with their looks and their scents. Using pure fragrances, our bamboo reeds soak up to diffuse and add a beautiful scent to your home or office lasting up to 4-6 months. Our scent selection includes.............'} />} />
      <Route path="/AirFresheners" element={<Products productsText={'HELLO, THIS IS WHERE THE AIR FRESHENERS ARE'} />} />
    </Routes>
  );
}

export default App;
