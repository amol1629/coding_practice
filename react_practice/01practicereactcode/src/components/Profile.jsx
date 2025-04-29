import React, { useContext } from 'react'
import UserContext from '../context/UserContext'
const Profile = () => {
	const { user } = useContext(UserContext)

	console.log(user)

	return (
		<div>
			{user && (
				<div className="bg-pink-50 px-8 py-6 rounded-2xl shadow-2xl shadow-purple-100  border border-pink-400 font-bold my-8">
					<h1 className="text-3xl text-cyan-500 mb-6">Profile</h1>
					{/* Display  username and password */}
					<p className="my-4">
						Username :{' '}
						<span className=" bg-gray-50 shadow-xl px-4 py-1 rounded-2xl border border-gray-300">
							{user.userName}
						</span>{' '}
					</p>
					<p>
						Password :{' '}
						<span className=" bg-gray-50 shadow-xl px-4 py-1 rounded-2xl border border-gray-300">
							{user.password}
						</span>{' '}
					</p>
				</div>
			)}
		</div>
	)
}

export default Profile
