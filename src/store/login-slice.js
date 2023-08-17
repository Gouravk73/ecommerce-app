import { createSlice } from "@reduxjs/toolkit"



const initialState ={
    idToken: localStorage.getItem('token') ||"",
    isLoggedIn:!!localStorage.getItem('token'),
    userEmail:localStorage.getItem('email')||"",

}
const loginSlice=createSlice({
    name:'login',
    initialState,
    reducers:{
        loginSuccess(state,action){
            state.idToken=action.payload.idToken
            state.userEmail=action.payload.email
            state.isLoggedIn=true; 
            localStorage.setItem('token',action.payload.idToken)
            localStorage.setItem('email',action.payload.email)
         },
        logoutSuccess(state,action){
        }
    }
})

export const loginSliceActions=loginSlice.actions
export default loginSlice.reducer;