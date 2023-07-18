import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from '../redux/productSlice';
import Products from '../components/Products';

const ProductsContainer = () => {
  const products = useSelector((state) => state.products.value );
  const dispatch = useDispatch();
  useEffect(() => {
    if(products.length === 0) {
      dispatch(fetchProducts());
    }
  }, []);


  return (
    <div className='product-container grid grid-cols-4 gap-10 my-10 w-[80%] mx-auto'>
      {products.map((product) => <Products key={product.id} product={product}/>)}
    </div>
  )
}

export default ProductsContainer
