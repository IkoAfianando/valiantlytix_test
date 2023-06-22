import React from 'react';
import {cart, user} from '../assets/index'
const Header = () => {
    return (
        <div className="w-full h-20 bg-white border-b-[1px] border-b-gray-800 sticky top-0 z-50">
            <div className="max-w-screen-xl h-full mx-auto flex items-center justify-between">
                <div>
                    <a href="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                             className="w-10 h-10 text-white p-2 bg-black rounded-full" viewBox="0 0 24 24">
                            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                        </svg>
                        <span className="ml-3 text-xl">Ecommerce</span>
                    </a>
                </div>
                <div className="flex items-center gap-8">
                    <ul className="flex items-center gap-8">
                        <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">Home</li>
                        <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">Products</li>
                    </ul>
                    <div className="relative">
                        <img src={cart} alt="cart" className="w-8"/>
                        <span className="absolute top-0 right-0 w-4 h-4 bg-red-500 rounded-full text-white text-xs flex items-center justify-center">0</span>
                    </div>
                    <div>
                        <img src={user} alt="cart" className="w-8"/>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Header;
