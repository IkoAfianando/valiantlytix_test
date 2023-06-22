import axios from 'axios';

export async function productsData() {
    const {data} = await axios.get("https://dummyjson.com/products?limit=8")
    const {products} = data;
    return products;
}
