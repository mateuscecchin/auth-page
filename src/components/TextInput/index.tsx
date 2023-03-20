import React, { InputHTMLAttributes } from "react";

interface TextInput extends InputHTMLAttributes<HTMLInputElement> {
    label: string,
}

export const TextInput: React.FC<TextInput> = ({ label, ...rest }) => {
    return (
        <div>
            <h1 className="text-base font-bold text-libAuth-brown">{label}</h1>
            <input className="w-full h-9 border-2 border-gray-300 rounded-lg py-1 px-2 focus:border-black" {...rest} />
        </div>
    )
}