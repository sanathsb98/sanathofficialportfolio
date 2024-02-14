import { configureStore } from "@reduxjs/toolkit";
import modaleSlice from "./features/modaleSlice";
import navbarSlice from "./features/navbarSlice";
import darkModeSlice from "./features/darkModeSlice";

export const store = configureStore({
    reducer: {
        modaleswitch : modaleSlice,
        navbarstate : navbarSlice,
        darkModeSwitch : darkModeSlice,
    }
})