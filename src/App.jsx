import react from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import Wishlist from './pages/wishlist'
import Header from './components/header'
import SinglePage from './pages/singlepage'
import AddToCard from './context/addToCard'


function App() {


  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/wishlist' element={<Wishlist />} />
        <Route path='/singlepage/:id' element={<SinglePage />} />
        <Route path='/addtocard' element={<AddToCard />} />
      </Routes>
    </>
  )
}

export default App
