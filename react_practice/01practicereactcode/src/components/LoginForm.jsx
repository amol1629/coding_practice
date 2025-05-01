import React, { useContext, useState } from 'react'
import toast from 'react-hot-toast'
import UserContext from '../context/UserContext'
import Button from './ui/Button'

const LoginForm = () => {
	const [userName, setUserName] = useState('')
	const [password, setPassword] = useState('')
	const [showPassword, setShowPassword] = useState(false)

	const togglePasswordVisibility = () => {
		setShowPassword((prev) => !prev)
	}

	const { setUser } = useContext(UserContext)

	const handleLogin = (e) => {
		e.preventDefault()

		if (!userName || !password)
			return toast.error('Please fill in all fields')

		setUser({ userName, password })
		// Here you can add your login logic, like calling an API or validating the user

		setUserName('')
		setPassword('')
		showPassword(false)

		toast.success(`Login successful! Welcome, ${userName}!`)
	}

	return (
		<div className="bg-blue-50 px-8 py-6 rounded-2xl shadow-2xl shadow-blue-100  border border-blue-400 font-bold my-8">
			<h1 className="text-4xl  px-8 py-2 rounded-2xl font-bold text-blue-900 mb-8 ">
				Login
			</h1>

			<div>
				<div>
					<input
						value={userName}
						onChange={(e) => setUserName(e.target.value)}
						type="text"
						placeholder="Enter your username"
						name="username"
						id="username"
					/>
				</div>

				<div className="py-4 relative">
					<input
						value={password}
						type={showPassword ? 'text' : 'password'}
						placeholder="Enter your password"
						onChange={(e) => setPassword(e.target.value)}
						name="password"
						id="password"
						className="w-full pr-16"
					/>

					<p
						onClick={togglePasswordVisibility}
						className="absolute right-3 top-1/2 transform -translate-y-1/2 text-xs text-blue-500 cursor-pointer hover:text-blue-700 transition-all duration-300 ease-in-out"
					>
						{showPassword ? 'Hide' : 'Show'}
					</p>
				</div>

				<div>
					<Button
						variant="outline"
						onClick={handleLogin}
						className=""
					>
						Login
					</Button>
				</div>
			</div>
		</div>
	)
}

export default LoginForm
