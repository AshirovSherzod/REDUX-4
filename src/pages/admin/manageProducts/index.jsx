import React from 'react'
import Products from '../../../components/products'
import { useGetAllProductsQuery } from '../../../context/apiSlice';

const ManageProducts = () => {
  const { data } = useGetAllProductsQuery();

  return (
    <main>
        <Products data={data}/>
    </main>
  )
}

export default ManageProducts