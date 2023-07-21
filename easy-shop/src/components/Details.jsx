import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchProductData } from '../redux/detailSlice';
import {AiFillStar} from 'react-icons/ai';
import LoadingIcon from './LoadingIcon';

const Details = () => {
  const { productId } = useParams();
  const dispatch = useDispatch();
  const product = useSelector((state) =>state.detail.value);
  const loading = useSelector((state) => state.detail.loading);
  console.log(loading)
  console.log(product)

  useEffect(() => {
      dispatch(fetchProductData(productId))
  }, [dispatch])  

  if(loading === true || product.length === 0) {
    return(<LoadingIcon/>)
  }
  return (
    <div className='detail-container flex items-center h-[90%]'>
      <div className='detail-card my-10 flex w-[80%] mx-auto items-center border border-1 shadow-md shadow-slate-500 px-5'>
          <figure className=' me-10 border-r-2 pe-5 border-r-slate-500 w-[500px] h-[400px] flex items-center'>
            <img src={product.image}  className=" object-contain" alt="" />
          </figure>
          <div className='product-details-text '>
              <h2 className='text-xl font-semibold'>{product.title}</h2>
              <div className="rating-container flex my-5 w-[200px] justify-between items-center">
                <div className="rating-icon-container flex">
                  <AiFillStar className='text-yellow-500'/>
                  <AiFillStar className='text-yellow-500'/>
                  <AiFillStar className='text-yellow-500'/>
                  <AiFillStar className='text-yellow-500'/>
                  <AiFillStar/>
                </div>
                <span className='text-blue-500'>{product.rating.count} ratings</span>
              </div>
              <p className=' text-justify text-gray-800 my-5 text'>{product.description}</p>
              <div className='text-lg mb-3 '>Price : <span className='text-2xl text-red-500'>${product.price}</span></div>
              <div>Category: <span className='text-md font-semibold'>{product.category}</span></div>
          </div>
      </div>
    </div>
  )
}

export default Details
