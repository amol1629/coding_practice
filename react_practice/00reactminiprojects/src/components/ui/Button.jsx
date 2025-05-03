// src/components/ui/Button.jsx
import React from 'react'

const variantMap = {
	primary:
		'bg-indigo-600 text-white hover:bg-indigo-700 focus:ring-indigo-500 dark:bg-indigo-500 dark:hover:bg-indigo-600',

	secondary:
		'bg-gray-100 text-gray-800 hover:bg-gray-200 focus:ring-gray-400 dark:bg-gray-700 dark:text-gray-100 dark:hover:bg-gray-600 dark:focus:ring-gray-500',

	outline:
		'border border-gray-300 text-gray-700 hover:bg-gray-50 focus:ring-gray-500 dark:border-gray-600 dark:text-gray-200 dark:hover:bg-gray-800 dark:focus:ring-gray-500',

	ghost: 'text-gray-700 hover:bg-gray-100 focus:ring-gray-500 dark:text-gray-300 dark:hover:bg-gray-800 dark:focus:ring-gray-600',

	danger: 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500 dark:bg-red-500 dark:hover:bg-red-600',

	success:
		'bg-green-600 text-white hover:bg-green-700 ring-2 ring-blue-500 focus:ring-green-500 dark:bg-green-500 dark:hover:bg-green-600',
}

const sizeMap = {
	sm: 'px-3 py-1 text-sm',
	md: 'px-4 py-2 text-base',
	lg: 'px-5 py-3 text-lg',
}

const Button = ({
	children,
	variant = 'primary',
	size = 'md',
	className = '',
	...props
}) => {
	const baseStyles =
		'rounded-full px-8 shadow-sm font-medium inline-flex items-center justify-center hover:scale-95 transition-all duration-300 ease-in-out'

	const variantClass = variantMap[variant] || variantMap.primary
	const sizeClass = sizeMap[size] || sizeMap.md

	return (
		<button
			className={`${baseStyles} ${variantClass} ${sizeClass} ${className}`}
			{...props}
		>
			{children}
		</button>
	)
}

export default Button
