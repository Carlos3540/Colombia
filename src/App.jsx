import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';
import React from "react";
import Home from "./components/home";
import Informativa from "./components/Informativa";
import Fav from "./components/fav";
import Original from "./components/Original";
import Detalles from "./components/Detalles";

function App() {
  return (
    <>
      <Router>
        
        <Routes>
          <Route path="/" element={<Home /> } />
          <Route path="/informativa" element={<Informativa /> } />
          <Route path="/mapa" element={<Mapa /> } />
          <Route path="/favoritos" element={<Favoritos /> } />
          <Route path="/detalle/:depto/:municipio" element={<Detalle /> } />
       </Routes>
    </Router>

      <Home />
      <Informativa />
      <Fav />
      <Original />
      <Detalles />
    </>
  );
}

export default App;
