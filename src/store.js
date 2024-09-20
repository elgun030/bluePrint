import { configureStore } from "@reduxjs/toolkit";

//Slices
import categoriesSlice from "./components/slices/categories.slice";
import colorSlice from "./components/slices/color.slice";
import sizeSlice from "./components/slices/size.slice";
import cartSlice from "./components/slices/cart.slice";

const store = configureStore({
   reducer:{
    categories: categoriesSlice.reducer, 
    colors: colorSlice.reducer,
    size: sizeSlice.reducer,
    cart: cartSlice.reducer,
   },
    
})

export default store;