import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './features/counterSlice'

export const store = configureStore({
    reducer: {
        /* here counter is the name of the slice [counterSlice] */
        counter: counterReducer
    }
})