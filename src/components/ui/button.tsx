"use client"

type ButtonProps = {
    children: React.ReactNode;
    className?: string;
}

export const Button = ({ children, className }: ButtonProps) => {
    return (
        <button className={`bg-blue-500 hover:bg-blue-700 transition text-white font-bold py-2 px-4 rounded-md ${className}`}>
          {children}
        </button>
    );
}