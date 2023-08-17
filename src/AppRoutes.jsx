import React from 'react'
import {Route, Routes } from 'react-router-dom';
import Login from './components/authentication/Login';
import SignUp from './components/authentication/SignUp';
import ForgetPassword from './components/authentication/ForgetPassword';
import Home from './components/home/Home';
import About from'./components/about/About'
import Shop from'./components/shop/Shop'
import Contact from'./components/contact/Contact'
import ProductDetail from './components/home/ProductPage';


const AppRoutes = ({isLoggedIn}) => {
  return (
    <Routes>
    <Route path='/' element={isLoggedIn?<Home/>:<Login/>}/>
    <Route path='/about' element={isLoggedIn?<About/>:<Login/>}/>
    <Route path='/shop' element={isLoggedIn?<Shop/>:<Login/>}/>
    <Route path='/contact' element={isLoggedIn?<Contact/>:<Login/>}/>
    <Route path="/shop/:productType/:productName" element={isLoggedIn?<ProductDetail />:<Login/>} />
    
    <Route path={'/login'} element={!isLoggedIn?<Login/>:<Home/>}/>
    <Route path={'/signup'} element={!isLoggedIn?<SignUp/>:<Home/>}/>
    <Route path={'/passwordreset'} element={!isLoggedIn?<ForgetPassword/>:<Home/>}/>
   </Routes>
  )
}

export default AppRoutes