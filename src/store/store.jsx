import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "./login-slice";
import WishlistSlice from "./Wishlist-slice";
import cartSlice from "./cart-slice";
const store=configureStore({
reducer:{
    login:loginSlice,
    wishlist:WishlistSlice,
    cart:cartSlice,
}
})
export default store;