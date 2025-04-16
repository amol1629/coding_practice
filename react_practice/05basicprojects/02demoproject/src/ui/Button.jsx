import React from "react";

const Button = ({ children, onClick, type = "button", className = "" }) => {
	return (
		<div className="w-full flex justify-center items-center my-4">
			<button
				type={type}
				onClick={onClick}
				className={`
          relative inline-flex items-center justify-center 
          px-6 py-2 text-white font-medium rounded-xl 
          bg-gradient-to-r from-green-400 via-emerald-500 to-green-600 
          shadow-[0_4px_20px_rgba(34,197,94,0.4)] 
          hover:shadow-[0_6px_25px_rgba(34,197,94,0.7)] 
          hover:scale-105 active:scale-95 
          transition-all duration-300 ease-in-out 
          focus:outline-none focus:ring-2 focus:ring-green-300 
          ${className}
        `}
			>
				<span className="z-10">{children}</span>
				<div className="absolute inset-0 rounded-xl bg-white opacity-5 blur-sm"></div>
			</button>
		</div>
	);
};

export default Button;
