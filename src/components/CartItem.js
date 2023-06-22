import React from 'react';
import {useSelector} from "react-redux";
import {MdOutlineClose} from "react-icons/md";
import {decrementQuantity, deleteItem, incrementQuantity, resetCart} from "../redux/commerceSlice";
import {useDispatch} from "react-redux";
import {toast, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {Link} from "react-router-dom";
import {HiOutlineArrowNarrowLeft} from "react-icons/hi";

const CartItem = () => {
    const dispatch = useDispatch();
    const productData = useSelector((state) => state.commerce.productData);

    return <div className="w-2/3 pr-10">
        <div className="w-full">
            <h2 className="text-2xl">Shopping Cart</h2>
        </div>
        <div>
            {productData.map((item) => <div key={item.id} className="flex items-center justify-between gap-6 mt-6">
                <MdOutlineClose
                    onClick={() => {
                        // eslint-disable-next-line no-unused-expressions
                        dispatch(deleteItem({
                            id: item.id,
                        }));
                        toast.error(`${item.title} is removed from cart`);
                    }}
                    className="text-xl text-gray-600 hover:text-red-600 cursor-pointer duration-300"/>
                <div className="flex items-center gap-2">
                    <img
                        className="w-32 h-32 object-cover"
                        src={item.thumbnail}
                        alt="productImg"
                    />
                </div>
                <h2 className="w-52">{item.title}</h2>
                <p className="w-52">${item.price}</p>
                <div className="w-52 flex items-center justify-between text-gray-500 gap-4 border p-3">
                    <p className="text-sm">Quantity</p>
                    <div className="flex items-center gap-4 text-sm font-semibold">
                                <span
                                    onClick={() => {
                                        dispatch(decrementQuantity({
                                            id: item.id,
                                            title: item.title,
                                            price: item.price,
                                            thumbnail: item.thumbnail,
                                            quantity: 1,
                                            description: item.description
                                        }))}}
                                    className="border h-5 font-normal text-lg flex items-center justify-center
                                px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black"> -
                                </span>{item.quantity}
                        <span
                            onClick={() => {
                            dispatch(incrementQuantity({
                                id: item.id,
                                title: item.title,
                                price: item.price,
                                thumbnail: item.thumbnail,
                                quantity: 1,
                                description: item.description
                            }))}}
                            className="border h-5 font-normal text-lg flex items-center justify-center
                                px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black"
                        >
                                    +
                                </span>
                    </div>
                </div>
                <p className="w-14">${parseInt(item.quantity) * parseInt(item.price)}</p>
            </div>)}
        </div>
        {/* eslint-disable-next-line no-undef */}
        <button
            onClick={() => {
                // eslint-disable-next-line no-unused-expressions
                dispatch(resetCart()) & toast.error("Your Cart is Empty");
            }}
            className="bg-red-500 text-white mt-8 ml-7 py-1 px-6 hover:bg-red-800 duration-300">Reset Card
        </button>
        <Link to="/">
            <button
                className="mt-8 ml-7 flex items-center gap-1 text-gray-400 hover:text-black duration-300"
            >
                <span>
                    <HiOutlineArrowNarrowLeft/>
                </span>
                Back To Shopping

            </button>
        </Link>
        <ToastContainer
            position="top-right"
            autoClose={2000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
        />
    </div>;
};

export default CartItem;
