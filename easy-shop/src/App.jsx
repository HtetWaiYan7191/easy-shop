import React from 'react'
import { Routes, Route } from 'react-router-dom';
import ProductsContainer from './pages/ProductsContainer';
import FavoriteItems from './pages/FavoriteItems';
import CartItems from './pages/CartItems';


const App = () => {
  return (
    <Routes>
      <Route path='/' element={<ProductsContainer/>}></Route>
      <Route path='/favorite' element={<FavoriteItems/>}></Route>
      <Route path='/cartItems' element={<CartItems/>}></Route>
      <Route path='/details'></Route>
    </Routes>
  )
}

export default App
