import React from 'react'
import empty from '../../assets/empty.png'
import './wishlistEmpty.scss'
const WishlistEmpty = () => {
    return (
        <div className='container empty'>
            <img src={empty} alt="" />
            <h1>Wishlist is empty</h1>
        </div>
    )
}

export default WishlistEmpty