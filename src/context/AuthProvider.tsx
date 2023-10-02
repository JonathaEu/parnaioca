'use client'
import { getTokenLocal } from "@/functions/get-token";
// import Signin from "@/functions/postUsers";
import api from "@/services/api";
// import { headers } from "next/dist/client/components/headers";
import { createContext, useState, useContext, useEffect } from "react";

type User = {
    cidade: string;
    created_at: string;
    email: string;
    email_verified_at: string;
    estado: string;
    id: number;
    name: string;
    telefone: number;
    updated_at: string;
}

type AuthContextProps = {
    currentUser: null,
    token: null,
    user: User
    setUser: (User: User) => Promise<void>,
    setToken: () => {},
    Signin: () => Promise<void>,
}

const AuthContext = createContext({} as AuthContextProps);

export const AuthProvider = ({ children }: any) => {
    const [user, setUser] = useState<User | any>(null);
    const [token, _setToken] = useState(localStorage.getItem('ACCESS_TOKEN'));

    const setToken = (token: any) => {
        _setToken(token)
        if (token) {
            localStorage.setItem('ACCESS_TOKEN', token);
        } else {
            localStorage.removeItem('ACCESS_TOKEN');
        }
    }
    // console.log(user);
    // console.log(token);

    async function Signin({ data }: any) {
        return new Promise(async (resolve, reject) => {
            console.log(data)
            await api.post('/login', data)
                .then((sucess: any) => {
                    setUser(sucess.data.data.user)
                    setToken(sucess.data.data.token)
                    // console.log(sucess.data.data.token)
                    resolve(sucess.data.data);
                    window.location.href = '/app/dashboard'
                })
                .catch((err) => {
                    reject(err)
                })
        })
    }


    useEffect(() => {

        getTokenLocal().then((response) => {
            const config = {
                headers: {
                    "Authorization": `Bearer ${response}`,
                    "content-type": "application/json",
                },
            }
            api.get('/me', config)
                .then((response) => {
                    setUser(response.data)
                })
                .catch((err) => {
                    console.log(err)
                })
            console.log(user)

        })
    }, [])

    // if (!token) {
    //     window.location.href = '/';
    // }

    return (
        <AuthContext.Provider value={{
            user,
            setUser,
            token,
            setToken,
            Signin,
        }}>
            {children}
        </AuthContext.Provider>
    );
}

export const useStateContext = () => useContext(AuthContext);