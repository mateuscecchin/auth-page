import Router from "next/router";
import { setCookie } from "nookies";
import { createContext, PropsWithChildren, useState } from "react";
import { sigInRequest } from "../services/auth";


type AuthContextData = {
    isAuthenticated: boolean;
    user: User | null;
    sigIn: (data: SigInData) => Promise<void>
}

type SigInData = {
    email: string;
    password: string;
}

type User = {
    name: string
    email: string,
    avatar_url: string
}

export const AuthContext = createContext({} as AuthContextData)

export function AuthProvider({ children }: PropsWithChildren) {
    const [user, setUser] = useState<User | null>(null);


    const isAuthenticated = !!user;

    async function sigIn({ email, password }: SigInData) {
        const { token, user } = await sigInRequest({
            email,
            password
        })

        setCookie(undefined, "auth-page-token", token, {
            maxAge: 60 * 60 * 1 // 1 hour
        })

        setUser(user)

        Router.push('/dashboard')

    }

    return (
        <AuthContext.Provider value={{ isAuthenticated, user, sigIn }}>
            {children}
        </AuthContext.Provider>
    )
}