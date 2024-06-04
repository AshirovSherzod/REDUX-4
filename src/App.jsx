import react from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import Wishlist from './pages/wishlist'
import CreateProducts from './pages/admin/createProducts'
import ManageProducts from './pages/admin/manageProducts'
import Admin from './pages/admin'
import Header from './components/header'


function App() {


  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/wishlist' element={<Wishlist />} />
        <Route path='/admin' element={<Admin />}>
          <Route path='createproducts' element={<CreateProducts />} />
          <Route path='manageproducts' element={<ManageProducts />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
