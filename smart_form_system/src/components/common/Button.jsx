import React from 'react'

const Button = ({
    children,
    onClick,
    type = "button",
    variant = "primary",
    disabled = false,
}) => {
    const base =
        "px-5 py-2 rounded-lg font-medium transition duration-200 focus:outline-none";

    const variants = {
        primary:
            "bg-blue-600 text-white hover:bg-blue-700 shadow-md",
        secondary:
            "bg-gray-200 text-gray-700 hover:bg-gray-300",
        danger:
            "bg-red-500 text-white hover:bg-red-600",
    };

    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={`${base} ${variants[variant]} ${disabled ? "opacity-50 cursor-not-allowed" : ""
                }`}
        >
            {children}
        </button>
    );
};

export default Button;
