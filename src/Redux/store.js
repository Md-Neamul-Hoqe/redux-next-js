import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './features/counterSlice'

/* middleware for logging each state changes */
/* custom logger */
import logger from "./middlewares/logger";
/* build in logger */
// import logger from 'redux-logger'

/* RTK Query API */
import { postsAPI } from "./features/postsAPI";

export const store = configureStore({
    reducer: {
        /* here counter is the name of the slice [counterSlice.js] */
        counter: counterReducer,
        [ postsAPI.reducerPath ]: postsAPI.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([ postsAPI.middleware, logger ])
})