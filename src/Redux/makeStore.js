import { configureStore } from '@reduxjs/toolkit';
import counterSlice from './features/counterSlice';
import { postsAPI } from './features/postsAPI';
import logger from './middlewares/logger';


export const makeStore = () => configureStore({
    reducer: {
        counter: counterSlice,
        [ postsAPI.reducerPath ]: postsAPI.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(postsAPI.middleware).concat(logger),
    devTools: true
});
