import React from 'react'
import './products.scss'
import { CiHeart } from "react-icons/ci";
import { useDispatch } from 'react-redux';
import { addWishList } from '../../context/wishlistSlice';
import { useLocation } from 'react-router-dom';


const ProductItem = ({ image, title, price, element }) => {
  const dispatch = useDispatch()
  let {pathname} = useLocation()
  console.log(pathname);
  return (
    <div className='product-item'>
      <div className="product-item__img">
        <img src={image} alt="" />
      </div>
      <div className="product-item__desc">
        <h4>{title}</h4>
        <p>{price}</p>
      </div>
      <div className="product__btns">
        {
          pathname === "admin/manageproducts"
          ?
          <>
            <button>Delate</button>
            <button>Edit</button>
          </>
          :
          <button onClick={()=> dispatch(addWishList(element))}><CiHeart /></button>
        }
      </div>
    </div>
  )
}

export default ProductItem