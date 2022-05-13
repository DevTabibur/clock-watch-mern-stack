import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Checkout from "./Pages/CheckOut/Checkout";
import Home from "./Pages/Home/Home";
import HeaderNav from "./Pages/Shared/Header/Navbar";
import RequireAuth from "./Pages/Shared/RequireAuth/RequireAuth";

function App() {
  return (
    <>
      <HeaderNav/>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/checkout" element={<Checkout />}></Route>
      </Routes>
    </>
  );
}

export default App;
