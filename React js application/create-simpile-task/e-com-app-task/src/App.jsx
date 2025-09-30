
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './Components/Header';
import Home from './Pages/Home';
import Products from './Pages/Products';
import ProductDetail from './Pages/ProductDetail';
import Orders from './Pages/Orders';
import Cart from './Pages/Cart';


const App = () => {
  return (
    <div>

<Router>
  <Header/>

<Routes>

  <Route path='/' element={<Home/>}/>
  <Route path='/products' element={<Products/>}/>
  <Route path='/products/:id' element={<ProductDetail/>}/>
<Route path='/orders' element={<Orders/>}/>
<Route path='/cart' element={<Cart/>}/>
</Routes>
  
</Router>


    </div>
  )
}

export default App