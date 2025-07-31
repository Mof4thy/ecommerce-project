
import api from "./Api";

const addToCart = async (productId, token) => {
    try {
        const response = await api.post(`/cart/add`, { productId }, {
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

const updateCart = async (productId, quantity, token) => {
    try {
        const response = await api.put(`/cart/update`, { productId, quantity }, {
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

const getCart = async (token) => {
    try {
        const response = await api.get(`/cart`, {
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

const removeFromCart = async (productId, token) => {
    try {
        const response = await api.delete(`/cart/remove/${productId}`, {
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

const clearCart = async (token) => {
    try {
        const response = await api.delete(`/cart/clear`, {
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




const CartApi = {
    addToCart,
    updateCart,
    getCart,
    removeFromCart,
    clearCart
}

export default CartApi;

