import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import Products from './Products';
import LoadingIcon from './LoadingIcon';

const SearchPage = () => {
    const {product} = useParams();
    const products = useSelector((state) => state.products.value);
    const lowerCaseProducts = products.map((product) => ({
      ...product,
      title: product.title.toLowerCase()
    }));
    const searchProduct = lowerCaseProducts.filter((item) => item.title === product);

  if(searchProduct.length === 0) {
    return(
      <LoadingIcon/>
    )
  }
  return (
    <div className='product-container flex justify-center my-10 w-[40%] mx-auto'>
    {searchProduct.map((product) => <Products key={product} product={product}/>)}
  </div>
  )
}

export default SearchPage
