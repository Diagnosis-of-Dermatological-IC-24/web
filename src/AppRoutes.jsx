import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar/Navbar";
import { SkinSolution } from "./components/SkinSolution/SkinSolution";
import { ScanMe } from "./components/ScanMe/ScanMe";

export const AppRoutes = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<SkinSolution />} />
        <Route path="/scan-me" element={<ScanMe />} />
      </Routes>
    </Router>
  );
};
