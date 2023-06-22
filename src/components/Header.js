import React from 'react';
import {cart, user} from '../assets/index'
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {
    getAuth,
    signOut,
} from "firebase/auth"
import {toast, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {useDispatch} from "react-redux";
import {removeUser} from "../redux/commerceSlice";


const Header = () => {
    const userInfo = useSelector((state) => state.commerce.userInfo);
    const auth = getAuth();
    const dispatch = useDispatch();
    const handleSignOut = () => {
        signOut(auth).then(() => {
            toast.success("Signout Successfully");
            dispatch(removeUser())
        }).catch((error) => {
            console.error(error)
        })
    }

    const image = userInfo?.image;

    const productData = useSelector((state) => state.commerce.productData);
    return (<div className="w-full h-20 bg-white border-b-[1px] border-b-gray-800 sticky top-0 z-50">
        <div className="max-w-screen-xl h-full mx-auto flex items-center justify-between">
            <div>
                <a href="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 mr-96">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round"
                         strokeLinejoin="round" strokeWidth="2"
                         className="w-10 h-10 text-white p-2 bg-black rounded-full" viewBox="0 0 24 24">
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                    </svg>
                    <span className="ml-3 text-xl">Ecommerce</span>
                </a>
            </div>
            <div className="flex items-center gap-12">
                <ul className="flex items-center gap-8">
                    <a href="/"
                       className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">Home</a>
                    <a href="/products"
                       className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">Products</a>
                </ul>
                <Link to="/cart">
                    <div className="relative">
                        <img src={cart} alt="cart" className="w-8"/>
                        <span
                            className="absolute top-0 right-0 w-4 h-4 bg-red-500 rounded-full text-white text-xs flex items-center justify-center">{productData.length}</span>
                    </div>
                </Link>
                {
                    image !== undefined ? (
                        <>
                            <Link to="/">
                                <div>
                                    <img src={image} alt="userInfo" className="w-8"/>
                                </div>
                            </Link>
                            <button onClick={handleSignOut}>Signout</button>
                        </>
                    ) : (
                        <Link to="/login">
                            <div>
                                <img src={user} alt="user" className="w-8"/>
                            </div>
                        </Link>
                    )
                }
            </div>
            <ToastContainer
                position="top-right"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={true}
                closeOnClick={true}
                rtl={false}
                pauseOnFocusLoss={false}
                draggable={true}
                pauseOnHover={false}
                theme="dark"
            />
        </div>
    </div>);
};

export default Header;
