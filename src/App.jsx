import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Halaman2 from "./pages/Halaman2";
import Product from "./pages/Product";
import AddProduct from "./pages/AddProduct";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/halaman-2" element={<Halaman2 />} />
        <Route path="/product" element={<Product />} />
        <Route path="/add-product" element={<AddProduct />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
