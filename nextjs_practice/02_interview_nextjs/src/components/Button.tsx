import { cn } from "@/lib/utils"; // Utility function for class merging (optional)
import { ButtonHTMLAttributes, FC } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: "primary" | "secondary" | "outline";
	size?: "sm" | "md" | "lg";
}

const Button: FC<ButtonProps> = ({
	variant = "primary",
	size = "md",
	className,
	children,
	...props
}) => {
	const baseStyles =
		"rounded-md transition-all duration-300 ease-linear font-semibold focus:outline-none focus:ring-2";
	const variants = {
		primary: "bg-blue-500 text-white hover:bg-blue-600",
		secondary: "bg-purple-500 text-white hover:bg-purple-600",
		outline: "border border-gray-500 text-gray-700 hover:bg-gray-100",
	};
	const sizes = {
		sm: "px-2 py-1 text-sm",
		md: "px-4 py-2",
		lg: "px-6 py-3 text-lg",
	};

	return (
		<button
			className={cn(
				baseStyles,
				variants[variant],
				sizes[size],
				className
			)}
			{...props}
		>
			{children}
		</button>
	);
};

export default Button;


