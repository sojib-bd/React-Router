import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Component/Navbar";
import About from './Component/About';
import BlogPage from "./Component/Blog";
import Contact from "./Component/Contact";
import Home from "./Component/Home";
import NoPage from "./Component/NoPage";
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Navbar />}>   
          <Route index element={<Home />} />       
          <Route path="about" element={<About />} />
          <Route path="blog" element={<BlogPage />} />
          <Route path="contact" element={<Contact />} /> 
          <Route path="*" element={<NoPage />} />         
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
