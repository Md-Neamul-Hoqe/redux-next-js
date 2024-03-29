import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count: 0
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state, action = 1) => {
            state.count += action.payload
        },
        decrement: (state, action = 1) => {
            /* return the value if already 0 */
            if (!state.count) state.count
            else state.count -= action.payload
        },
    }
})

export const { increment, decrement } = counterSlice.actions;

export default counterSlice.reducer
