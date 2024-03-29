'use client'
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
    const [ isDropped, setIsDropped ] = useState(false)

    const handleDropMenu = () => {
        setIsDropped(prevState => !prevState);
    }

    return (
        <nav className="flex justify-between items-center py-5 px-1.5 fixed w-screen">
            <Link href="#" className="text-xl font-extrabold">Redux</Link>
            <div>
                <button className={`md:hidden border rounded-xl w-10 h-10 ${isDropped ? 'bg-gray-500' : ''}`} onClick={handleDropMenu}>D</button>
                <ul className={`flex max-md:flex-col max-md:gap-2 max-md:bg-gray-800 max-md:py-2 max-md:w-32 max-md:text-center max-md:fixed ${isDropped ? 'transition-all max-md:top-20' : 'transition-all max-md:-top-48'} right-4 rounded gap-5 list-none`}>
                    <li className="max-md:px-3 max-md:border-b-2 last:border-b-0 max-md:pb-2 leading-loose"><Link href={'#'} className={`focus:active:tracking-wider`}>Products</Link></li>
                    <li className="max-md:px-3 max-md:border-b-2 last:border-b-0 max-md:pb-2 leading-loose"><Link href={'#'} className={`focus:active:tracking-wider`}>About Us</Link></li>
                    <li className="max-md:px-3 max-md:border-b-2 last:border-b-0 max-md:pb-2 leading-loose"><Link href={'#'} className={`focus:active:tracking-wider`}>Contact</Link></li>
                </ul>
            </div>
            <div>
                <div className="w-12 h-12 flex justify-center items-center text-xl font-extrabold rounded-full bg-gray-400">U</div>
            </div>
        </nav>
    );
};

export default Navbar;