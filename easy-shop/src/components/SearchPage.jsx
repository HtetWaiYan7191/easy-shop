import React from 'react'
import { useParams } from 'react-router-dom'

const SearchPage = () => {
    const {product} = useParams();
  return (
    <div>
      This is search page {product}
    </div>
  )
}

export default SearchPage
