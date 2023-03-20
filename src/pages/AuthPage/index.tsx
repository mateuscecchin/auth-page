import { handleClientScriptLoad } from "next/script";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Button } from "../../components/Button";
import { CheckInput } from "../../components/CheckInput";
import { TextInput } from "../../components/TextInput";
import { AuthContext } from "../../context/AuthContext";

export const AuthPage: React.FC = () => {
    const { register, handleSubmit } = useForm()
    const { sigIn } = useContext(AuthContext)

    async function handleSignIn(data: any) {

        await sigIn(data)
    }

    return (
        <div className="flex flex-row h-screen">

            <div className="flex basis-1/2 flex-col h-full justify-center">

                <form className="flex flex-col max-w-sm w-full self-center" onSubmit={handleSubmit(handleSignIn)}>
                    <h1 className="text-5xl text-center font-bold mb-10">Bem Vindo</h1>
                    <div className="mb-2">
                        <TextInput {...register("email")} label="Email" required />
                    </div>
                    <div className="mb-3">
                        <TextInput {...register("password")} name="password" label="Senha" required />
                    </div>
                    <div className="mb-3">
                        <CheckInput name="rememberMe" label="Lembrar de mim" />
                    </div>
                    <Button type="submit">Entrar</Button>
                    <div className="flex flex-row mt-4 self-center">
                        <h1 className="text-sm font-bold text-libAuth-brown mr-1">Não tem uma conta?</h1>
                        <a href="" className="text-sm text-black underline font-bold">Crie agora</a>
                    </div>
                </form>
            </div>

            <div className="basis-1/2 bg-libAuth-gray"></div>
        </div>
    )
}
