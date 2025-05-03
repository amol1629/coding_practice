// src/components/ui/Input.jsx
import React from 'react'

const variantMap = {
	default:
		'border border-gray-300 focus:ring-indigo-500 dark:border-gray-600 dark:bg-gray-800 dark:text-white',
	underline:
		'border-b border-gray-300 focus:ring-indigo-500 dark:border-gray-600 dark:bg-transparent dark:text-white',
	ghost: 'bg-transparent border-none focus:ring-indigo-500 dark:text-white',
}

const sizeMap = {
	sm: 'px-2 py-1 text-sm',
	md: 'px-3 py-2 text-base',
	lg: 'px-4 py-3 text-lg',
}

const Input = ({
	label = '',
	variant = 'default',
	size = 'md',
	error = '',
	className = '',
	inputClassName = '',
	...props
}) => {
	const baseStyles =
		'rounded-md focus:outline-none focus:ring-2 transition-all duration-200 ease-in-out w-full'
	const variantClass = variantMap[variant] || variantMap.default
	const sizeClass = sizeMap[size] || sizeMap.md

	return (
		<div
			className={`flex align-middle items-center place-content-center gap-4 ${className}`}
		>
			{label && (
				<label className="text-sm font-bold text-gray-700 dark:text-gray-300">
					{label}
				</label>
			)}
			<input
				className={`${baseStyles} ${variantClass} ${sizeClass} ${inputClassName}`}
				{...props}
			/>
			{error && <span className="text-red-500 text-sm">{error}</span>}
		</div>
	)
}

export default Input
