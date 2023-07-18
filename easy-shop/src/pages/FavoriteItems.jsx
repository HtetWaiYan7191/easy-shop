import React from 'react'
import { useSelector } from 'react-redux'
import Products from '../components/Products';

const FavoriteItems = () => {
  const originalFavItems = useSelector((state) => state.products.value);
  const favItems = originalFavItems.filter((item) => item.favorite === true);
  console.log(favItems)
  return (
    <div className='product-container grid grid-cols-4 gap-10 my-10 w-[80%] mx-auto'>
      {favItems?.map((favItem) => (
        <Products key={favItem.id} product={favItem}/>
))}
    </div>
  )
}

export default FavoriteItems
