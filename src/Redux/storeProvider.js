'use client'

import { useRef } from "react"
import { Provider } from "react-redux"
import { makeStore } from "./makeStore";

export default function StoreProvider({ children }) {
    const storeRef = useRef();

    /* Create store reference at first render */
    if (!storeRef.current) storeRef.current = makeStore()

    return <Provider store={storeRef.current}>{children}</Provider>
}
