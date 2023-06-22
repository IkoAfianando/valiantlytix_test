import React, {useState, useEffect} from 'react';
import {useLocation} from "react-router-dom";
import Rating from '@mui/material/Rating';
import {addToCart} from "../redux/commerceSlice";
import {useDispatch} from "react-redux";
import {ToastContainer, toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Product = () => {
    const dispatch = useDispatch();
    const [details, setDetails] = useState({});
    const [baseQuantity, setBaseQuantity] = useState(1);
    const location = useLocation();
    useEffect(() => {
        setDetails(location.state.item)
    }, [location]);
    const rating = details.rating === undefined ? 0 : details.rating;


    return (
        <div>
            <div className="max-w-screen-xl mx-auto my-10 flex gap-10">
                <div className="w-2/5 relative">
                    <img
                        className="w-full h-[300px] object-cover"
                        src={details.thumbnail}
                        alt="productImg"
                    />
                    <div className="absolute top-4 right-0">
                        <p className="bg-black text-white font-semibold px-8 py-1">
                            Sale
                        </p>
                    </div>
                </div>
                <div className="w-3/5 flex-col justify-center gap-12">
                    <div>
                        <h2 className="text-4xl font-semibold">{details.title}</h2>
                        <div className="flex items-center gap-4 mt-3">
                            <p className="font-bold text-2xl">
                                ${details.price}
                            </p>
                        </div>
                    </div>

                    <div className="flex items-center gap-2 text-base mt-8">
                        <Rating name="read-only" value={rating} readOnly/>
                    </div>

                    <p className="text-base text-gray-500 mt-3">{details.description}</p>
                    <div className="flex gap-4 mt-2">
                        <div className="w-52 flex items-center justify-between text-gray-500 gap-4 border p-3">
                            <p className="text-sm">Quantity</p>
                            <div className="flex items-center gap-4 text-sm font-semibold">
                                <button className="border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-700
                                hover:text-white cursor-pointer duration-300 active:bg-black"
                                        onClick={() => setBaseQuantity(baseQuantity > 1 ? baseQuantity - 1 : baseQuantity)}>-
                                </button>
                                <span>{baseQuantity}</span>
                                <button className="border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-700
                                hover:text-white cursor-pointer duration-300 active:bg-black"
                                        onClick={() => setBaseQuantity(baseQuantity + 1)}>+
                                </button>
                            </div>
                        </div>
                        <button className="bg-black text-white py-3 px-6 active:bg-gray-800"
                                onClick={() => dispatch(addToCart({
                                    id: details.id,
                                    title: details.title,
                                    price: details.price,
                                    quantity: baseQuantity,
                                    description: details.description,
                                    thumbnail: details.thumbnail
                                })) & toast.success(`${details.title} added to cart`)}
                        >add to cart
                        </button>
                    </div>
                    <p className="text-base text-gray-500 mt-8">Category: {" "}
                        <span className="font-medium capitalize">{details.category}</span>
                    </p>
                </div>
            </div>
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
        </div>
    );
};

export default Product;
