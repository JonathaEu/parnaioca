'use client'
import nookies from 'nookies'
import { parseCookies } from 'nookies';
import api from "@/services/api";
import { createContext, useState, useContext, useEffect } from "react";
import { useRouter } from "next/navigation";

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
    currentUser: User | null,
    token: string,
    user: User,
    setUser: (user: User) => Promise<void>,
    setToken: (token: string) => void,
    Signin: (data: any) => Promise<void>,
}

const AuthContext = createContext({} as AuthContextProps);

export const AuthProvider = ({ children }: any) => {
    const [user, setUser] = useState<User | any>(null);
    const [token, _setToken] = useState();

    const setToken = (token: any) => {
        _setToken(token)
        if (token) {
            nookies.set(null, 'token', token, {
            });
        } else {
            nookies.destroy(null, 'token');
        }
    }
    const router = useRouter();

    // console.log(user);
    // console.log(token);

    async function Signin({ data }: any) {
        return new Promise(async (resolve, reject) => {
            await api.post('/login', data)
                .then((sucess: any) => {
                    setUser(sucess.data.data.user)
                    setToken(sucess.data.data.token)
                    // resolve(sucess.data.data);
                    router.push('/app/cliente/cadastro');
                })
                .catch((err) => {
                    reject(err)
                })
        })
    }

    useEffect(() => {
        const getToken = () => {
            // Obtenha os cookies
            const cookies = parseCookies();
            const tokenCookie = cookies.token;
            // Acesse o token
            if (!tokenCookie) {
                router.push('/app/funcionario/login');
                return;
            }
        }
        getToken();
    }, []);

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