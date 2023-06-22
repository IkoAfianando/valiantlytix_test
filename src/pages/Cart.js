import React, {useState, useEffect} from 'react';
import {useSelector} from "react-redux";
import CartItem from "../components/CartItem";

const Cart = () => {
    const productData = useSelector((state) => state.commerce.productData);
    const [totalAmount, setTotalAmount] = useState(0);
    useEffect(() => {
        let price = 0;
        productData.forEach((item) => {
            price += parseInt(item.price) * parseInt(item.quantity);
            return price;
        })
        setTotalAmount(price);
    }, [productData]);
    

    return (
        <div>
            <img
                className="w-full h-60 object-cover"
                src="https://images.pexels.com/photos/1435752/pexels-photo-1435752.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt="cartImg"
            />
            <div className="max-w-screen-xl mx-auto py-20 flex">
                <CartItem/>
                <div className="w-1/3 bg-[#fafafa] py-6 px-4">
                    <div className="flex flex-col gap-6 border-b-[1px] border-b-gray-400 pb-6">
                        <h2 className="text-2xl font-medium">cart totals</h2>
                        <p className="flex items-center gap-4 text-base">
                            Subtotal{" "}
                            <span className="font-bold text-lg">
                                ${totalAmount}
                            </span>
                        </p>
                        <p className="flex items-start gap-4 text-base">
                            Shipping{" "}
                            <span>
                                Lorem ipsum dolor
                            </span>
                        </p>
                    </div>
                    <p className="font-semibold flex justify-between mt-6">
                        Total <span className="text-xl font-bold">${totalAmount}</span>
                    </p>
                    <button className="bg-black text-white py-3 px-6 mt-6 active:bg-gray-800 duration-300">proceed to checkout</button>
                </div>
            </div>
        </div>
    );
};

export default Cart;
