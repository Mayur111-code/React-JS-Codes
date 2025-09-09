
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { NavLink } from "react-router-dom";
import Header from './Components/Header';
import Home from './Components/Pages/Home';
import ProductCard from './Components/ProductCard';




function App() {
 

  return (
    <>
    <Router>
    <Header />

      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/' element={<ProductCard/>}/>
      </Routes>
    </Router>
      
    </>
  )
}

export default App
