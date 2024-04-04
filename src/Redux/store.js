import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './features/counterSlice'

/* middleware for logging each state changes */
import logger from "./middlewares/logger";
// import logger from 'redux-logger'

export const store = configureStore({
    reducer: {
        /* here counter is the name of the slice [counterSlice.js] */
        counter: counterReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})