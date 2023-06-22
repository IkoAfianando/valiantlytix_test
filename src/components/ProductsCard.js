import React from 'react';
import {BsArrowRight} from "react-icons/bs";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {addToCart} from "../redux/commerceSlice";
import {ToastContainer, toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const ProductsCard = ({product}) => {
    const dispatch = useDispatch();

    const navigate = useNavigate();
    const handleDetails = () => {
        navigate(`/product/${product.id}`, {
            state: {
                item: product
            }
        });
    }
    return (<div className="group relative">
        <div onClick={handleDetails} className="w-full h-96 cursor-pointer overflow-hidden">
            <img
                className="w-full h-full object-cover group-hover:scale-110 duration-500 "
                src={product.thumbnail}
                alt="productImg"
            />
        </div>
        <div className="w-full border-[1px] px-2 py-4">
            <div className="flex justify-between">
                <div>
                    <h2 className="text-base font-bold">
                        {product.title}
                    </h2>
                </div>
                <div className="flex justify-end gap-2 relative overflow-hidden w-28 text-sm">
                    <div
                        className="flex gap-2 transform group-hover:translate-x-24 transition-transform duration-500">
                        <p className="text-gray-500 font-semibold">${product.price}</p>
                    </div>
                    <p onClick={() => dispatch(addToCart({
                        id: product.id,
                        title: product.title,
                        price: product.price,
                        quantity: 1,
                        description: product.description,
                        thumbnail: product.thumbnail
                    })) & toast.success(`${product.title} added to cart`)}
                       className="absolute z-20 w-[100px] text-gray-500 hover:text-gray-900 flex items-center
                    gap-1 top-0 transform -translate-x-32 group-hover:translate-x-0 transition-transform cursor-pointer duration-500">
                        add to cart{" "}
                        <span>
                                <BsArrowRight/>
                            </span>
                    </p>
                </div>
            </div>
            <div>
                <p>{product.category}</p>
            </div>
            <div className="absolute top-4 right-0">
                <p className="bg-black text-white font-semibold px-6 py-1">
                    Sale
                </p>

            </div>
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
    </div>);
};

export default ProductsCard;
