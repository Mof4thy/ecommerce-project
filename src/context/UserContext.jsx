import { createContext, useEffect, useState } from "react";
import { loginUser, registerUser, getUserProfile } from "../services/userApi";
import { useQuery } from "@tanstack/react-query";
import { useQueryClient } from "@tanstack/react-query";

const UserContext = createContext();

const UserProvider = ({children}) =>{

    const [token, setToken] = useState(localStorage.getItem("token") || null);
    const queryClient = useQueryClient();

    // Update token in localStorage when it changes
    useEffect(() => {
        if (token) localStorage.setItem("token", token);
        else localStorage.removeItem("token");
    }, [token]);


    // useQuery is a hook that fetches data from the server and caches it
    // it is a hook that is used to fetch data from the server
    // const {data: user, isLoading, error, refetch} = useQuery({
    //     queryKey: ["user", token],
    //     queryFn: () => getUserProfile(token),
    //     enabled: !!token,
    //     // staleTime: 1000 * 60 * 30,
    //     retry: false,
    // }); // token is the dependency of the query

    

    const register = async (userData) =>{
        try {
            const response = await registerUser(userData);
            setToken(response.token);
            localStorage.setItem("token", response.token);
        } catch (error) {
            console.log(error);
        }
    }

    const login = async (userData) =>{
        try {
            const response = await loginUser(userData);
            setToken(response.token);
            localStorage.setItem("token", response.token);
        } catch (error) {
            console.log(error);
            throw error;
        }
    }       



    const logout = () =>{
        setToken(null);
        queryClient.removeQueries(["user"]);
        localStorage.removeItem("token");
    }


    return (        

        <UserContext.Provider value={{token, login, logout, register}}>
            {children}
        </UserContext.Provider>
    )
}


export { UserProvider, UserContext };
