import React from 'react';
import ProductsCard from "./ProductsCard";
import {useLoaderData} from "react-router-dom";

const Products = () => {
    const data = useLoaderData();

    return (
        <div className="py-10">
            <div className="flex flex-col items-center gap-4">
                <h1 className="text-2xl bg-black text-white py-2 w-80 text-center">
                    Shopping Everyday
                </h1>
                <span className="w-20 h-[3px] bg-black"></span>
                <p className="max-w-[700px] text-gray-600 text-center">
                    Make your shopping experience more enjoyable with our products,
                    we have a wide range of products that you can choose from.

                </p>
            </div>
            <div className="max-w-screen-xl mx-auto py-10 grid grid-cols-4 gap-10">
                {data.length > 0 ? (
                    data.length > 0 && data.map((item) => (
                        <ProductsCard key={item.id} product={item}/>
                    ))

                ) : (
                    <div className="flex justify-center items-center">
                        <p className="text-2xl font-semibold">Loading...</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Products;
