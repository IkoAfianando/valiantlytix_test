import axios from 'axios';

export async function productsData() {
    const {data} = await axios.get("https://dummyjson.com/products?limit=12")
    const {products} = data;
    return products;
}
