import React from 'react'
import '../styles/Products.css';

const Products = ({product}) => {

  return (
    <div className='product-card border  border-1 relative'>
      <figure className='flex justify-center my-5'>
        <img src={product.image}   alt="product-image"  className='product-image'/>
      </figure>
      <h2 className='text-md font-semibold text-center max-h-[24px] overflow-auto'>{product.title}</h2>
      <p className=' text-gray-500 product-description px-5 my-4 '>{product.description}</p>
      <div className='text-center py-4 text-slate-600'>${product.price}</div>
      <button className=' w-full p-3 bg-teal-400 border hover:bg-teal-300 active:bg-teal-500'>Add to Cart</button>
      <button className=' w-full p-3 bg-sky-400 border hover:bg-sky-300 active:bg-sky-500'>Details</button>
    </div>
  )
}

export default Products
