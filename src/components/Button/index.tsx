import React, { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode
}

export const Button: React.FC<ButtonProps> = ({ children, ...rest }) => {
    return (
        <>
            <button className="bg-black flex items-center justify-center text-white rounded-lg font-bold text-base p-5 w-full h-9" {...rest}>{children}</button>
        </>
    )
}