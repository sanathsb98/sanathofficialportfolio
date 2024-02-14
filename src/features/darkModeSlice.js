import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    darkmode : true,
}


const darkModeSlice = createSlice({
      name : "darkModeSwitch",
      initialState,

      reducers:{
        changeScreenMode(state,action){
            state.darkmode = action.payload;
        }
      }
})

export const {changeScreenMode} = darkModeSlice.actions;
export default darkModeSlice.reducer;