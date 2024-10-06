import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    cart:[],
}



const basketSlice = createSlice({
    name:"carts",
    initialState,
    reducers:{
        addToCart:(state,action)=>{
            state.cart.push(action.payload)
            
        }
    }
})
export const {addToCart}= basketSlice.actions
export default basketSlice.reducer