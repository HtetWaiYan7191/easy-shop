import React from 'react'
import { Routes, Route } from 'react-router-dom';
import ProductsContainer from './components/ProductsContainer';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<ProductsContainer/>}></Route>
    </Routes>
  )
}

export default App
