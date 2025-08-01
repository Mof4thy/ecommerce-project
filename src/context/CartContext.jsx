import { createContext, useState, useEffect } from "react";
import CartApi from "../services/CartApi";
import { useUser } from "../hooks/useUser";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const { token } = useUser();

    useEffect(() => {

        if(token){
        const fetchCart = async () => {
            try {
                setIsLoading(true);
                const response = await CartApi.getCart(token);
                setCart(response.cart); 
            }
            catch(error){
                setError(error);
            }
            finally{
                setIsLoading(false);
            }
            }
            fetchCart();
        }
        else{
            setCart([]);
        }
    }, [token]);


    const isInCart = (productId) => {
        return cart.items?.some(item => item.product._id === productId);
    }

    const productCartQuantity = (productId) => {
        return cart.items?.find(item => item.product._id === productId)?.quantity || 0;
    }


    const addToCart = async (productId) => {
        
        try {
            const response = await CartApi.addToCart(productId, token);
            setCart(response.cart);
        }
        catch(error){
            setError(error);
        }
    }

    const updateCart = async (productId, operation) => {

        try {
            let quantity = productCartQuantity(productId);
            if(operation === "increment"){
                quantity = quantity + 1;
            }
            else if(operation === "decrement"){
                quantity = quantity - 1;
                if(quantity === 0){
                    await removeFromCart(productId);
                    return;
                }
            }
            const response = await CartApi.updateCart(productId, quantity, token);
            setCart(response.cart);
        }
        catch(error){
            setError(error);
        }
    }

    const removeFromCart = async (productId) => {
        try {
            const response = await CartApi.removeFromCart(productId, token);
            setCart(response.cart);
        }
        catch(error){
            setError(error);
        }
    }

    const clearCart = async () => {
        try {
            const response = await CartApi.clearCart(token);
            setCart(response.cart);
        }
        catch(error){
            setError(error);
        }
    }

    return (
        <CartContext.Provider value={{ cart, isLoading, error, addToCart, updateCart, removeFromCart, clearCart, isInCart, productCartQuantity }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider ;
