import React, { useState } from 'react'
import '../styles/Products.css';
import {AiFillHeart} from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux';
import { addFavoriteList, removeFavoriteList } from '../redux/productSlice';

const Products = ({product}) => {

  const fav = product.favorite;
  const dispatch = useDispatch();

  const handleClick = () => {
    if(!fav) {
      dispatch(addFavoriteList(product.id));
    } else {
      dispatch(removeFavoriteList(product.id));
    }
  }

  return (
    <div className='product-card border  border-1 relative'>
      <button className={fav ? 'absolute right-2 top-4 text-red-500' : 'absolute right-2 top-4 '} type='button' onClick={handleClick}><AiFillHeart/></button>
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
