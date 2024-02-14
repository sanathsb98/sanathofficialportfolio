import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    navbarexpanded : false,
}

const navbarSlice = createSlice({
    name : 'navbarstate',
    initialState,
         reducers:{
            navbarValue(state,action){
               state.navbarexpanded = action.payload;
            }
         }
})


export const {navbarValue} = navbarSlice.actions;
export default navbarSlice.reducer;