import React from 'react'
import { useParams } from 'react-router-dom'

const Details = () => {
  const { product } = useParams();
  return (
    <div>
      This is Details Page {product}
    </div>
  )
}

export default Details
