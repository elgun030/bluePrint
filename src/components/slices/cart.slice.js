import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name : "cart",
    initialState : [],
    reducers : {
        addToCart: (state, action) => {
            const cartItem = action.payload
            const existingCartItem = state.find((item) => item.product.id === cartItem.product.id && item.size === cartItem.size)

            if(existingCartItem && existingCartItem.size === cartItem.size ){
                existingCartItem.quantity += cartItem.quantity;
            }else{
                state.push(cartItem);
            }

        },
        removeFromCart: (state, action) => {
            const cartItem = action.payload 
            const existingCartItemIndex = state.findIndex((item) => item.product.id === cartItem.product.id && item.size === cartItem.size)
             state.splice(existingCartItemIndex,1)

        },
        changeAmount: (state, action) => {

            const cartItem = action.payload.cartItem 
            const newQuantity = action.payload.newQuantity
            console.log(newQuantity,'salam')
            
            if(newQuantity === 0) {
            const existingCartItemIndex = state.findIndex((item) => item.product.id === cartItem.product.id && item.size === cartItem.size)
        
            state.splice(existingCartItemIndex,1)
        }else {
            const existingCartItem = state.find((item) => item.product.id === cartItem.product.id && item.size === cartItem.size)
            existingCartItem.quantity = newQuantity;
        }
        },
    }
})

export const {addToCart, removeFromCart,changeAmount} = cartSlice.actions;
export default cartSlice