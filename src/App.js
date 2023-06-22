import React from "react";
import Home from "./pages/Home";
import Header from "./components/Header";
import {
    createBrowserRouter,
    Outlet,
    RouterProvider,
} from "react-router-dom"
import Footer from "./components/Footer";
import Cart from "./pages/Cart";
import {productsData} from "./api/Api";
import Product from "./components/Product";
import Products from "./components/Products";

const Layout = () => {
    return (
        <div>
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    )
}
const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children: [
            {
                path: "/",
                element: <Home/>,
                loader: productsData
            },
            {
              path: "/product/:id",
                element: <Product/>
            },
            {
                path: "/products",
                element: <Products/>,
                loader: productsData,
            },
            {
                path: "/cart",
                element: <Cart/>,
            }
        ]
    }
]);

function App() {

    return (
        <div className="">
            <RouterProvider router={router}/>
        </div>
    );
}

export default App;

