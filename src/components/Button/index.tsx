import React, { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    children: React.ReactNode
}

export const Button: React.FC<ButtonProps> = ({children, ...rest}) => {
    return(
        <>
        <button className="bg-black text-white rounded-lg font-bold text-xs p-3 w-full h-9" {...rest}>{children}</button>
        </>
    )
}