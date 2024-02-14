import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    modaleStatus : false,
}

const modaleSlice = createSlice({
    name: "modaleswitch",
    initialState,
    reducers: {
        modaleOpened(state, action) {
            state.modaleStatus = action.payload;
        },
        modaleClosed(state, action) {
            state.modaleStatus = action.payload;
        }
    }
})

export const { modaleOpened } = modaleSlice.actions;
export const {modaleClosed} = modaleSlice.actions;
export default modaleSlice.reducer;