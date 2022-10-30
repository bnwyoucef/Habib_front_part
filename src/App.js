import React from "react";
import Home from "./layouts/Home";
import About from "./layouts/About";
import Products from "./layouts/Products";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home key={Date.now()} />} />
        <Route path="/produits" element={<Products key={Date.now()} />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}
export default App;
