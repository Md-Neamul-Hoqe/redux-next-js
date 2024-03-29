'use client'

import { decrement, increment } from "@/Redux/features/counterSlice";
import { useDispatch } from "react-redux";

const Button = ({ text }) => {
    const dispatch = useDispatch()

    return (
        <button onClick={() => dispatch(text === 'increment' ? increment(2.5) : decrement(0.5))} className="text-xl border rounded px-5 py-2 hover:bg-gray-700">
            {text.charAt(0).toUpperCase() + text.slice(1)}
        </button>
    );
};

export default Button;