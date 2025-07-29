import { createContext, useState } from "react";
import { getProducts, getProductById } from "../services/ProductsApi";

const ProductsContext = createContext();


const ProductsProvider = ({children}) => {
    
    const [products, setProducts] = useState([]);
    const [productById, setProductById] = useState(null);

    const fetchProducts = async () =>{
        try {
            const response = await getProducts();
            setProducts(response);
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    const fetchProductById = async (id) =>{

        try {
            const response = await getProductById(id);
            setProductById(response);
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    return (
        <ProductsContext.Provider value={{products, productById, fetchProducts, fetchProductById}}>
            {children}
        </ProductsContext.Provider>
    )
}   


export { ProductsProvider, ProductsContext};

