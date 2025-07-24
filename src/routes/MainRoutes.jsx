import React from 'react'
import Home from '../pages/Home/Home'
import Product from '../pages/Products/Product'
import Product_Det from '../pages/Products_Details/Product_Det'
import Contact from '../pages/Contact/Contact'
import About from '../pages/About/About'
import Error from '../pages/404-Error/Error'
import { Route, Routes } from 'react-router-dom'
const MainRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/products' element={<Product/>}/>
        <Route path='/products/:id' element={<Product_Det/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='*' element={<Error/>}/>
      </Routes>
  )
}

export default MainRoutes