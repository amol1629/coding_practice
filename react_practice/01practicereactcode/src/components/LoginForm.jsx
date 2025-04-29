import React, { useContext, useState } from 'react'
import UserContext from '../context/UserContext'

const LoginForm = () => {
	const [userName, setUserName] = useState('')
	const [password, setPassword] = useState('')

	const { setUser } = useContext(UserContext)

	const handleLogin = (e) => {
		e.preventDefault()

		setUser({ userName, password })
		// Here you can add your login logic, like calling an API or validating the user

		setUserName('')
		setPassword('')

		alert('User saved successfully')
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
						name="username"
						id="username"
					/>
				</div>

				<div className="py-4">
					<input
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						type="password"
						name="password"
						id="password"
					/>
				</div>

				<div>
					<button onClick={handleLogin} className="">
						Login
					</button>
				</div>
			</div>
		</div>
	)
}

export default LoginForm
