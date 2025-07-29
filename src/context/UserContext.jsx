import { createContext, useCallback, useEffect, useState } from "react";
import { loginUser, registerUser, getUserProfile } from "../services/userApi";

const UserContext = createContext();

const UserProvider = ({children}) =>{

    const [token, setToken] = useState(localStorage.getItem("token") || null);
    const [user, setUser] = useState(null);


    const getUser = useCallback(async () => {
        if (!token) return;
        try {
          const response = await getUserProfile(token);
          setUser(response);
        } catch (error) {
          console.log(error);
          throw error;
        }
      }, [token]);

    // get user when token is set
    useEffect(() => {
        if (token) {
          getUser();
        }
      }, [token, getUser]);



    const register = async (userData) =>{
        try {
            const response = await registerUser(userData);
            setToken(response.token);
            localStorage.setItem("token", response.token);
        } catch (error) {
            console.log(error);
            throw error;
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
        setUser(null);
        setToken(null);
        localStorage.removeItem("token");
    }


    return (

        <UserContext.Provider value={{user,token, login, logout, register, getUser}}>
            {children}
        </UserContext.Provider>
    )

}


export { UserProvider, UserContext };
