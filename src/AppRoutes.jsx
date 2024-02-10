import React from "react";
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar/Navbar";
import { SkinSolution } from "./components/SkinSolution/SkinSolution";
import { ScanMe } from "./components/ScanMe/ScanMe";
import ShopAll from "./components/ShopAll/ShopAll";

export const AppRoutes = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<SkinSolution />} />
        <Route path="/scan-me" element={<ScanMe />} />
        <Route path="/SkinSolution" element={<SkinSolution />} />
        <Route path="/shop-all" element={<ShopAll />} />
      </Routes>
    </Router>
  );
};
