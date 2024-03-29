'use client'

import { useSelector } from "react-redux";

const DisplayCounter = () => {
    const { count } = useSelector(state => state.counter)
    return (
        <div>
            <div className="text-4xl font-bold text-green-400">{count}</div>
        </div>
    );
};

export default DisplayCounter;