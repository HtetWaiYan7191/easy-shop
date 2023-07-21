import React from 'react'
import {AiOutlineLoading3Quarters} from 'react-icons/ai'
import '../styles/Loading.css';

const LoadingIcon = () => {
  return (
    <div className='loading-container'><AiOutlineLoading3Quarters className='loading-icon'/></div>
  )
}

export default LoadingIcon
