import React, { InputHTMLAttributes } from "react";

interface CheckInputProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string
}

export const CheckInput: React.FC<CheckInputProps> = ({ label, ...rest }) => {
    return (
        <div className="flex flex-row">
            <input type="checkbox" className="accent-black border border-gray-200 " />
            <h1 className="text-xs ml-1 font-bold text-libAuth-brown" {...rest}>{label}</h1>
        </div>
    )
}