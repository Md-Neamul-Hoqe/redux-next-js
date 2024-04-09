'use client'

import { useAppSelector } from "@/Redux/hooks/hooks";
// import { useSelector } from "react-redux";

const DisplayCounter = () => {
    const { count } = useAppSelector(state => state.counter)
    return (
        <div>
            <div className="text-4xl font-bold text-green-400">{count}</div>
        </div>
    );
};

export default DisplayCounter;