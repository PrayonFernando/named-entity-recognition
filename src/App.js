import React from "react"; // Import React
import "./App.css";
// Import BrowserRouter, Routes, and Route from "react-router-dom"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* 
        <Route path="blogs" element={<Blogs />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NoPage />} />
        */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
