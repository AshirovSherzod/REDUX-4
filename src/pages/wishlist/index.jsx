import React from 'react'
import { useSelector } from 'react-redux'
import Products from '../../components/products';
import WishlistEmpty from '../../components/wishlistEmpty';

const Wishlist = () => {
  const data = useSelector(state => state.wishlist.value)
  console.log(data);
  return (
    <main>
      {
          !data.length
          ?
          <WishlistEmpty/>
          :
          <Products data={data} />

      }
    </main>
  )
}

export default Wishlist