import React, { useMemo, useState } from 'react'
import UserContext from './UserContext'

const UserContextProvider = ({ children }) => {
	const [user, setUser] = useState(null)

	const data = useMemo(() => ({ user, setUser }), [user])

	return <UserContext.Provider value={data}>{children}</UserContext.Provider>
}

export default UserContextProvider
