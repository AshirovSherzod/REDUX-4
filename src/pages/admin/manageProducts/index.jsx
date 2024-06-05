import React from 'react'
import Products from '../../../components/products'
// import { useGetAllProductsQuery } from '../../../context/apiSlice';
import { useSelector } from 'react-redux';
import { useGetAllProductsQuery } from '../../../context/apiSlice';

const ManageProducts = () => {
  const { data } = useGetAllProductsQuery();
  const isAdmin = useSelector(state => state.hideButton.value)

  // let isAdmin = false

  return (
    <main>
        <Products data={data} isAdmin={!isAdmin}/>
    </main>
  )
}

export default ManageProducts