// src/components/ui/Button.jsx
import React from 'react'

const variantMap = {
	primary:
		'bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600',
	secondary:
		'bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600',
	outline:
		'border border-gray-300 text-gray-800 hover:bg-gray-100 dark:border-gray-600 dark:text-white dark:hover:bg-gray-700',
	ghost: 'bg-transparent text-gray-800 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700',
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
		'rounded-full transition-all duration-300 shadow-sm font-medium inline-flex items-center justify-center'

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
