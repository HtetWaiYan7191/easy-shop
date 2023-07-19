import React, { useState } from 'react'
import '../styles/Products.css';
import { useNavigate } from 'react-router-dom';
import {AiFillHeart} from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux';
import { addFavoriteList, removeFavoriteList, addCartList, removeCartList } from '../redux/productSlice';

const Products = ({product}) => {
  const inCart = product.cart;
  const fav = product.favorite;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleDetailButton = (e) => {
    e.preventDefault();
    navigate(`/details/${product.id}`);
  }

  const handleClick = () => {
    if(!fav) {
      dispatch(addFavoriteList(product.id));
    } else {
      dispatch(removeFavoriteList(product.id));
    }
  };

  const handleCart = () => {
    if(!inCart) {
      dispatch(addCartList(product.id))
    } else {
      dispatch(removeCartList(product.id))
    }
  }

  return (
    <div className='product-card border  border-1 relative'>
      <button className={fav ? 'absolute right-3 bottom-32 text-red-500' : 'absolute right-3 bottom-32 '} type='button' onClick={handleClick}><AiFillHeart/></button>
      <figure className='flex justify-center my-5'>
        <img src={product.image}   alt="product-image"  className='product-image'/>
      </figure>
      <h2 className='text-md font-semibold text-center max-h-[24px] overflow-auto'>{product.title}</h2>
      <p className=' text-gray-500 product-description px-5 my-4 '>{product.description}</p>
      <div className='text-center py-4 text-teal-500'>${product.price}</div>
      <button className= {!inCart ? ' w-full p-3 bg-teal-400 border hover:bg-teal-300 active:bg-teal-500' : 'w-full p-3 bg-red-600 border hover:bg-red-500 active:bg-red-500 text-white'} onClick={handleCart}>{!inCart ? 'Add to Cart' : 'Remove From Cart'}</button>
      <button className=' w-full p-3 bg-sky-400 border hover:bg-sky-300 active:bg-sky-500' onClick={handleDetailButton}>Details</button>
    </div>
  )
}

export default Products
