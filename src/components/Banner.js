import React from "react";

const Banner = () => {
    return (
        <div className="w-full h-auto">
            <section className="text-gray-600 body-font">
                <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <div
                        className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Before they sold
                            out
                            <br className="hidden lg:inline-block"/>Get your products everyday.
                        </h1>
                        <p className="mb-8 leading-relaxed">
                            You can get your products everyday with our products, we have a wide range of products that
                            you can choose from.
                            and we have a wide range of products that you can choose from.

                        </p>
                        <div className="flex justify-center">
                            <button
                                className="inline-flex text-white bg-black border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                                <a href="/products">
                                    Products
                                </a>
                            </button>
                        </div>
                    </div>
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                        <img className="object-cover object-center rounded" alt="hero"
                             src="https://1000logos.net/wp-content/uploads/2017/02/Symbol-of-the-iPhone-logo.jpg"/>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Banner;

