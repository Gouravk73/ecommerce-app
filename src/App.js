import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/authentication/Login';
import SignUp from './components/authentication/SignUp';
import ForgetPassword from './components/authentication/ForgetPassword';
import Home from './components/home/Home';
import Header from './components/header/Header';
import About from'./components/about/About'
import Shop from'./components/shop/Shop'
import Contact from'./components/contact/Contact'
import ProductDetail from './components/home/ProductPage';
import Footer from './components/Footer/Footer';
function App() {
  return (
   <BrowserRouter>
   <Header/>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/shop' element={<Shop/>}/>
     <Route path='/contact' element={<Contact/>}/>
     <Route path="/shop/:productType/:productName" element={<ProductDetail />} />
    <Route path={'/login'} element={<Login/>}/>
    <Route path={'/signup'} element={<SignUp/>}/>
    <Route path={'/passwordreset'} element={<ForgetPassword/>}/>
   </Routes>
   <Footer/>
   </BrowserRouter>
  );
}

export default App;
