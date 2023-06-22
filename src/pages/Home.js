import React from 'react'
import Banner from "../components/Banner";
import Products from "../components/Products";

const Home = () => {
    // const [products, setProducts] = useState([]);
    // const data = useLoaderData();
    // useEffect(() => {
    //     setProducts(data);
    // }, [data])
    
    return (
        <div>
            <Banner/>
            <Products/>
        </div>
    )
}

export default Home;
