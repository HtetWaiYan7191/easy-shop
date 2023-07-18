import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from '../redux/productSlice';

const ProductsContainer = () => {
  const products = useSelector((state) => state.products.value );
  const dispatch = useDispatch();
  useEffect(() => {
    if(products.length === 0) {
      dispatch(fetchProducts());
    }
  }, []);

  
  return (
    <div>
      <h1>This is ProductsContainer</h1>
    </div>
  )
}

export default ProductsContainer
