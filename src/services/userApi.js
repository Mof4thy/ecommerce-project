import api from "./api";


const registerUser = async (userData) =>{
    try {
        const response = await api.post("/auth/register", userData);
        return response.data;
    }
    catch(error){
        console.log(error);
        throw error;
    }
}

const loginUser = async (userData) =>{
    try {
        const response = await api.post("/auth/login", userData);
        return response.data;
    }
    catch(error){
        console.log(error);
        throw error;
    }
}


const getUserProfile = async (token) =>{
    try {
        const response = await api.get("/auth/profile", {
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

export {registerUser, loginUser, getUserProfile};