import { createSlice } from "@reduxjs/toolkit";

const categoriesSlice = createSlice({
    name: "category",
    initialState: {
        categories: [],
        selectedCategories: [],

    },
    reducers:{
        setCategories: (state,action) => {
            const categories = action.payload;
            
            if(state.categories.length > 0) return

            state.categories = categories;
        },
        selectCategory: (state,action) => {
            const category = action.payload
            const isSelected = state.selectedCategories.includes(category);
            if(!isSelected){
                state.selectedCategories.push(category);
            }else{
                state.selectedCategories = state.selectedCategories.filter((selectCategory) => selectCategory !== category);
            }

        },

    },
})
export const {setCategories,selectCategory } = categoriesSlice.actions;
 
export default categoriesSlice;
