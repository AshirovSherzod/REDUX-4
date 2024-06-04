import React from 'react'
import './products.scss'
import { useGetAllProductsQuery } from '../../context/apiSlice';
import ProductItem from './ProductItem';

const Products = ({data}) => {
  // console.log(data);
  return (
    <>
      <div className="products">
        <div className='product container'>
          {
            data?.map(el => (
              <ProductItem key={el.id} image={el.image} title={el.title} price={el.price} element={el}/>
            ))
          }
        </div>

      </div>
    </>
  )
}

export default Products