import { createSlice } from "@reduxjs/toolkit";

const initialState={
    cartItems:[],
}
const CartSlice=createSlice({
    name: "cart",
    initialState,
    reducers:{
        setCartItems:(state,action)=>{
            state.cartItems = action.payload
        },
        addToCart:(state,action)=>{
            const temp=action.payload
            const existing=state.cartItems.find((item)=>item.id===temp.id)

            if(!existing){
                state.cartItems= [...state.cartItems,{...temp,quantity:1}];
            }
            else existing.quantity=existing.quantity+1;
        },
        incrementQuanity:(state,action)=>{
            const item =state.cartItems.find((item)=>item.id===action.payload.id)
            item.quantity++;
        },
        decrementQuanity:(state,action)=>{
            const itemIndex = state.cartItems.findIndex(item => item.id === action.payload.id);

            if (itemIndex !== -1) {
              const item = state.cartItems[itemIndex];
              item.quantity--;
          
              if (item.quantity === 0) {
                state.cartItems.splice(itemIndex, 1);
              }
            }
        },
        
    }
})
export const CartSliceActions=CartSlice.actions;
export default CartSlice.reducer