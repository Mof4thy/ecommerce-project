import api from "./Api";


const addToWishlist = async (productId, token) => {
    try {
        const response = await api.post(`/wishlist/add`, { productId }, {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        });
        return response.data;
    }
    catch(error){
        console.log(error);
        throw error;
    }
}

const getWishlist = async (token) => {  
    try {
        const response = await api.get(`/wishlist`, {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        });
        return response.data;
    }
    catch(error){
        console.log(error);
        throw error;
    }
}

const removeFromWishlist = async (productId, token) => {
    try {
        const response = await api.delete(`/wishlist/remove/${productId}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        });
        return response.data;
    }
    catch(error){
        console.log(error);
        throw error;
    }
}

const clearWishlist = async (token) => {
    try {
        const response = await api.delete(`/wishlist/clear`, {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        });
        return response.data;
    }
    catch(error){
        console.log(error);
        throw error;
    }
}


const WishlistApi = {
    addToWishlist,
    getWishlist,
    removeFromWishlist,
    clearWishlist
}

export default WishlistApi;
