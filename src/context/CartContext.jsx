import { createContext, useState, useEffect } from "react";
import CartApi from "../services/CartApi";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const token = localStorage.getItem("token");

    useEffect(() => {
        const fetchCart = async () => {
            try {
                setIsLoading(true);
                const response = await CartApi.getCart(token);
                setCart(response); 
            }
            catch(error){
                setError(error);
            }
            finally{
                setIsLoading(false);
            }
        }
        fetchCart();
    }, [token]);

    const addToCart = async (productId) => {
        try {
            const response = await CartApi.addToCart(productId, token);
            setCart(response);
        }
        catch(error){
            setError(error);
        }
    }

    const updateCart = async (productId, quantity) => {

        try {
            const response = await CartApi.updateCart(productId, quantity, token);
            setCart(response);
        }
        catch(error){
            setError(error);
        }
    }

    const removeFromCart = async (productId) => {
        try {
            const response = await CartApi.removeFromCart(productId, token);
            setCart(response);
        }
        catch(error){
            setError(error);
        }
    }

    const clearCart = async () => {
        try {
            const response = await CartApi.clearCart(token);
            setCart(response);
        }
        catch(error){
            setError(error);
        }
    }

    return (
        <CartContext.Provider value={{ cart, isLoading, error, addToCart, updateCart, removeFromCart, clearCart }}>
            {children}
        </CartContext.Provider>
    )
}

export default { CartProvider };
