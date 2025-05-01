import React, { useContext } from 'react'
import UserContext from '../context/UserContext'
import Button from './ui/Button'

const UserCard = () => {
	const { user } = useContext(UserContext)

	return (
		<div>
			<div className="max-w-sm w-full mx-auto bg-white dark:bg-gray-900 rounded-2xl shadow-lg dark:shadow-blue-900 hover:shadow-2xl transition-shadow duration-300 p-6 border border-blue-200 dark:border-blue-700 my-6">
				<div className="flex items-center space-x-4">
					<img
						src="https://i.pravatar.cc/150?img=3"
						alt="User avatar"
						className="w-16 h-16 rounded-full border-2 border-blue-400 dark:border-blue-600"
					/>

					<div>
						<h2 className="text-xl font-semibold text-blue-900 dark:text-blue-300">
							{user?.userName || 'John Doe'}
						</h2>
						<p className="text-sm text-gray-500 dark:text-gray-400">
							amol@example.com
						</p>
					</div>
				</div>

				<div className="mt-6 space-y-2 text-gray-700 dark:text-gray-300">
					<div className="flex items-center justify-between">
						<span className="font-medium text-blue-600 dark:text-blue-400">
							Password:
						</span>
						<span className="text-gray-400 dark:text-gray-500 tracking-widest">
							{user?.password || '********'}
						</span>
					</div>

					<div>
						<span className="font-medium text-blue-600 dark:text-blue-400">
							Address:
						</span>
						<p className="text-sm mt-1 text-gray-600 dark:text-gray-400">
							123 Futuristic Ave,
							<br />
							Cyber City, IN-2030
						</p>
					</div>

					<Button variant="primary">Click me</Button>
				</div>
			</div>
		</div>
	)
}

export default UserCard
