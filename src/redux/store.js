import {configureStore} from "@reduxjs/toolkit";
import commerceReducer from "./commerceSlice";

export const store = configureStore({
    reducer: {
        commerce: commerceReducer,
    }
})
