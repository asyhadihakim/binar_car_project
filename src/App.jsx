// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import SearchCar from "./pages/SearchCar";
import SearchResult from "./pages/SearchResult";
import Detail from "./pages/Detail";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search/" element={<SearchCar />} />
        <Route path="/result/" element={<SearchResult />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
