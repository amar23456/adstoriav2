import * as React from "react";
import { Routes, Route } from "react-router-dom";

import Home from './pages/Home'
import Services from "./pages/Services";
import Portofolio from "./pages/Portofolio";
import About from "./pages/About";
import Contact from './pages/Contact'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="services" element={<Services />} />
        <Route path="portofolio" element={<Portofolio />} />
        <Route path="about-us" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
