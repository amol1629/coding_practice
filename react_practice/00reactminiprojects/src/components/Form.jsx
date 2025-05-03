import React from 'react'
import Input from './ui/Input'

const Form = () => {
	return (
		<div className="min-h-screen bg-white dark:bg-black p-10">
			<h1 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200">
				My Form
			</h1>

			<form className="space-y-4">
				<Input
					// label="Email"
					placeholder="Enter your email"
					variant="default"
					size="md"
				/>

				<Input
					label="Password"
					type="password"
					placeholder="Enter your password"
					variant="underline"
					size="lg"
				/>

				<Input
					label="Username"
					placeholder="Enter your username"
					variant="ghost"
					size="sm"
					error="This field is required"
				/>
			</form>
		</div>
	)
}

export default Form
