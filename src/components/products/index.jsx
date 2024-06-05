import React from 'react'
import './products.scss'
import ProductItem from './ProductItem';

const Products = ({data}) => {
  // console.log(data);
  // let {data, isLoading, isError, isSuccess} = useGetProductsQuery()

  return (
    <>
      <div className="products">
        <div className='product container'>
          {
            data?.map(el => (
              <ProductItem key={el.id} id={el.id} image={el.image} title={el.title} price={el.price} element={el}/>
            ))
          }
        </div>

      </div>
    </>
  )
}

export default Products