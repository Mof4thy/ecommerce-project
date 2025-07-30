import api from "./api";

const getProducts = async () =>{

    try {
        const response = await api.get("/products");
        return response.data.products;
    }
    catch(error){
        console.log(error);
        throw error;
    }
}

const getProductById = async (id) =>{

    try {
        const response = await api.get(`/products/${id}`);
        return response.data;
    }
    catch(error){
        console.log(error);
        throw error;
    }
}

export {getProducts, getProductById};