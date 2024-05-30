import "./style.css";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Cari from "./pages/Cari";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cari" element={<Cari />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
