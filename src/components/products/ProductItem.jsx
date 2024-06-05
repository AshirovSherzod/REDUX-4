import React, { useState } from 'react'
import './products.scss'
import { useDispatch } from 'react-redux';
import { addWishList } from '../../context/wishlistSlice';
import { NavLink, useLocation } from 'react-router-dom';
import { GoHeart } from "react-icons/go";
import { useDeleteProductsMutation } from '../../context/apiSlice';
import { RiDeleteBin5Fill } from "react-icons/ri";
import { AiFillEdit } from "react-icons/ai";





const ProductItem = ({ id, image, title, price, element }) => {


  const dispatch = useDispatch()
  let { pathname } = useLocation()
  // const [deleteProduct, {data}] = useDeleteProductMutation()
  // console.log(id);

  const [deleteProducts, { data }] = useDeleteProductsMutation()

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
          pathname === "/admin/manageproducts"
            ?
            <div className='product__btns__manages'>
              <button className='product__btns__manage' onClick={() => deleteProducts(id)}><RiDeleteBin5Fill /></button>
              <button className='product__btns__manage'><AiFillEdit /></button>
              </div>
              :
              <button className='product__btns__heart' onClick={() => dispatch(addWishList(element))}><GoHeart /></button>
          }
            </div>
    </div>
      )
}

      export default ProductItem