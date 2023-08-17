import { BrowserRouter} from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';

import Footer from './components/Footer/Footer';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { fetchWishlist } from './api/wishlist/fetchWishlist';
import { WishlistSliceActions } from './store/Wishlist-slice';
import AppRoutes from './AppRoutes';
import { CartSliceActions } from './store/cart-slice';
import { FetchCartItem } from './api/cart/fetchCartItem';
function App() {
  const isLoggedIn=useSelector((state)=>state.login.isLoggedIn)
  const dispatch=useDispatch();
  const wishItem = useSelector((state) => state.wishlist.wishlistItems);
  const cartItem = useSelector((state) => state.cart.cartItems);
  let email = useSelector((state) => state.login.userEmail);
  const [firstTimeLoading,setFirstTimeLoading] = useState(true);
  email = email.split(/[@.]/).join('');
  useEffect(()=>{
    if(isLoggedIn&&wishItem.length===0) {
        fetchWishlist(email,dispatch,WishlistSliceActions) 
    }
  },[wishItem.length,email,dispatch,isLoggedIn]);

  useEffect(()=>{
    if(isLoggedIn&&cartItem.length===0&&firstTimeLoading) {
      FetchCartItem(email,dispatch,CartSliceActions) 
      setFirstTimeLoading(false);
    }
  },[cartItem.length,email,dispatch,firstTimeLoading,isLoggedIn]);


  return (
   <BrowserRouter>
   <Header/>
   <AppRoutes  isLoggedIn={isLoggedIn}/>
   <Footer/>
   </BrowserRouter>
  );
}

export default App;
