import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    wishlistItems: [],
}

const WishlistSlice= createSlice({
    name:'wishlist',
    initialState,
    reducers: {
        setWishlistItems:(state,action)=>{
            state.wishlistItems = action.payload
        },
        addItemToWishlist: (state,action) => {
            const temp = action.payload;
            const existing = state.wishlistItems.find((item) => item.id === temp.id);
            if (!existing) state.wishlistItems = [...state.wishlistItems, temp];
            console.log("",state.wishlistItems)
         },
        removeItemFromWishlist: (state,action) => {
            const temp = action.payload;
            const filterItem=state.wishlistItems.filter((item)=>item.id!==temp.id)
            if(filterItem.length===0) state.wishlistItems = []
            else state.wishlistItems = filterItem

        }
    }
})
export const WishlistSliceActions =WishlistSlice.actions
export default WishlistSlice.reducer;