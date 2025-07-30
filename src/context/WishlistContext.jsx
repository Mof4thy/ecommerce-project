import { createContext, useState, useEffect } from "react";
import WishlistApi from "../services/WishlistApi";

const WishlistContext = createContext();



export const WishlistProvider = ({ children }) => { 


    const [wishlist, setWishlist] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const token = localStorage.getItem("token");

    useEffect(() => {
        const fetchWishlist = async () => {
            try {
                setIsLoading(true);
                const response = await WishlistApi.getWishlist(token);
                setWishlist(response);
            }
            catch(error){
                setError(error);
            }
            finally{
                setIsLoading(false);
            }
        }
        fetchWishlist();
        }, [token]);

    const addToWishlist = async (productId) => {
        try {
            const response = await WishlistApi.addToWishlist(productId, token);
            setWishlist(response);
        }
        catch(error){
            setError(error);
        }
    }

    const removeFromWishlist = async (productId) => {
        try {
            const response = await WishlistApi.removeFromWishlist(productId, token);
            setWishlist(response);
        }
        catch(error){
            setError(error);
        }
    }

    const clearWishlist = async () => {
        try {
            const response = await WishlistApi.clearWishlist(token);
            setWishlist(response);
        }
        catch(error){
            setError(error);
        }
    }

    return (
        <WishlistContext.Provider value={{ wishlist, isLoading, error, addToWishlist, removeFromWishlist, clearWishlist }}>
            {children}
        </WishlistContext.Provider>
    )
}

export default { WishlistContext, WishlistProvider };