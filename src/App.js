import React from "react";
import Home from "./layouts/Home";
import About from "./layouts/About";
import Products from "./layouts/Products";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Product from "./layouts/Product";
import Order from "./layouts/Order";
import Thanks from "./layouts/Thanks";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home key={Date.now()} />} />
        <Route path="/produits" element={<Products key={Date.now()} />} />
        <Route path="/about" element={<About />} />
        <Route path="/produit/:id" element={<Product />} />
        <Route path="/command/:id" element={<Order />} />
        <Route path="/command/merci" element={<Thanks />} />
      </Routes>
    </>
  );
}
export default App;
