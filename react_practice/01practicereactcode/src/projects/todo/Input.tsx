import React from 'react'

const Input = ({ value, handleChange }) => {


	return (
		<div>
			<input
				type="text"
				value={value}
				onChange={handleChange}
				placeholder="Enter todo name.."
			/>
		</div>
	)
}

export default Input
