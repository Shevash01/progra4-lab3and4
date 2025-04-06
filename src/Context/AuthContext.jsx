
// Creará un Consumer para que pueda consumir de dicho estado

import React, {children, createContext, useState} from "react";
import { useUserState } from "../Hooks/useUserState";

//1. Crear un nuevo contexto 
export const AuthContext = createContext();

//2. Crear un Provider para compartir el estado
export const AuthProvider = ({children}) =>{

    const[user, setUser] = useState(null);
    const {login } = useUserState()

    const logout = () =>{
        setUser(null)
    }
      

    return(
        <AuthContext.Provider value = {{user, setUser, login, logout}}>
            {children}
        </AuthContext.Provider>
    )

}