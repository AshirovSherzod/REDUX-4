import React from 'react'
import Products from '../../components/products'
import { useGetAllProductsQuery } from '../../context/apiSlice';
import { useSelector } from 'react-redux';

const Home = () => {
  const isAdmin = useSelector(state => state.hideButton.value)

  const { data } = useGetAllProductsQuery();
  console.log(data);
  // console.log(!isAdmin);
  return (
    <main>
        <Products data={data} isAdmin={isAdmin}/>
    </main>
  )
}

export default Home